import React from "react";
import PageTitle from "./pagetitle";
import { motion } from "framer-motion";
import Posts from "./posts";

function Noticias() {
  return (
    <div>
      <PageTitle />

      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}

export default Noticias;
