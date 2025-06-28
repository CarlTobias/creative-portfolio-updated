"use client";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "./Aceternity/floatingNavBar";

const NavBar = () => {
  const navItems = [
    { name: "About", link: "/AboutPage" },
    { name: "Portfolio", link: "/PortfolioPage" },
    { name: "CV", link: "/downloadables/Carl Tobias - CV.pdf" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[5000] flex items-center justify-between px-6 py-3 bg-transparent">
      {/* Logo left */}
      <div className="flex-shrink-0">
        <Link href="/">
            <Image
              src="/assets/images/LogoCarl.png"
              alt="Logo Carl"
              width={32}
              height={32}
              priority
            />
        </Link>
      </div>

      {/* Nav right */}
      <FloatingNav navItems={navItems} />
    </nav>
  );
};

export default NavBar;
