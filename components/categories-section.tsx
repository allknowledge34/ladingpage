"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { siteData } from "@/lib/data"

export default function CategoriesSection() {
  const { categories } = siteData

  if (!categories.enabled) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: categories.animation.delay || 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: categories.animation.duration || 0.5 },
    },
  }

  const featuredCategory =
    categories.layout === "featured" ? categories.items.find((cat) => cat.featured) : null

  const regularCategories = featuredCategory
    ? categories.items.filter((cat) => cat.id !== featuredCategory.id)
    : categories.items

  return (
    <section className={`${categories.backgroundColor} ${categories.sectionPadding}`}>
      <div className="container mx-auto px-4 pt-10 pb-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.heading.topText && (
            <h2 className="text-orange-600 dark:text-orange-400 font-semibold mb-2 uppercase tracking-wide">
              {categories.heading.topText}
            </h2>
          )}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            {categories.heading.mainText}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500 rounded-full"></span>
          </h3>
          {categories.heading.description && (
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
              {categories.heading.description}
            </p>
          )}
        </motion.div>

        {/* Featured layout */}
        {categories.layout === "featured" && featuredCategory && (
          <div className="mb-16">
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center bg-orange-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-96">
                <Image
                  src={featuredCategory.image || "/placeholder.svg?height=384&width=576"}
                  alt={featuredCategory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-3">
                    {featuredCategory.count}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {featuredCategory.title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredCategory.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {featuredCategory.description}
                </p>
                <Link
                  href={featuredCategory.link}
                  className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:underline"
                >
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}

        {/* Regular categories grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regularCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={category.link} className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg?height=192&width=384"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        {category.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 leading-relaxed">
                      {category.description}
                    </p>
                    {category.buttonText && (
                      <div className="mt-4 inline-flex items-center text-orange-600 dark:text-orange-400 font-medium">
                        {category.buttonText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}