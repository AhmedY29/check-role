import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer-section bg-[#171e29] text-white w-full flex justify-center py-8 mt-10">
      <div className="footer-content w-[80%] flex flex-col lg:flex-row items-center justify-between">
        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl font-bold">Check</h1>
          </Link>
        </div>
        <div className="links">
          <ul className="flex lg:flex-col gap-3 lg:gap-0">
            <Link
              className="opacity-50 hover:opacity-100 transition-all duration-150"
              to="/"
            >
              <li>Home</li>
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition-all duration-150"
              to="/"
            >
              <li>Jobs</li>
            </Link>
            <Link
              className="opacity-50 hover:opacity-100 transition-all duration-150"
              to="/about"
            >
              <li>About</li>
            </Link>
          </ul>
          <h1>&copy; 2025 all rights reserved</h1>

          <h1 className="flex gap-2">
            Made By{" "}
            <a
              className="text-[#96a5ff] hover:underline"
              href="https://github.com/AhmedY29"
              target="_blank"
            >
              Ahmed Alsaleh
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
