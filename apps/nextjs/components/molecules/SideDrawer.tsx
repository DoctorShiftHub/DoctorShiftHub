"use client";

import { ReactNode, useRef } from "react";

import Link from "next/link";

interface SideDrawerProps {
  children?: ReactNode;
}

export default function SideDrawer({}: SideDrawerProps) {
  const drawerRef = useRef<HTMLLabelElement>(null);
  return (
    <div className="drawer-side">
      <label
        ref={drawerRef}
        htmlFor="sideDrawer"
        className="drawer-overlay"
      ></label>
      <ul className="menu menu-vertical bg-base-100 w-80 px-2 py-6 md:px-4">
        {/* <!-- Sidebar content here --> */}
        <li>
          <Link href="/feed" onClick={() => drawerRef.current?.click()}>
            Feed
          </Link>
        </li>
        <li>
          <Link href="/agenda" onClick={() => drawerRef.current?.click()}>
            Agenda
          </Link>
        </li>
      </ul>
    </div>
  );
}
