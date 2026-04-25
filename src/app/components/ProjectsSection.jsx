"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Spotify Song Classifier",
    description: "An AI/ML application that predicts the mood of a Spotify track using a trained Random Forest model.",
    image: "/images/spotify-classifier.png",
    tag: ["All", "AI/ML"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Uber Friends",
    description: "A web application that allows users to book rides either solo or with friends.",
    image: "/images/uber-friends.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
    {
    id: 3,
    title: "NASA APOD Daily",
    description: "A web application that fetches and displays NASA's Astronomy Picture of the Day.",
    image: "/images/nasa-apod.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
    {
    id: 4,
    title: "To-Do List",
    description: "A to-do list that keeps track of general tasks",
    image: "/images/to-do.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
