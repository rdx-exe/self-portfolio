import { assets, educationData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div id="education" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Qualification Background
      </h4>
      <h2 className="text-center text-green-800 text-5xl font-Ovo">My Education</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am currently pursuing my B.Tech in Computer Science Engineering with a
        strong passion for cybersecurity, ethical hacking, network security, and
        other respective domains.
      </p>

      <div className="grid gap-6 my-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {educationData.map(
          (
            { icon, degree, school, duration, grade, description, link },
            index
          ) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-black">{degree}</h3>
              <h3 className="text-lg my-4 text-black">{school}</h3>
              <h4 className="text-lg my-4 text-gray-700">{duration}</h4>
              <h4 className="text-lg my-4 text-gray-700">{grade}</h4>
              <p className="text-sm text-gray-600 leading-5">{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Education;
