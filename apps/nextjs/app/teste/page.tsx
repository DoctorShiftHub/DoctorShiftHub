import { currentUser } from "@clerk/nextjs/app-beta";

export default async function Page() {
  const user = await currentUser();
  return <div>{user?.firstName}</div>;
}
