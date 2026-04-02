import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const timeline = [
  {
    icon: GraduationCap,
    type: 'Formación universitaria',
    title: 'Técnico Universitario en Programación',
    institution: 'Universidad Nacional de Tucumán',
    period: '2021 — 2024',
    desc: 'Formación sólida en bases de datos relacionales, algoritmos, lógica de programación y arquitectura de sistemas. Esta base técnica es el fundamento de mi capacidad analítica actual.',
    tags: ['SQL', 'BD Relacionales', 'Algoritmos', 'Lógica', 'Programación OO'],
    color: 'accent',
  },
  {
    icon: BookOpen,
    type: 'Formación complementaria',
    title: 'Diseño UX/UI',
    institution: 'Curso especializado',
    period: '2023',
    desc: 'Principios de diseño centrado en el usuario aplicados a dashboards y visualizaciones de datos. Clave para presentar información analítica de forma clara y accesible.',
    tags: ['Figma', 'Diseño de Dashboards', 'Design Thinking', 'Visualización'],
    color: 'purple',
  },
  {
    icon: Award,
    type: 'Capacitación en datos',
    title: 'Análisis de datos & Business Intelligence',
    institution: 'Formación continua · Plataformas online',
    period: '2023 — Presente',
    desc: 'Capacitación focalizada en herramientas de análisis y BI: Power BI, Python para datos, DAX, estadística descriptiva y metodologías analíticas aplicadas a problemas reales de negocio.',
    tags: ['Power BI', 'Python', 'Pandas', 'DAX', 'Estadística', 'SQL avanzado'],
    color: 'green',
  },
]

const colorMap = {
  accent: {
    border: 'border-accent/30',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    tag: 'text-accent border-accent/20 bg-accent/5',
    label: 'text-accent',
  },
  purple: {
    border: 'border-purple-400/30',
    iconBg: 'bg-purple-400/10',
    iconColor: 'text-purple-400',
    tag: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    label: 'text-purple-400',
  },
  green: {
    border: 'border-emerald-400/30',
    iconBg: 'bg-emerald-400/10',
    iconColor: 'text-emerald-400',
    tag: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
    label: 'text-emerald-400',
  },
}

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const c = colorMap[item.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 shrink-0 rounded-xl ${c.iconBg} border ${c.border} flex items-center justify-center z-10`}>
          <item.icon className={`w-5 h-5 ${c.iconColor}`} />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      <div className={`card-base mb-6 flex-1 hover:${c.border} transition-all duration-300 hover:-translate-y-0.5`}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <p className={`text-xs font-mono ${c.label} mb-1`}>{item.type}</p>
            <h3 className="font-semibold text-text">{item.title}</h3>
            <p className="text-text-secondary text-sm">{item.institution}</p>
          </div>
          <span className="text-xs font-mono text-muted bg-bg border border-border px-2.5 py-1 rounded-md shrink-0">
            {item.period}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className={`text-xs font-mono border px-2 py-0.5 rounded-md ${c.tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Formación</span>
          <h2 className="section-title">
            Mi base para{' '}
            <span className="gradient-text">analizar datos</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Una trayectoria formativa que combina programación, diseño y análisis de datos,
            construida para resolver problemas reales con información.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
