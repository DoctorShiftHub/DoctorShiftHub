"use client";
import { useClerk } from "@clerk/nextjs/app-beta/client";

const SignOutButton = () => {
  const { signOut } = useClerk();
  return <button onClick={() => signOut()}>Sign out</button>;
};
export default SignOutButton;
