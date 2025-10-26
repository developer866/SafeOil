import React from "react";

function Home() {
  return (
    <div>
      <div className="relative h-screen bg-[url('/artisan.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent"></div>

        <div className="relative z-10 md:flex md:flex-col justify-center text-white h-full md:w-1/2 p-10 md:pl-20 space-y-6">
          <h1 className="md:text-8xl text-4xl font-bold">Servicing Gas Industry</h1>
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
    </div>
  );
}

export default Home;
