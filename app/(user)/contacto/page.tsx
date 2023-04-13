"use client";

import React from "react";
import Form from "./components/Form";
import Header from "@/components/Header";
import PageTitle from "./components/pagetitle";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      <PageTitle />
      <Form />
    </motion.div>
  );
}

export default Contacto;
