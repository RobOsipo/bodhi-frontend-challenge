import { createTheme, ThemeProvider } from "@mui/material/styles";

// create provider prop types
export type MuiThemeProviderProps = {
  children: React.ReactNode;
};

// theme provider
export function MuiThemeProvider({
  children,
}: Readonly<MuiThemeProviderProps>) {
  const theme = createTheme({
    // set the default primary and secondary colors
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#a3b7e9",
      },
      info: {
        main: "rgba(185, 200, 210, 0.5)",
      },
    },

    // set the default application breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 950,
        lg: 1135,
        xl: 1536,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MuiThemeProvider;
