"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface SideDrawerProps {
  children?: ReactNode;
}

export default function SideDrawer({}: SideDrawerProps) {
  const handleClick = () => {
    const sideDrawerLabel = document.getElementById("sideDrawerLabel");
    if (sideDrawerLabel) {
      sideDrawerLabel.click();
    }
  };
  return (
    <div className="drawer-side">
      <label
        id="sideDrawerLabel"
        htmlFor="sideDrawer"
        className="drawer-overlay"
      ></label>
      <ul className="menu menu-vertical bg-base-100 w-80 px-2 py-6 md:px-4">
        {/* <!-- Sidebar content here --> */}
        <li>
          <Link href="/feed" onClick={handleClick}>
            Feed
          </Link>
        </li>
        <li>
          <Link href="/agenda" onClick={handleClick}>
            Agenda
          </Link>
        </li>
      </ul>
    </div>
  );
}
