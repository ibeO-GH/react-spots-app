import React from "react";
import "./style.css";
import Logo from "../assets/images/Logo.svg";
function Header() {
  return (
    <header className="headerstyle">
      <img src={Logo} alt="logo" />
    </header>
  );
}
export default Header;
