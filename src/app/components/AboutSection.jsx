"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Somerville School,Noida</li>
        <li>B.E.ECE B.M.S. College Of Engineering, Banglore</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>-</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8 lg:py-16" id="about">
      <div className="flex flex-col items-center px-4 xl:px-16">
        <div className="mt-4 md:mt-0 text-center flex flex-col items-center h-full max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm Ishani, a pre-final year BTech student in Computer Science and Business Systems at B.M.S College of Engineering, Bangalore, with a CGPA of 8.90. I have a strong foundation in full-stack development and AI/ML, with hands-on experience building end-to-end projects using React.js, Node.js, Python, and PostgreSQL. My work spans from deploying machine learning pipelines with Scikit-learn to developing real-time, scalable web applications with features like live tracking and WebSockets. I'm also deeply interested in Generative AI and have working knowledge of LLMs, the Model Context Protocol (MCP), and APIs from OpenAI, Anthropic, and Gemini. Beyond technical skills, I actively contribute to my college community as Design Head of the Astronomical Society and as a member of both the GFG and Mathematics chapters. I'm a competitive programmer with 350+ LeetCode problems solved and a rating of 1539, reflecting my commitment to strong problem-solving fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
