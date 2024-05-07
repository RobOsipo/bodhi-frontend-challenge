"use server";

// external imports
import { encode } from "base-64";

// base-64 credentials for basic authentication
export const getBasicAuthorization = async (user: string, password: string) => {
  const token = `${user}:${password}`;

  const hash = encode(token);

  return `Basic ${hash}`;
};

export default getBasicAuthorization;
