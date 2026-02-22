"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/data"

// Icon mapping for social media
const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
}

export default function TeamSection() {
  const { team } = siteData
  const [visibleMembers, setVisibleMembers] = useState(4)

  if (!team.enabled) return null

  // Determine grid columns based on configuration
  const getGridCols = () => {
    return {
      mobile: `grid-cols-1`,
      tablet: `md:grid-cols-${team.columns.tablet || 2}`,
      desktop: `lg:grid-cols-${team.columns.desktop || 4}`,
    }
  }

  const gridCols = getGridCols()

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: team.animation.delay || 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: team.animation.duration || 0.5 },
    },
  }

  return (
    <section className={`${team.backgroundColor} ${team.sectionPadding}`}>
      <div className="container mx-auto px-4 p-10 ">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {team.heading.topText && (
            <h2 className="text-orange-600 dark:text-orange-400 font-semibold mb-2">{team.heading.topText}</h2>
          )}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            {team.heading.mainText}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></span>
          </h3>
          {team.heading.description && (
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
              {team.heading.description}
            </p>
          )}
        </motion.div>

        {/* Team members grid */}
        <motion.div
          className={`grid ${gridCols.mobile} ${gridCols.tablet} ${gridCols.desktop} gap-8`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.members.slice(0, visibleMembers).map((member) => (
            <motion.div key={member.id} className="group" variants={itemVariants}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg?height=320&width=240"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-3">
                        {member.social &&
                          member.social.map((social, idx) => {
                            const SocialIcon = iconMap[social.icon as keyof typeof iconMap]
                            return SocialIcon ? (
                              <a
                                key={idx}
                                href={social.url}
                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-orange-500 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <SocialIcon className="w-4 h-4 text-white" />
                              </a>
                            ) : null
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-orange-600 dark:text-orange-400 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        {team.showAllButton && team.showAllButton.enabled && team.members.length > visibleMembers && (
          <div className="text-center mt-12">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <Link href={team.showAllButton.url}>
                {team.showAllButton.text} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

