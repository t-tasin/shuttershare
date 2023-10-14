import "./globals.css";
import type { Metadata } from "next";
import UserProvider from "./context/user";
import AllOverlays from "./components/AllOverlays";

export const metadata: Metadata = {
  title: "ShutterShare",
  description: "ShutterShare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverlays />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
