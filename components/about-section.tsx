"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Aboutimg from "../public/dd-school-7.png"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-lg z-0"></div>

            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={Aboutimg.src}
                alt="Students in classroom"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 md:bottom-4 md:right-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Accredited</p>
                  <p className="font-bold">Excellence in Education</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-orange-600 dark:text-orange-400 font-semibold mb-2">
                ABOUT OUR SCHOOL
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative">
                Empowering Young Minds Through Quality Education
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-500"></span>
              </h3>
            </motion.div>

            <motion.p variants={fadeIn} className="text-gray-600 dark:text-gray-300 text-lg">
              We are committed to creating a vibrant learning atmosphere where students are encouraged to think
              critically, collaborate effectively, and grow holistically. Our classrooms foster curiosity,
              creativity, and a lifelong love for learning.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                "Engaging Learning Environment",
                "Dedicated & Passionate Teachers",
                "Activity-Based Curriculum",
                "Safe & Supportive Campus",
                "Modern Classrooms & Labs",
                "Focus on Character Building",
              ].map((item, index) => (
                <motion.div key={index} variants={fadeIn} className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="mt-8">
              <Button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-6 rounded-md text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
                Discover Our Learning Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
