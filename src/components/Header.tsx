import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import Hamburger from "./Hamburger";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsHamburgerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 lg:px-24 py-5 bg-black/1 backdrop-blur-md transition-all duration-300">
        <a
          href="#home"
          className="text-3xl font-bold"
          onClick={() => setIsHamburgerOpen(false)}
        >
          &lt;Saket Gupta/&gt;
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-between w-1/2">
          <Toggle />
          <nav className="w-full">
            <ul className="w-full flex justify-between items-center text-lg">
              <li className="pl-4">
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT ME</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <a
                  href="/Saket-Resume.pdf"
                  download
                  className="bg-green-500 px-6 py-2 rounded-full text-sm font-semibold"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden flex gap-2 items-center justify-center">
          <Toggle />
          <Hamburger
            isOpen={isHamburgerOpen}
            onClick={() => setIsHamburgerOpen((prev) => !prev)}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isHamburgerOpen && (
        <nav className="fixed inset-0 z-40 bg-green-500 flex flex-col items-center justify-center space-y-6 text-black text-lg font-medium transition-all duration-300">
          <a href="#home" onClick={() => setIsHamburgerOpen(false)}>
            HOME
          </a>
          <a href="#about" onClick={() => setIsHamburgerOpen(false)}>
            ABOUT ME
          </a>
          <a href="#project" onClick={() => setIsHamburgerOpen(false)}>
            PROJECT
          </a>
          <a href="#contact" onClick={() => setIsHamburgerOpen(false)}>
            CONTACT
          </a>
          <a
            href="/Saket-Resume.pdf"
            download
            className="bg-pink-600 text-white px-5 py-1 rounded-full text-sm font-semibold"
            onClick={() => setIsHamburgerOpen(false)}
          >
            RESUME
          </a>
        </nav>
      )}
    </>
  );
}

export default Header;
