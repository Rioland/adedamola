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
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Firebase and Aws</li>
        <li>Mysql</li>
        <li>Api Development</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>Reactjs and React Native</li>
        <li>Java/Kotlin</li>
        <li>Java/Kotlin</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li> OND at Complete Computer & Technology Institute </li>
        <li>B.Sc at Adekule Adjasin University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>OND In Software Engineering</li>
        <li>B.SC in Computer Science</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Welcome to my portfolio! I’m a passionate software developer with
            over 10 years of experience building innovative solutions for web
            and mobile platforms. I specialize in creating efficient, scalable,
            and user-friendly applications that solve real-world problems.
            </p>
            <br />
            <br />
            <dl>
              <dt>What I Do:</dt>
              <dd>
                <li>
                  <b>Front-End Development:</b> Crafting intuitive user
                  interfaces with frameworks like Flutter, React, and Angular.
                </li>
              </dd>
              <br />
              <dd>
                <li>
                  <b>Back-End Development:</b> Building robust APIs and services
                  with Node.js, Django, and AWS.
                </li>
              </dd>
              <br />
              <dd>
                <li>
                  <b>Mobile App Development:</b> Developing cross-platform
                  mobile apps using Flutter, with integration into Firebase and
                  AWS Amplify for seamless user experiences.
                </li>
              </dd>
              <br />
              <dd>
                <li>
                <b>Cloud & DevOps:</b> Deploying and managing applications on cloud platforms like AWS and Firebase with CI/CD pipelines for smooth and continuous delivery.
                </li>
              </dd>
            </dl>
          


          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
