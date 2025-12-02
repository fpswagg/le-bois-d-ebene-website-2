"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
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

  // Fallback images from gallery
  const fallbackImages = [
    '/images/gallery/interior-1.jpg',
    '/images/gallery/interior-2.jpg',
    '/images/gallery/interior-3.jpg',
    '/images/gallery/interior-4.jpg',
    '/images/gallery/plate-1.jpg',
    '/images/gallery/plate-2.jpg',
    '/images/gallery/plate-3.jpg',
    '/images/gallery/plate-4.jpg',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-ebony-950 wood-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-950/50 to-ebony-950 z-0" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/gallery/interior-1.jpg)',
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
      <section className="py-12 px-4 bg-ebony-900 border-b border-ebony-700/30">
        <div className="container mx-auto px-4 py-4">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
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
                  className="relative aspect-[4/3] sm:aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group shadow-deep active:scale-95 transition-transform"
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-ebony-800 animate-pulse" />
                  
                  <img
                    src={image.src || fallbackImages[index % fallbackImages.length]}
                    alt={t('image.alt', image.alt)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = fallbackImages[index % fallbackImages.length]
                    }}
                  />
                  
                  {/* Mobile: Always show overlay with caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony-950/90 via-ebony-950/40 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-ivory-100 text-xs sm:text-sm font-medium line-clamp-2">
                      {t('image.alt', image.alt)}
                    </p>
                  </div>

                  {/* Mobile tap indicator */}
                  <div className="absolute top-2 right-2 lg:hidden bg-ebony-900/80 backdrop-blur-sm rounded-full p-1.5">
                    <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Custom Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ebony-950/97 backdrop-blur-lg z-[100]"
              onClick={() => setSelectedImage(null)}
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-0 sm:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full h-full sm:h-auto sm:max-w-6xl sm:max-h-[90vh] bg-ebony-900 sm:rounded-2xl shadow-2xl overflow-hidden border-0 sm:border border-ebony-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-ebony-950/90 text-ivory-100 hover:bg-ebony-800 hover:text-gold-400 active:scale-95 transition-all duration-200 shadow-lg backdrop-blur-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-ebony-800 animate-pulse" />
                  
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    src={selectedImage.src || fallbackImages[parseInt(selectedImage.id) % fallbackImages.length]}
                    alt={t('image.alt', selectedImage.alt)}
                    className="relative max-w-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(90vh-12rem)] object-contain rounded-none sm:rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = fallbackImages[parseInt(selectedImage.id) % fallbackImages.length]
                    }}
                  />
                </div>

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ebony-950 via-ebony-950/98 to-transparent p-4 sm:p-6 pt-12 sm:pt-16"
                >
                  <p className="text-ivory-100 text-sm sm:text-lg text-center font-medium">
                    {t('image.alt', selectedImage.alt)}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

