import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, FileText, ChevronRight, Linkedin } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}


export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #6366f118 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f108 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="section-container text-center relative z-10 py-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-mono px-4 py-1.5 rounded-full mb-8 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Disponible para oportunidades · Tucumán, Argentina
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05] mb-4"
        >
          Franco{' '}
          <span className="gradient-text">Cornejo</span>
        </motion.h1>

        <motion.div variants={item} className="mb-8">
          <p className="text-lg md:text-xl font-semibold text-accent mb-4 tracking-wide font-mono">
            Data Analyst Jr.
          </p>
          <p className="text-lg md:text-xl font-medium text-text max-w-2xl mx-auto text-balance leading-snug mb-3">
            Convierto datos en información clara y accionable
            para mejorar decisiones.
          </p>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto text-balance leading-relaxed">
            Combino análisis de datos, SQL, Python y visualización con
            background en programación y diseño UX/UI.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#proyectos" className="btn-primary">
            Ver proyectos
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="/CV_Franco_Cornejo_Data_Analyst.pdf"
            download="CV_Franco_Cornejo_Data_Analyst.pdf"
            className="btn-ghost"
          >
            <FileText className="w-4 h-4" />
            Descargar CV
          </a>
          <a href="#contacto" className="btn-ghost">
            <Mail className="w-4 h-4" />
            Contacto
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <a
            href="https://github.com/francocor?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/franco-cornejo-3b3aaa209?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:francocornejoc15@gmail.com"
            className="text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-muted text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
