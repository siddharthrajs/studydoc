"use client"

import { motion } from "motion/react"

export function Book3D() {
  return (
    <div className="relative w-64 h-80 perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d"
        initial={{ rotateY: -30, rotateX: 10 }}
        animate={{ 
          rotateY: [-30, -20, -30],
          rotateX: [10, 5, 10]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Book Cover - Front */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 shadow-2xl"
          style={{ 
            transform: "translateZ(15px)",
            backfaceVisibility: "hidden"
          }}
        >
          {/* Cover Design */}
          <div className="absolute inset-4 border-2 border-white/20 rounded-md flex flex-col items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </motion.div>
            <div className="text-white font-bold text-lg text-center px-4">StudyDoc</div>
            <div className="text-white/60 text-xs mt-2">AI-Powered Learning</div>
          </div>
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Book Spine */}
        <div
          className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-violet-800 to-violet-700 rounded-l-sm"
          style={{ 
            transform: "rotateY(-90deg) translateZ(0px) translateX(-15px)",
            transformOrigin: "left"
          }}
        />

        {/* Book Pages - Side */}
        <div
          className="absolute top-2 right-0 w-4 h-[calc(100%-16px)] bg-gradient-to-r from-gray-100 to-gray-200"
          style={{ 
            transform: "rotateY(90deg) translateZ(112px) translateX(-2px)",
            transformOrigin: "right"
          }}
        >
          {/* Page Lines */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-[5%] border-b border-gray-300/50" />
          ))}
        </div>

        {/* Book Back */}
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-700 to-indigo-800"
          style={{ 
            transform: "translateZ(-15px)",
            backfaceVisibility: "hidden"
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-400 shadow-lg"
          animate={{ 
            y: [-5, 5, -5],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-cyan-400 shadow-lg"
          animate={{ 
            y: [5, -5, 5],
            x: [-3, 3, -3]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-pink-400 shadow-lg"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}