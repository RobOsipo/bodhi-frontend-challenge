"use server";

// external imports
import { encode } from "base-64";

// credentials from email
const userName = "test";
const password = "user";

// base-64 credentials for basic authentication
const getAuthorization = (user: string, password: string) => {
  const token = `${user}:${password}`;

  const hash = encode(token);

  return `Basic ${hash}`;
};

// fetch function for api calls
export const apiFetch = async (url: string, method: string, body?: any) => {
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: getAuthorization(userName, password),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.json();
};
