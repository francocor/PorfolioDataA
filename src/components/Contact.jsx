import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5493816348569?text=Hola%20Franco%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte.'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'francocornejoc15@gmail.com',
    href: 'mailto:francocornejoc15@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+54 9 381 634-8569',
    href: WHATSAPP_URL,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'franco-cornejo',
    href: 'https://www.linkedin.com/in/franco-cornejo-3b3aaa209?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/francocor',
    href: 'https://github.com/francocor?tab=repositories',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tucumán, Argentina',
    href: null,
  },
]

function ContactCard({ icon: Icon, label, value, href, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const inner = (
    <div
      className={`card-base flex items-center gap-4 group transition-all duration-300 ${
        href ? 'hover:border-accent/30 hover:-translate-y-0.5 cursor-pointer' : ''
      }`}
    >
      <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted font-mono mb-0.5">{label}</p>
        <p className="text-sm font-medium text-text group-hover:text-accent-light transition-colors truncate">
          {value}
        </p>
      </div>
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          aria-label={label}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  )
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'El nombre es obligatorio.'
  if (!form.email.trim()) {
    errors.email = 'El email es obligatorio.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ingresá un email válido.'
  }
  if (!form.message.trim()) errors.message = 'El mensaje es obligatorio.'
  return errors
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setStatus(null)

    try {
      if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') {
        await new Promise((r) => setTimeout(r, 1000))
        throw new Error('Formspree ID no configurado.')
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-surface">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Contacto</span>
          <h2 className="section-title">
            Hablemos de{' '}
            <span className="gradient-text">datos</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            ¿Tenés un proyecto de análisis o una oportunidad laboral? Escribime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="space-y-3">
            <div className="card-base border-accent/20 bg-accent/5 mb-6">
              <p className="text-sm font-medium text-text leading-relaxed">
                Actualmente buscando mi primera oportunidad como{' '}
                <span className="text-accent font-semibold">Data Analyst Jr.</span>
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Abierto a roles de Data Analyst, BI Analyst o perfiles analíticos.
                Disponible para trabajo remoto o en Tucumán.
              </p>
            </div>
            {contactInfo.map((c, i) => (
              <ContactCard key={c.label} {...c} index={i} />
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="card-base space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-muted mb-1.5">
                Nombre <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/20'
                    : 'border-border focus:border-accent/60 focus:ring-accent/20'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-muted mb-1.5">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/20'
                    : 'border-border focus:border-accent/60 focus:ring-accent/20'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-muted mb-1.5">
                Mensaje <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Contame sobre la oportunidad o proyecto..."
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full bg-bg border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-1 transition-all resize-none ${
                  errors.message
                    ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/20'
                    : 'border-border focus:border-accent/60 focus:ring-accent/20'
                }`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'success' && (
              <div role="alert" className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3">
                <CheckCircle className="w-4 h-4 shrink-0" />
                Mensaje enviado correctamente. Te respondo pronto.
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="flex items-start gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Hubo un error al enviar.{' '}
                  <a href={`mailto:francocornejoc15@gmail.com`} className="underline hover:text-red-300 transition-colors">
                    Escribime directamente
                  </a>.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
