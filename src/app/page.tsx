"use client"

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Pricing from "./components/pricing";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Footer from "./components/Footer";
import { PiStudentBold, PiStudentFill } from "react-icons/pi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { FaRegCalendarCheck, FaUniversity } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const SLIDES = [
    { name: "Joel S.", review: "Luke enabled our son to follow along better in the classroom and overall boosted his confidence in geometry", key: 1 },
    { name: "Anastasiya K.", review: "I am confident in continuing to use and recommend Luke's services to any parent who is looking for additional help for their child to learn and will be there to support them! ", key: 2 },
    { name: "Ada S.", review: "Luke has been working with my two children for the past few months, and the improvement in their grades and understanding of the subjects has been remarkable. Highly recommend!", key: 3 },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  })

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center justify-between px-10 pt-48 sm:px-24 p-24 sm:pt-32 bg-[#FFECC7]"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="flex flex-col lg:flex lg:flex-row w-full h-auto items-center space-x-24">
          <div className="flex flex-col text-center lg:text-left max-w-[600px] md:min-w-[400px]">
            <h1 className="text-5xl sm:text-6xl sm:leading-tight md:leading-tight font-bold text-[#30231B] leading-tight">
              Welcome to Tutoring That{" "}
              <span className="text-[#FF893F] font-extrabold">Works</span>
            </h1>
            <p className="text-sm md:text-lg pt-4 text-[#62564F]">
              Students should never be left behind in the clasroom. At Lantern
              we ensure that students of all ages are guided on a path to
              success
            </p>
            <div className="flex items-center justify-center lg:justify-start pt-10 space-x-6">
              <a href="https://calendly.com/lanternlearning" target="_blank">
                <button className="text-white font-semibold bg-[#FF893F] p-3 px-5 rounded-lg duration-300 hover:bg-orange-500 hover:-translate-y-1">
                  Book a Session
                </button>
              </a>
              <a href="#info">
              <button className="text-md font-semibold text-[#30231B] duration-300 hover:text-[#62564F]">
                Learn more
              </button>
              </a>
            </div>
          </div>
          <div className="hidden lg:block max-w-[620px]">
            <img src="lantern-landing.png" className=""></img>
          </div>
        </div>
        
      </main>
      <div className="h-6 w-full bg-[#fff6e3]" id="info"></div>
      <div className="text-center sm:text-left w-full h-auto bg-white p-10 px-16 py-28">
        <div className=" flex flex-col text-[#30231B]">
          <h1 className="text-5xl font-semibold pb-1" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> Why Lantern? </h1>
          <p className="hidden sm:block text-sm md:text-lg pt-4 max-w-5xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            {" "}
            Lantern Learning was founded on the belief that learning should never feel like a losing battle. That&apos;s why we assembled a team of students from top universities to guide learners through innovative thinking methods, helping them achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 mt-20">
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F] items-center sm:items-start" data-aos="fade-left">
            <PiStudentBold className="hidden sm:block w-10 h-10 mt-8 text-[#30231B]"/>
            <h1 className="text-2xl font-semibold py-6">
              {" "}
              Personalized Learning{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              We understand that every student is different. That&apos;s why we
              tailor our tutoring sessions to fit the needs of each student.{" "}
            </p>
          </div>
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F] items-center sm:items-start" data-aos="fade-left" data-aos-offset="200">
          <FaUniversity className="hidden sm:block w-10 h-10 mt-8 text-[#30231B]"/>

            <h1 className="text-2xl font-semibold py-6">
              {" "}
              Expert Tutors{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              Our tutors are students from top universities who know exactly what it&apos;s like to not understand something.{" "}
            </p>
          </div>
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F] items-center sm:items-start" data-aos="fade-left" data-aos-offset="300">
          <FaRegCalendarCheck className="hidden sm:block w-10 h-10 mt-8 text-[#30231B]"/>

            <h1 className="text-2xl font-semibold py-6">
              {" "}
              Flexible Scheduling{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              We know that students have busy schedules. That&apos;s why we offer
              flexible scheduling to fit your needs.{" "}
            </p>
          </div>
        </div>
        <div id="pricing"></div>
      </div>
      <div className="h-6 w-full bg-[#fff6e3]"></div>
      <div className="w-full h-auto bg-[#FFECC7] pb-8">
        <Pricing />
      </div>
      <div className="w-full h-auto">
        <div className="flex justify-center items-center text-center mt-32">
          <h1 className="text-5xl font-semibold text-[#30231B] pl-4">Testimonials</h1>
          <LuHeart className="w-8 h-8 ml-2"/>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="flex w-full sm:w-[65%] mx-auto h-auto items-center justify-center mt-30 px-0 sm:p-20 -mb-40 sm:-mg-36">
        <div className="h-auto flex flex-col justify-center items-center text-center bg-[#FF893F] p-12 px-24 rounded-lg z-10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-serif">
            Ready to get started?
          </h1>
          <p className="text-sm md:text-lg text-gray-100 pt-4">
            Book a session today and let us guide you on the path to success
          </p>
          <a href="https://calendly.com/lanternlearning">
          <button className="text-md font-semibold text-[#30231B] bg-white p-3 px-5 rounded-lg mt-4 duration-300 hover:shadow-md hover:-translate-y-1">
            Book a Session
          </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
