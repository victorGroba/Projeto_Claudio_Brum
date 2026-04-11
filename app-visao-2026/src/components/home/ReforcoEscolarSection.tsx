'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

const BENEFITS = [
    {
        icon: BookOpen,
        title: 'Reforço Sob Medida',
        desc: 'Identificamos exatamente onde o aluno tem dificuldade e montamos um plano de reforço personalizado, sem perder tempo com o que já domina.',
    },
    {
        icon: TrendingUp,
        title: 'Evolução Acompanhada',
        desc: 'Relatórios de progresso semanais para pais e alunos. Você enxerga a evolução acontecendo, nota a nota.',
    },
    {
        icon: Clock,
        title: 'Horários Flexíveis',
        desc: 'Aulas individuais ou em pequenos grupos, com horários que se adaptam à rotina escolar do aluno.',
    },
    {
        icon: GraduationCap,
        title: 'Do Fundamental ao Médio',
        desc: 'Matemática, Física, Química e Português. Cobertura completa para Ensino Fundamental II e Ensino Médio.',
    },
];

const SUBJECTS = ['Matemática', 'Física', 'Química', 'Português', 'Redação', 'Inglês', 'História'];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function ReforcoEscolarSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="reforco">
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Reforço &amp; Acompanhamento Escolar
                        </span>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
                            <BookOpen size={20} className="text-primary/60" />
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] max-w-5xl mx-auto mb-6">
                            Seu filho não precisa de mais aulas.{' '}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">Precisa das aulas certas.</span>
                        </h2>

                        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Além da preparação militar, o Professor Cláudio Brum oferece acompanhamento escolar completo, com a mesma metodologia estratégica que já aprovou mais de 500 alunos.
                        </p>
                    </motion.div>
                </div>

                {/* Content: 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left - Benefits Cards */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {BENEFITS.map((b) => (
                            <motion.div
                                key={b.title}
                                variants={item}
                                className="p-6 rounded-2xl bg-surface-dark border border-primary/10 flex items-start gap-5 group hover:border-primary/25 hover:shadow-[0_0_30px_rgba(201,168,76,0.07)] transition-all"
                            >
                                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_14px_rgba(201,168,76,0.3)] transition-all">
                                    <b.icon size={22} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">{b.title}</h4>
                                    <p className="text-slate-200 text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right - Summary Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-surface-dark to-surface-dark/80 border border-secondary/15 shadow-[0_0_50px_rgba(44,191,191,0.06)]">
                            {/* Subjects */}
                            <h3 className="text-white font-black text-sm uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base">menu_book</span>
                                Disciplinas Disponíveis
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {SUBJECTS.map((subj) => (
                                    <span
                                        key={subj}
                                        className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-bold border border-white/20"
                                    >
                                        {subj}
                                    </span>
                                ))}
                            </div>

                            {/* Key Points */}
                            <div className="space-y-3 mb-8">
                                {[
                                    'Aulas individuais ou em pequenos grupos',
                                    'Ensino Fundamental II e Ensino Médio',
                                    'Diagnóstico inicial gratuito',
                                    'Relatórios de progresso para os pais',
                                    'Mesmo método estratégico da preparação militar',
                                ].map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                        <span className="text-slate-100 text-sm">{point}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/5 pt-6 mb-6">
                                <p className="text-white font-bold text-center mb-1">
                                    A partir de <span className="text-primary text-2xl font-black">R$ 90</span><span className="text-slate-300 text-sm">/aula</span>
                                </p>
                                <p className="text-slate-300 text-xs text-center">
                                    Pacotes com desconto progressivo disponíveis
                                </p>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://wa.me/5521999999999?text=Olá! Tenho interesse no serviço de Reforço e Acompanhamento Escolar do Professor Claudio Brum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-background-dark py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] active:scale-[0.98]"
                            >
                                <WhatsAppIcon size={22} />
                                Quero Acompanhamento Escolar
                            </a>

                            <p className="text-center mt-3 text-slate-300 text-xs">
                                Diagnóstico pedagógico inicial sem custo
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
