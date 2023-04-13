"use client";

import React from "react";
import Hero from "@/components/Hero";
import Images from "@/components/Hero-Images";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      <Hero />
      <Images />
    </motion.div>
  );
}

export default Home;
