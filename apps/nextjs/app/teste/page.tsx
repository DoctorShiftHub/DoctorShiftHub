import { currentUser } from "@clerk/nextjs/app-beta";

export default async function Page() {
  const user = await currentUser();
  return <div className="bg-slate-500 text-3xl">{user?.firstName}</div>;
}
