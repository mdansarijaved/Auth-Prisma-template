"use client";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";
import { FeaturesSectionDemo } from "./feature";
function HomeComponent() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-20"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Auth.js and Prisma starter template build <br /> with{" "}
            <Cover>Next.js</Cover>
          </h1>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Supercharge your project with a powerful, feature-rich
            authentication setup
          </p>
        </div>
        <FeaturesSectionDemo />
      </motion.div>
    </AuroraBackground>
  );
}

export default HomeComponent;
