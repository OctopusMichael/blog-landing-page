import React from "react";
//import {motion, useScroll, useTransform} from 'framer-motion'

const Hero = () => {
  /*   const titleVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 4, ease: "easeOut" } },
  };
  const SubtitleVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } },
  }; */
  return (
    <>
      <section className="container-fluid section-hero">
        <h1>A modern publishing platform</h1>
        <h5>Grow your audience and build your online brand</h5>
        <div>
          <button>Start for free</button>
          <button>Learn more</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
