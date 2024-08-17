import React from "react";
import Link from "next/link";
import Logo from "../UI/logo";

const Navbar: React.FC = () => {
  const MenuLink: React.FC<{
    href: string;
    className?: string;
    children: React.ReactNode;
  }> = ({ href, className, children }) => (
    <Link
      href={href}
      className={className ?? "text-regular-16 text-secondary-font"}
    >
      {children}
    </Link>
  );

  return (
    <div className="navbar bg-white px-8 py-4 font-sans">
      <div className="navbar-start">
        <Logo />
      </div>

      <div className="navbar-center space-x-10">
        <MenuLink href="/">How it works?</MenuLink>
        <MenuLink href="/">Agencies</MenuLink>
      </div>
      <div className="navbar-end space-x-3">
        <MenuLink href="/">Login</MenuLink>
        <MenuLink
          href="/"
          className="text-regular-16 font-semibold text-main-font"
        >
          Join as brand
        </MenuLink>
        <MenuLink
          href="/"
          className="text-regular-16 font-semibold text-primary"
        >
          Join as creator
        </MenuLink>
      </div>
    </div>
  );
};

export default Navbar;
