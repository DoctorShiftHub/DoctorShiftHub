import { SideDrawer } from "@/nextjs/components/molecules";
import { Header } from "@/nextjs/components/organisms";
import React from "react";

export default function SideDrawerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer">
      <input id="sideDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        {/*<!-- Page content here --> */}
        <main>{children}</main>
      </div>
      <SideDrawer />
    </div>
  );
}
