import Link from "next/link";
import { ReactNode } from "react";

interface SideDrawerProps {
  children?: ReactNode;
}

export default function SideDrawer({}: SideDrawerProps) {
  return (
    <div className="drawer-side">
      <label htmlFor="sideDrawer" className="drawer-overlay"></label>
      <ul className="menu menu-vertical bg-base-100 w-80 p-4">
        {/* <!-- Sidebar content here --> */}
        <li>
          <Link href="/feed">Feed</Link>
        </li>
        <li>
          <Link href="/agenda">Agenda</Link>
        </li>
      </ul>
    </div>
  );
}
