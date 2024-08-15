import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-18 fixed top-0 p-4">
      <div className="flex items-center justify-between h-18 px-6">
        <div className="flex items-center">
          <a href="">
            <img src="Lantern-logo.png" alt="" className="w-16 h-16 pb-2"></img>
          </a>
          <a href="">
            <h1 className="font-bold text-2xl">Lantern Learning</h1>
          </a> 
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-md font-semibold">
            Pricing
          </a>
          <a href="#" className="text-md font-semibold">
            Testimonials
          </a>
          <a href="#">
            <button className="text-md text-white font-semibold bg-[#30231B] p-3 px-5 rounded-lg">
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
