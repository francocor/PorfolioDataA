import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, PieChart, Users, Clock } from 'lucide-react'

const upcoming = [
  {
    icon: TrendingUp,
    title: 'Análisis de ventas',
    desc: 'Proyecto enfocado en análisis de datos de ventas para detección de tendencias, estacionalidad y KPIs clave del negocio.',
    tags: ['Python', 'Pandas', 'Power BI'],
  },
  {
    icon: PieChart,
    title: 'Dashboard de negocio',
    desc: 'Dashboard interactivo con métricas ejecutivas, filtros dinámicos y visualizaciones orientadas a la toma de decisiones.',
    tags: ['Power BI', 'SQL', 'DAX'],
  },
  {
    icon: Users,
    title: 'Segmentación de clientes',
    desc: 'Análisis exploratorio de base de clientes para identificar perfiles, comportamientos y oportunidades de negocio.',
    tags: ['Python', 'Scikit-learn', 'Matplotlib'],
  },
]

function UpcomingCard({ icon: Icon, title, desc, tags, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-base relative overflow-hidden group hover:border-accent/25 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-accent/70 group-hover:text-accent transition-colors" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text text-sm mb-0.5">{title}</h3>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-muted" />
            <p className="text-xs text-muted font-mono">En preparación</p>
          </div>
        </div>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">{desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-muted border border-border bg-bg px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  )
}

export default function UpcomingProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Próximos proyectos</span>
          <h2 className="section-title">
            El pipeline de{' '}
            <span className="gradient-text">análisis</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Proyectos en preparación, cada uno orientado a resolver un problema
            real de negocio con datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upcoming.map((project, i) => (
            <UpcomingCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-muted text-xs font-mono mt-8 tracking-wider"
        >
          + más proyectos de datos en camino
        </motion.p>
      </div>
    </section>
  )
}
