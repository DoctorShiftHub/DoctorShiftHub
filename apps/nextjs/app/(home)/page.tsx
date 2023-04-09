"use client";

import { trpc } from "@/nextjs/utils/trpc";

export default function Page() {
  const { data, status } = trpc.post.all.useQuery();
  console.log(data);
  return (
    <div className="space-y-2">
      <div className="card card-compact md:card-normal">
        <div className="card-body">Card1</div>
      </div>
      <div className="bg-primary card card-body card-compact">Card2</div>
    </div>
  );
}
