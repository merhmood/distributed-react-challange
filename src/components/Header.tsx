import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icons/Logo";
import SearchIcon from "../assets/icons/SearchIcon";
import IconNavSection from "./IconSection";
import "../assets/css/header.css";

const Header = () => {
  const mainNavigation = [
    { linkText: "Home", path: "/" },
    { linkText: "Teams", path: "/teams" },
    { linkText: "Events", path: "/events" },
    { linkText: "Resources", path: "/resources" },
    { linkText: "Discord", path: "/discord" },
    { linkText: "Directory", path: "/directory" },
    { linkText: "Forums", path: "/forums" },
    { linkText: "Benefits", path: "/benefits" },
  ];
  return (
    <>
      <header>
        <div className="content">
          <div>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <div>
            <input type="text" placeholder="Search for people" />
            <SearchIcon />
          </div>
          <IconNavSection />
        </div>
      </header>
      <nav>
        <ul>
          {mainNavigation.map((link) => {
            const key = getRandomKey();
            return (
              <li key={key}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => currentPage(isActive)}
                >
                  {link.linkText}
                  {/* this condition enables the underline should under the link when active */}
                  {window.location.pathname === link.path && <div></div>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export function currentPage(isActive: boolean) {
  return isActive ? "active" : "";
}
function getRandomKey() {
  const min = Math.ceil(3348585885);
  const max = Math.floor(4348585885);
  return Math.floor(Math.random() * (max - min) + min);
}
export default Header;
