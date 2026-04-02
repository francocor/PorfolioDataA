import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart2, Menu, X } from 'lucide-react'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <BarChart2 className="w-4 h-4 text-accent" />
          </div>
          <span className="font-semibold text-text text-sm tracking-tight">
            Franco<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary hover:text-text text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
        >
          Contactar
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-text-secondary hover:text-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface border-b border-border px-6 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-text-secondary hover:text-text text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
