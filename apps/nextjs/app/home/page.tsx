"use client";
import { trpc } from "../../utils/TrpcProvider";

export default function Page() {
  const { data, status } = trpc.post.all.useQuery();
  console.log(data);
  return (
    <div>{`hello  ${
      status === "success" ? data[0]?.title : "carregando"
    } `}</div>
  );
}
