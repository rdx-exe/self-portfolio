import { assets, socialHandles } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-green-800 text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am a current B.Tech student in Computer Science and Engineering
            with a strong passion for cybersecurity. I am deeply interested in
            exploring areas such as network security, ethical hacking, and
            digital forensics, and I actively seek opportunities to expand my
            knowledge and practical skills. With a curious mindset and a drive
            to solve complex security challenges, I am eager to contribute to
            projects and initiatives that strengthen digital safety. I am eager
            to connect with professionals and organizations where I can
            contribute my skills, learn from experts, and gain real-world
            exposure. Open to research internships, cybersecurity projects, and
            collaborative opportunities that bridge academics with industry.
          </p>

          <h4 className="my-2 text-xl font-bold text-black font-Ovo">
            Social Handles
          </h4>
          <ul className="flex flex-wrap gap-3 max-w-2xl">
            {socialHandles.map(({ icon, name, link }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image src={icon} alt={name} className="w-10 h-10" />
                </a>
              </li>
            ))}
          </ul>

          <h4 className="my-2 text-xl font-bold text-black font-Ovo">
            Hobbies
          </h4>
          <p className="mt-1 text-gray-600 max-w-2xl">
            Reading story books and tech blogs, editting and designing, playing chess and video games, photography, and fitness
            training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
