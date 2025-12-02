"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'
import menuData from '@/../data/menu.json'

export default function MenuPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-ebony-950 wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/50 to-ebony-950 z-0" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/menu.jpg)',
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
              {t('nav.menu', translations.nav.menu)}
            </motion.h1>
            <motion.p
              className="text-2xl text-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description', { fr: 'Carte Gastronomique', en: 'Gastronomic Menu' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto max-w-5xl">
          {menuData.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gold-400 mb-8 text-center">
                {t('category.name', category.name)}
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.05 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2">
                              {t('item.name', item.name)}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {t('item.description', item.description)}
                            </CardDescription>
                          </div>
                          <span className="text-2xl font-serif font-bold text-gold-400 whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beverages Info */}
      <section className="py-24 px-4 bg-ebony-950 wood-texture">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl">
                  {t('hero.description', { fr: 'Accompagnements & Boissons', en: 'Accompaniments & Beverages' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ivory-300/80 text-lg leading-relaxed">
                  {t('hero.description', {
                    fr: 'Nos plats savoureux se marient parfaitement avec notre sélection de boissons. Nous proposons une large gamme de boissons locales et internationales pour accompagner votre varan, votre gibier ou vos plats classiques. Que vous préfériez des boissons locales authentiques ou des sélections internationales, nous avons la boisson idéale pour sublimer votre expérience culinaire.',
                    en: 'Our delicious dishes pair perfectly with our beverage selection. We offer a wide range of local and international beverages to accompany your varan, game or classic dishes. Whether you prefer authentic local drinks or international selections, we have the ideal drink to enhance your culinary experience.',
                  })}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

