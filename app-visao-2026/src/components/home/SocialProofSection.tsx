'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TESTIMONIALS = [
    {
        name: 'Lucas M.',
        course: 'Aprovado | ESA 2025',
        text: 'O método do Professor Claudio mudou minha forma de estudar. Em 6 meses, saí de 40% de acerto para aprovação na ESA. O acompanhamento individual fez toda a diferença.',
        avatar: 'L',
    },
    {
        name: 'Pedro H.',
        course: 'Aprovado | Colégio Naval',
        text: 'O simulado mensal e a correção detalhada me mostraram onde eu precisava focar. A turma intensiva era exatamente o que eu precisava para o Colégio Naval.',
        avatar: 'P',
    },
    {
        name: 'Juliana R.',
        course: 'Aprovada | CEFET/RJ',
        text: 'Sonhava com o CEFET mas não sabia por onde começar. O plano de estudos focado na prova do CEFET me deu confiança. Passei de primeira!',
        avatar: 'J',
    },
    {
        name: 'Amanda F.',
        course: 'Aprovada | EEAR 2025',
        text: 'Achava que nunca passaria na EEAR. O plano de estudos focado na banca da Aeronáutica me mostrou exatamente o que estudar. Resultado: aprovada!',
        avatar: 'A',
    },
    {
        name: 'Matheus S.',
        course: 'Aprovado | Colégio Pedro II',
        text: 'Meus pais contrataram o reforço e em 4 meses minhas notas subiram de 5 para 8. Depois foquei no Pedro II e passei. O diagnóstico inicial foi essencial.',
        avatar: 'M',
    },
    {
        name: 'Rafael C.',
        course: 'Aprovado | EPCAR',
        text: 'Tentei 2 anos sozinho. Em 8 meses com o Professor Claudio, passei na EPCAR. O método é cirúrgico. Você estuda só o que cai na prova.',
        avatar: 'R',
    },
    {
        name: 'Isabela T.',
        course: 'Mãe de aluno | Reforço Escolar',
        text: 'Meu filho estava reprovando em Matemática. Com 3 meses de acompanhamento, virou o ano com média 8. Os relatórios semanais me deram muita tranquilidade.',
        avatar: 'I',
    },
    {
        name: 'Gabriel A.',
        course: 'Aprovado | IFRJ',
        text: 'O Professor Brum me mostrou que a prova do IFRJ tem um perfil próprio. Estudar focado no que a banca cobra fez toda a diferença. Aprovado de primeira.',
        avatar: 'G',
    },
    {
        name: 'Beatriz N.',
        course: 'Aprovada | ESA',
        text: 'O método do Professor Claudio Brum é direto ao ponto. Não perdi tempo com o que não cai na prova. Recomendo de olhos fechados!',
        avatar: 'B',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

const row1 = Array.from({ length: 8 }, (_, i) => `/assets/images/relatos-alunos/${i + 1}.jpg`);
const row2 = Array.from({ length: 8 }, (_, i) => `/assets/images/relatos-alunos/${i + 9}.jpg`);

export default function SocialProofSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="aprovados">
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Mural de Aprovados
                        </span>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
                            <Quote size={20} className="text-primary/60" />
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                            Quem seguiu o método,{' '}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">conquistou a vaga.</span>
                        </h2>

                        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                            Não trabalhamos com achismos. Trabalhamos com resultados reais. Veja as mensagens que recebemos diariamente dos nossos alunos e comprove a eficácia do nosso método.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Masonry Image Gallery (replaces auto-scrolling marquee to prevent text cropping) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
                <div className="columns-2 md:columns-4 gap-4 space-y-4">
                    {row1.map((src, i) => (
                        <div key={`row1-${i}`} className="break-inside-avoid relative rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                            {/* We use next/image with layout responsive or simply img if we want natural Masonry scaling */}
                            <img 
                                src={src} 
                                alt="Relato de Aprovação do Aluno" 
                                className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500" 
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Text Testimonials Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {TESTIMONIALS.map((t) => (
                        <motion.div
                            key={t.name}
                            variants={itemAnim}
                            className="p-6 rounded-2xl bg-surface-dark border border-white/5 hover:border-primary/15 transition-colors group"
                        >
                            <Quote
                                size={20}
                                className="text-primary/30 mb-4 group-hover:text-primary/50 transition-colors"
                            />
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{t.name}</p>
                                    <p className="text-primary/70 text-xs font-semibold">
                                        {t.course}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/aprovados"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-white border border-primary hover:bg-primary/10 px-6 py-3 rounded-xl transition-all group"
                    >
                        Ver Mural Completo
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
