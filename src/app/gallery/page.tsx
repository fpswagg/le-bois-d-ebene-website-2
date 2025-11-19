"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'
import galleryData from '@/../data/gallery.json'

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryData.images[0] | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === selectedCategory)

  // Placeholder images
  const placeholderImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074',
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074',
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-ebony-950 wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/50 to-ebony-950 z-0" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)',
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
              {t('nav.gallery', translations.nav.gallery)}
            </motion.h1>
            <motion.p
              className="text-2xl text-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description', { fr: 'Nos Plus Beaux Moments', en: 'Our Finest Moments' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-ebony-900 sticky top-20 z-40 border-b border-ebony-700/30">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {galleryData.categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className="cursor-pointer text-base px-4 py-2"
                >
                  {t('category.name', category.name)}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-ebony-950">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-deep"
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${placeholderImages[index % placeholderImages.length]})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-ivory-100 text-sm font-medium">
                      {t('image.alt', image.alt)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-ebony-950/95">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${placeholderImages[parseInt(selectedImage.id) % placeholderImages.length]})`,
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-ivory-100 text-lg">
                    {t('image.alt', selectedImage.alt)}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  )
}

