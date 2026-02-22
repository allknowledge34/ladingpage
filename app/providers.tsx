"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { createContext, useContext, useState, type ReactNode } from "react"
import { siteData as initialSiteData } from "@/lib/data"

interface SiteDataContextProps {
    siteData: typeof initialSiteData
    updateSiteData: (newData: Partial<typeof initialSiteData>) => void
}

const SiteDataContext = createContext<SiteDataContextProps | undefined>(undefined)

export const useSiteData = () => {
    const context = useContext(SiteDataContext)
    if (!context) {
        throw new Error("useSiteData must be used within a SiteDataProvider")
    }
    return context
}

export function Providers({ children }: {children: ReactNode }) {
    const [siteData, setSiteData] = useState(initialSiteData)

    const updateSiteData = (newData: Partial<typeof initialSiteData>) => {
        setSiteData((prevData) => ({ ...prevData, ...newData }))
    }

    return (
        <SiteDataContext.Provider value={{ siteData, updateSiteData}}>
            <ThemeProvider attribute="class" defaultTheme="light">
                <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
        </SiteDataContext.Provider>
    )
}