import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Database, Search, Filter, BarChart2, ExternalLink, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Modelado de datos',
    desc: 'Diseño de esquemas relacionales normalizados para entidades clínicas: pacientes, turnos, profesionales y estudios médicos.',
  },
  {
    icon: Search,
    title: 'Consultas SQL avanzadas',
    desc: 'Queries con JOINs, subconsultas y vistas para extraer información consolidada y generar reportes dinámicos del sistema.',
  },
  {
    icon: Filter,
    title: 'Filtros y búsquedas',
    desc: 'Sistema de filtrado multicriterio que reduce tiempos de búsqueda y mejora la gestión operativa de la información.',
  },
  {
    icon: BarChart2,
    title: 'Visualización de métricas',
    desc: 'Pantallas con KPIs del sistema: ocupación de agenda, distribución de consultas y tendencias de atención médica.',
  },
]

const impacts = [
  'Organización estructurada de datos clínicos complejos',
  'Reducción de tiempos de búsqueda mediante filtros dinámicos',
  'Reportes consolidados para gestión operativa',
  'Trazabilidad completa de pacientes y turnos',
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Proyecto destacado</span>
          <h2 className="section-title">
            Lo que estoy{' '}
            <span className="gradient-text">construyendo</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Un proyecto real con foco en estructuración de datos, consultas SQL y
            visualización de información para la toma de decisiones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="card-base hover:border-accent/30 relative overflow-hidden transition-all duration-300"
        >
          <div
            aria-hidden
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #6366f110 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-green-400 tracking-wider">En desarrollo</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text">
                  Aplicación Web de Gestión Médica
                </h3>
                <p className="text-text-secondary mt-1 text-sm max-w-lg">
                  Sistema integral para administración de clínicas con foco en
                  estructuración de datos, consultas SQL y reportes operativos.
                </p>
              </div>
              <a
                href="https://github.com/francocornejo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-2 px-4 shrink-0"
              >
                <Github className="w-4 h-4" />
                Ver en GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'MySQL', 'SQL Server', 'REST API', 'Git'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-3 p-4 rounded-xl bg-bg border border-border hover:border-accent/20 transition-colors group"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <feat.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text mb-0.5">{feat.title}</p>
                      <p className="text-xs text-muted leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl bg-bg border border-emerald-400/20"
              >
                <p className="text-xs font-mono text-emerald-400 tracking-widest uppercase mb-4">
                  Impacto del proyecto
                </p>
                <ul className="space-y-3">
                  {impacts.map((imp) => (
                    <li key={imp} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-text-secondary leading-relaxed">{imp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
