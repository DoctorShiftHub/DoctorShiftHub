import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base-200">
      <header className="py-6 px-2 md:px-4">Header</header>
      <main className="py-6 px-2 md:px-4">{children}</main>
      <footer className="py-6 px-2 md:px-4">Footer</footer>
    </div>
  );
}
