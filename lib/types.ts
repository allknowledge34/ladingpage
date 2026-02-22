export interface Link {
  name: string
  url: string
}

export interface DropdownLink {
  dropdown: true
  name: string
  items: Link[]
}

export interface NavigationLink extends Link {
  dropdown?: boolean
  items?: Link[]
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  price: number
  salePrice?: number
  category: string
  level: string
  duration: string
  lessons: number
  instructor: string
  image: string
  status: "published" | "draft"
  featured?: boolean
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  courses?: number
  image?: string
}

export interface Instructor {
  id: string
  name: string
  slug: string
  bio: string
  avatar: string
  position: string
  courses: number
  students: number
  rating: number
  social?: {
    twitter?: string
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export interface Student {
  id: string
  name: string
  email: string
  avatar?: string
  enrolledCourses: number
  completedCourses: number
  joinedAt: string
  lastActive: string
  status: "active" | "inactive"
}

export interface Testimonial {
  id: string
  name: string
  avatar?: string
  role: string
  company?: string
  content: string
  rating: number
  featured?: boolean
  createdAt: string
}

export interface MediaItem {
  id: string
  name: string
  type: "image" | "video" | "document"
  url: string
  size: number
  dimensions?: {
    width: number
    height: number
  }
  uploadedAt: string
  uploadedBy: string
}

