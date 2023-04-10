import { SubHeader } from "@/nextjs/components/organisms";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SubHeader />
      {children}
    </div>
  );
}
