import { FadeIn, MeridianDivider } from '../App'

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const pilares = [
  {
    num: '01',
    titulo: 'O Corpo Guarda o Bloqueio: os Pontos Certos Abrem o Fluxo',
    texto: `O trauma não fica só na mente. Ele fica no corpo: tensão no peito, nó na garganta, peso nos ombros. A Terapia Oriental trabalha com pontos específicos do corpo chamados meridianos. Esses pontos são mapeados há milênios porque o sistema nervoso os reconhece. Quando um ponto de bloqueio é estimulado com precisão, o corpo responde com algo mensurável: a respiração abre, o choro que estava represado finalmente vem, a tensão que travava cede. Não é crença. É o sistema nervoso respondendo a um estímulo que ele já conhece. A maioria dos adolescentes que chegam até mim em estado grave nunca conseguiu descrever o que sentem com palavras. Mas o corpo mostra. E é pelo corpo que começamos.`,
  },
  {
    num: '02',
    titulo: 'Os Pais Fazem Parte do Tratamento',
    texto: `Os pais não ficam do lado de fora do processo. Eles fazem parte do tratamento. Ensino técnicas simples de pontos que os próprios pais aplicam em casa, transformando o momento de crise em um gesto de conexão, não de desespero.`,
  },
  {
    num: '03',
    titulo: 'Os Casos Difíceis São os Que Eu Escolhi',
    texto: `Não recuso os casos difíceis. Os jovens com ideação suicida, com automutilação, com o olhar apagado que assusta o próprio psiquiatra. É exatamente para esses casos que eu me preparei.`,
  },
]

export default function Method() {
  return (
    <section
      id="metodo"
      className="bg-bg-light section-padding"
      aria-label="Método terapêutico"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Divisor meridiano no topo */}
        <FadeIn>
          <MeridianDivider />
        </FadeIn>

        {/* Título da seção */}
        <FadeIn delay={0.1}>
          <p className="eyebrow-ultra text-secondary text-center mt-4">O Método</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading text-center mt-3 leading-tight">
            Terapia Oriental Sistêmica e Afetiva
          </h2>
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.2}>
          <p className="mt-8 text-text-main/80 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            "Eu não faço terapia de conversa. Eu trabalho com o corpo antes de trabalhar com as palavras. O que faço chega nos pontos onde o trauma fica preso, e que nenhuma consulta de cinquenta minutos de diálogo consegue acessar."
          </p>
        </FadeIn>

        {/* 3 Pilares */}
        <div className="mt-16 md:mt-20 space-y-14">
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.num} delay={i * 0.15}>
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
                  {pilar.num}
                </span>
                <div className="pt-8">
                  <h3 className="font-display text-xl md:text-2xl text-heading leading-snug">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-4 text-text-main/75 text-base md:text-lg leading-relaxed">
                    {pilar.texto}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não Prometo — blockquote */}
        <FadeIn delay={0.45}>
          <blockquote className="mt-16 border-l-2 border-secondary pl-6 py-2">
            <p className="text-text-main/70 text-base md:text-lg leading-relaxed italic">
              "Não prometo resultado sem o comprometimento da família. Não peço que você abandone abruptamente nenhum tratamento em curso."
            </p>
          </blockquote>
        </FadeIn>

        {/* Transição */}
        <FadeIn delay={0.55}>
          <p className="mt-12 text-center text-text-main/60 text-base md:text-lg leading-relaxed">
            Você deve estar se perguntando quem é essa pessoa que diz tudo isso. Deixa eu te contar de onde eu vim para chegar até aqui.
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="btn-shimmer-outline"
            >
              Conhecer a Flora
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
