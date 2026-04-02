import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Download, X } from 'lucide-react'
import NovaRetailDetail from './NovaRetailDetail'

const projects = [
  {
    id: 'nova-retail',
    title: 'NovaRetail — Análisis de negocio para e-commerce',
    category: 'Data Analytics / Business Intelligence',
    short_description: 'Análisis integral de un e-commerce orientado a ventas, clientes, productos, marketing y devoluciones, realizado con MySQL, SQL y Power BI.',
    stack: ['MySQL', 'SQL', 'Power BI'],
    thumbnail: '/projects/nova-retail/dashboards/thumbnail.png',
    featured: true,
  },
]

export default function DataAnalyticsProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="data-analytics" className="py-24 md:py-32">
        <div className="section-container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="section-label">Data Analytics</span>
            <h2 className="section-title">
              Proyectos destacados en{' '}
              <span className="gradient-text">análisis de datos</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Casos de análisis end-to-end con foco en extracción de insights,
              visualización de KPIs y toma de decisiones basada en datos.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-base hover:border-accent/30 relative overflow-hidden transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  aria-hidden
                  className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, #6366f110 0%, transparent 70%)',
                    filter: 'blur(50px)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-mono text-accent tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm md:text-base max-w-xl mb-6">
                        {project.short_description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                      className="btn-primary shrink-0"
                    >
                      Ver detalle
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <NovaRetailDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
