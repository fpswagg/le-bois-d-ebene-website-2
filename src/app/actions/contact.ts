'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  message?: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      return {
        success: false,
        error: 'Missing required fields',
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Invalid email address',
      }
    }

    const contactEmail = process.env.CONTACT_EMAIL!
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

    // Format date and time
    const reservationDate = new Date(formData.date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    console.log({contactEmail, siteUrl, reservationDate})

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Bois d'Ébène <${contactEmail}>`,
      to: [contactEmail],
      replyTo: formData.email,
      subject: `Nouvelle réservation - ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: #D4AF37;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .info-row {
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid #e0e0e0;
              }
              .info-label {
                font-weight: bold;
                color: #1a1a1a;
                display: inline-block;
                min-width: 120px;
              }
              .info-value {
                color: #555;
              }
              .message-box {
                background: #fff;
                padding: 15px;
                border-left: 4px solid #D4AF37;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #888;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Bois d'Ébène</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">Nouvelle demande de réservation</p>
            </div>
            
            <div class="content">
              <div class="info-row">
                <span class="info-label">Nom:</span>
                <span class="info-value">${formData.name}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">${formData.email}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">Téléphone:</span>
                <span class="info-value">${formData.phone}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">Date:</span>
                <span class="info-value">${reservationDate}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">Heure:</span>
                <span class="info-value">${formData.time}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">Nombre de personnes:</span>
                <span class="info-value">${formData.guests}</span>
              </div>
              
              ${formData.message ? `
                <div class="message-box">
                  <strong>Message:</strong><br>
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>Cette réservation a été envoyée depuis le site web <a href="${siteUrl}" style="color: #D4AF37;">${siteUrl}</a></p>
            </div>
          </body>
        </html>
      `,
      text: `
Nouvelle réservation - Bois d'Ébène

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Date: ${reservationDate}
Heure: ${formData.time}
Nombre de personnes: ${formData.guests}
${formData.message ? `\nMessage:\n${formData.message}` : ''}

---
Cette réservation a été envoyée depuis ${siteUrl}
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        success: false,
        error: 'Failed to send email. Please try again later.',
      }
    }

    return {
      success: true,
      messageId: data?.id,
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    }
  }
}
