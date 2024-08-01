import Pranav from "../assets/Pranav.jpeg";
import Ganesh from "../assets/Ganesh.jpeg";
import Kashish from "../assets/Kashish.jpeg";
import Sahil from "../assets/Sahil.jpeg";
import Amruta from "../assets/Amruta.jpeg";


import i2i from "../assets/i2i.jpeg";
import best from "../assets/best.jpeg";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const LINKS = [
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Team", targetId: "team" },
  { text: "Awards", targetId: "expertise" },
  { text: "Gallery", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const TEAMMATES = [
  {
    image: Pranav,
    title: "Pranav Patil",
    description: "Team Leader",
  },
  {
    image: Ganesh,
    title: "Ganesh Lakhe",
    description: "Project Manager",
  },
  {
    image: Kashish,
    title: "Kashish Sharma",
    description: "Finance",
  },
  {
    image: Sahil,
    title: "Sahil Borse",
    description: "Research",
  },
  {
    image: Amruta,
    title: "Amruta Pawar",
    description: "Marketing",
  },
  
];

export const ABOUT = {
  header: "We love recycling!",
  content:
    "We are pioneering E-waste recycling startup that specializes in the responsible collection and recycling of electronic waste. In our state of-the-art facility, we focus on extracting valuable materials such as gold, silver, and rate metals from discarded electronics, contributing significantly to environmental conservation and resource sustainability.",
};

export const MISSION =
  "To Implement eco-friendly practices in your recycling process, minimizing the environmental impact. This could include using renewable energy sources and water recycling systems. And extracting precious metals like Gold, Silver, Copper, Platium with purity from the E-waste (PCBs).";

export const CUSINES = [
  {
    number: "01.",
    image: i2i,
    title: "Ignited innovators of India(I2I)",
    description:
      "Secured first prize in Environment Sector and recieved funding from EATON.",
  },
  {
    number: "02.",
    image: best,
    title: "Best Ambassador",
    description:
      "Pranav recieved Best Ambassador's Trophy for year 2024 in I2I, event organised by COEP's Bhau Intitute.",
  },
  
];

export const REVIEW = {
  name: "GC Recycling",
  profession: "Recycle today, sustain Tomorrow.",
  content:
    ' "As a Team, it was an incredible journey , we have worked together for hours and created a bond which resulted in GC Recycling startup and it delivered beyond my expectations." - Pranav Patil.',
};

export const CONTACT = [
  { key: "address", value: "Address: Manchar, Pune, 410503" },
  { key: "phone", value: "Phone: (+91) 958 8480 665" },
  { key: "email", value: "Email: gcrecycling57@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/gcrecycling/?igsh=MXVnd2Q5b3Rva3BjMQ%3D%3D",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/company/enlectic-research-centre/",
    icon: <FaLinkedin fontSize={30} className="hover:opacity-80" />,
  },
  
  {
    href: "https://www.facebook.com/profile.php?id=100091279656898&mibextid=ZbWKwL",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },
];
