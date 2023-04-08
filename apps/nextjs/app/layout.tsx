import React from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { ClientProvider } from "../utils/TrpcProvider";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <ClerkProvider>
        <html lang="en">
          <head>
            <title>Next.js 13 with Clerk</title>
          </head>
          <body>{children}</body>
        </html>
      </ClerkProvider>
    </ClientProvider>
  );
}
