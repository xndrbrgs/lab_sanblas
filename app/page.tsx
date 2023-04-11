import React from "react";
import Hero from "@/components/Hero";
import Images from "@/components/Hero-Images";

function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Hero />
      <Images />
    </div>
  );
}

export default Home;
