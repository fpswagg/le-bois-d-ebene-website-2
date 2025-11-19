"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, Euro, Music } from 'lucide-react'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074)',
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

      {/* Upcoming Events */}
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
              {t('hero.description', { fr: 'Événements à Venir', en: 'Upcoming Events' })}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eventsData.upcoming.map((event, index) => (
              <motion.div
                key={event.id}
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
                        backgroundImage: `url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ebony-950 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="text-base px-3 py-1">
                        {formatDate(event.date, language === 'fr' ? 'fr-FR' : 'en-US')}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">
                      {t('event.title', event.title)}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Music className="h-4 w-4" />
                      {t('event.artist', event.artist)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-ivory-300/80 mb-6 leading-relaxed">
                      {t('event.description', event.description)}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-ivory-300">
                        <Clock className="h-4 w-4 text-gold-400" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-ivory-300">
                        <Euro className="h-4 w-4 text-gold-400" />
                        <span className="text-sm font-semibold">{event.price}</span>
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full">
                        {t('nav.reserve', translations.nav.reserve)}
                      </Button>
                    </Link>
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
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </CardDescription>
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

