import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="bg-green-100 flex justify-between md:px-10 flex-col md:flex-row space-y-5 md:space-x-6 p-4 mx-auto ">
      <section className=" md:w-[50%]">
        <h1 className="text-3xl">SAFEOIL NG LIMITED</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro
          numquam dolorem harum voluptate delectus beatae at cum provident
          veniam.
        </p>
      </section>

      <section className="md:w-[50%] md:space-y-3 space-y-2  flex flex-col  md:justify-center md:items-center">
        <h1 className="text-2xl font-semibold">Quick Links</h1>
        <ul className=" underline text-xl ">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/About">
            <p>About</p>
          </Link>
          <Link to="/Services">
            <p>Services</p>
          </Link>
        
          <Link to="/Contact">
            <p>Contact us</p>
          </Link> 
        </ul>
      </section>
      <section className="md:space-y-3 space-y-2  md:w-[50%] ">
        <h1 className="text-2xl font-semibold">Get in Touch</h1>
        {/* phone number */}
        <div className="flex gap-4 items-center">
          <img src="/phone-volume-solid-full.svg" alt="icon" className="w-10" />
          <div className="w-[70%] ">
            <p>09033383479</p>
            <p>09033383479</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4 items-center">
          <img src="/envelope-solid-full.svg" alt="icon" className="w-10 " />
          <div>
            <p>Opeyemijoseph966@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-4 items-center ">
          <img src="/location-dot-solid-full.svg" alt="icon" className="w-10" />
          <div>
            <p className=" ">
              Lorem ipsum dolor sit adipisicing elit. Modi
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Footer;
