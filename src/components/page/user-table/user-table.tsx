"use client";
// external imports
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Close, DeleteForever, SearchOutlined } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// internal imports
import { AddUserButton } from "../add-user-button/add-user-button";
import { DataTable } from "@/components/global/data-table/data-table";
import { MobileDataTable } from "@/components/global/mobile-data-table/mobile-data-table";
import { Modal } from "@/components/global/modal/modal";
import { Text } from "@/components/global/text/text";
import { UserForm } from "../user-form/user-form";

// user-table component
export function UserTable({ tableData = [] }: any) {
  // state
  const [searchQuery, setSearchQuery] = useState("");

  // router hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  // get user param value
  const userParam = urlParams.get("user");

  // mobile media query
  const isMobile = useMediaQuery("(max-width: 950px)");

  // event handlers
  const handleSearchQueryChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // get filtered data
  const filteredData = useMemo(() => {
    return tableData.filter((rowData: any) => {
      return Object.values(rowData).some((value) => {
        return String(value).toLowerCase().includes(searchQuery.toLowerCase());
      });
    });
  }, [tableData, searchQuery]);

  // close modal
  const handleClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("user");
    router.push(pathname);
  };

  // create columns body render
  const actionsBody = (currentRowData: { [key: string]: any }) => {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <AddUserButton isIcon user={currentRowData} />
        <IconButton>
          <DeleteForever />
        </IconButton>
      </Stack>
    );
  };

  console.log("here", Boolean(userParam));

  // table columns
  const columns = [
    {
      field: "firstName",
      header: "First Name",
    },
    {
      field: "lastName",
      header: "Last Name",
    },
    {
      field: "email",
      header: "Email",
    },
    {
      field: "phoneNumber",
      header: "Phone Number",
    },
    {
      field: "actions",
      header: "",
      filter: false,
      exportable: false,
      body: actionsBody,
      mobileBody: actionsBody,
    },
  ];
  // render
  return (
    <>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <TextField
            value={searchQuery}
            variant="standard"
            placeholder="Keyword Search"
            onChange={handleSearchQueryChange}
            color="primary"
            size="small"
            sx={{ width: "15rem" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined sx={{ fill: "var(--secondary)" }} />
                </InputAdornment>
              ),
            }}
          />

          <AddUserButton isIcon={false} user={null} />
        </Stack>
        {!isMobile && <DataTable columns={columns} tableData={filteredData} />}
        {isMobile && (
          <MobileDataTable columns={columns} tableData={filteredData} />
        )}
      </Stack>
      {Boolean(userParam) && (
        <Modal open={Boolean(userParam)} handleClose={handleClose}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Text c="var(--black)" w="700" s="1rem">
              {userParam === "new" ? "Add User" : "Edit User"}
            </Text>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Stack>
          <UserForm />
        </Modal>
      )}
    </>
  );
}

export default UserTable;
