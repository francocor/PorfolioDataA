# Franco Cornejo - Portfolio Data Analytics

Portfolio profesional desarrollado con **React**, **Vite** y **Tailwind CSS**. Proyecto fullstack que presenta casos de estudio en análisis de datos, visualización de KPIs y toma de decisiones basada en datos.

## 🎯 Sobre el Portfolio

Este portfolio muestra experiencia en:
- **Análisis de Datos** - Extracción de insights y patrones significativos
- **Bases de Datos** - Diseño, modelado y consultas SQL avanzadas
- **Visualización** - Dashboards interactivos y reportes ejecutivos en Power BI
- **Desarrollo** - Aplicaciones web y fullstack con tecnologías modernas

## 📊 Proyectos Destacados

### NovaRetail — Análisis de Negocio para E-commerce

Análisis end-to-end del rendimiento comercial de un e-commerce, enfocado en ventas, clientes, productos, marketing y devoluciones.

**Stack Tecnológico:**
- **MySQL** - Validación, limpieza y estructuración de datos
- **SQL** - Análisis exploratorio y construcción de KPIs
- **Power BI** - Dashboards interactivos y reportes ejecutivos

**Características:**
- ✅ Modelado de base de datos relacional normalizado
- ✅ Análisis de patrones de crecimiento y estacionalidad
- ✅ Evaluación de eficiencia comercial por canal
- ✅ Identificación de categorías críticas y oportunidades
- ✅ Comparación de períodos (Q3 vs Q4 2025)
- ✅ 3 dashboards especializados con KPIs principales

**Hallazgos Clave:**
- Crecimiento sostenido en volumen de ventas y pedidos
- Concentración del 47% del negocio en categoría Computación
- Incremento de reembolsos en Q4 (6.95% tasa de devolución)
- Mejores tasas de conversión: Referidos (4.89%) y Email (4.31%)
- Canal Web domina con $2,022.64M en ventas (57% del total)

## 🚀 Ruta de Trabajo

El proceso metodológico incluye:

1. **Validación y Limpieza** - MySQL: Integridad de datos, valores nulos, duplicados
2. **Análisis Exploratorio** - SQL: Distribuciones, tendencias, correlaciones
3. **Construcción de KPIs** - Métricas clave de negocio normalizadas
4. **Visualización** - Power BI: Dashboards interactivos polished

## 🛠️ Tech Stack

**Frontend:**
- React 18.3.1
- Vite 5.3.1
- Tailwind CSS 3.4.4
- Framer Motion 11.0.0 (animaciones)
- Lucide React 0.396.0 (iconos)

**Desarrollo:**
- Node.js con npm
- PostCSS para processing de estilos
- Git para control de versiones

## 📦 Instalación y Setup

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

```bash
# Clonar repositorio
git clone https://github.com/francocor/PorfolioDataA.git
cd PorfolioDataA

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de build
npm run preview
```

El servidor de desarrollo estará disponible en `http://localhost:5173/`

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navegación principal
│   │   ├── Hero.jsx                # Sección inicial
│   │   ├── About.jsx               # Quién soy
│   │   ├── Stack.jsx               # Stack tecnológico
│   │   ├── Projects.jsx            # Proyecto destacado (Gestión Médica)
│   │   ├── DataAnalyticsProjects.jsx   # Nueva: Proyectos Data Analytics
│   │   ├── NovaRetailDetail.jsx    # Nueva: Detalle NovaRetail
│   │   ├── Experience.jsx          # Experiencia profesional
│   │   ├── Learning.jsx            # Aprendizaje continuo
│   │   ├── Contact.jsx             # Contacto
│   │   └── Footer.jsx              # Pie de página
│   ├── App.jsx                     # Componente raíz
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globales
├── public/
│   ├── projects/
│   │   └── nova-retail/
│   │       ├── dashboards/         # Imágenes de dashboards
│   │       └── downloads/          # Archivos descargables
│   └── favicon.svg
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Diseño y UX

El portfolio mantiene una estética consistente:

- **Paleta de Colores:** Tema oscuro profesional con acentos indigo (#6366f1)
- **Tipografía:** Inter para cuerpo, JetBrains Mono para código
- **Animaciones:** Transiciones suaves con Framer Motion
- **Responsive:** Diseño adaptable para desktop, tablet y mobile

### Componentes Visuales
- Cards con efectos hover y borders gradientes
- Modales con backdrop blur
- Galerías de imágenes interactivas
- Botones con estados visuales claros
- Iconografía profesional (Lucide)

## 📊 Secciones del Portfolio

### 1. Hero
Primera impresión con llamada a acción y enlaces sociales.

### 2. About
Descripción profesional del perfil con highlights clave.

### 3. Stack Tecnológico
Visualización de tecnologías dominio: Bases de datos, Lenguajes, BI, Backend.

### 4. Proyectos Destacados
- **Proyecto 1:** Aplicación Web de Gestión Médica (en desarrollo)
- **Proyecto 2:** NovaRetail - Análisis de Negocio E-commerce **(NUEVO)**

### 5. Data Analytics Projects
Sección especializada en proyectos de análisis de datos con detalle expandible.

### 6. Timeline de Aprendizaje
Educación continua y certificaciones en progreso.

### 7. Contacto
Formulario y enlaces para conexión profesional.

## 🆕 Novedad: Sección Data Analytics

La nueva sección **Data Analytics Projects** incluye:

- **Modal Detallado** con información completa del proyecto
- **Secciones Estructuradas:**
  - Contexto del negocio
  - Objetivos analíticos
  - Proceso metodológico (4 fases)
  - Galería de 3 dashboards principales
  - Hallazgos clave con visulaización clara
  - Conclusiones e impacto
  - Centro de descargas (PDF e informe Power BI)

- **Recursos Descargables:**
  - 📄 Informe en PDF con análisis detallado
  - 📦 Archivo PBIX del proyecto Power BI completo

## ✨ Características Técnicas

### Animaciones y Transiciones
- Fade-in en scroll (useInView)
- Transformaciones suaves hover
- Stagger animations en listas
- Modal transitions con backdrop blur

### Interactividad
- Secciones expandibles con state
- Descargas de archivos
- Navegación smooth
- Efectos visuales en hover

### Accesibilidad
- Estructura semántica HTML
- Colores con contraste WCAG
- Navegación por teclado
- Textos alternativos en imágenes

### Performance
- Lazy loading de componentes
- Optimización de imágenes
- Build optimizado con Vite
- CSS modular con Tailwind

## 🔗 Enlaces Importantes

- **Portfolio Live:** [Próximamente]
- **GitHub Repo:** https://github.com/francocor/PorfolioDataA
- **LinkedIn:** https://www.linkedin.com/in/franco-cornejo-3b3aaa209/
- **Email:** Francocornejoc15@gmail.com

## 📝 Notas para Desarrolladores

### Agregar nuevos proyectos de Data Analytics

1. Crear carpeta en `public/projects/[nombre-proyecto]/`
2. Agregar imágenes a `dashboards/` y archivos a `downloads/`
3. Agregar objeto proyecto en array de `DataAnalyticsProjects.jsx`
4. Crear componente modal similar a `NovaRetailDetail.jsx`
5. Mantener consistencia de estilos y animaciones

### Personalización de estilos

Los colores y temas están centralizados en `tailwind.config.js`:
```javascript
colors: {
  bg: '#0a0a0f',           // Fondo principal
  accent: '#6366f1',       // Color principal (indigo)
  'accent-light': '#818cf8',
  text: '#f1f5f9',         // Texto principal
  'text-secondary': '#94a3b8',
  // ... más colores
}
```

## 🤝 Contribuciones

Este es un proyecto personal de portfolio. Las sugerencias y feedback son bienvenidas.

## 📄 Licencia

Este proyecto es de código abierto. Siéntase libre de usarlo como referencia o base para su portfolio.

---

**Último actualizado:** Abril 2026  
**Versión:** 2.0 (Con sección Data Analytics)  
**Desarrollado por:** Franco Cornejo
