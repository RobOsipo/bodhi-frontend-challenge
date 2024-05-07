// external imports
import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

// internal imports

// user-form component
export function UserForm({
  user,
}: Readonly<{ user: { [key: string]: string } | null }>) {
  // state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  // set user data into state if it exists
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  // event handlers
  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // render
  return (
    <Stack direction="column" spacing={2} sx={{ pt: "2rem" }}>
      <TextField
        label="First Name"
        size="small"
        value={formData.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        size="small"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        size="small"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        size="small"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
