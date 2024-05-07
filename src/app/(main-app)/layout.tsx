// external imports

// internal imports
import { AppLayout } from "@/components/global/app-layout/app-layout";

// main application layout
export default async function MainAppLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}
