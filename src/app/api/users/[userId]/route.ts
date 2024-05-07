// external imports
import { API_HOST } from "@/helpers/api-host";
import { getBasicAuthorization } from "@/helpers/get-basic-authorization";
import { NextResponse } from "next/server";

// Route to execute an asset
export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const dto = await request.json();

  // fetch domain weather
  const response = await fetch(`${API_HOST}/users/${params.userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: await getBasicAuthorization("test", "user"),
    },
    body: JSON.stringify(dto),
  });

  // return api response
  return NextResponse.json(response, {
    status: response.status,
  });
}
