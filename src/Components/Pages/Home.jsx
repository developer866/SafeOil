import React from "react";

function Home() {
  return (
    <div>
      <div className="relative h-screen  bg-[url('/artisan.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent"></div>

        <div className="relative z-10 md:flex md:flex-col justify-center  text-white h-full md:w-1/2 p-10 md:pl-20 space-y-6">
          <h1 className="md:text-8xl text-4xl mt-10 font-bold">
            Servicing Gas Industry
          </h1>
          <p>
            Safe oil and gas is one of the leading companies in Nigeria that
            deals with the construction and installation of gas plant , supply
            of gas tank etc
          </p>
          <section className="mt-5">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded mr-4 ">
              Contact us
            </button>
            <button className="border border-white px-4 py-2 rounded">
              Project
            </button>
          </section>
        </div>
      </div>

      <section className=" md:max-w-[90%] p-6 text-center  mx-auto flex justify-between flex-col  items-center md:flex-row">
        <div className="border border-gray-400 p-3 my-3 rounded-xl">
          <img
            src="/safe.logo.png"
            alt="logo"
            className="md:w-1/8 w-[40%] mx-auto"
          />
          <h1 className="text-xl text-bold">Construction</h1>
          <p className="text-left ">
            Construction and installation of Gas Plant or Skid plant and LPG
            Auto dispenser
          </p>
        </div>

        <div className="border border-gray-400 rounded-xl p-3 my-3">
          <img
            src="/safe.logo.png"
            alt="logo"
            className="md:w-1/8 w-[40%] mx-auto"
          />

          <h1 className="text-xl text-bold">Supply</h1>
          <p className="text-left">
            Bulk supply of LPG product, PMS, AGO, LNG, CNG etc. CGS centralize
            gas supply
          </p>
        </div>
        <div className="border border-gray-400 rounded-xl p-3 my-3">
          <img
            src="/safe.logo.png"
            alt="logo"
            className="md:w-1/8 w-[40%] mx-auto"
          />

          <h1 className="text-xl text-bold">Maintainance</h1>
          <p className="text-left">
            General Maintenance of Gas plant, pumps, dispenser etc.
          </p>
        </div>
      </section>
      <section className="relative min-h-screen flex justify-center items-center">
        {/* slider image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>

        <h1>image slider</h1>
        <div className="absolute top-0 left-0 z-10">
          <h1>Completed Project</h1>
        </div>
      </section>
      {/* meet Team */}
      <section></section>
    </div>
  );
}

export default Home;
