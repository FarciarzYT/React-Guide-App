import React from "react";
import { Menu, X } from "lucide-react";

const Navlinks = () => {
  return (
    <ul className="flex justify-center space-x-5 w-full font-sans font-bold items-center text-white text-center">
      <li>
        <a href="" className="hover:text-blue-950">
          About
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-950">
          Contact
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-950">
          Log In
        </a>
      </li>
      <li>
        <a href="" className="hover:text-blue-950">
          Get Started
        </a>
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full">
        <div className="hidden md:flex justify-between w-full text-center">
          <Navlinks />
        </div>
        <div className="md:hidden float-right  fixed right-0 mr-12 top-4 ">
          <button onClick={ToggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex justify-center w-full">
          <Navlinks />
        </div>
      )}
    </>
  );
};
export default Nav;
