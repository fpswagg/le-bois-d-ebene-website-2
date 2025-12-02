"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

  return (
    <>
      {/* Hero Section - Responsive Design */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background Layer - Adapts per screen size */}
        <div className="absolute inset-0 z-0">
          {/* Mobile & Tablet: Full background image with strong overlay */}
          <div className="absolute inset-0 lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/90 via-ebony-950/85 to-ebony-950/95 z-10" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/gallery/interior-1.jpg)',
              }}
            />
          </div>

          {/* Desktop: Split layout - Image left, solid right */}
          <div className="hidden lg:block absolute inset-0">
            {/* Left Side - Image */}
            <div className="absolute inset-y-0 left-0 w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ebony-950/50 to-ebony-950 z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/gallery/interior-1.jpg)',
                }}
              />
            </div>
            
            {/* Right Side - Solid with texture */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-ebony-950 wood-texture" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
            {/* Mobile/Tablet: Centered content */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-2xl mx-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6 inline-block"
                >
                  <Badge className="text-sm px-4 py-1.5 bg-gold-500/20 border-gold-500/40 backdrop-blur-sm">
                    {t('hero.subtitle', translations.hero.subtitle)}
                  </Badge>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gold-400 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {t('hero.title', translations.hero.title)}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-base sm:text-lg text-ivory-100/90 mb-8 leading-relaxed px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('hero.description', translations.hero.description)}
                </motion.p>

                {/* Features - Horizontal on mobile */}
                <motion.div
                  className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {[
                    { icon: UtensilsCrossed, text: { fr: 'Gastronomie', en: 'Gastronomy' } },
                    { icon: Music, text: { fr: 'Live', en: 'Live' } },
                    { icon: Calendar, text: { fr: '7j/7', en: '7 days' } },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 text-ivory-200/90 bg-ebony-900/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-gold-400/20"
                    >
                      <feature.icon className="w-5 h-5 text-gold-400" />
                      <span className="text-xs font-medium">{t('feature.text', feature.text)}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons - Full width on mobile */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Link href="/menu" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto gap-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <UtensilsCrossed className="h-5 w-5" />
                      {t('nav.menu', translations.nav.menu)}
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto gap-2 border-gold-400/40 hover:border-gold-400 hover:bg-gold-400/10 backdrop-blur-sm transition-all duration-300"
                    >
                      {t('nav.reserve', translations.nav.reserve)}
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop: Split layout with content on right */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Empty (image shows through) */}
              <div />

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-left pr-12 xl:pr-20"
              >
                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-8"
                />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-6"
                >
                  <Badge className="text-sm px-4 py-1.5 bg-gold-500/10 border-gold-500/30">
                    {t('hero.subtitle', translations.hero.subtitle)}
                  </Badge>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-5xl xl:text-7xl font-serif font-bold text-gold-400 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {t('hero.title', translations.hero.title)}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-lg xl:text-xl text-ivory-200/90 mb-10 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {t('hero.description', translations.hero.description)}
                </motion.p>

                {/* Features - Vertical list */}
                <motion.div
                  className="flex flex-col gap-4 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    { icon: UtensilsCrossed, text: { fr: 'Gastronomie raffinée', en: 'Refined Gastronomy' } },
                    { icon: Music, text: { fr: 'Musique live tous les soirs', en: 'Live music every evening' } },
                    { icon: Calendar, text: { fr: 'Ouvert 7 jours sur 7', en: 'Open 7 days a week' } },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-ivory-300/90 group cursor-default"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="text-base font-medium group-hover:text-gold-400 transition-colors">
                        {t('feature.text', feature.text)}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Link href="/menu">
                    <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      <UtensilsCrossed className="h-5 w-5" />
                      {t('nav.menu', translations.nav.menu)}
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="gap-2 border-gold-400/30 hover:border-gold-400 hover:bg-gold-400/5 hover:scale-105 transition-all duration-300"
                    >
                      {t('nav.reserve', translations.nav.reserve)}
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs text-ivory-300/70 uppercase tracking-wider font-medium">
              {t('hero.scroll', { fr: 'Défiler', en: 'Scroll' })}
            </span>
            <div className="w-6 h-10 border-2 border-gold-400/40 rounded-full flex justify-center backdrop-blur-sm bg-ebony-900/30">
              <motion.div className="w-1.5 h-2 bg-gold-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements - Only on desktop */}
        <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl z-0" />
        <div className="hidden lg:block absolute bottom-20 left-10 w-40 h-40 bg-gold-400/5 rounded-full blur-3xl z-0" />
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
                  fr: 'Plats savoureux, varan et gibier délicieux, plats classiques toujours bien servis. Une cuisine ouverte et généreuse, servie avec élégance.',
                  en: 'Delicious dishes, exquisite varan and game, classic dishes always well served. An open and generous cuisine, served with elegance.',
                },
              },
              {
                icon: Music,
                title: { fr: 'Musique Live', en: 'Live Music' },
                description: {
                  fr: 'Quand l\'orchestre joue, les guitares sonnent et les voix résonnent. L\'heure est au show dans une ambiance festive.',
                  en: 'When the orchestra plays, guitars sound and voices resonate. It\'s show time in a festive atmosphere.',
                },
              },
              {
                icon: Calendar,
                title: { fr: 'Moments', en: 'Moments' },
                description: {
                  fr: 'Des moments magiques qui se créent naturellement, entre convivialité et spectacle',
                  en: 'Magical moments that are created naturally, between conviviality and show',
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
              {t('hero.description', { fr: 'Des moments qui se créent naturellement', en: 'Moments that are created naturally' })}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.moments.slice(0, 3).map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t('moment.title', moment.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-ivory-300/80 text-sm">
                      {t('moment.description', moment.description)}
                    </p>
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
                {t('hero.cta', { fr: 'Découvrir nos moments', en: 'Discover our moments' })}
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
                en: 'Experience an unforgettable evening at Bois d\'Ébène',
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

