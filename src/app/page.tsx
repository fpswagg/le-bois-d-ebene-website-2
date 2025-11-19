"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Calendar, UtensilsCrossed, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'
import menuData from '@/../data/menu.json'
import eventsData from '@/../data/events.json'

export default function HomePage() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Background with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/80 via-ebony-950/60 to-ebony-950 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center wood-texture"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074)',
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-20 h-full flex items-center justify-center text-center px-4"
          style={{ opacity }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Badge className="mb-6 text-base px-4 py-1">
                {t('hero.subtitle', translations.hero.subtitle)}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gold-400 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {t('hero.title', translations.hero.title)}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-ivory-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {t('hero.description', translations.hero.description)}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link href="/menu">
                <Button size="lg" className="gap-2">
                  <UtensilsCrossed className="h-5 w-5" />
                  {t('nav.menu', translations.nav.menu)}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  {t('nav.reserve', translations.nav.reserve)}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1 h-2 bg-gold-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-4">
              {t('hero.title', translations.hero.title)}
            </h2>
            <p className="text-xl text-ivory-300/80 max-w-2xl mx-auto">
              {t('hero.description', translations.hero.description)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: { fr: 'Gastronomie', en: 'Gastronomy' },
                description: {
                  fr: 'Une cuisine d\'exception mettant en valeur les produits nobles et le gibier',
                  en: 'Exceptional cuisine highlighting noble products and game',
                },
              },
              {
                icon: Music,
                title: { fr: 'Spectacles', en: 'Shows' },
                description: {
                  fr: 'Des soirées cabaret et concerts jazz dans une ambiance intimiste',
                  en: 'Cabaret evenings and jazz concerts in an intimate atmosphere',
                },
              },
              {
                icon: Calendar,
                title: { fr: 'Événements', en: 'Events' },
                description: {
                  fr: 'Célébrations privées et événements sur mesure dans un cadre unique',
                  en: 'Private celebrations and custom events in a unique setting',
                },
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gold-400" />
                    </div>
                    <CardTitle>{t('feature.title', feature.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t('feature.description', feature.description)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 px-4 bg-ebony-950">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-4">
              {t('nav.menu', translations.nav.menu)}
            </h2>
            <p className="text-xl text-ivory-300/80">
              {t('hero.description', { fr: 'Découvrez nos spécialités', en: 'Discover our specialties' })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {menuData.categories[1]?.items.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">
                        {t('menu.item.name', item.name)}
                      </CardTitle>
                      <span className="text-gold-400 font-semibold">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t('menu.item.description', item.description)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/menu">
              <Button size="lg" variant="outline" className="gap-2">
                {t('hero.cta', { fr: 'Voir le menu complet', en: 'View full menu' })}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events Preview */}
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
              {t('nav.events', translations.nav.events)}
            </h2>
            <p className="text-xl text-ivory-300/80">
              {t('hero.description', { fr: 'Nos prochains événements', en: 'Our upcoming events' })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.upcoming.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{event.date}</Badge>
                    <CardTitle>{t('event.title', event.title)}</CardTitle>
                    <CardDescription>{t('event.artist', event.artist)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ivory-300/80 text-sm mb-4">
                      {t('event.description', event.description)}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-ivory-300 text-sm">{event.time}</span>
                      <span className="text-gold-400 font-semibold">{event.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/events">
              <Button size="lg" variant="outline" className="gap-2">
                {t('hero.cta', { fr: 'Tous les événements', en: 'All events' })}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-ebony-950 via-ebony-900 to-ebony-950 wood-texture">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-6">
              {t('hero.description', { fr: 'Réservez votre table', en: 'Reserve your table' })}
            </h2>
            <p className="text-xl text-ivory-300/80 mb-8">
              {t('hero.description', {
                fr: 'Vivez une expérience inoubliable au Bois d\'Ébène',
                en: 'Experience an unforgettable evening at Le Bois d\'Ébène',
              })}
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                {t('nav.reserve', translations.nav.reserve)}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

