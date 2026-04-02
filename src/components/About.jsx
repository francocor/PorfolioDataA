import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Database, Layers, Eye } from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    title: 'Análisis de datos',
    desc: 'Analizo datos para detectar patrones, tendencias y generar insights accionables que apoyen decisiones de negocio.',
  },
  {
    icon: Database,
    title: 'Bases de datos',
    desc: 'Diseño y consulto bases de datos relacionales con SQL, MySQL y SQL Server para estructurar y extraer información de valor.',
  },
  {
    icon: Layers,
    title: 'Base técnica sólida',
    desc: 'Formación en programación que me permite entender los datos a fondo: desde su origen hasta su transformación y uso.',
  },
  {
    icon: Eye,
    title: 'Visualización & UX',
    desc: 'Criterio visual aplicado a dashboards y reportes claros, pensados para que cualquier persona entienda los datos.',
  },
]

function HighlightCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-base hover:border-accent/40 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="font-semibold text-text mb-2 text-sm">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title mb-6">
              Del dato al{' '}
              <span className="gradient-text">insight</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
              <p>
                Soy <span className="text-text font-medium">Data Analyst Jr.</span> con base
                en programación y diseño UX/UI. Me especializo en analizar datos,
                detectar patrones y generar información útil que ayude a tomar
                mejores decisiones.
              </p>
              <p>
                Trabajo con <span className="text-text font-medium">SQL, Power BI, Python y Excel</span> para
                explorar datos, construir reportes y visualizar resultados de forma clara
                y orientada al negocio.
              </p>
              <p className="border-l-2 border-accent/40 pl-4 text-text-secondary italic">
                Mi diferencial es combinar el pensamiento estructurado del desarrollo
                con la capacidad analítica y visual para interpretar datos y
                comunicarlos con claridad.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Data Analysis', 'Business Intelligence', 'SQL & Python', 'Power BI', 'Tucumán, Argentina'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square max-w-xs mx-auto rounded-3xl bg-gradient-to-br from-accent/10 to-purple-500/5 border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8 relative z-10">
                <div className="text-6xl font-bold gradient-text mb-3">FC</div>
                <p className="text-accent font-mono text-xs tracking-widest uppercase mb-1">Data Analyst Jr.</p>
                <p className="text-muted text-xs">SQL · Python · Power BI</p>
              </div>
              <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <HighlightCard key={h.title} {...h} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
