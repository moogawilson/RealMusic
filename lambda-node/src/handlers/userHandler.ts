import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { findUserDB, createUserDB } from "../../prisma/src/users";
import { authenticateUser, authenticateJWT } from "../middleware/authenticate";
import { error } from "console";

if (!process.env.FRONTEND_URL) {
  throw error("unkown origin");
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export const fetchUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: "",
    };
  }

  try {
    const email = event.queryStringParameters?.email;
    if (!email) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ message: "Bad Request: Email is required!" }),
      };
    }
    const user = await authenticateUser(event);
    if (!user?.name) {
      return {
        statusCode: 401,
        headers: CORS_HEADERS,
        body: JSON.stringify({ message: "Unauthorized: No token provided." }),
      };
    }
    const userQuery = await findUserDB(email);
    if (!userQuery) {
      return {
        statusCode: 404,
        headers: CORS_HEADERS,
        body: JSON.stringify({ message: "User not found" }),
      };
    }

    const username = userQuery.name;
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(username),
    };
  } catch (e) {
    console.error("Error fetching user:", e);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: "Internal Server Error." }),
    };
  }
};

export const createUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: "",
    };
  }

  try {
    const { email, name } = JSON.parse(event.body || "{}");

    const user = await authenticateUser(event);

    if (!user) {
      return {
        statusCode: 401,
        headers: CORS_HEADERS,
        body: JSON.stringify({ message: "Unauthorized: No token provided." }),
      };
    }
    if (!email || !name) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          message: "Bad Request: Email and name is required.",
        }),
      };
    }
    const response = await createUserDB(email, name);
    return {
      statusCode: 200,

      headers: CORS_HEADERS,

      body: JSON.stringify({}),
    };
  } catch (e) {
    console.error("Error fetching songs:", e);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: "Internal Server Error." }),
    };
  }
};
