"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { useLanguage } from '@/contexts/LanguageContext'
import translations from '@/../data/translations.json'
import contactData from '@/../data/contact.json'
import { submitContactForm } from '@/app/actions/contact'

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        variant: 'destructive',
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Veuillez remplir tous les champs obligatoires' 
          : 'Please fill in all required fields',
      })
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: 'destructive',
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' 
          ? 'Adresse email invalide' 
          : 'Invalid email address',
      })
      setLoading(false)
      return
    }

    // Submit form using server action
    const result = await submitContactForm(formData)

    if (result.success) {
      toast({
        variant: 'default',
        title: t('form.success.title', contactData.form.success.title),
        description: t('form.success.message', contactData.form.success.message),
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      })
    } else {
      toast({
        variant: 'destructive',
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: result.error || (language === 'fr' 
          ? 'Une erreur est survenue. Veuillez réessayer.' 
          : 'An error occurred. Please try again.'),
      })
    }

    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-ebony-950 wood-texture overflow-hidden">
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
              {t('nav.contact', translations.nav.contact)}
            </motion.h1>
            <motion.p
              className="text-2xl text-ivory-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('nav.reserve', translations.nav.reserve)}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 px-4 bg-ebony-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    {contactData.info.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t('hero.subtitle', translations.hero.subtitle)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-ivory-100">{contactData.info.address.street}</p>
                      <p className="text-ivory-300/80">
                        {contactData.info.address.postalCode} {contactData.info.address.city}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                    <a
                      href={`tel:${contactData.info.phone}`}
                      className="text-ivory-100 hover:text-gold-400 transition-colors"
                    >
                      {contactData.info.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                    <a
                      href={`mailto:${contactData.info.email}`}
                      className="text-ivory-100 hover:text-gold-400 transition-colors"
                    >
                      {contactData.info.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold-400" />
                    {t('footer.hours', translations.footer.hours)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    {Object.entries(contactData.info.hours[language]).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-ivory-300/80 capitalize">{day}:</span>
                        <span className="text-ivory-100">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    {t('nav.reserve', translations.nav.reserve)}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t('hero.description', {
                      fr: 'Réservez votre table en ligne',
                      en: 'Book your table online',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-ivory-200 mb-2">
                        {t('form.field.label', contactData.form.fields.name.label)} *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('form.field.placeholder', contactData.form.fields.name.placeholder)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ivory-200 mb-2">
                          {t('form.field.label', contactData.form.fields.email.label)} *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('form.field.placeholder', contactData.form.fields.email.placeholder)}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ivory-200 mb-2">
                          {t('form.field.label', contactData.form.fields.phone.label)} *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('form.field.placeholder', contactData.form.fields.phone.placeholder)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ivory-200 mb-2">
                          {t('form.field.label', contactData.form.fields.date.label)} *
                        </label>
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ivory-200 mb-2">
                          {t('form.field.label', contactData.form.fields.time.label)} *
                        </label>
                        <Input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ivory-200 mb-2">
                          {t('form.field.label', contactData.form.fields.guests.label)}
                        </label>
                        <Input
                          type="number"
                          name="guests"
                          min="1"
                          max="20"
                          value={formData.guests}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ivory-200 mb-2">
                        {t('form.field.label', contactData.form.fields.message.label)}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('form.field.placeholder', contactData.form.fields.message.placeholder)}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Send className="h-5 w-5" />
                        </motion.div>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          {t('form.submit', contactData.form.submit)}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-ebony-950">
        <div className="container mx-auto">
          <motion.div
            className="rounded-xl overflow-hidden shadow-deep h-96 bg-ebony-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.180516912454!2d11.522948335518569!3d3.869678406464125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7fcf32f87f%3A0x507553e24c78e78a!2sBois%20d&#39;ebene%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1764665986616!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

