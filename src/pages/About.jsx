import React from "react";
import { about_1, about_2, about_3 } from "../assets";
import { Testimonals, AboutComp, AboutBanner, AboutStatistics } from "../components";

const About = () => {
  return (
    <div className="">
      <AboutBanner />
      <div className="flex flex-col">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col mt-16 justify-center gap-28">
          <div className="flex flex-col 2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full space-y-4">
            <h1 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Build the right team to scale
            </h1>
            <div className="text-red-600 px-4 border-l-4 border-red-600 2xl:text-base xl:text-base lg:text-base text-sm">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </div>
            <div className="flex items-center gap-3">
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
            <img src={about_1} alt="about_1.jpg" className="w-fit h-fit" />
          </div>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mt-16 gap-10 2xl:px-0 xl:px-0 lg:px-0 sm:px-0 px-5">
          <div className="2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
            <img src={about_1} alt="about_1.jpg" className="w-fit h-fit" />
          </div>
          <div className="flex flex-col 2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full justify-center space-y-4">
            <h1 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Build the right team to scale
            </h1>
            <div className="text-red-600 px-4 border-l-4 border-red-600 2xl:text-base xl:text-base lg:text-base text-sm">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </div>
            <div className="flex items-center gap-3">
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col mt-16 justify-center 2xl:gap-28 xl:gap-28 lg:gap-28 md:gap-28 sm:gap-28 gap-10 2xl:px-0 xl:px-0 lg:px-0 sm:px-0 px-5">
          <div className="2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
            <img src={about_2} alt="about_1.jpg" className="w-fit h-fit" />
          </div>
          <div className="flex flex-col 2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full space-y-4">
            <h1 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Build the right team to scale
            </h1>
            <div className="text-red-600 px-4 border-l-4 border-red-600 2xl:text-base xl:text-base lg:text-base text-sm">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </div>
            <div className="flex items-center gap-3">
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex hidden 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col mt-16 justify-center gap-28">
          <div className="flex flex-col 2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full space-y-4">
            <h1 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Build the right team to scale
            </h1>
            <div className="text-red-600 px-4 border-l-4 border-red-600 2xl:text-base xl:text-base lg:text-base text-sm">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </div>
            <div className="flex items-center gap-3">
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
            <img src={about_3} alt="about_1.jpg" className="w-fit h-fit" />
          </div>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mt-16 justify-center gap-10 2xl:px-0 xl:px-0 lg:px-0 sm:px-0 px-5">
          <div className="2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full">
            <img src={about_3} alt="about_1.jpg" className="w-fit h-fit" />
          </div>
          <div className="flex flex-col 2xl:basis-1/4 xl:basis-1/4 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full space-y-4">
            <h1 className="font-semibold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Build the right team to scale
            </h1>
            <div className="text-red-600 px-4 border-l-4 border-red-600 2xl:text-base xl:text-base lg:text-base text-sm">
              "Simform is quick to identify larger problem with the Software so
              we decided to expand our scope to build new modules"
            </div>
            <div className="flex items-center gap-3">
              <img
                class="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Rounded avatar"
              />
              <div className="flex flex-col">
                <p>Jeewa markram</p>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutStatistics />
      <div className="container mx-auto px-20">
        <AboutComp />
      </div>
      <div className="px-20 my-10 2xl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[680px] sm:h-[620px] xs:h-[800px] xxs:h-[900px] h-[950px]">
        <Testimonals />
      </div>
    </div>
  );
};

export default About;
