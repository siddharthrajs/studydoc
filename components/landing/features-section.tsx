"use client"

import { motion } from "motion/react"
import { FeatureCard } from "./feature-card"
import { 
  BookOpen, 
  Brain, 
  FileText, 
  MessageSquare, 
  Sparkles, 
  Target,
  Zap,
  BarChart3
} from "lucide-react"

const features = [
  {
    title: "AI Document Analysis",
    description: "Upload any document and let our AI extract key concepts, create summaries, and generate study materials automatically.",
    icon: FileText,
  },
  {
    title: "Smart Question Generation",
    description: "Generate unlimited practice questions from your study materials with varying difficulty levels and formats.",
    icon: MessageSquare,
  },
  {
    title: "Personalized Learning Paths",
    description: "AI adapts to your learning style and pace, creating customized study plans that maximize retention.",
    icon: Target,
  },
  {
    title: "Instant Explanations",
    description: "Get detailed explanations for any concept with examples, analogies, and visual aids powered by AI.",
    icon: Brain,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning progress with detailed analytics and insights to identify areas for improvement.",
    icon: BarChart3,
  },
  {
    title: "Flashcard Generation",
    description: "Automatically create smart flashcards with spaced repetition to help you remember information longer.",
    icon: Sparkles,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
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
            <Zap className="w-4 h-4" />
            Powerful Features
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Excel in Your Studies
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides all the tools you need to study smarter, 
            not harder. Transform any content into effective learning materials.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            And many more features to supercharge your learning...
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer group"
            whileHover={{ x: 5 }}
          >
            <BookOpen className="w-5 h-5" />
            Explore All Features
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}