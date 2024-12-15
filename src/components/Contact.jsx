import React from "react";

function Contact() {
  return (
    <>
      <div className="mt-[-3vh] m-7 text-white">
        <h1 className="text-3xl font-bold">About Me</h1>
        <form className="mt-14" action="">
          <div>
            <input
              className=" h-16 w-5/12 mr-10 rounded-2xl gap- my-4 bg-gray-700 content-center border-2 border-gray-900"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="h-16 w-5/12 my-4 bg-gray-700 rounded-2xl content-center border-2 border-2 border-gray-900"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <input
            className="h-40 w-full my-4 bg-gray-700 rounded-lg content-center border-2 border-2 border-gray-900"
            type="text"
            placeholder="Your Message"
          />
          <button className="h-10 w-56 bg-blue-700 rounded-lg content-center">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
