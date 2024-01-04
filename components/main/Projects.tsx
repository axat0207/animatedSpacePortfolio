"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
        link="https://nikestore-akshat.netlify.app/"
          src="/nike.png"
          title="Nike Web Store"
          description="Crafted a SaaS AI app using Next.js, Redux, and diverse AI technologies like ChatGPT 3.5, DALL·E 2, employing Clerk.js for robust user authentication and Tailwind CSS for a user-friendly interface"
        />
        <ProjectCard
        link="https://synthi-muse-ai-saas.vercel.app/"
          src="/aisaas.png"
          title="SyntiMuse AI SAAS"
          description=
          "Engineered a responsive Nike e-commerce platform using React, Redux, and Tailwind CSS, prioritizing user experience with interactive design elements and seamless shopping functionalities managed through Redux."
        />
        <ProjectCard
        link="/"
          src="/SpaceWebsite.png"
          title="Space Animated Portfolio"
          description=
          "Engineered a responsive Nike e-commerce platform using React, Redux, and Tailwind CSS, prioritizing user experience with interactive design elements and seamless shopping functionalities managed through Redux."
        />
      </div>
    </div>
  );
};

export default Projects;
