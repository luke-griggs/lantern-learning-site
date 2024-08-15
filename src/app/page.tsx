import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Pricing from "./components/pricing";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const SLIDES = [
    { name: "larune", review: "good", key: 1 },
    { name: "billy boy", review: "great", key: 2 },
    { name: "larry", review: "excellent", key: 3 },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FFECC7]">
        <Navbar />
        <div className="flex w-full h-auto items-center p-12 pt-32 space-x-24">
          <div className="flex flex-col text-left max-w-[600px]">
            <h1 className="text-6xl font-bold text-[#30231B] leading-tight">
              Welcome to Tutoring That{" "}
              <span className="text-[#FF893F]">Works</span>
            </h1>
            <p className="text-mg pt-4 text-[#62564F]">
              Students should never be left behind in the clasroom. At lantern
              we ensure that students of all ages are guided on a path to
              success
            </p>
            <div className="flex items-center pt-10 space-x-6">
              <button className="text-md text-white font-semibold bg-[#FF893F] p-3 px-5 rounded-lg">
                Book a Session
              </button>
              <button className="text-md font-semibold text-[#30231B]">
                Learn more
              </button>
            </div>
          </div>
          <div>
            <img src="lantern-landing.png" className="max-w-[620px]"></img>
          </div>
        </div>
      </main>
      <div className="w-full h-auto bg-white p-36 pt-28">
        <div className="flex flex-col text-left text-[#30231B] max-w-">
          <h1 className="text-5xl font-semibold"> Why Lantern? </h1>
          <p className="hidden sm:block text-sm md:text-lg pt-4 max-w-5xl">
            {" "}
            Lantern learning was founded on the simple philosophy that no
            student should have to feel discouraged by their school work. This
            is why we created a team of students from top universities to tackle
            this problem. We do whatever it takes to ensure your{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 mt-20">
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F]">
            <h1 className="text-2xl font-semibold py-6 pt-12">
              {" "}
              Personalized Learning{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              We understand that every student is different. That's why we
              tailor our tutoring sessions to the needs of each student.{" "}
            </p>
          </div>
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F]">
            <h1 className="text-2xl font-semibold py-6 pt-12">
              {" "}
              Expert Tutors{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              Our tutors are students from top universities who have been
              through the same struggles as you. They know what it takes to
              succeed{" "}
            </p>
          </div>
          <div className="flex flex-col border-t-8 mt-6 md:mt-0 border-[#FF893F]">
            <h1 className="text-2xl font-semibold py-6 pt-12">
              {" "}
              Flexible Scheduling{" "}
            </h1>
            <p className="max-w-[350px]">
              {" "}
              We know that students have busy schedules. That's why we offer
              flexible scheduling to fit your needs.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-[#FFECC7]">
        <Pricing />
      </div>
      <div className="w-full h-auto bg-white">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
}
