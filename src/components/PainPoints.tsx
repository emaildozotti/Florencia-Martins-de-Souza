import { FadeIn, MeridianDivider } from '../App'

const dores = [
  {
    num: '01',
    texto:
      'Você vê o sinal no braço dele e congela. Não sabe se grita, se abraça, se finge que não viu.',
  },
  {
    num: '02',
    texto:
      'Ele toma o remédio. Para de chorar. Mas o brilho nos olhos também foi embora.',
  },
  {
    num: '03',
    texto:
      'Você tenta chegar perto e ele se afasta. O filho que te olhava com amor agora te trata como adversário.',
  },
  {
    num: '04',
    texto:
      'Teve um momento em que você pensou: "será que é frescura?" E depois se odiou por ter pensado isso.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="bg-primary section-padding"
      aria-label="Dores dos pais"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Abertura */}
        <FadeIn>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-off-white leading-relaxed text-center max-w-3xl mx-auto">
            Você já olhou para o seu filho e sentiu que ele está lá, mas não está mais presente?
          </p>
        </FadeIn>

        {/* Cards das 4 dores */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dores.map((dor, i) => (
            <FadeIn key={dor.num} delay={i * 0.12}>
              <div className="relative p-10 bg-primary-dark/40 border border-off-white/10">
                {/* Número decorativo */}
                <span
                  className="absolute top-6 right-8 font-sans font-600 text-5xl leading-none select-none"
                  style={{ color: '#D4691E', opacity: 0.3, fontSize: '3rem', fontWeight: 600 }}
                  aria-hidden="true"
                >
                  {dor.num}
                </span>
                <p className="text-off-white/90 text-lg leading-relaxed pr-12">
                  {dor.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Parágrafo de transição — separado dos cards */}
        <FadeIn delay={0.5}>
          <p className="mt-16 text-center font-display text-xl md:text-2xl text-secondary italic">
            Essas dores têm nome. E elas também têm um caminho de volta.
          </p>
        </FadeIn>

        {/* Divisor meridiano */}
        <FadeIn delay={0.6}>
          <MeridianDivider dark />
        </FadeIn>
      </div>
    </section>
  )
}
