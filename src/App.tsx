import { motion } from 'motion/react'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VideoSection from './components/VideoSection'
import Method from './components/Method'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// FadeIn component — reusable across all sections
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20px 0px' }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

// MeridianDivider — elemento decorativo único de Flora
export const MeridianDivider = ({ dark = false }: { dark?: boolean }) => (
  <div className="meridian-divider">
    <div className="relative flex items-center w-48">
      <div className={`h-px flex-1 ${dark ? 'bg-secondary/60' : 'bg-secondary'}`} />
      <div className="absolute left-1/4 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-secondary" />
      <div className="absolute left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-secondary" />
      <div className="absolute left-3/4 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-secondary" />
    </div>
  </div>
)

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PainPoints />
      <VideoSection />
      <Method />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
