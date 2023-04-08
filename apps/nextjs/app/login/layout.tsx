import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-base-200 px-2 md:px-4">{children}</div>;
}
