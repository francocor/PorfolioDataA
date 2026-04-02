import { motion } from 'framer-motion'
import { BarChart2, Github, Mail, Heart, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <BarChart2 className="w-3.5 h-3.5 text-accent" />
            </div>
            <span className="font-semibold text-text text-sm">
              Franco Cornejo<span className="text-accent">.</span>
            </span>
          </div>

          <p className="text-muted text-xs flex items-center gap-1.5">
            © {year} · Hecho con{' '}
            <Heart className="w-3 h-3 text-accent inline" aria-label="amor" />
            {' '}en Tucumán, Argentina
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/francocor?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-cornejo-3b3aaa209?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:francocornejoc15@gmail.com"
              className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
