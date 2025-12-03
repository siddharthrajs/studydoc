"use client"

import { motion } from "motion/react"
import { Book3D } from "./3d-book"
import { Rocket3D } from "./3d-rocket"
import { FloatingCards } from "./floating-cards"
import { Upload, Wand2, GraduationCap } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Upload Your Materials",
    description: "Simply upload your textbooks, notes, PDFs, or any study materials. Our AI can process documents in multiple formats and languages.",
    icon: Upload,
    illustration: "book",
  },
  {
    number: "02",
    title: "AI Processes & Analyzes",
    description: "Our advanced AI analyzes your content, identifies key concepts, and creates structured learning materials tailored to your needs.",
    icon: Wand2,
    illustration: "cards",
  },
  {
    number: "03",
    title: "Learn & Excel",
    description: "Study with AI-generated flashcards, practice questions, and summaries. Track your progress and watch your knowledge grow.",
    icon: GraduationCap,
    illustration: "rocket",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Wand2 className="w-4 h-4" />
            Simple Process
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process makes it easy to transform 
            any study material into an effective learning experience.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold text-xl mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              </div>

              {/* Illustration */}
              <div className={`flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {step.illustration === "book" && <Book3D />}
                  {step.illustration === "cards" && <FloatingCards />}
                  {step.illustration === "rocket" && <Rocket3D />}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="absolute left-1/2 top-[300px] bottom-[200px] w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
      </div>
    </section>
  )
}