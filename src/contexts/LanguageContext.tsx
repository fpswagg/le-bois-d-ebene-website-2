"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, data?: any) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  
  // Get browser language
  const getBrowserLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language || (navigator as any).userLanguage
      const langCode = browserLang.split('-')[0].toLowerCase()
      return langCode === 'fr' || langCode === 'en' ? langCode : 'fr'
    }
    return 'fr'
  }
  
  const [language, setLanguage] = useState<Language>(getBrowserLanguage())

  useEffect(() => {
    const urlLang = searchParams.get('lang')
    if (urlLang === 'fr' || urlLang === 'en') {
      setLanguage(urlLang)
      localStorage.setItem('language', urlLang)
    } else {
      const stored = localStorage.getItem('language')
      if (stored === 'fr' || stored === 'en') {
        setLanguage(stored)
      } else {
        // Use browser language if no stored preference
        const browserLang = getBrowserLanguage()
        setLanguage(browserLang)
        localStorage.setItem('language', browserLang)
      }
    }
  }, [searchParams])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', lang)
    router.push(`${pathname}?${params.toString()}`)
  }

  const t = (key: string, data?: any): string => {
    if (data && data[language]) {
      return data[language]
    }
    return key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

