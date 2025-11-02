import React from "react";
import About from "./About";

function Home() {
  return (
    <div>
      <div className="relative mt-20 md:mt-27 md:h-[80vh] h-[70vh]  bg-[url('/artisan.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent"></div>

        <div className="relative z-10 md:flex md:flex-col justify-center text-white h-full  md:w-[60%] p-5 md:pl-20 md:space-y-6">
          <h1 className="md:text-8xl text-6xl mt-10 font-bold">
            Servicing Gas Industry
          </h1>
          <p className="md:text-2xl mt-10 md:w-[70%]">
            Safe oil and gas is one of the leading companies in Nigeria that
            deals with the construction and installation of gas plant , supply
            of gas tank etc
          </p>
          <section className="mt-5 py-5">
            <button
              className="bg-yellow-500 text-black 
            md:text-2xl md:p-5 p-3 rounded mr-4 "
            >
              Contact us
            </button>
            <button className="border bg-white p-3 text-black md:text-2xl md:p-5 rounded">
              Project
            </button>
          </section>
        </div>
      </div>

      <section className="min-h-screen my-10  mx-auto flex items-center">
        <About />
      </section>

      <section className="min-h-screen md:min-h-[90vh]  bg-gray-100 flex flex-col p-4  justify-center gap-12 items-center">
        <h1 className="text-center text-3xl font-semibold md:text-5xl  ">
          OUR SERVICES
        </h1>
        <section className="flex flex-col md:w-[90%]  md:flex-row justify-between items-center p-3 mx-auto text-center gap-6">
          {/* Construction */}

          <div className="border w-[90%] md:w-full  border-gray-300 p-5 h-[350px] text-xl flex flex-col justify-center items-center rounded-xl shadow-sm hover:shadow-md transition-all">
            <img
              src="/safe.logo.png"
              alt="Supply Logo"
              className="w-[40%] md:w-[25%] mx-auto mb-3 object-cover"
            />
            <div className="">
              <h1 className="text-xl font-semibold mb-2">Construction</h1>
              <p className="text-gray-700 text-sm text-left">
                Construction and installation of Gas Plant or Skid plant and LPG
                Auto dispenser.
              </p>
            </div>
          </div>

          {/* Supply */}
          <div
            className="border w-[90%] md:w-full border-gray-300 p-5 h-[350px] text-xl flex flex-col justify-center
           items-center rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <img
              src="/safe.logo.png"
              alt="Supply Logo"
              className="w-[40%] md:w-[25%] mx-auto mb-3 object-cover"
            />
            <div className="">
              <h1 className="text-xl font-semibold mb-2">Supply</h1>
              <p className="text-gray-700 text-sm text-left">
                Bulk supply of LPG product, PMS, AGO, LNG, CNG, etc. CGS
                centralized gas supply.
              </p>
            </div>
          </div>

          {/* Maintenance */}
          <div className="border container w-[90%] md:w-full border-gray-300 p-5 h-[350px] text-xl flex flex-col justify-center items-center rounded-xl shadow-sm hover:shadow-md transition-all">
            <img
              src="/safe.logo.png"
              alt="Maintenance Logo"
              className="w-[40%] md:w-[25%] mx-auto mb-3"
            />
            <div className="">
              <h1 className="text-xl font-semibold mb-2">Maintenance</h1>
              <p className="text-gray-700 text-sm text-left">
                General maintenance of gas plant, pumps, dispensers, etc.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* <section className="min-h-screen flex justify-center border relative h-screen  bg-cover bg-center items-center">
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
        <h1 className="text-white">Image slider</h1>
        <div className="absolute top-0 left-0 z-10 border">
          <h1 className="">Completed Project</h1>
          <div className="flex justify-between border w-[70%]">
            <div className="">1</div>
            <div className="">2</div>
          </div>
        </div>
      </section> */}

      {/* <section className="min-h-screen space-y-4 p-3 md:p-10">
        <section className="mt-10">
          <h1 className="md:text-4xl text-2xl">Recently Completed Project</h1>
          <div className="border md:flex justify-between gap-4 h-[250px] items-center">
            <div className="border md:w-[40%]">1</div>
            <div className="md:w-[40%]">
              <h1 className="text-xl font-bold">First quarters</h1>
              <p>hello</p>
            </div>
          </div>
        </section>
      </section> */}

      {/* meet Team */}
      <section>
        <div className=" p-5 md:p-10 min-h-screen flex justify-center items-center flex-col md:gap:10 gap-5 ">
          <h1 className="md:text-5xl text-4xl mb-10 text-center mt-10 font-semibold  md:mt-0  ">
            Meet Our Team
          </h1>
          <div className="flex md:flex-row flex-col gap-4  justify-between md:w-[90%] mx-auto ">
            <div className=" rounded-xl w-[350px] md:w-[50%] mx-auto flex flex-col justify-between items-center">
              <img
                src="/IMG_9933.jpg"
                alt="member images"
                className="rounded-full  md:h-[45vh] w-[70%]"
              />
              <div className="text-center md:p-4  p-3   ">
                <h1 className="">Ayeni Opeyemi Joseph</h1>
                <p>
                  <i>Technical Founder,full Stack web developer.</i>
                </p>
              </div>
            </div>

            <div className=" flex flex-col w-[350px] md:w-[50%] mx-auto border-gray-400 rounded-xl  justify-between items-center">
              <img
                src="/IMG_9933.jpg"
                alt="member images"
                className=" rounded-full  md:h-[45vh] w-[70%]  "
              />
              <div className="text-center md:p-4  p-3 ">
                <h1>Ayeni Opeyemi Joseph</h1>
                <p>
                  <i>Technical Founder,full Stack web developer.</i>
                </p>
              </div>
            </div>

            <div className=" flex flex-col w-[100%] md:w-[50%] mx-auto  border-gray-400 rounded-xl  justify-between items-center">
              <img
                src="/IMG_9933.jpg"
                alt="member images"
                className="rounded-full  md:h-[45vh] w-[70%] "
              />
              <div className="text-center md:p-4  p-3 ">
                <h1>Ayeni Opeyemi Joseph</h1>
                <p>
                  <i>Technical Founder,full Stack web developer.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
