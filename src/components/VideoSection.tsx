import { FadeIn } from '../App'

const YOUTUBE_VIDEO_ID = '{YOUTUBE_VIDEO_ID}'

export default function VideoSection() {
  return (
    <section
      id="video"
      className="bg-dark section-padding"
      aria-label="Vídeo da Flora"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Texto pré-vídeo */}
        <FadeIn>
          <p className="text-off-white/80 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto">
            "Gravei esse vídeo para você que já tentou de tudo e ainda está com medo de errar de novo. Não vou te prometer milagre. Mas vou te mostrar o que eu faço de diferente, e por que funciona onde o resto parou. Assista com calma. O que eu explico aqui pode mudar como você entende o que está acontecendo com seu filho."
          </p>
        </FadeIn>

        {/* Container do vídeo 9:16 */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-12">
            <div
              className="relative overflow-hidden ring-1 ring-primary shadow-2xl"
              style={{ width: '100%', maxWidth: '300px', aspectRatio: '9/16' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Flora explica a Terapia Oriental Sistêmica e Afetiva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
              {/* Placeholder quando ID não estiver preenchido */}
              {YOUTUBE_VIDEO_ID === '{YOUTUBE_VIDEO_ID}' && (
                <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center gap-3 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <polygon points="5,3 19,12 5,21" fill="#D4691E" />
                    </svg>
                  </div>
                  <span className="eyebrow-ultra text-secondary text-[10px]">
                    {YOUTUBE_VIDEO_ID}
                  </span>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Texto pós-vídeo */}
        <FadeIn delay={0.35}>
          <p className="text-off-white/70 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mt-10 italic font-display">
            "O que eu acabei de explicar tem um nome e tem uma lógica. Deixa eu te mostrar como funciona de verdade."
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
