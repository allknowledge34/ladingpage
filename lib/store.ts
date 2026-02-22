import { create } from "zustand"
import { persist } from "zustand/middleware"
import { siteData } from "@/lib/data"

// Extract data from the new structure with fallbacks
const coursesData = siteData.courses?.items || []
const categoriesData = siteData.categories?.items || []
const testimonialsData = siteData.testimonials?.items || []
const instructorsData = siteData.team?.members || []

// Define the store type
type Store = {
  courses: any[]
  categories: any[]
  testimonials: any[]
  instructors: any[]
  students: any[]
  addCourse: (course: any) => void
  updateCourse: (id: string, course: any) => void
  deleteCourse: (id: string) => void
  addCategory: (category: any) => void
  updateCategory: (id: string, category: any) => void
  deleteCategory: (id: string) => void
  addTestimonial: (testimonial: any) => void
  updateTestimonial: (id: string, testimonial: any) => void
  deleteTestimonial: (id: string) => void
  addInstructor: (instructor: any) => void
  updateInstructor: (id: string, instructor: any) => void
  deleteInstructor: (id: string) => void
  addStudent: (student: any) => void
  updateStudent: (id: string, student: any) => void
  deleteStudent: (id: string) => void
}

// Create the store with persistence
export const useStore = create<Store>()(
  persist(
    (set) => ({
      courses: coursesData,
      categories: categoriesData,
      testimonials: testimonialsData,
      instructors: instructorsData,
      students: [
        {
          id: "student-1",
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+1 (555) 123-4567",
          enrolledCourses: ["course-1", "course-3"],
          status: "active",
          joinDate: "2023-01-15",
        },
        {
          id: "student-2",
          name: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "+1 (555) 987-6543",
          enrolledCourses: ["course-2"],
          status: "active",
          joinDate: "2023-02-20",
        },
        {
          id: "student-3",
          name: "Michael Johnson",
          email: "michael.johnson@example.com",
          phone: "+1 (555) 456-7890",
          enrolledCourses: ["course-4", "course-5"],
          status: "active",
          joinDate: "2023-03-10",
        },
        {
          id: "student-4",
          name: "Emily Williams",
          email: "emily.williams@example.com",
          phone: "+1 (555) 234-5678",
          enrolledCourses: ["course-1"],
          status: "inactive",
          joinDate: "2023-01-05",
        },
        {
          id: "student-5",
          name: "David Brown",
          email: "david.brown@example.com",
          phone: "+1 (555) 876-5432",
          enrolledCourses: ["course-3", "course-6"],
          status: "active",
          joinDate: "2023-04-15",
        },
      ],
      addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
      updateCourse: (id, course) =>
        set((state) => ({
          courses: state.courses.map((c) => (c.id === id ? { ...c, ...course } : c)),
        })),
      deleteCourse: (id) => set((state) => ({ courses: state.courses.filter((c) => c.id !== id) })),
      addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
      updateCategory: (id, category) =>
        set((state) => ({
          categories: state.categories.map((c) => (c.id === id ? { ...c, ...category } : c)),
        })),
      deleteCategory: (id) => set((state) => ({ categories: state.categories.filter((c) => c.id !== id) })),
      addTestimonial: (testimonial) => set((state) => ({ testimonials: [...state.testimonials, testimonial] })),
      updateTestimonial: (id, testimonial) =>
        set((state) => ({
          testimonials: state.testimonials.map((t) => (t.id === id ? { ...t, ...testimonial } : t)),
        })),
      deleteTestimonial: (id) => set((state) => ({ testimonials: state.testimonials.filter((t) => t.id !== id) })),
      addInstructor: (instructor) => set((state) => ({ instructors: [...state.instructors, instructor] })),
      updateInstructor: (id, instructor) =>
        set((state) => ({
          instructors: state.instructors.map((i) => (i.id === id ? { ...i, ...instructor } : i)),
        })),
      deleteInstructor: (id) => set((state) => ({ instructors: state.instructors.filter((i) => i.id !== id) })),
      addStudent: (student) => set((state) => ({ students: [...state.students, student] })),
      updateStudent: (id, student) =>
        set((state) => ({
          students: state.students.map((s) => (s.id === id ? { ...s, ...student } : s)),
        })),
      deleteStudent: (id) => set((state) => ({ students: state.students.filter((s) => s.id !== id) })),
    }),
    {
      name: "edulearn-storage",
    },
  ),
)

export type Category = {
  id: string
  title: string
  description?: string
  image?: string
  status: "active" | "featured" | "hidden"
  count: string
  featured?: boolean
}

