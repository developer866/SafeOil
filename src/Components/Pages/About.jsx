import React from "react";

function About() {
  return (
    <main className="min-h-[130vh] container mt-20 md:mt-27  mx-auto md:min-h-[80vh] space-y-6  ">
      <section>
        <h1 className="text-center text-3xl font-semibold md:text-5xl">
          ABOUT US
        </h1>
      </section>
      <section className="flex flex-col mt-10 md:mt-15 md:flex-row justify-between  h-[60vh] items-center">

        <section className="md:w-[50%] w-[70%] ">
          <img
            src="/artisan.jpg"
            alt="artisan image"
            className="w-full h-[50vh] object-cover rounded-2xl"
          />
        </section>
        <section className="md:w-[50%] mx-auto  ">
          <p className="text-xl p-5 md:p-10 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            porro, optio tempore, iure minus id aliquid itaque voluptatibus
            veritatis cupiditate quo velit dolore officia? Quos harum aliquid
            ipsum et soluta molestias aut sed optio, ab consequuntur nulla.
            Dicta provident, veniam recusandae reprehenderit pariatur ipsam,
            excepturi ab exercitationem pra esentium magni sed? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid expedita
            tenetur, totam saepe tempore labore cumque blanditiis in ratione
            assumenda atque itaque. Et, ex! Nesciunt, nulla voluptatibus.
            Aliquam debitis exercitationem et pariatur voluptatibus. Provident
            enim sapiente mollitia, ratione dolorem harum.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
