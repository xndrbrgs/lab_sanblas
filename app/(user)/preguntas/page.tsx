"use client";

import React from "react";
import PageTitle from "./pagetitle";
import FAQ from "./faq";
import { motion } from "framer-motion";

function Preguntas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      <PageTitle />
      <FAQ />
    </motion.div>
  );
}

export default Preguntas;
