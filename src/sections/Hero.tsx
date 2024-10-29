"use client";
import ArrowIcon from "../assets/arrow-right.svg";
import CogImage from "../assets/cog.png";
import NoodleImage from "../assets/noodle.png";
import CylinderImage from "../assets/cylinder.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {

  const heroref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);


  return (
    <>
      <section ref={heroref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            {/* Text Column */}
            <div className="md:w-[478px]">
              <div className="tag">Version 2.0 is here</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                Pathway to productivity
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <button className="btn btn-primary">Get for free</button>
                <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <motion.img 
                src={CogImage.src} 
                alt="Cog image" 
                className="md:absolute h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" 
                animate={{
                  translateY:[-30, 30],
                }}
                transition={{
                  repeat:Infinity,
                  repeatType: "mirror",
                  duration: "3",
                  ease: "easeInOut",
                }}
              />
              <motion.img 
                src={CylinderImage.src} 
                alt="Cylinder Image" 
                className="hidden md:block -top-8 -left-32 md:absolute" 
                width={220} 
                height={220}
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img 
                src={NoodleImage.src} 
                alt="Noodle Image" 
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]" 
                width={220}
                style={{
                  rotate: 30,
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};