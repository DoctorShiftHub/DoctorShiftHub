import { Promoted } from "@/nextjs/components/organisms";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        botões com opção Vagas e Anunciar, anunciar que leva pra /feed/publish
      </div>
      <div className="my-2 md:my-4">
        <Promoted />
      </div>
      {children}
    </div>
  );
}
