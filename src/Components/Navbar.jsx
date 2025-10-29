import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClicks = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div className="flex justify-between items-center md:p-3 border-b py-4 mx-auto">
      {/* logo */}
      <img src="/safe.logo.png" alt="logo" className="md:w-1/8 w-[30%]" />
      {/* navigation */}
      <section className="">
        <ul className="space-x-6 text-gray-600 font-semibold hidden md:flex">
          <Link to="/">
            <h3>HOME</h3>
          </Link>
          <Link to="/About">
            <h3>ABOUT</h3>
          </Link>
          <Link to="/Services">
            <h3>SERVICES</h3>
          </Link>
          <Link to="/Blog">
            <h3>BLOG</h3>
          </Link>
          <Link to="/Contact">
            <h3>CONTACT US</h3>
          </Link>
        </ul>
      </section>

      {/* mobile lesson */}
      <section className="flex md:hidden ">
        {/* hamburger icon */}
        <img
          src="/bars-solid-full.svg"
          className="w-[35px]"
          alt="hamburger icon"
          onClick={handleClicks}
        />
        {showMenu && (
          <div className="absolute  right-0 top-0 w-[50%] z-100  bg-white p-2">
            <div className="flex justify-end mb-4">
              <img
                src="/xmark-solid-full.svg"
                className="w-[30px] "
                alt="hamburger icon"
                onClick={handleClicks}
              />
            </div>
            <ul className="space-y-6 text-gray-600 font-semibold flex flex-col">
              <Link to="/" onClick={handleClicks}>
                <h3>HOME</h3>
              </Link>
              <Link to="/About" onClick={handleClicks}>
                <h3>ABOUT</h3>
              </Link>
              <Link to="/Services" onClick={handleClicks}>
                <h3>SERVICES</h3>
              </Link>
              <Link to="/Blog" onClick={handleClicks}>
                <h3>BLOG</h3>
              </Link>
              <Link to="/Contact" onClick={handleClicks}>
                <h3>CONTACT US</h3>
              </Link>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Navbar;
