import React from "react";

function Contact() {
  return (
    <main className=" container mt-24 md:mt-30  mx-auto md:min-h-[80vh] space-y-6">
      <section>
        <h1 className="text-center text-3xl font-semibold md:text-5xl">
          CONTACT US
        </h1>
      </section>
      <form action="" className="p-10 text-xl ">
        <div className="md:w-[70%] mx-auto ">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border mt-3  w-full  mx-auto p-3 md:p-5 mb-4 rounded-xl border-gray-200"
          />
        </div>
        <div className="md:w-[70%] mx-auto ">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border mt-3  w-full  mx-auto p-3 md:p-5 mb-4 rounded-xl border-gray-200"
          />
        </div>
        <div className="md:w-[70%] mx-auto ">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border mt-3  w-full  mx-auto p-3 md:p-5 mb-4 rounded-xl border-gray-200"
          />
        </div>
        <div className="md:w-[70%] mx-auto ">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border mt-3  w-full  mx-auto p-3 md:p-5 mb-4 rounded-xl border-gray-200"
          />
        </div>
        <div className="md:w-[70%] mx-auto  flex items-center justify-center ">
          <button type="submit" className="p-4 bg-blue-300 rounded w-[50%]">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
