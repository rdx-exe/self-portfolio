import user_image from "./user-image.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import mail_icon from "./mail_icon.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import arrow_icon from "./arrow-icon.png";
import menu_black from "./menu-black.png";
import close_black from "./close-black.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import instagram_icon from "./instagram-icon.png";
import github_icon from "./github-icon.png";
import linkedin_icon from "./linkedin-icon.png";

// Education Icons
import tiu_icon from "./education/tiu-icon.png";
import gvmss_icon from "./education/gvmss-icon.png";
import ju_icon from "./education/ju-icon.png";

// Languages Icons
import cLogo from "./languages/c.png";
import cppLogo from "./languages/cpp.png";
import cssLogo from "./languages/css.png";
import htmlLogo from "./languages/html.png";
import javaLogo from "./languages/java.png";
import jsLogo from "./languages/js.png";
import pythonLogo from "./languages/python.png";
import tsLogo from "./languages/ts.png";

// Tools Icons
import anacondaLogo from "./tools/anaconda.png";
import gitLogo from "./tools/git.png";
import githubLogo from "./tools/github.png";
import nextjsLogo from "./tools/nextjs.png";
import nodejsLogo from "./tools/nodejs.png";
import reactLogo from "./tools/react.png";
import tailwindLogo from "./tools/tailwind.png";
import vscodeLogo from "./tools/vscode.png";

// Certificates
import cert1 from "./certificates/cert1.png";
import cert2 from "./certificates/cert2.jpg";

// Projects
import portfolio from "./public/portfolio.png"

export const assets = {
  user_image,
  right_arrow_white,
  logo,
  mail_icon,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  arrow_icon,
  menu_black,
  close_black,
  tiu_icon,
  ju_icon,
  gvmss_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  instagram_icon,
  linkedin_icon,
  github_icon,
  cLogo,
  cppLogo,
  cssLogo,
  htmlLogo,
  javaLogo,
  jsLogo,
  pythonLogo,
  tsLogo,
  anacondaLogo,
  gitLogo,
  githubLogo,
  nextjsLogo,
  nodejsLogo,
  reactLogo,
  tailwindLogo,
  vscodeLogo,
  cert1,
  cert2,
  portfolio,
};

export const projectData = [
  {
    id:0,
    title: "Self Portfolio",
    description: "A modern, fully responsive personal portfolio website showcasing my skills, projects, and background. Designed to provide detailed information about me in a clean, interactive, and visually appealing format across all devices.",
    image: assets.portfolio,
    tags: ["Tailwind CSS", "JavaScript", "React JS", "Next.js", "Node.js"],
    github: "",
    webapp: "",
  },
];

export const educationData = [
  {
    icon: assets.tiu_icon,
    degree: "B.Tech in Computer Science and Engineering",
    school: "Techno India University",
    duration: "Sept 2025 - Present",
    grade: "--",
    description:
      "Currently pursuing my Bachelor's in Computer Science and Engineering",
  },
  {
    icon: assets.gvmss_icon,
    degree: "Higher Secondary (XII), ISC",
    school: "Gurukul Vidya Mandir Secondary School",
    duration: "Apr 2023 - Mar 2025",
    grade: "Grade - 93.5%",
    description:
      "Completed my higher secondary education with subject combination of Physics, Chemistry, Mathematics & Computer Science",
  },
  {
    icon: assets.gvmss_icon,
    degree: "Secondary (X), ICSE",
    school: "Gurukul Vidya Mandir Secondary School",
    duration: "Apr 2021 - Mar 2023",
    grade: "Grade - 92.2%",
    description:
      "Completed my secondary education with Science, History & Civics, Geography and Computer Applications",
  },
];

export const socialHandles = [
  {
    name: "LinkedIn",
    icon: assets.linkedin_icon,
    link: "https://www.linkedin.com/in/das-ritam/",
  },
  {
    name: "Github",
    icon: assets.github_icon,
    link: "https://github.com/rdx-exe",
  },
  {
    name: "Instagram",
    icon: assets.instagram_icon,
    link: "https://www.instagram.com/rdx._here/",
  },
];

export const languageSet = [
  {
    icon: assets.cLogo,
    name: "C",
  },
  {
    icon: assets.cppLogo,
    name: "C++",
  },
  {
    icon: assets.cssLogo,
    name: "CSS",
  },
  {
    icon: assets.htmlLogo,
    name: "HTML",
  },
  {
    icon: assets.javaLogo,
    name: "Java",
  },
  {
    icon: assets.jsLogo,
    name: "JavaScript",
  },
  {
    icon: assets.pythonLogo,
    name: "Python",
  },
  {
    icon: assets.tsLogo,
    name: "TypeScript",
  },
];

export const toolSet = [
  {
    icon: assets.vscodeLogo,
    name: "Visual Studio Code",
  },
  {
    icon: assets.anacondaLogo,
    name: "Anaconda",
  },
  {
    icon: assets.gitLogo,
    name: "Git",
  },
  {
    icon: assets.githubLogo,
    name: "Github",
  },
  {
    icon: assets.reactLogo,
    name: "React",
  },
  {
    icon: assets.nextjsLogo,
    name: "Next JS",
  },
  {
    icon: assets.tailwindLogo,
    name: "Tailwind CSS",
  },
  {
    icon: assets.nodejsLogo,
    name: "Node JS",
  },
];

export const certificatesData = [
  { id: 1, 
    src: cert1, 
    title: "Certificate 1" 
  },
  { id: 2, 
    src: cert2, 
    title: "Certificate 2" 
  },
];
