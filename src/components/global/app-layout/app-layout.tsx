"use client";

// internal imports
import { AppHeader } from "@/components/global/app-header/app-header";
import { MuiThemeProvider } from "@/theme/mui-theme-provider/mui-theme-provider";

// handle typescript types
type AppLayoutProps = {
  children: React.ReactNode;
};

// app-layout component
export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  // return
  return (
    <MuiThemeProvider>
      <AppHeader />
      <main className="app">{children}</main>
    </MuiThemeProvider>
  );
}

export default AppLayout;
