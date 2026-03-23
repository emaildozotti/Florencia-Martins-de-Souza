import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from '../App'

const testimonials = [
  {
    nome: 'Renata',
    resultado: 'Filha voltou para a escola em 3 meses',
    texto:
      'Minha filha estava se automutilando e eu estava em pânico. Já tínhamos ido a dois psicólogos e um psiquiatra. Nas primeiras sessões com a Flora, ela chorou de um jeito que eu nunca tinha visto, e depois disse que sentiu um peso sair. Hoje, três meses depois, ela vai para a escola de novo.',
    destaque: 'Pela primeira vez em meses vi o brilho voltando nos olhos dela.',
    atribuicao: '— Renata, mãe de adolescente de 15 anos, São Paulo',
  },
  {
    nome: 'Marcos',
    resultado: 'Filho voltou a se conectar após 2 anos',
    texto:
      'Meu filho estava tomando remédio e parecia um zumbi. Olho apagado, sem reação. A Flora me ensinou a trabalhar pontos com ele em casa. Na segunda semana ele me abraçou espontaneamente pela primeira vez em dois anos.',
    destaque: 'Aprendi que minha presença, orientada corretamente, faz parte da cura.',
    atribuicao: '— Marcos, pai de adolescente de 17 anos, Manaus',
  },
  {
    nome: 'Cleide',
    resultado: 'Paz e compreensão de volta para a família',
    texto:
      'Eu tinha vergonha de admitir que pensei que era frescura do meu filho. A Flora não me julgou. Ela me explicou, no corpo, o que estava acontecendo com ele. Hoje eu entendo. E isso mudou como eu trato ele.',
    destaque: 'Recuperei o filho que eu achei que tinha perdido para sempre.',
    atribuicao: '— Cleide, mãe de adolescente de 14 anos, Boa Vista',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const prev = () => {
    const idx = (current - 1 + testimonials.length) % testimonials.length
    goTo(idx)
  }

  const next = () => {
    const idx = (current + 1) % testimonials.length
    goTo(idx)
  }

  return (
    <section
      id="depoimentos"
      className="bg-dark section-padding"
      aria-label="Depoimentos"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Título */}
        <FadeIn>
          <p className="eyebrow-ultra text-secondary text-center">O que dizem os pais</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-off-white text-center mt-3 leading-tight">
            Palavras de quem viveu a transformação
          </h2>
        </FadeIn>

        {/* Carrossel */}
        <FadeIn delay={0.2}>
          <div className="relative mt-16 min-h-[380px] md:min-h-[320px]">
            {/* Aspa decorativa */}
            <div
              className="absolute top-0 left-0 select-none pointer-events-none leading-none"
              style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '8rem',
                color: '#6B1A38',
                opacity: 0.2,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-16 px-4 md:px-8"
              >
                {/* Resultado badge */}
                <span className="eyebrow-ultra text-secondary text-[10px]">
                  {testimonials[current].resultado}
                </span>

                {/* Texto do depoimento */}
                <p className="mt-4 text-off-white/80 text-base md:text-lg leading-relaxed">
                  {testimonials[current].texto}
                </p>

                {/* Destaque */}
                <p className="mt-6 font-display text-xl md:text-2xl text-secondary italic">
                  "{testimonials[current].destaque}"
                </p>

                {/* Atribuição */}
                <p className="mt-6 text-off-white/50 text-sm">
                  {testimonials[current].atribuicao}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Depoimento anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-secondary'
                      : 'w-2 h-2 bg-off-white/30 hover:bg-off-white/60'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Próximo depoimento"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
