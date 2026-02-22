"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import CategoriesSection from "@/components/categories-section"
import CoursesSection from "@/components/courses-section"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import { siteData } from "@/lib/data"

export default function HomePage() {

  const {
    hero: {enabled: showHero},
    services: {enabled: showServices},
    about: {enabled: showAbout},
    categories: {enabled: showCategories},
    courses: {enabled: showCourses},
    team: {enabled: showTeam},
    testimonials: {enabled: showTestimonials},
  } = siteData

  useEffect(() => {
    console.log("HomePage mounted")
    console.log("Hero enabled:", showHero)
    console.log("Hero config:", siteData.hero)
  }, [showHero])

  return (
    <main>
      <Header />
      { <HeroCarousel /> }
      {showServices && <ServicesSection />}
      {showAbout && <AboutSection />}
      {showCategories && <CategoriesSection />}
      {showCourses && <CoursesSection />}
      {showTeam && <TeamSection />}
      {showTestimonials && <TestimonialsSection />}
      <Footer />
    </main>
  );
}
