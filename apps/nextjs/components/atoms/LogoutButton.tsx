import { ReactNode } from "react";

interface LogoutButtonProps {
  children: ReactNode;
}

export default function LogoutButton({ children }: LogoutButtonProps) {
  return (
    <>
      <h1>LogoutButton</h1>
      {children}
    </>
  );
}
