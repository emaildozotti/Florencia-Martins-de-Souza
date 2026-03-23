import { useEffect, useState } from 'react'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const PlaceholderPhoto = () => (
  <svg
    viewBox="0 0 400 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-cover"
    aria-label="Foto de Flora"
  >
    <rect width="400" height="560" fill="#2A1020" />
    <circle cx="200" cy="200" r="100" fill="#4A1530" />
    <rect x="80" y="320" width="240" height="200" rx="8" fill="#4A1530" />
    <text x="200" y="490" textAnchor="middle" fill="#6B1A38" fontSize="14" fontFamily="serif">
      Flora
    </text>
    <text x="200" y="512" textAnchor="middle" fill="#D4691E" fontSize="11" fontFamily="sans-serif">
      {'{URL_FOTO_HERO}'}
    </text>
  </svg>
)

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Header — visible only on md+ */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <span
          className="font-display italic text-off-white text-xl tracking-wide"
        >
          Flora
        </span>
        <a
          href="https://wa.me/5595991123215?text=Olá%2C%20Flora.%20Vi%20sua%20página%20e%20gostaria%20de%20entender%20melhor%20como%20a%20Terapia%20Oriental%20Sistêmica%20e%20Afetiva%20pode%20ajudar%20no%20caso%20do%20meu%20filho(a).%20Quando%20podemos%20conversar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer text-sm"
        >
          Falar com a Flora
        </a>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-dark overflow-hidden"
        aria-label="Hero"
      >
        {/* Aurora blobs */}
        <div
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6B1A3859 0%, transparent 70%)',
            animation: 'aurora-float-1 14s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[-8%] w-[45vw] h-[45vw] max-w-[560px] max-h-[560px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #D4691E3D 0%, transparent 70%)',
            animation: 'aurora-float-2 18s ease-in-out infinite',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] max-w-[420px] max-h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #F0E8DD28 0%, transparent 70%)',
            animation: 'aurora-float-3 22s ease-in-out infinite',
            filter: 'blur(100px)',
          }}
        />

        {/* Layout: Mobile empilhado / Desktop split */}
        <div className="relative z-10 flex flex-col md:flex-row min-h-screen">

          {/* TEXT — always first in DOM (mobile: full width; desktop: 55%) */}
          <div className="flex flex-col justify-center px-6 py-20 md:py-0 md:px-16 lg:px-24 w-full md:w-[55%]">
            {/* Mobile: top spacing compensa falta de header */}
            <div className="pt-8 md:pt-0">
              <p className="eyebrow-ultra text-secondary hero-fade-0">
                QUANDO A DOR CHEGA ANTES DAS PALAVRAS
              </p>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-off-white mt-4 hero-fade-1"
              >
                O grito de socorro do seu filho passa pelo corpo.{' '}
                <em className="text-secondary">Não só pelas palavras.</em>
              </h1>

              <p className="text-off-white/70 text-lg md:text-xl leading-relaxed mt-6 max-w-lg hero-fade-2">
                Existe um caminho que chega onde a conversa ainda não conseguiu.
              </p>

              <div className="mt-8 hero-fade-3">
                <button
                  onClick={() => scrollToSection('dores')}
                  className="btn-shimmer"
                >
                  Entenda como isso funciona
                </button>
              </div>
            </div>
          </div>

          {/* PHOTO — second in DOM (mobile: below text; desktop: 45% right) */}
          <div className="relative w-full md:w-[45%] h-[60vw] md:h-auto flex-shrink-0">
            {/* Photo frame */}
            <div
              className="absolute inset-4 md:inset-0 overflow-hidden"
              style={{
                rotate: '-2deg',
                boxShadow: '0 0 0 1px #F5EDE4, 0 24px 80px rgba(0,0,0,0.5)',
                transformOrigin: 'center center',
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="Florencia Martins de Souza — Flora, terapeuta oriental"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    svg.setAttribute('viewBox', '0 0 400 560')
                    svg.style.cssText = 'width:100%;height:100%;'
                    svg.innerHTML = `
                      <rect width="400" height="560" fill="#2A1020"/>
                      <circle cx="200" cy="200" r="100" fill="#4A1530"/>
                      <rect x="80" y="320" width="240" height="200" rx="8" fill="#4A1530"/>
                      <text x="200" y="490" text-anchor="middle" fill="#6B1A38" font-size="14" font-family="serif">Flora</text>
                      <text x="200" y="512" text-anchor="middle" fill="#D4691E" font-size="11" font-family="sans-serif">{URL_FOTO_HERO}</text>
                    `
                    parent.appendChild(svg)
                  }
                }}
              />
              <PlaceholderPhoto />
            </div>

            {/* Gradient overlay bottom on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-24 md:hidden bg-gradient-to-t from-dark to-transparent" />
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20">
          <span className="eyebrow-ultra text-off-white/40 text-[10px]">role para baixo</span>
          <div className="w-px h-8 bg-gradient-to-b from-secondary/60 to-transparent animate-pulse" />
        </div>
      </section>
    </>
  )
}
