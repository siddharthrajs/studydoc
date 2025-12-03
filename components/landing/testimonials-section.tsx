"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    avatar: "SC",
    content: "StudyDoc transformed how I prepare for exams. The AI-generated questions are incredibly accurate and helped me identify gaps in my knowledge I didn't know existed.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Law Student",
    avatar: "JR",
    content: "I was skeptical at first, but the document analysis feature is mind-blowing. It summarizes complex legal texts in minutes and creates perfect study guides.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Engineering Student",
    avatar: "EW",
    content: "The personalized learning paths helped me master calculus in half the time. The AI adapts to my pace and explains concepts in ways I actually understand.",
    rating: 5,
  },
  {
    name: "Michael Park",
    role: "Business Student",
    avatar: "MP",
    content: "Best investment in my education. The flashcard generation saves me hours every week, and the spaced repetition actually works!",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "PhD Researcher",
    avatar: "LT",
    content: "As a researcher, I deal with hundreds of papers. StudyDoc helps me extract key findings and create comprehensive literature reviews effortlessly.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "High School Student",
    avatar: "DK",
    content: "My grades improved from B's to A's after using StudyDoc. The practice questions are exactly like what appears on my tests!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <Star className="w-4 h-4 fill-current" />
            Student Success Stories
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}50,000+ Students
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning experience 
            with StudyDoc's AI-powered platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by students from top universities</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Harvard", "Stanford", "MIT", "Oxford", "Cambridge"].map((uni, index) => (
              <motion.div
                key={index}
                className="text-lg font-semibold text-muted-foreground"
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {uni}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}