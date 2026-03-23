import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn, MeridianDivider } from '../App'

const faqs = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou. Por que seria diferente?',
    resposta:
      'Terapia convencional trabalha com palavras. O que faço chega antes das palavras, nos pontos do corpo onde o trauma fica preso. São caminhos diferentes. Um não invalida o outro, mas quando um parou, pode ser que o outro seja o próximo passo.',
  },
  {
    pergunta: 'Funciona online?',
    resposta:
      'Sim. Parte do protocolo é orientar pontos que os próprios pais aplicam em casa. Isso fortalece o vínculo familiar e pode ser feito com orientação em tempo real, seja em qual cidade você estiver.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta:
      'O valor de uma sessão precisa ser avaliado em relação ao que você já gastou tentando resolver isso sem resultado. Uma conversa inicial não custa nada. Nela você entende o processo e eu apresento os valores. Sem pressão para decidir na hora.',
  },
  {
    pergunta: 'Quanto tempo leva para ver resultado?',
    resposta:
      'As primeiras mudanças aparecem nas primeiras sessões. O processo completo, para casos moderados a graves, leva entre 3 e 6 meses. Não é rápido porque o que estamos desfazendo também não foi rápido.',
  },
  {
    pergunta: 'Tenho medo de que reviver o trauma piore as coisas.',
    resposta:
      'Esse medo é legítimo. Por isso não trabalhamos com confronto direto do trauma. Trabalhamos com o corpo primeiro. O sistema nervoso libera o que está preso no ritmo que consegue suportar. O processo é gradual e conduzido com cuidado em cada sessão.',
  },
  {
    pergunta: 'O que é exatamente a Terapia Oriental? É algo espiritual?',
    resposta:
      'Não. Terapia Oriental é um conjunto de técnicas baseadas no mapeamento do sistema nervoso feito por culturas milenares. Os pontos trabalhados têm correspondência com respostas fisiológicas mensuráveis. Não é necessário ter crença religiosa ou espiritual para se beneficiar.',
  },
]

function FAQItem({ pergunta, resposta, isOpen, onToggle }: {
  pergunta: string
  resposta: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-text-main/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg md:text-xl text-heading leading-snug group-hover:text-secondary transition-colors duration-300">
          {pergunta}
        </span>
        <span
          className="flex-shrink-0 mt-1 text-secondary transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#D4691E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-main/70 text-base md:text-lg leading-relaxed">
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="bg-bg-light section-padding"
      aria-label="Perguntas frequentes"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Título */}
        <FadeIn>
          <p className="eyebrow-ultra text-secondary text-center">Dúvidas frequentes</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading text-center mt-3 leading-tight">
            O que você precisa saber antes de decidir
          </h2>
        </FadeIn>

        {/* Lista de perguntas */}
        <FadeIn delay={0.2}>
          <div className="mt-14">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                pergunta={faq.pergunta}
                resposta={faq.resposta}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </FadeIn>

        {/* Divisor meridiano */}
        <FadeIn delay={0.4}>
          <div className="mt-12">
            <MeridianDivider />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
