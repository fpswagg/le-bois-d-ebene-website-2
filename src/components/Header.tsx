"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('nav.home', translations.nav.home) },
    { href: '/about', label: t('nav.about', translations.nav.about) },
    { href: '/menu', label: t('nav.menu', translations.nav.menu) },
    { href: '/events', label: t('nav.events', translations.nav.events) },
    { href: '/gallery', label: t('nav.gallery', translations.nav.gallery) },
    { href: '/contact', label: t('nav.contact', translations.nav.contact) },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ebony-950/95 backdrop-blur-md shadow-deep' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl font-serif font-bold text-gold-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Le Bois d'Ébène
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-gold-400 ${
                    pathname === item.href ? 'text-gold-400' : 'text-ivory-100'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors ${
                  language === 'fr' ? 'text-gold-400 font-semibold' : 'text-ivory-300 hover:text-gold-400'
                }`}
              >
                FR
              </button>
              <span className="text-ebony-700">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'text-gold-400 font-semibold' : 'text-ivory-300 hover:text-gold-400'
                }`}
              >
                EN
              </button>
            </div>
            <Link href="/contact">
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                {t('nav.reserve', translations.nav.reserve)}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-ivory-100 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-ebony-700/30"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium transition-colors hover:text-gold-400 ${
                        pathname === item.href ? 'text-gold-400' : 'text-ivory-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center space-x-3 pt-2">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`text-sm transition-colors ${
                      language === 'fr' ? 'text-gold-400 font-semibold' : 'text-ivory-300'
                    }`}
                  >
                    FR
                  </button>
                  <span className="text-ebony-700">|</span>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-sm transition-colors ${
                      language === 'en' ? 'text-gold-400 font-semibold' : 'text-ivory-300'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    {t('nav.reserve', translations.nav.reserve)}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

