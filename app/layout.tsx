import AuthOverlay from "./components/AuthOverlay";
import "./globals.css";
import type { Metadata } from "next";
import UserProvider from "./context/user";

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
          <AuthOverlay />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
