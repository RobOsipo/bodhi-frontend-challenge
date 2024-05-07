"use server";

// internal imports
import { API_HOST } from "@/helpers/api-host";
import { getBasicAuthorization } from "@/helpers/get-basic-authorization";

// NOTES:
// to fetch a specific resource add "/<resource-id>" as a parameter to this function

// query-users server component fetch action
export async function queryUsers(query = "") {
  const bodhiApiAssetResponse = await fetch(`${API_HOST}/users${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: await getBasicAuthorization("test", "user"),
    },
  });

  return bodhiApiAssetResponse.json();
}
