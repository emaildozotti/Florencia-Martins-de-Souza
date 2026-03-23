import { FadeIn, MeridianDivider } from '../App'

const WA_LINK =
  'https://wa.me/5595991123215?text=Olá%2C%20Flora.%20Vi%20sua%20página%20e%20gostaria%20de%20entender%20melhor%20como%20a%20Terapia%20Oriental%20Sistêmica%20e%20Afetiva%20pode%20ajudar%20no%20caso%20do%20meu%20filho(a).%20Quando%20podemos%20conversar%3F'

export default function Footer() {
  return (
    <footer
      id="cta-final"
      className="bg-dark py-16 md:py-24"
      aria-label="CTA final e rodapé"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        {/* Assinatura — nome da Flora */}
        <FadeIn>
          <span
            className="block font-display italic text-off-white/40 text-base mb-6 tracking-wide"
          >
            Flora
          </span>
        </FadeIn>

        {/* Divisor meridiano */}
        <FadeIn delay={0.05}>
          <MeridianDivider dark />
        </FadeIn>

        {/* Headline final */}
        <FadeIn delay={0.15}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-off-white leading-tight mt-8">
            O grito de socorro do seu filho chegou até você.{' '}
            <em className="text-secondary">
              Dar o próximo passo também é uma forma de responder.
            </em>
          </h2>
        </FadeIn>

        {/* Texto de fechamento */}
        <FadeIn delay={0.25}>
          <p className="mt-8 text-off-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Você não está aqui por acaso. Pais que buscam seguem sendo pais presentes, mesmo quando estão exaustos. Não há pressão para decidir agora. Há um convite para uma conversa. Se fizer sentido, a próxima sessão começa com você me contando o que está acontecendo.
          </p>
        </FadeIn>

        {/* CTA WhatsApp */}
        <FadeIn delay={0.35}>
          <div className="mt-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Quero conversar com a Flora
            </a>
          </div>
        </FadeIn>

        {/* Divisor meridiano final */}
        <FadeIn delay={0.45}>
          <div className="mt-16">
            <MeridianDivider dark />
          </div>
        </FadeIn>

        {/* Rodapé institucional */}
        <FadeIn delay={0.5}>
          <div className="mt-10 space-y-2">
            <p className="text-off-white/30 text-xs tracking-wider uppercase font-sans">
              Florencia Martins de Souza
            </p>
            <p className="text-off-white/20 text-xs">
              Especialista em Terapia Oriental Sistêmica e Afetiva
            </p>
            <p className="text-off-white/20 text-xs mt-4">
              &copy; {new Date().getFullYear()} Flora. Todos os direitos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
