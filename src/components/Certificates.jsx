"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import Carousel from "./carousel";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "Programming Fundamentals",
      issuer: "Duke University via Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/CHZL87XREARY",
      image: "/certificates/fundamentals.jpg",
    },
    {
      title: "Python Basics",
      issuer: "University of Michigan via Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/WMEEE2AF23VK",
      image: "/certificates/pythonBasics.jpg",
    },
    {
      title: "Relational Database and SQL",
      issuer: "Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/CJ3ANLRN6AT7",
      image: "/certificates/sql.jpg",
    },
    {
      title: "Python Programming",
      issuer: "Penn University via Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/UYZXQ89VPPRG",
      image: "/certificates/python_programming.jpg",
    },
    {
      title: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      verifyUrl: "https://www.credly.com/badges/64694abd-8583-42c6-9691-79a36c336734/public_url",
      image: "/certificates/AI_fundamentals.jpg",
    },
    {
      title: "Python Programming",
      issuer: "Reliance Foundation || Skill Academy",
      verifyUrl: "https://www.credly.com/badges/64694abd-8583-42c6-9691-79a36c336734/public_url",
      image: "/certificates/python.jpg",
    },
  ];

  const slideData = certificates.map((cert) => ({
    title: cert.title,
    issuer: cert.issuer,
    button: (
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded transition-all shadow hover:shadow-cyan-400/20"
      >
        <ExternalLink size={14} className="mr-1" />
        Verify
      </a>
    ),
    src: cert.image,
  }));

  return (
    <section id="certificates" className="py-6 text-white">
      <motion.div
        className="container mx-auto px-4 max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Verified credentials from reputed institutions
          </p>
        </div>

        <motion.div
          className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-2 shadow-lg"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Carousel slides={slideData} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certificates;
