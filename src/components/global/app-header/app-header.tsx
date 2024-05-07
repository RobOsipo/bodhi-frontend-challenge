// external imports
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

// app-header component
export function AppHeader() {
  // render
  return (
    <Box
      sx={{ flexGrow: 1, width: "100%", height: "var(--app-header-height)" }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guest Management App
          </Typography>
          <Avatar>RO</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
