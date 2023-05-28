import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import MenuDropdown from "./MenuDropdown/MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
            <div className="flex justify-between gap-10 md:gap-0">
                <div><Logo></Logo></div>
                <div><Search></Search></div>
                <div><MenuDropdown></MenuDropdown></div>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
