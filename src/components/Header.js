import React from "react";
import { RxModulzLogo } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div>
      <div>
        <RxModulzLogo size={70} />
      </div>
      <div>
        <input />
        <SlBasket size={28} />
        <CgProfile size={28} />
      </div>
    </div>
  );
};

export default Header;
