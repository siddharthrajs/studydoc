"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Brain3D() {
  const [particles, setParticles] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    setParticles(
      [...Array(12)].map(() => ({
        top: `${20 + Math.random() * 60}%`,
        left: `${20 + Math.random() * 60}%`,
      }))
    );
  }, []);

  return (
    <div className="relative w-72 h-72">
      {/* Main Brain Shape */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Brain Hemispheres */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-40 -translate-x-[60%] -translate-y-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 shadow-2xl"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Brain Folds - Left */}
          <div className="absolute inset-2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-2 border-white/20" />
          <div className="absolute top-4 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-8 left-6 right-6 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-12 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-16 left-6 right-6 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-20 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-40 -translate-x-[40%] -translate-y-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-bl from-pink-400 via-purple-500 to-indigo-600 shadow-2xl"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {/* Brain Folds - Right */}
          <div className="absolute inset-2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-2 border-white/20" />
          <div className="absolute top-4 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-8 left-6 right-6 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-12 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-16 left-6 right-6 h-[2px] bg-white/20 rounded-full" />
          <div className="absolute top-20 left-4 right-4 h-[2px] bg-white/20 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Neural Network Connections */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbiting Elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-full h-full p-1 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1z" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <motion.div className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-3xl" />
    </div>
  );
}
