import AuthOverlay from "./components/AuthOverlay";
import "./globals.css";
import type { Metadata } from "next";

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
      <body>
        <AuthOverlay />
        {children}
      </body>
    </html>
  );
}
