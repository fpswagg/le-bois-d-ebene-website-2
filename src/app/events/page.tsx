"use client"

import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { formatDate, formatTime } from '@/lib/utils'
import translations from '@/../data/translations.json'
import eventsData from '@/../data/events.json'
import Link from 'next/link'

export default function EventsPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-ebony-950 wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/50 to-ebony-950 z-0" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/interior-singing.jpg)',
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold text-gold-400 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('nav.events', translations.nav.events)}
            </motion.h1>
            <motion.p
              className="text-2xl text-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description', { fr: 'Soirées Exceptionnelles', en: 'Exceptional Evenings' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Moments */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-4">
              {t('hero.description', { fr: 'Nos Moments', en: 'Our Moments' })}
            </h2>
            <p className="text-xl text-ivory-300/80 max-w-2xl mx-auto">
              {t('hero.description', { fr: 'Des moments magiques qui se créent naturellement', en: 'Magical moments that are created naturally' })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {eventsData.moments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-64 bg-ebony-800">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${moment.image ? `/images/gallery/${moment.image}` : '/images/gallery/interior-singing.jpg'})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ebony-950 to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">
                      {t('moment.title', moment.title)}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-ivory-300/80 leading-relaxed">
                      {t('moment.description', moment.description)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-24 px-4 bg-ebony-950 wood-texture">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-4">
              {t('hero.description', { fr: 'Rendez-vous Réguliers', en: 'Regular Events' })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventsData.regular.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">
                      {t('event.schedule', event.schedule)}
                    </Badge>
                    <CardTitle className="text-2xl">
                      {t('event.title', event.title)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ivory-300/80 leading-relaxed">
                      {t('event.description', event.description)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

