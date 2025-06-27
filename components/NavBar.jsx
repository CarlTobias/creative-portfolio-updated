import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full border-b border-gray-700">
      <header
        className="w-full p-3 flex items-center justify-between"
        style={{ backgroundColor: "#222831" }}
      >
        <div>
          <Link href="/" className="block">
            <Image
              src="/assets/images/LogoCarl.png"
              alt="Logo"
              width={100}
              height={32}
              className="h-8 w-auto hidden md:block"
            />
          </Link>
        </div>
        <nav
          className="flex gap-10 items-center pr-5 text-[#EEEEEE]"
        >
          <Link
            href="/AboutPage"
            className="text-lg hover:underline transition-all"
          >
            About
          </Link>
          <Link
            href="/PortfolioPage"
            className="text-lg hover:underline transition-all"
          >
            Portfolio
          </Link>
          <a
            href="/downloadables/Carl Tobias - CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline transition-all"
          >
            CV
          </a>
        </nav>
      </header>

      {/* This will be handled by your page content or children if used in a layout */}
    </div>
  );
};

export default NavBar;
