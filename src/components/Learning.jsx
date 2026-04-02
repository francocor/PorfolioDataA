import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const learning = [
  {
    title: 'Power BI avanzado',
    desc: 'Modelado de datos, uso de DAX, Power Query y optimización de reportes para análisis de negocio.',
    tags: ['DAX', 'Modelado', 'Power Query'],
  },
  {
    title: 'Python para análisis de datos',
    desc: 'Uso de Pandas, NumPy y Matplotlib para exploración, limpieza y visualización de datos.',
    tags: ['Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'SQL avanzado',
    desc: 'Consultas complejas, CTEs, window functions y optimización de queries para análisis de datos.',
    tags: ['CTEs', 'Window Functions', 'Optimización'],
  },
  {
    title: 'Excel avanzado',
    desc: 'Uso de tablas dinámicas, funciones avanzadas y preparación de datos para análisis y reporting.',
    tags: ['Tablas dinámicas', 'Funciones', 'Limpieza de datos'],
  },
]

function LearningCard({ title, desc, tags, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-base hover:border-accent/25 transition-all duration-300 group hover:-translate-y-0.5 flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text text-sm leading-snug group-hover:text-accent-light transition-colors">
          {title}
        </h3>
        <span className="shrink-0 text-xs font-mono text-emerald-400 border border-emerald-400/25 bg-emerald-400/8 px-2.5 py-1 rounded-full">
          Aprendiendo
        </span>
      </div>

      <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-accent/70 border border-accent/15 bg-accent/5 px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Learning() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="aprendiendo" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-mono px-4 py-1.5 rounded-full mb-4 tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            En constante aprendizaje
          </div>
          <h2 className="section-title">
            Siempre{' '}
            <span className="gradient-text">aprendiendo</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Áreas en las que estoy profundizando para fortalecer mi perfil como Data Analyst.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {learning.map((item, i) => (
            <LearningCard key={item.title} {...item} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-text-secondary text-sm mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          En constante evolución, incorporando herramientas y metodologías de análisis
          de datos orientadas a entornos reales de negocio.
        </motion.p>
      </div>
    </section>
  )
}
