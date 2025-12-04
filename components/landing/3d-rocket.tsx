"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Rocket3D() {
  const [smokeParticles, setSmokeParticles] = useState<
    { x: number; y: number }[]
  >([]);
  const [stars, setStars] = useState<
    { top: string; left: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setSmokeParticles(
      [...Array(8)].map(() => ({
        x: (Math.random() - 0.5) * 60,
        y: 80 + Math.random() * 40,
      }))
    );

    setStars(
      [...Array(6)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 1 + Math.random(),
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="relative w-48 h-64">
      {/* Rocket Body */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Main Body */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-t-full rounded-b-lg shadow-2xl">
          {/* Window */}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 border-4 border-gray-300 shadow-inner"
            animate={{
              boxShadow: [
                "inset 0 0 20px rgba(0,255,255,0.3)",
                "inset 0 0 30px rgba(0,255,255,0.6)",
                "inset 0 0 20px rgba(0,255,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Window Reflection */}
            <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-white/50" />
          </motion.div>

          {/* Body Stripes */}
          <div className="absolute bottom-4 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-red-600 to-red-500" />
          <div className="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-400" />
        </div>

        {/* Nose Cone */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[32px] border-l-transparent border-r-transparent border-b-red-500">
          <div className="absolute top-[8px] left-[-20px] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-600" />
        </div>

        {/* Left Fin */}
        <div className="absolute bottom-0 left-[calc(50%-40px)] w-8 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-bl-full transform -skew-x-12 origin-top-right" />

        {/* Right Fin */}
        <div className="absolute bottom-0 right-[calc(50%-40px)] w-8 h-16 bg-gradient-to-l from-red-600 to-red-500 rounded-br-full transform skew-x-12 origin-top-left" />

        {/* Engine */}
        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-b-lg" />
      </motion.div>

      {/* Flame */}
      <motion.div
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scaleY: [1, 1.2, 0.9, 1.1, 1],
            scaleX: [1, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer Flame */}
          <div className="w-16 h-24 bg-gradient-to-t from-transparent via-orange-500 to-yellow-400 rounded-b-full opacity-80" />
          {/* Inner Flame */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-16 bg-gradient-to-t from-transparent via-yellow-300 to-white rounded-b-full" />
          {/* Core */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-transparent via-white to-cyan-200 rounded-b-full" />
        </motion.div>
      </motion.div>

      {/* Smoke Particles */}
      {smokeParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-60px] left-1/2 w-4 h-4 rounded-full bg-gray-400/30"
          initial={{
            x: 0,
            y: 0,
            scale: 0.5,
            opacity: 0.8,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: 2,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
