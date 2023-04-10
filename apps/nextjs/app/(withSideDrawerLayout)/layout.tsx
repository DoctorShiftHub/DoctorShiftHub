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
      <div className="drawer-side">
        <label htmlFor="sideDrawer" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 w-80 p-4">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
