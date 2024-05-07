"use server";

// external imports
import { Stack } from "@mui/material";

// internal imports
import { Text } from "@/components/global/text/text";
import { UserTable } from "@/components/page/user-table/user-table";
import { queryUsers } from "@/server-component-fetch-actions/query-users";
import styles from "./page.module.css";

// guest-management page
export default async function UserManagement({ searchParams }: any) {
  // fetch all data on the server so its immediately available when the window loads
  const allUsers = await queryUsers();
  const tableData = allUsers.filter((user: any) => !user.query);

  // render
  return (
    <Stack className={styles.page} direction="column" spacing={4}>
      <Text c="var(--black)" w="700" s="1.5rem">
        User Management
      </Text>

      <UserTable tableData={tableData} />
    </Stack>
  );
}
