import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 4 Metodo)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'abordagem',
  heading: 'Terapia de Reprocessamento Generativo em 5 Fases',
  intro: 'Meu método parte de uma premissa simples: seu inconsciente registra 400% da realidade. Sons, cheiros, temperaturas, cores. A fala alcança só uma parte. Eu acesso o resto.',
  pillars: [
    {
      title: 'Limpeza de Terreno (Fase Cronológica)',
      body: 'A primeira fase limpa a base. Acesso os registros mais antigos do seu inconsciente e limpo o terreno onde tudo começou. Essa etapa resolve até 80% das queixas iniciais.',
      expanded: false,
    },
    {
      title: 'Acesso Corporal (Fase Somática)',
      body: 'Depois do terreno limpo, acesso o que ficou gravado no corpo. Cheiros, temperaturas, sensações que disparam crises. Não revivemos a dor. Limpamos o registro dela.',
      expanded: false,
    },
    {
      title: 'Padrões de Repetição (Fase Temática)',
      body: 'Aqui trato os temas que se repetem na sua vida. Relacionamentos, medos, comportamentos que voltam mesmo depois de você jurar que mudou. Identifico o registro e limpo na raiz.',
      expanded: true,
    },
    {
      title: 'Reprogramação (Fase Futuro)',
      body: 'Aproveito a atemporalidade do inconsciente para reprogramar comportamentos. Seu inconsciente não diferencia passado de futuro. Usamos isso a seu favor.',
      expanded: false,
    },
    {
      title: 'Potencialização',
      body: 'A fase final consolida tudo que foi limpo e reprogramado. Fortaleço os novos registros para que as mudanças se sustentem e você viva com autonomia sobre a própria vida.',
      expanded: false,
    },
  ],
  pillarCentralLabel: 'pilar central',
  naoPrometo: 'Eu não prometo cura milagrosa nem que tudo muda em uma sessão. Não vou pedir pra você largar seu remédio sem supervisão médica. O que eu prometo é acessar o que nenhuma terapia convencional alcançou, com um método desenhado para ser resolutivo, não eterno.',
  transition: 'Mas antes do método, tem uma história que preciso te contar.',
}
// ════════════════════════════════════════════════════════════════════

export default function Method() {
  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-base md:text-lg leading-relaxed mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text-main)',
              fontWeight: 300,
              maxWidth: '560px',
              opacity: 0.8,
            }}
          >
            {COPY.intro}
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="flex flex-col gap-0">
          {COPY.pillars.map((pillar, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10"
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                  ...(i === COPY.pillars.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)` }
                    : {}),
                }}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-5">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        color: 'var(--color-secondary)',
                        opacity: 0.6,
                        paddingTop: '2px',
                        minWidth: '28px',
                        fontStyle: 'normal',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3
                        className={pillar.expanded ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-primary)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                        {pillar.expanded && (
                          <span
                            style={{
                              marginLeft: '12px',
                              fontSize: '11px',
                              fontFamily: 'var(--font-sans)',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: 'var(--color-secondary)',
                              fontStyle: 'normal',
                              verticalAlign: 'middle',
                              opacity: 0.8,
                            }}
                          >
                            {COPY.pillarCentralLabel}
                          </span>
                        )}
                      </h3>
                      <p
                        className={pillar.expanded ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-text-main)',
                          fontWeight: pillar.expanded ? 400 : 300,
                          lineHeight: 1.8,
                          opacity: 0.85,
                          maxWidth: pillar.expanded ? '600px' : '540px',
                        }}
                      >
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Not promised */}
        <FadeIn delay={0.35}>
          <div
            className="mt-12 md:mt-14 p-6 md:p-8"
            style={{
              backgroundColor: 'var(--color-bg-warm)',
              borderRadius: '4px 16px 4px 16px',
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.naoPrometo}
            </p>
          </div>
        </FadeIn>

        {/* Transition */}
        <FadeIn delay={0.4}>
          <p
            className="mt-12 text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-primary)',
              fontWeight: 300,
              opacity: 0.7,
              fontStyle: 'italic',
            }}
          >
            {COPY.transition}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
