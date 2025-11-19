"use client"

import { motion } from 'framer-motion'
import { Award, Heart, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-ebony-950 wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/50 to-ebony-950 z-0" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074)',
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
              {t('about.title', translations.about.title)}
            </motion.h1>
            <motion.p
              className="text-2xl text-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('about.subtitle', translations.about.subtitle)}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto max-w-5xl">
          {translations.about.content.fr.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-ivory-300/90 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {t('about.content', { fr: paragraph, en: translations.about.content.en[index] })}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Values Section */}
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
              {t('about.values.title', translations.about.values.title)}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {translations.about.values.items.map((value, index) => {
              const icons = [Award, Heart, Sparkles]
              const Icon = icons[index]
              
              return (
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
                        <Icon className="w-8 h-8 text-gold-400" />
                      </div>
                      <CardTitle className="text-2xl">
                        {t('value.title', value.title)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-ivory-300/80 leading-relaxed">
                        {t('value.description', value.description)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-96 rounded-xl overflow-hidden shadow-deep"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony-950/80 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

