"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Book,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/data";
import type { DropdownLink } from "@/lib/types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Get header configuration from data.ts
  const { header } = siteData;
  const { topBar, mainNav, mobileMenu } = header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isDropdown = (link: any): link is DropdownLink => {
    return "dropdown" in link && link.dropdown === true;
  };

  
  console.log('siteData123', siteData.site.logo.src);

  // Icon mapping function
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "phone":
        return <Phone className="h-3.5 w-3.5 mr-1.5" />;
      case "mail":
        return <Mail className="h-3.5 w-3.5 mr-1.5" />;
      case "map-pin":
        return <MapPin className="h-3.5 w-3.5 mr-1.5" />;
      case "clock":
        return <Clock className="h-3.5 w-3.5 mr-1.5" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Top Bar - conditionally rendered based on config */}
      {topBar.enabled && (
        <div
          className={`py-2 hidden md:block bg-red-500 `}
          style={{
            backgroundColor: topBar.backgroundColor,
            color: topBar.textColor,
          }}
        >
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm">
                {topBar.contactInfo.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center">
                    {getIcon(item.icon)}
                    {item.url ? (
                      <a href={item.url}>{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm">
                {topBar.contactInfo.slice(2, 4).map((item, index) => (
                  <div key={index} className="flex items-center">
                    {getIcon(item.icon)}
                    {item.url ? (
                      <a href={item.url}>{item.text}</a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? `backdrop-blur-sm shadow-md py-2 ${mainNav.scrolledBackgroundColor}`
            : `py-4 ${mainNav.backgroundColor}`
        )}
        style={{
          backgroundColor: isScrolled
            ? mainNav.scrolledBackgroundColor
            : mainNav.backgroundColor,
          color: mainNav.textColor,
          boxShadow: isScrolled ? mainNav.scrolledShadow : "none",
        }}
      >
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            style={{ color: siteData.theme.colors.primary.DEFAULT }}
          >
            {/* Logo */}
            <img
              src={siteData.site.logo.src}
              
            
              alt="School Logo"
              className="w-8 h-8 object-contain rounded"
            />
            <span className="text-2xl font-bold">{siteData.site.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {mainNav.links.map((link, index) =>
              isDropdown(link) ? (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center space-x-1 font-medium transition-colors"
                    style={{ color: mainNav.textColor }}
                  >
                    <span>{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <div className="py-1 bg-white dark:bg-gray-800 rounded-md shadow-xl border border-gray-100 dark:border-gray-700">
                      {link.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.url}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-teal-50 dark:hover:bg-teal-900/20",
                            pathname === item.url
                              ? "font-semibold bg-teal-50 dark:bg-teal-900/20"
                              : ""
                          )}
                          style={{
                            color:
                              pathname === item.url
                                ? mainNav.activeTextColor
                                : mainNav.textColor,
                            ":hover": { color: mainNav.hoverTextColor },
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.url}
                  className={cn(
                    "transition-colors font-medium",
                    pathname === link.url ? "font-semibold" : ""
                  )}
                  style={{
                    color:
                      pathname === link.url
                        ? mainNav.activeTextColor
                        : mainNav.textColor,
                  }}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="flex items-center space-x-2">
              <Link href={mainNav.cta.url}>
                <Button
                  className="hover:scale-105 transition-all duration-300 flex items-center space-x-1 shadow-md"
                  style={{
                    backgroundColor: mainNav.cta.backgroundColor,
                    color: mainNav.cta.textColor,
                  }}
                >
                  <span>{mainNav.cta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden border-t"
              style={{
                backgroundColor: mobileMenu.backgroundColor,
                color: mobileMenu.textColor,
                borderColor: mobileMenu.borderColor,
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container py-4 space-y-4">
                {mainNav.links.map((link, index) => (
                  <div key={index}>
                    {isDropdown(link) ? (
                      <div className="space-y-2">
                        <div className="font-medium">{link.name}</div>
                        <div
                          className="pl-4 space-y-2 border-l-2"
                          style={{
                            borderColor: siteData.theme.colors.primary.DEFAULT,
                          }}
                        >
                          {link.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.url}
                              className={cn(
                                "block transition-colors",
                                pathname === item.url ? "font-medium" : ""
                              )}
                              style={{
                                color:
                                  pathname === item.url
                                    ? mobileMenu.activeTextColor
                                    : mobileMenu.textColor,
                              }}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.url}
                        className={cn(
                          "block transition-colors",
                          pathname === link.url ? "font-medium" : ""
                        )}
                        style={{
                          color:
                            pathname === link.url
                              ? mobileMenu.activeTextColor
                              : mobileMenu.textColor,
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link href={mainNav.cta.url} onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full flex items-center justify-center space-x-1 shadow-md"
                    style={{
                      backgroundColor: mainNav.cta.backgroundColor,
                      color: mainNav.cta.textColor,
                    }}
                  >
                    <span>{mainNav.cta.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
