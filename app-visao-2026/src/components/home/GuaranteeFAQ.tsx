'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ_ITEMS = [
    {
        question: 'Para qual faixa etária é o preparatório?',
        answer: 'Atendemos alunos de 14 a 24 anos que buscam aprovação em concursos militares de Ensino Médio: ESA, EEAR, EPCAR, Colégio Naval, Fuzileiros Navais e Aprendizes de Marinheiro.',
    },
    {
        question: 'Funciona para quem nunca estudou para concurso militar?',
        answer: 'Sim! A maioria dos nossos aprovados começou do zero. O método inclui diagnóstico inicial para identificar suas lacunas e construir um plano de estudos desde a base até o nível da prova.',
    },
    {
        question: 'As aulas são online ou presenciais?',
        answer: 'Oferecemos ambas as modalidades. As aulas individuais podem ser online ou presenciais, e os grupos intensivos funcionam em formato presencial com opção de acompanhamento remoto.',
    },
    {
        question: 'Qual a diferença entre ESA, EEAR e EPCAR?',
        answer: 'A ESA é do Exército (Sargentos), a EEAR é da Aeronáutica (Especialistas) e a EPCAR é da Aeronáutica (futuros Oficiais). Cada concurso tem banca, conteúdo e perfil de prova diferentes, por isso nosso método é personalizado por edital.',
    },
    {
        question: 'Como funciona o acompanhamento?',
        answer: 'Dependendo do plano, você recebe acompanhamento semanal ou contínuo com o Professor Claudio Brum e equipe. Inclui plano de estudos personalizado, simulados com correção detalhada e ajustes de rota baseados no seu desempenho.',
    },
    {
        question: 'E se eu não gostar do método?',
        answer: 'Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento. Sem burocracia, sem perguntas.',
    },
];

export default function GuaranteeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="p-8 lg:p-12 rounded-3xl bg-surface-dark border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                                    <ShieldCheck size={40} className="text-primary" />
                                </div>

                                <h2 className="font-serif text-3xl md:text-4xl font-black text-white leading-[1.1] mb-6">
                                    Garantia Incondicional de{' '}
                                    <span className="text-primary">7 Dias</span>
                                </h2>

                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    Estamos tão confiantes no nosso método que oferecemos <strong className="text-white">risco zero</strong> para você. Se em 7 dias você sentir que o preparatório não é para você, devolvemos <strong className="text-white">100% do seu investimento</strong>.
                                </p>

                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    Sem burocracia. Sem perguntas. Sem letras miúdas. A única coisa que você tem a perder é a chance de vestir a farda.
                                </p>

                                <a
                                    href="https://wa.me/5521999999999?text=Olá! Quero começar minha preparação militar com a garantia de 7 dias."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-primary hover:bg-gold-light text-background-dark px-8 py-4 rounded-2xl font-black text-base shadow-[0_0_25px_rgba(201,168,76,0.2)] transition-all transform hover:-translate-y-0.5"
                                >
                                    <ShieldCheck size={20} />
                                    Começar Sem Risco
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <span className="inline-block text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                            Perguntas Frequentes
                        </span>

                        <h2 className="font-serif text-3xl md:text-4xl font-black text-white leading-[1.1] mb-10">
                            Tire suas dúvidas
                        </h2>

                        <div className="space-y-3">
                            {FAQ_ITEMS.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-2xl bg-surface-dark border border-white/5 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-colors"
                                    >
                                        <span className="text-white font-bold text-sm pr-4">{faq.question}</span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 pb-5">
                                                    <p className="text-slate-400 text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
