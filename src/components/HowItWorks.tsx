import { FadeIn, MeridianDivider } from '../App'

const passos = [
  {
    num: '01',
    titulo: 'Conversa inicial gratuita',
    texto:
      'Começamos com uma conversa inicial, gratuita e sem compromisso. Você me conta o que está acontecendo. Eu escuto sem julgamento. Juntos avaliamos se faz sentido seguir.',
  },
  {
    num: '02',
    titulo: 'O corpo responde na primeira sessão',
    texto:
      'Nas sessões, trabalhamos com pontos específicos do corpo. Você vai sentir uma diferença ainda durante a sessão. O corpo não mente.',
  },
  {
    num: '03',
    titulo: 'A reconexão acontece em casa também',
    texto:
      'Com o avanço do processo, o jovem reconecta com o que é dele: a leveza, o brilho, a presença. E os pais aprendem a sustentar essa reconexão em casa.',
  },
]

const desmistificacao = [
  'Não é ritual espiritual. É estimulação precisa de pontos que o sistema nervoso já reconhece.',
  'Não é necessário acreditar para funcionar. O corpo responde ao estímulo independente de crenças.',
  'Não há agulhas. O trabalho é feito com toque e pressão em pontos mapeados.',
  'Não é hipnose. O jovem permanece consciente e no controle durante toda a sessão.',
  'Não substitui acompanhamento médico. Atua em parceria com outros profissionais quando necessário.',
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-bg-light section-padding"
      aria-label="Como funciona"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Título */}
        <FadeIn>
          <p className="eyebrow-ultra text-secondary text-center">O processo</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading text-center mt-3 leading-tight">
            Do primeiro contato ao fluxo vital de volta
          </h2>
        </FadeIn>

        {/* 3 Passos */}
        <div className="mt-16 space-y-12">
          {passos.map((passo, i) => (
            <FadeIn key={passo.num} delay={i * 0.15}>
              <div className="relative pl-8 md:pl-16">
                {/* Numeração decorativa */}
                <span
                  className="absolute left-0 top-0 font-sans leading-none select-none"
                  style={{
                    fontWeight: 600,
                    fontSize: '5rem',
                    color: '#D4691E',
                    opacity: 0.2,
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {passo.num}
                </span>
                <div className="pt-8">
                  <h3 className="font-display text-xl md:text-2xl text-heading">
                    {passo.titulo}
                  </h3>
                  <p className="mt-3 text-text-main/75 text-base md:text-lg leading-relaxed">
                    {passo.texto}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divisor meridiano */}
        <FadeIn delay={0.45}>
          <div className="mt-16">
            <MeridianDivider />
          </div>
        </FadeIn>

        {/* Desmistificação */}
        <FadeIn delay={0.5}>
          <h3 className="font-display text-2xl md:text-3xl text-heading text-center mt-8">
            O que isso não é
          </h3>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {desmistificacao.map((item, i) => (
            <FadeIn key={i} delay={0.55 + i * 0.08}>
              <div className="flex items-start gap-4 py-4 border-b border-text-main/10">
                <span
                  className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#D4691E20' }}
                  aria-hidden="true"
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#D4691E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-text-main/80 text-base md:text-lg leading-relaxed">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Remove ansiedade — online */}
        <FadeIn delay={0.95}>
          <div className="mt-12 p-8 bg-bg-warm border-l-2 border-secondary">
            <p className="text-text-main/80 text-base md:text-lg leading-relaxed">
              Se você está com dúvida se online funciona: sim, funciona. Uma parte do protocolo é ensinar os próprios pais a aplicar os pontos, e isso pode ser feito à distância com orientação em tempo real.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
