"use client";

import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Shield,
  FileText,
  Truck,
  Award,
  Clock,
  Globe,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Coffee,
  Briefcase,
  Lightbulb,
  Compass,
  Map,
  Smartphone,
  Headphones,
  Camera,
  Cpu,
  Database,
  Layers,
  PenToolIcon as Tool,
  Settings,
  Sliders,
  Terminal,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

// Comprehensive icon map with all possible icons
const iconMap = {
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  users: Users,
  shield: Shield,
  "file-text": FileText,
  van: Truck, // Using Truck for van
  award: Award,
  clock: Clock,
  globe: Globe,
  "arrow-right": ArrowRight,
  star: Star,
  zap: Zap,
  heart: Heart,
  coffee: Coffee,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  compass: Compass,
  map: Map,
  smartphone: Smartphone,
  headphones: Headphones,
  camera: Camera,
  cpu: Cpu,
  database: Database,
  layers: Layers,
  "pen-tool": Tool,
  settings: Settings,
  sliders: Sliders,
  terminal: Terminal,
  tool: Tool,
};

export default function ServicesSection({ services }) {
  // Ensure services is defined and fallback to an empty object
  const {
    enabled = true,
    backgroundColor = "transparent",
    sectionPadding = "py-16",
    heading = {},
    items = [],
    columns = {},
    layout = "grid",
    animation = {},
  } = services || {};

  const [activeIndex, setActiveIndex] = useState(null);
  const controls = useAnimation();

  // If services section is disabled, don't render anything
  if (!enabled) return null;

  // Animation variants based on the animation type
  const getAnimationVariant = () => {
    switch (animation?.type) {
      case "fade-up":
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animation?.staggered ? animation.delay : 0,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    ...getAnimationVariant(),
    visible: {
      ...getAnimationVariant().visible,
      transition: {
        duration: animation?.duration || 0.5,
        ease: "easeOut",
      },
    },
  };

  // Handle grid layout with proper Tailwind classes
  const getGridClasses = () => {
    return `grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 ${
      columns?.tablet === 2
        ? "md:grid-cols-2"
        : columns?.tablet === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2"
    } ${
      columns?.desktop === 2
        ? "lg:grid-cols-2"
        : columns?.desktop === 3
        ? "lg:grid-cols-3"
        : columns?.desktop === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3"
    }`;
  };

  // Get a fallback icon if the specified one doesn't exist
  const getIcon = (iconName) => {
    return iconMap[iconName] || Award; // Fallback to Award if icon not found
  };

  return (
    <section
      className={`${sectionPadding} relative overflow-hidden`}
      style={{
        background: backgroundColor,
        position: "relative",
      }}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-teal-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl"></div>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4 dark:bg-orange-900/30 dark:text-orange-400 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heading?.topText}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative z-10">{heading?.mainText}</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/20 -z-10 skew-x-3"></span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {heading?.description}
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        {layout === "grid" && (
          <motion.div
            className={getGridClasses()}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {items?.map((service, index) => {
              const IconComponent = getIcon(service.icon);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="h-full"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="p-8 relative overflow-hidden h-full flex flex-col">
                        <div
                          className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 transition-colors duration-300 opacity-50 group-hover:opacity-80"
                          style={{
                            background: `radial-gradient(circle, ${service.iconColor}30 0%, ${service.iconColor}05 70%)`,
                          }}
                        ></div>

                        <div
                          className="absolute top-0 left-0 w-20 h-20 transform -translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                          style={{
                            backgroundColor: service.iconColor,
                          }}
                        ></div>
                        <div
                          className="text-center relative z-10 flex-grow"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <IconComponent
                            size={48}
                            className="text-gray-800 dark:text-gray-200 mb-4 mx-auto"
                          />
                          <h4 className="font-semibold text-lg">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </div>

                        <Button
                          as={Link}
                          href={service.link}
                          variant="link"
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 group-hover:translate-y-1 group-hover:opacity-100 opacity-0 transition-all duration-300"
                        >
                          <ArrowRight size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
