import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Data Analysis',
    color: 'accent',
    techs: [
      { name: 'Excel', icon: '📊' },
      { name: 'Power BI', icon: '📈' },
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    label: 'Databases',
    color: 'purple',
    techs: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'SQL Server', icon: '🖥️' },
    ],
  },
  {
    label: 'Development',
    color: 'green',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
    ],
  },
  {
    label: 'Tools',
    color: 'orange',
    techs: [
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
]

const colorMap = {
  accent: {
    label: 'text-accent',
    border: 'border-accent/20',
    bg: 'bg-accent/5',
    cardBorder: 'hover:border-accent/30',
  },
  purple: {
    label: 'text-purple-400',
    border: 'border-purple-400/20',
    bg: 'bg-purple-400/5',
    cardBorder: 'hover:border-purple-400/30',
  },
  green: {
    label: 'text-emerald-400',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/5',
    cardBorder: 'hover:border-emerald-400/30',
  },
  orange: {
    label: 'text-orange-400',
    border: 'border-orange-400/20',
    bg: 'bg-orange-400/5',
    cardBorder: 'hover:border-orange-400/30',
  },
}

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stack" className="py-24 md:py-32 bg-surface">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Stack técnico</span>
          <h2 className="section-title">
            Herramientas que{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Tecnologías orientadas al análisis de datos, gestión de bases de datos
            y desarrollo de soluciones analíticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`card-base ${c.cardBorder} transition-all duration-300`}
              >
                <p className={`text-xs font-mono tracking-widest uppercase mb-4 ${c.label}`}>
                  {cat.label}
                </p>
                <div className="flex flex-col gap-2">
                  {cat.techs.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: ci * 0.08 + ti * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border ${c.border} ${c.bg} group cursor-default hover:-translate-y-0.5 transition-transform duration-200`}
                    >
                      <span className="text-lg leading-none" aria-hidden>{tech.icon}</span>
                      <span className="text-sm font-medium text-text-secondary group-hover:text-text transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
