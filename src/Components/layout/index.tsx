import React from "react";
import Navbar from "../Landingpage/Navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  // Put Header or Footer Here
  return (
    <main className="container mx-auto ">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}