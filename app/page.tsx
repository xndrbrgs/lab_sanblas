"use client";

import React from "react";
import Hero from "@/components/Hero";
import Images from "@/components/Hero-Images";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Hero />
      <Images />
    </motion.div>
  );
}

export default Home;
