import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className=" flex flex-col md:flex-row space-y-3 p-4 justify-between ">
      <div className=" mt-4 md:w-1/2">
        <img src="/safe.logo.png" alt="logo" className="md:w-1/4 w-[40%] md:w " />
        <p className="font-light  mx-auto">
          Safe oil and gas is one of the leading companies in Nigeria that deals
          with the construction and installation of gas plant , supply of gas
          tank etc
        </p>
      </div>
      <div>
        <section className="">
          <ul className=" text-gray-600 ">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/About">
              <p>About</p>
            </Link>
            <Link to="/Services">
              <p>Services</p>
            </Link>
            <Link to="/Blog">
              <p>Blog</p>
            </Link>
            <Link to="/Contact">
              <p>Contact us</p>
            </Link>
          </ul>
        </section>
      </div>
      {/* <div className="flex justify-center items-center">
        <p>2025 all right Reserved</p>
      </div> */}
    </main>
  );
}

export default Footer;
