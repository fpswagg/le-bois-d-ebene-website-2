"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import contactData from '@/../data/contact.json'
import translations from '@/../data/translations.json'

export function Footer() {
  const { language, t } = useLanguage()

  const hours = contactData.info.hours[language]

  return (
    <footer className="bg-ebony-950 border-t border-ebony-700/30 wood-texture">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
              Le Bois d'Ébène
            </h3>
            <p className="text-ivory-300/80 text-sm leading-relaxed">
              {t('footer.tagline', translations.footer.tagline)}
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href={contactData.info.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-300 hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href={contactData.info.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-300 hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href={contactData.info.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-300 hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              {t('footer.contact', translations.footer.contact)}
            </h4>
            <div className="space-y-3 text-sm text-ivory-300/80">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>{contactData.info.address.street}</p>
                  <p>
                    {contactData.info.address.postalCode} {contactData.info.address.city}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href={`tel:${contactData.info.phone}`} className="hover:text-gold-400 transition-colors">
                  {contactData.info.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0" />
                <a href={`mailto:${contactData.info.email}`} className="hover:text-gold-400 transition-colors">
                  {contactData.info.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              {t('footer.hours', translations.footer.hours)}
            </h4>
            <div className="space-y-2 text-sm text-ivory-300/80">
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Lundi' : 'Monday'}:</span>
                <span>{hours.monday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Mardi' : 'Tuesday'}:</span>
                <span>{hours.tuesday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Mercredi' : 'Wednesday'}:</span>
                <span>{hours.wednesday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Jeudi' : 'Thursday'}:</span>
                <span>{hours.thursday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Vendredi' : 'Friday'}:</span>
                <span>{hours.friday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Samedi' : 'Saturday'}:</span>
                <span>{hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="capitalize">{language === 'fr' ? 'Dimanche' : 'Sunday'}:</span>
                <span>{hours.sunday}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              Navigation
            </h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-ivory-300/80 hover:text-gold-400 transition-colors">
                {t('nav.about', translations.nav.about)}
              </Link>
              <Link href="/menu" className="block text-ivory-300/80 hover:text-gold-400 transition-colors">
                {t('nav.menu', translations.nav.menu)}
              </Link>
              <Link href="/events" className="block text-ivory-300/80 hover:text-gold-400 transition-colors">
                {t('nav.events', translations.nav.events)}
              </Link>
              <Link href="/gallery" className="block text-ivory-300/80 hover:text-gold-400 transition-colors">
                {t('nav.gallery', translations.nav.gallery)}
              </Link>
              <Link href="/contact" className="block text-ivory-300/80 hover:text-gold-400 transition-colors">
                {t('nav.contact', translations.nav.contact)}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-ebony-700/30 text-center text-sm text-ivory-300/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('footer.copyright', translations.footer.copyright)}
        </motion.div>
      </div>
    </footer>
  )
}

