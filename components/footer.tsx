import Link from "next/link"
import Image from "next/image"
import { Book, MapPin, Phone, Mail, Send, Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteData } from "@/lib/data"

// Icon mapping for social media
const iconMap = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

export default function Footer() {
  // Get footer configuration from data.ts
  const { footer } = siteData
  const { backgroundColor, textColor, sectionPadding, logo, columns, copyright, footerMenu } = footer

  return (
    <footer className={`${backgroundColor} ${textColor} ${sectionPadding} relative overflow-hidden bg-[#1E3A5F] pt-10`}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ">
        <Image src="/images/pattern.png" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{columns.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <p>{columns.contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <p>{columns.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <p>{columns.contact.email}</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              {columns.contact.social.map((item, index) => {
                const SocialIcon = iconMap[item.icon as keyof typeof iconMap]
                return SocialIcon ? (
                  <a
                    key={index}
                    href={item.url}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                  >
                    <SocialIcon className="w-5 h-5" />
                  </a>
                ) : null
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{columns.quickLinks.title}</h3>
            <ul className="space-y-3">
              {columns.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-orange-400 transition-colors duration-300 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{columns.gallery.title}</h3>
            <div className="grid grid-cols-3 gap-2">
              {columns.gallery.images.map((image, index) => (
                <div key={index} className="relative h-20 rounded-md overflow-hidden group">
                  <Image src={image || "/placeholder.svg"} alt="Gallery image" fill className="object-cover" />
                  <div className="absolute inset-0 bg-orange/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{columns.newsletter.title}</h3>
            <p className="mb-4">{columns.newsletter.text}</p>
            <div className="flex">
              <Input
                type="email"
                placeholder={columns.newsletter.placeholderText}
                className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-orange-400"
              />
              <Button className="rounded-l-none bg-orange-400 hover:bg-orange-400">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {logo.type === "text" ? (
              <>
                <Book className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-xl font-bold">{logo.text}</span>
              </>
            ) : (
              <Image
                src={logo.image || "/placeholder.svg"}
                alt={siteData.site.name}
                width={logo.width}
                height={logo.height}
              />
            )}
          </div>

          <div className="text-center md:text-left text-white/70 text-sm">
            &copy; {new Date().getFullYear()} {copyright.text} Designed by{" "}
            <a href={copyright.designer.url} className="text-orange-400 hover:underline">
              {copyright.designer.name}
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerMenu.map((item, index) => (
              <Link key={index} href={item.url} className="text-white/70 hover:text-orange-400 text-sm">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

