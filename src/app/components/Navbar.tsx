import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-18 top-0 p-4 pt-0 bg-[#FFECC7]">
      <div className="flex items-center justify-between h-18 px-6 bg-[#fffbf3] shadow-md rounded-b-xl duration-300">
        <div className="flex items-center p-1 pt-2">
          <a href="">
            <img src="lantern-logo.png" alt="" className="w-16 h-16 pb-2"></img>
          </a>
          <a href="">
            <h1 className="font-bold text-2xl text-[#30231B]">Lantern Learning</h1>
          </a> 
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          <a href="#pricing" className="text-md font-semibold">
            Pricing
          </a>
          <a href="#testimonials" className="text-md font-semibold">
            Testimonials
          </a>
          <a href="mailto:lukegriggs100@gmail.com">
            <button className="text-md text-white font-semibold bg-[#30231B] p-3 px-5 rounded-lg duration-300 hover:bg-[#62564F]">
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
