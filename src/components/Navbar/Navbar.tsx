import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-[20] mx-auto flex w-full items-center justify-between  p-8 bg-blue-400 shadow-lg flex-wrap">
        <Logo />
        <Nav />
      </header>
    </>
  );
}
