import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, Package, BarChart3, TrendingUp, Layers } from 'lucide-react'

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

// Componentes SVG para dashboards
const DashboardPreview = ({ type }) => {
  if (type === 'executive') {
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="#16161f" />
        <rect width="800" height="450" fill="url(#grad1)" opacity="0.5" />
        
        {/* Header */}
        <text x="40" y="40" fontSize="20" fontWeight="bold" fill="#f1f5f9">
          Resumen Ejecutivo
        </text>
        
        {/* KPI Cards */}
        <g>
          {/* Card 1 */}
          <rect x="40" y="70" width="170" height="80" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="8" />
          <text x="55" y="95" fontSize="14" fill="#94a3b8">Ventas Netas</text>
          <text x="55" y="125" fontSize="18" fontWeight="bold" fill="#f1f5f9">$3,548.09M</text>
          
          {/* Card 2 */}
          <rect x="230" y="70" width="170" height="80" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="8" />
          <text x="245" y="95" fontSize="14" fill="#94a3b8">Total Pedidos</text>
          <text x="245" y="125" fontSize="18" fontWeight="bold" fill="#f1f5f9">8,260</text>
          
          {/* Card 3 */}
          <rect x="420" y="70" width="170" height="80" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="8" />
          <text x="435" y="95" fontSize="14" fill="#94a3b8">Clientes Únicos</text>
          <text x="435" y="125" fontSize="18" fontWeight="bold" fill="#f1f5f9">2,929</text>
          
          {/* Card 4 */}
          <rect x="610" y="70" width="150" height="80" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="8" />
          <text x="625" y="95" fontSize="14" fill="#94a3b8">Ticket Promedio</text>
          <text x="625" y="125" fontSize="16" fontWeight="bold" fill="#f1f5f9">$429.55</text>
        </g>
        
        {/* Chart */}
        <g>
          <text x="40" y="200" fontSize="14" fill="#94a3b8">Ventas por Mes</text>
          <polyline points="40,380 100,350 160,360 220,340 280,330 340,310 400,295 460,280 520,270 580,260" 
                    fill="none" stroke="#6366f1" strokeWidth="2" />
          <circle cx="40" cy="380" r="3" fill="#6366f1" />
          <circle cx="100" cy="350" r="3" fill="#6366f1" />
          <circle cx="160" cy="360" r="3" fill="#6366f1" />
          <circle cx="220" cy="340" r="3" fill="#6366f1" />
          <circle cx="280" cy="330" r="3" fill="#6366f1" />
          <circle cx="340" cy="310" r="3" fill="#6366f1" />
          <circle cx="400" cy="295" r="3" fill="#6366f1" />
          <circle cx="460" cy="280" r="3" fill="#6366f1" />
          <circle cx="520" cy="270" r="3" fill="#6366f1" />
          <circle cx="580" cy="260" r="3" fill="#6366f1" />
          <line x1="40" y1="390" x2="580" y2="390" stroke="#374151" strokeWidth="1" />
        </g>
      </svg>
    )
  }
  
  if (type === 'products') {
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="#16161f" />
        <rect width="800" height="450" fill="url(#grad2)" opacity="0.5" />
        
        <text x="40" y="40" fontSize="20" fontWeight="bold" fill="#f1f5f9">
          Producto y Categorías
        </text>
        
        {/* Category bars */}
        <g>
          <text x="40" y="80" fontSize="12" fill="#94a3b8">Computación</text>
          <rect x="40" y="90" width="320" height="20" fill="#6366f1" rx="4" />
          <text x="370" y="105" fontSize="12" fill="#f1f5f9">$2,452.22M</text>
          
          <text x="40" y="140" fontSize="12" fill="#94a3b8">Gaming</text>
          <rect x="40" y="150" width="80" height="20" fill="#818cf8" rx="4" />
          <text x="130" y="165" fontSize="12" fill="#f1f5f9">$247.83M</text>
          
          <text x="40" y="200" fontSize="12" fill="#94a3b8">Tablets</text>
          <rect x="40" y="210" width="70" height="20" fill="#818cf8" rx="4" />
          <text x="120" y="225" fontSize="12" fill="#f1f5f9">$210.89M</text>
          
          <text x="40" y="260" fontSize="12" fill="#94a3b8">Audio</text>
          <rect x="40" y="270" width="65" height="20" fill="#818cf8" rx="4" />
          <text x="115" y="285" fontSize="12" fill="#f1f5f9">$195.08M</text>
          
          <text x="40" y="320" fontSize="12" fill="#94a3b8">Accesorios</text>
          <rect x="40" y="330" width="45" height="20" fill="#818cf8" rx="4" />
          <text x="95" y="345" fontSize="12" fill="#f1f5f9">$88.61M</text>
        </g>
        
        {/* Top products table */}
        <g>
          <text x="500" y="80" fontSize="14" fontWeight="bold" fill="#f1f5f9">Top 5 Productos</text>
          <line x1="500" y1="90" x2="770" y2="90" stroke="#374151" strokeWidth="1" />
          
          <text x="510" y="115" fontSize="11" fill="#94a3b8">Notebook Dell XPS</text>
          <text x="680" y="115" fontSize="11" fill="#6366f1">$394.56M</text>
          
          <text x="510" y="145" fontSize="11" fill="#94a3b8">Monitor 27" 4K</text>
          <text x="680" y="145" fontSize="11" fill="#6366f1">$86.38M</text>
          
          <text x="510" y="175" fontSize="11" fill="#94a3b8">Mouse Logitech</text>
          <text x="680" y="175" fontSize="11" fill="#6366f1">$45.21M</text>
        </g>
      </svg>
    )
  }
  
  if (type === 'marketing') {
    return (
      <svg viewBox="0 0 800 450" className="w-full h-full">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="#16161f" />
        <rect width="800" height="450" fill="url(#grad3)" opacity="0.5" />
        
        <text x="40" y="40" fontSize="20" fontWeight="bold" fill="#f1f5f9">
          Marketing y Performance
        </text>
        
        {/* Marketing spend */}
        <g>
          <text x="40" y="80" fontSize="12" fontWeight="bold" fill="#f1f5f9">Gasto Marketing por Canal</text>
          
          <text x="40" y="110" fontSize="11" fill="#94a3b8">Google Ads</text>
          <rect x="40" y="120" width="200" height="18" fill="#6366f1" rx="4" />
          <text x="250" y="133" fontSize="11" fill="#f1f5f9">$3,746M</text>
          
          <text x="40" y="155" fontSize="11" fill="#94a3b8">Instagram</text>
          <rect x="40" y="165" width="120" height="18" fill="#818cf8" rx="4" />
          <text x="170" y="178" fontSize="11" fill="#f1f5f9">$2,412M</text>
          
          <text x="40" y="200" fontSize="11" fill="#94a3b8">Facebook Ads</text>
          <rect x="40" y="210" width="75" height="18" fill="#818cf8" rx="4" />
          <text x="125" y="223" fontSize="11" fill="#f1f5f9">$1,530M</text>
        </g>
        
        {/* Conversion rates */}
        <g>
          <text x="500" y="80" fontSize="12" fontWeight="bold" fill="#f1f5f9">Tasa Conversión %</text>
          
          <rect x="500" y="100" width="120" height="30" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="6" />
          <text x="520" y="115" fontSize="10" fill="#94a3b8">Referidos</text>
          <text x="560" y="127" fontSize="16" fontWeight="bold" fill="#6366f1">4.89%</text>
          
          <rect x="640" y="100" width="120" height="30" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="6" />
          <text x="660" y="115" fontSize="10" fill="#94a3b8">Email</text>
          <text x="700" y="127" fontSize="16" fontWeight="bold" fill="#6366f1">4.31%</text>
          
          <rect x="500" y="150" width="120" height="30" fill="#1e1e2e" stroke="#818cf8" strokeWidth="1" rx="6" />
          <text x="520" y="165" fontSize="10" fill="#94a3b8">Orgánico</text>
          <text x="560" y="177" fontSize="16" fontWeight="bold" fill="#818cf8">3.28%</text>
          
          <rect x="640" y="150" width="120" height="30" fill="#1e1e2e" stroke="#818cf8" strokeWidth="1" rx="6" />
          <text x="660" y="165" fontSize="10" fill="#94a3b8">Google Ads</text>
          <text x="700" y="177" fontSize="16" fontWeight="bold" fill="#818cf8">2.92%</text>
        </g>
        
        {/* ROI indicator */}
        <rect x="40" y="310" width="720" height="100" fill="#1e1e2e" stroke="#6366f1" strokeWidth="1" rx="8" />
        <text x="60" y="340" fontSize="12" fontWeight="bold" fill="#f1f5f9">ROI por Canal</text>
        
        <circle cx="150" cy="370" r="25" fill="#6366f1" />
        <text x="145" y="378" fontSize="12" fontWeight="bold" fill="#fff">Web</text>
        
        <circle cx="280" cy="370" r="25" fill="#818cf8" />
        <text x="270" y="378" fontSize="11" fontWeight="bold" fill="#fff">Mobile</text>
        
        <circle cx="410" cy="370" r="25" fill="#c4b5fd" />
        <text x="395" y="378" fontSize="11" fontWeight="bold" fill="#000">Mvkt</text>
      </svg>
    )
  }
}

export default function NovaRetailDetail({ project, onClose }) {
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
            {/* Header con botón cerrar */}
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
              {/* Hero Section */}
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

              {/* Imagen principal destacada */}
              <motion.div
                variants={itemVariants}
                className="card-base overflow-hidden group"
              >
                <div className="relative bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl overflow-hidden">
                  <DashboardPreview type="executive" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <p className="text-xs text-text-secondary font-mono tracking-widest uppercase mt-3">
                  Resumen Ejecutivo
                </p>
              </motion.div>

              {/* Contexto */}
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

              {/* Objetivo */}
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

              {/* Proceso de trabajo */}
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

              {/* Dashboards - Galería de imágenes */}
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
                      desc: 'Gasto en marketing, ROI por canal, sesiones y tasa de conversión.',
                    },
                  ].map((dashboard) => (
                    <motion.div
                      key={dashboard.title}
                      whileHover={{ scale: 1.02 }}
                      className="card-base overflow-hidden group"
                    >
                      <div className="relative bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-lg overflow-hidden mb-4 h-48">
                        <DashboardPreview type={dashboard.type} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <h4 className="font-semibold text-text mb-2">{dashboard.title}</h4>
                      <p className="text-xs text-text-secondary">{dashboard.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hallazgos principales */}
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
                    'Google Ads lidera inversión pero con menor ROI relativo',
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

              {/* Conclusiones / Impacto */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-2xl font-bold text-text">Conclusiones e impacto</h2>
                <div className="card-base space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    El análisis reveló oportunidades significativas para optimizar la
                    operación del e-commerce. La identificación de categorías críticas
                    y canales de mayor conversión permite orientar recursos hacia
                    iniciativas de mayor ROI. Los datos sugieren que mejorar la
                    experiencia en categorías de alto volumen y evaluar la calidad de
                    productos (relación devoluciones) serían acciones estratégicas clave.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    El dashboard desarrollado proporciona una herramienta de monitoreo
                    continuo que facilita la toma de decisiones ágil basada en datos
                    reales del negocio.
                  </p>
                </div>
              </motion.div>

              {/* Descargas */}
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
                        'NovaRetail-ProyectoPowerBI.pbix',
                        '/projects/nova-retail/downloads/NovaRetail-ProyectoPowerBI.pbix'
                      )
                    }
                    className="card-base border-accent/20 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 p-6 text-center group cursor-pointer"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-4">
                      <Package className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-text mb-1">Power BI</h4>
                    <p className="text-xs text-text-secondary mb-4">
                      Archivo PBIX del proyecto completo
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-accent">
                      <Download className="w-4 h-4" />
                      Descargar
                    </div>
                  </motion.button>
                </div>
              </motion.div>

              {/* Cierre */}
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
    </AnimatePresence>
  )
}
