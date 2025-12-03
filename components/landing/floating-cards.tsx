"use client"

import { motion } from "motion/react"
import { BookOpen, Brain, Sparkles, Target, Zap } from "lucide-react"

export function FloatingCards() {
  const cards = [
    { icon: BookOpen, color: "from-blue-500 to-cyan-500", delay: 0 },
    { icon: Brain, color: "from-purple-500 to-pink-500", delay: 0.2 },
    { icon: Sparkles, color: "from-yellow-500 to-orange-500", delay: 0.4 },
    { icon: Target, color: "from-green-500 to-emerald-500", delay: 0.6 },
    { icon: Zap, color: "from-red-500 to-rose-500", delay: 0.8 },
  ]

  return (
    <div className="relative w-80 h-80">
      {/* Central Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Floating Cards */}
      {cards.map((card, index) => {
        const angle = (index * 72 - 90) * (Math.PI / 180)
        const radius = 120
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            initial={{ 
              x: x - 28,
              y: y - 28,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: x - 28,
              y: y - 28,
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              delay: card.delay,
              duration: 0.5,
              ease: "backOut"
            }}
          >
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} shadow-lg flex items-center justify-center cursor-pointer`}
              animate={{ 
                y: [0, -8, 0],
                rotateZ: [-5, 5, -5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: card.delay,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2,
                rotateZ: 0,
                transition: { duration: 0.2 }
              }}
            >
              <card.icon className="w-7 h-7 text-white" />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}>
        <motion.circle
          cx="160"
          cy="160"
          r="100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particle Effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-violet-400"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}