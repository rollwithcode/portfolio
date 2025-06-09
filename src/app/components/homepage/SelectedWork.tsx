"use client"

import BuiltWithLoveText from "../common/BuiltWithLoveText";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";


import MaleehaImage from "@/assets/maleeha.jpg"
import LeoDesign from "@/assets/leo-design.jpg"
import TournamentImage from "@/assets/tournament-mgmt.jpg"
import ReceiptifyImage from "@/assets/receiptify.jpg"

interface Project {
  title: string;
  subtitle: string;
  gradient: string;
  textColor?: string;
  textColorFaded?: string;
  borderColor?: string;
  tags?: string[];
  content?: React.ReactNode;
  image: StaticImageData;
}


const projects: Project[] = [
  {
    title: "Leo Design Solution Website",
    subtitle: "Showcasing Creativity and Design Excellence",
    tags: ["Web Design", "UI/UX", "Responsive Design"],
    gradient: "bg-red",
    image: LeoDesign,
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-indigo-600 text-2xl font-semibold mb-4">
            Leo Design Solution
          </div>
          <div className="text-gray-700 text-sm mb-4">
            We collaborated with Leo Design Solution to develop their online presence, focusing on a clean and modern aesthetic that reflects their creative expertise. The website features a responsive design, intuitive navigation, and showcases their portfolio seamlessly.
          </div>
          <div className="text-gray-700 text-sm mb-4">
            Key Features:
            <ul className="list-disc list-inside">
              <li>Responsive design for optimal viewing on all devices</li>
              <li>Interactive portfolio gallery to highlight projects</li>
              <li>Custom animations and transitions for enhanced user experience</li>
              <li>SEO optimization for increased online visibility</li>
            </ul>
          </div>
          <a
            href="https://www.leodesignsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Visit Live Site
          </a>
        </div>
      </div>
    ),
  },

  {
    title: "Maleeha website",
    subtitle: "Portfolio website for Maleeha",
    tags: ["Web Design", "UI/UX", "Responsive Design"],
    gradient: "bg-red",
    image: MaleehaImage,
    content: (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="text-blue-600 text-2xl font-semibold mb-4">
            ArtSpiree
          </div>
          <div className="text-gray-700 text-sm mb-4">
            We collaborated with ArtSpiree to develop their online presence, focusing on a clean and modern aesthetic that reflects their creative expertise. The website features a responsive design, intuitive navigation, and showcases their portfolio seamlessly.
          </div>
          <div className="text-gray-700 text-sm mb-4">
            Key Features:
            <ul className="list-disc list-inside">
              <li>Responsive design for optimal viewing on all devices</li>
              <li>Interactive gallery to highlight diverse projects</li>
              <li>Custom animations and transitions for enhanced user experience</li>
              <li>SEO optimization for increased online visibility</li>
            </ul>
          </div>
          <a
            href="https://artspiree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Visit Live Site
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Tournament management system",
    subtitle: "A full-stack web app",
    gradient: "bg-red",
    image: TournamentImage,
  },
  {
    title: "Receiptify",
    subtitle: "A receipt maker application",
    gradient: "bg-red",
    image: ReceiptifyImage,
  },
];

export default function SelectedWork() {
  return (
    <div className="bg-black min-h-screen py-20 px-4 pt-40">
      {/* Header */}
      <div className="text-center mb-16">
        <BuiltWithLoveText />

        <div className="mt-12 flex justify-center">
          <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-red"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -10, // float up on hover
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.25)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden bg-black cursor-pointer rounded-44px p-3"
          >
            <div className="border border-lightGray rounded-44px p-3">
              <div className="flex flex-col h-full">
                <Image
                  src={proj.image.src}
                  alt="artspire-image"
                  height={400}
                  width={500}
                  className="rounded-[30px] h-auto w-auto"
                />
              </div>
            </div>

            <div className="pt-6 px-4">
              <h3 className={`${proj.textColor || "text-white"} text-2xl md:text-3xl font-bold mb-2`}>
                {proj.title}
              </h3>
              <p className={`${proj.textColorFaded || "text-textGray/80"} text-lg`}>
                {proj.subtitle}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}


{/* Content */ }
{/* <div className="flex-1 flex items-center justify-center mb-8">
                {proj.content}
              </div> */}


{/* <div className="flex flex-wrap gap-2 mb-6">
              {proj.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`px-3 py-1 text-xs font-medium ${proj.textColor || "text-black"
                    } border ${proj.borderColor || "border-white/30"} rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div> */}