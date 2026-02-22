"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/data"

export default function CoursesSection() {
  const { courses } = siteData
  const [visibleCourses, setVisibleCourses] = useState(courses.initialCount || 6)

  if (!courses.enabled) return null

  // Determine grid columns based on configuration
  const getGridCols = () => {
    return {
      mobile: `grid-cols-1`,
      tablet: `md:grid-cols-${courses.columns.tablet || 2}`,
      desktop: `lg:grid-cols-${courses.columns.desktop || 3}`,
    }
  }

  const gridCols = getGridCols()

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: courses.animation.delay || 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: courses.animation.duration || 0.5 },
    },
  }

  // Handle load more button click
  const handleLoadMore = () => {
    setVisibleCourses(courses.items.length)
  }

  // Format price display
  const formatPrice = (price: number) => {
    if (price === 0) {
      return "Free"
    }
    return `$${price.toFixed(2)}`
  }

  return (
    <section className={`${courses.backgroundColor} ${courses.sectionPadding}`}>
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {courses.heading.topText && (
            <h2 className="text-teal-600 dark:text-teal-400 font-semibold mb-2">{courses.heading.topText}</h2>
          )}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            {courses.heading.mainText}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500"></span>
          </h3>
          {courses.heading.description && (
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
              {courses.heading.description}
            </p>
          )}
        </motion.div>

        {/* Courses grid */}
        <motion.div
          className={`grid ${gridCols.mobile} ${gridCols.tablet} ${gridCols.desktop} gap-8`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.items.slice(0, visibleCourses).map((course) => (
            <motion.div key={course.id} variants={itemVariants} className="group">
              <Link href={course.link} className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg?height=192&width=384"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold rounded-full">
                        {formatPrice(course.price)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.students} students</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2 overflow-hidden">
                          {course.instructor && (
                            <span className="text-xs font-medium">
                              {course.instructor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Load more button */}
        {courses.showLoadMore && courses.items.length > visibleCourses && (
          <div className="text-center mt-12">
            <Button onClick={handleLoadMore} className="bg-teal-600 hover:bg-teal-700 text-white">
              Load More Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

