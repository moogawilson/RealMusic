"use client";
import axios from "axios";
import { getSession } from "next-auth/react";

export const createApiClient = async () => {
  const session = await getSession();

  const client = axios.create({
    baseURL: "/api/services",
    withCredentials: true,
  });

  return { client, session };
};

export default createApiClient;
