"use client";

import React from "react";
import { motion } from "framer-motion";

function Servicios() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      Servicios
    </motion.div>
  );
}

export default Servicios;
