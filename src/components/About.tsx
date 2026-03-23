import { FadeIn } from '../App'

const credenciais = [
  'Especialista em Terapia Oriental Sistêmica e Afetiva',
  'Formação em Saúde Mental de Jovens e Adolescentes',
  'Atendimento presencial e online',
]

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-bg-warm section-padding"
      aria-label="Sobre Flora"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Label */}
        <FadeIn>
          <p className="eyebrow-ultra text-secondary text-center">Sobre mim</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading text-center mt-3 leading-tight">
            Eu vi o sistema falhar. Não consegui aceitar.
          </h2>
        </FadeIn>

        {/* Layout flex — mobile: empilhado (texto antes da foto); desktop: lado a lado */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* TEXTO — order-1 no mobile (aparece primeiro) */}
          <div className="w-full md:w-[55%] order-1">
            <FadeIn delay={0.1}>
              {/* ANTES */}
              <p className="text-text-main/80 text-base md:text-lg leading-relaxed">
                Presenciei adolescentes em crise sendo devolvidos para casa com receita nova e orientação para "esperar fazer efeito". Vi jovens que estavam pedindo socorro com o corpo sendo silenciados com remédio. Aquilo me causou uma indignação que eu não conseguia ignorar.
              </p>

              {/* VIRADA — blockquote */}
              <blockquote className="mt-8 border-l-2 border-secondary pl-6 py-2">
                <p className="text-text-main/80 text-base md:text-lg leading-relaxed italic">
                  "Foi observando esses casos que entendi: faltava uma ponte. Entre a sabedoria milenar do Oriente, que sabe como o corpo guarda e processa a dor, e a realidade moderna desses jovens que o sistema convencional não sabia como segurar. Decidi ser essa ponte."
                </p>
              </blockquote>

              {/* HOJE */}
              <p className="mt-8 text-text-main/80 text-base md:text-lg leading-relaxed">
                Hoje trabalho com os casos que outros evitam. Não porque sou corajosa. Porque sei o que fazer. E porque aprendi que o amor dos pais, quando orientado corretamente, é parte da cura.
              </p>

              {/* Credenciais como badges */}
              <div className="mt-10 flex flex-wrap gap-3">
                {credenciais.map((c) => (
                  <span
                    key={c}
                    className="inline-block px-4 py-2 border border-primary/30 text-primary text-xs font-sans font-600 tracking-wide"
                    style={{ fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.04em' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* FOTO — order-2 no mobile (aparece depois do texto) */}
          <div className="w-full md:w-[45%] order-2 flex justify-center md:justify-end">
            <FadeIn delay={0.25} className="w-full max-w-sm md:max-w-full">
              <div
                className="relative overflow-hidden"
                style={{
                  transform: 'rotate(-3deg)',
                  boxShadow: '0 0 0 1px #F5EDE4, 0 20px 60px rgba(28, 14, 24, 0.25)',
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src="/images/hero.jpg"
                  alt="Flora — Florencia Martins de Souza, terapeuta oriental"
                  className="w-full aspect-[3/4] object-cover object-center"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.style.cssText =
                        'width:100%;aspect-ratio:3/4;background:#E8D8C8;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;'
                      placeholder.innerHTML = `
                        <svg viewBox="0 0 200 280" width="160" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="200" height="280" fill="#E0CDBA"/>
                          <circle cx="100" cy="100" r="50" fill="#C4A882"/>
                          <rect x="40" y="165" width="120" height="100" rx="4" fill="#C4A882"/>
                        </svg>
                        <span style="font-size:11px;color:#6B1A38;font-family:sans-serif;">{URL_FOTO_ABOUT}</span>
                      `
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Transição */}
        <FadeIn delay={0.4}>
          <p className="mt-16 text-center text-text-main/60 text-base md:text-lg">
            Agora que você sabe de onde venho, deixa eu te mostrar o que acontece quando você decide dar esse passo.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
