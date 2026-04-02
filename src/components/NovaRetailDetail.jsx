import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, Package } from 'lucide-react'

import imagenResumenEjecutivo from "../dashboards/Imagen1Porfolio.png"
import imagenProductoCategorias from "../dashboards/Imagen2Porfolio.png"
import imagenMarketingPerformance from "../dashboards/Imagen3Porfolio.png"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const dashboardImages = {
  executive: imagenResumenEjecutivo,
  products: imagenProductoCategorias,
  marketing: imagenMarketingPerformance,
}

export default function NovaRetailDetail({ project, onClose }) {
  const [zoomedImage, setZoomedImage] = useState(null)

  const handleDownload = (fileName, filePath) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen py-8 md:py-16 px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-text">
                {project.title}
              </h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary hover:text-text" />
              </motion.button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="inline-flex items-center gap-2 flex-wrap">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                  Se desarrolló un caso de análisis de negocio para un e-commerce
                  ficticio llamado NovaRetail, con foco en la evolución de ventas,
                  comportamiento de clientes, rendimiento por categorías y productos,
                  eficiencia de marketing y comparación entre Q3 y Q4 de 2025.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="card-base overflow-hidden group cursor-pointer"
                onClick={() => setZoomedImage({ src: dashboardImages.executive, alt: 'Resumen Ejecutivo' })}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={dashboardImages.executive}
                    alt="Resumen Ejecutivo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <p className="text-xs text-text-secondary font-mono tracking-widest uppercase mt-3">
                  Resumen Ejecutivo
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Contexto</h2>
                <div className="card-base space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    El proyecto analiza el negocio de un e-commerce llamado NovaRetail
                    a partir de datos de ventas, clientes, productos, sesiones web,
                    gasto en marketing y devoluciones. Este ejercicio simuló un escenario
                    real donde era necesario validar la integridad de los datos, entender
                    patrones de negocio y presentar hallazgos a stakeholders.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Objetivo</h2>
                <div className="card-base space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    Detectar patrones de crecimiento, evaluar la eficiencia comercial
                    y de adquisición, identificar categorías críticas y comparar el
                    comportamiento del negocio entre Q3 y Q4 de 2025. Los insights
                    generados permiten orientar decisiones sobre inventario, marketing
                    y experiencia de cliente.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Proceso de trabajo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Validación y limpieza',
                      desc: 'En MySQL se validaron datos de integridad, se identificaron y trataron valores nulos, duplicados y anomalías.',
                      icon: '🔍',
                    },
                    {
                      title: 'Análisis exploratorio',
                      desc: 'Consultas SQL avanzadas para descubrir distribuciones, tendencias y relaciones entre variables.',
                      icon: '📊',
                    },
                    {
                      title: 'Construcción de KPIs',
                      desc: 'Desarrollo de métricas clave: ventas, ticket promedio, tasa de devolución, costo de adquisición, etc.',
                      icon: '📈',
                    },
                    {
                      title: 'Dashboards en Power BI',
                      desc: 'Diseño de visualizaciones interactivas y reportes ejecutivos para comunicar insights de forma clara.',
                      icon: '📱',
                    },
                  ].map((step) => (
                    <motion.div
                      key={step.title}
                      whileHover={{ scale: 1.02 }}
                      className="card-base border-accent/20 hover:border-accent/40 transition-colors"
                    >
                      <div className="text-2xl mb-2">{step.icon}</div>
                      <h4 className="font-semibold text-text mb-2">{step.title}</h4>
                      <p className="text-sm text-text-secondary">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Dashboards</h2>
                <p className="text-text-secondary">
                  Tres vistas principales del análisis desarrollado en Power BI:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'Resumen Ejecutivo',
                      type: 'executive',
                      desc: 'KPIs principales del negocio: ventas, clientes, pedidos y ticket promedio.',
                    },
                    {
                      title: 'Producto y Categorías',
                      type: 'products',
                      desc: 'Análisis de rendimiento por categoría, productos top y devoluciones.',
                    },
                    {
                      title: 'Marketing y Performance',
                      type: 'marketing',
                      desc: 'Gasto en marketing, sesiones, tasa de conversión y comparación Q3 vs Q4.',
                    },
                  ].map((dashboard) => (
                    <motion.div
                      key={dashboard.title}
                      whileHover={{ scale: 1.02 }}
                      className="card-base overflow-hidden group cursor-pointer"
                      onClick={() => setZoomedImage({ src: dashboardImages[dashboard.type], alt: dashboard.title })}
                    >
                      <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                        <img
                          src={dashboardImages[dashboard.type]}
                          alt={dashboard.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                      </div>

                      <h4 className="font-semibold text-text mb-2">{dashboard.title}</h4>
                      <p className="text-xs text-text-secondary">{dashboard.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Hallazgos principales</h2>
                <div className="card-base space-y-3">
                  {[
                    'Crecimiento sostenido de ventas y pedidos durante 2025',
                    'Alta concentración del negocio en la categoría Computación',
                    'Incremento significativo de reembolsos en Q4 2025',
                    'Caída del ticket promedio en Q4 a pesar del aumento en volumen',
                    'Canales con mejor tasa de conversión: Referidos y Email',
                    'Canal de venta principal y más voluminoso: Web',
                    'Google Ads lidera inversión pero con menor eficiencia relativa',
                    'Oportunidad de optimización en categorías de alto riesgo',
                  ].map((finding, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors"
                    >
                      <span className="text-accent font-bold text-lg shrink-0">•</span>
                      <p className="text-text-secondary text-sm">{finding}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Conclusiones e impacto</h2>
                <div className="card-base space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    El análisis reveló oportunidades significativas para optimizar la
                    operación del e-commerce. La identificación de categorías críticas
                    y canales de mayor conversión permite orientar recursos hacia
                    iniciativas de mayor ROI. Los datos sugieren que mejorar la
                    experiencia en categorías de alto volumen y evaluar la calidad de
                    productos en relación con las devoluciones serían acciones estratégicas clave.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    El dashboard desarrollado proporciona una herramienta de monitoreo
                    continuo que facilita la toma de decisiones ágil basada en datos
                    reales del negocio.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Recursos y descargas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      handleDownload(
                        'NovaRetail-Informe.pdf',
                        '/projects/nova-retail/downloads/informe-nova-retail.pdf'
                      )
                    }
                    className="card-base border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 p-6 text-center group cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text mb-1">Informe PDF</h4>
                    <p className="text-xs text-text-secondary mb-4">
                      Informe detallado con análisis completo
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-accent">
                      <Download className="w-4 h-4" />
                      Descargar
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      handleDownload(
                        'NovaRetail-ProyectoPowerBI.zip',
                        '/projects/nova-retail/downloads/NovaRetail-ProyectoPowerBI.zip'
                      )
                    }
                    className="card-base border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 p-6 text-center group cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                      <Package className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text mb-1">Power BI</h4>
                    <p className="text-xs text-text-secondary mb-4">
                      Archivo ZIP del proyecto completo en Power BI
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-accent">
                      <Download className="w-4 h-4" />
                      Descargar
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-border text-center"
              >
                <p className="text-text-secondary text-sm">
                  Proyecto realizado con{' '}
                  <span className="text-accent font-mono">MySQL • SQL • Power BI</span>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-8"
            onClick={() => setZoomedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}