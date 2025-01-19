"use client";
import axios from "axios";
import createApiClient from "./apiClient";

export async function fetchUser(email: string) {
  try {
    const { client, session } = await createApiClient();
    const response = await client.get(`user`, {
      params: { email },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function createUser(email: string, name: string) {
  try {
    const { client, session } = await createApiClient();
    const response = await client.post(`user`, { email, name });
    return response.data.user;
  } catch (error) {
    return null;
  }
}
