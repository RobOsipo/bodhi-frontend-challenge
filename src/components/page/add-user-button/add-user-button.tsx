"use client";

// external imports
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// internal imports

// add-user-button component
export function AddUserButton({
  isIcon = false,
  user = null,
}: Readonly<{
  user: { [key: string]: any } | null;
  isIcon: boolean;
}>) {
  // router hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // variables
  const isNewUser = !user;

  // helper function for adding query params to url
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      const existingParam = Array.from(params.entries())?.at(0)?.at(0);
      if (existingParam) {
        params.delete(existingParam);
      }

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // handle close
  //   const handleClose = () => {
  //     const params = new URLSearchParams(searchParams);
  //     params.delete("user");
  //     router.push(pathname);
  //   };

  // render
  return (
    <Link
      href={`${pathname}?${createQueryString(
        "user",
        isNewUser ? "new" : user.id ?? user._id
      )}`}
      style={{ alignSelf: "flex-end" }}
    >
      {isIcon ? (
        <IconButton>
          <Edit sx={{ fill: "#000" }} />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          sx={{ alignSelf: "flex-end", textTransform: "capitalize" }}
        >
          Add User
        </Button>
      )}
    </Link>
  );
}
