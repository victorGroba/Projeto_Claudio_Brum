'use client';

import { motion } from 'framer-motion';
import { Crosshair, Brain, Zap, Users, BarChart3, TrendingUp } from 'lucide-react';

import { SpotlightCard } from '@/components/ui/SpotlightCard';

const PROBLEMS = [
    {
        icon: Users,
        title: 'Cursinho genérico',
        desc: 'Mistura tudo: ENEM, militar, técnica. Você estuda conteúdo que NÃO cai na sua prova e perde tempo precioso.',
    },
    {
        icon: BarChart3,
        title: 'Sem foco na sua meta',
        desc: 'Cada concurso e cada escola tem banca, perfil e conteúdo programático diferentes. Estudar igual é garantia de frustração.',
    },
    {
        icon: TrendingUp,
        title: 'Sem diagnóstico real',
        desc: 'Meses de estudo sem saber se está evoluindo. Sem simulados específicos, você não mede o que importa.',
    },
];

const SOLUTIONS = [
    {
        icon: Crosshair,
        title: 'Preparação por Objetivo',
        desc: 'ESA, CEFET, Pedro II: cada meta tem um plano de estudos próprio, alinhado com a banca e o perfil da prova.',
    },
    {
        icon: Brain,
        title: 'Diagnóstico + Acompanhamento',
        desc: 'Mapeamos suas lacunas desde o primeiro dia. Simulados regulares, correção detalhada e ajustes em tempo real.',
    },
    {
        icon: Zap,
        title: 'Resultado Mensurável',
        desc: 'Relatórios de evolução, ranking e um cronograma alinhado para escalar sua nota mês a mês.',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function MethodSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="metodo">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/3 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            Por que o Método funciona
                        </span>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
                            <Brain size={20} className="text-primary/60" />
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] max-w-4xl mx-auto mb-6">
                            O cursinho genérico te trata como mais um.{' '}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">Aqui, você é o plano estratégico.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Problems Side - Muted Glassmorphism */}
                    <div className="flex flex-col h-full">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-black uppercase tracking-[0.2em] text-red-500/80 mb-8 flex items-center gap-4"
                        >
                            <span className="w-10 h-px bg-red-500/30" />
                            O Erro Mais Comum
                        </motion.h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {PROBLEMS.map((p) => (
                                <motion.div
                                    key={p.title}
                                    variants={item}
                                    className="p-6 rounded-3xl bg-surface-dark/30 backdrop-blur-md border border-white/5 flex items-start gap-5 transition-all opacity-80"
                                >
                                    <div className="flex-shrink-0 p-3 rounded-2xl bg-red-500/5 text-red-400/80">
                                        <p.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white/80 font-bold text-lg mb-2">{p.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Solutions Side - Bento Box & Spotlight */}
                    <div className="flex flex-col h-full">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 flex items-center gap-4"
                        >
                            <span className="w-10 h-px bg-primary/40" />
                            A Nova Lógica
                        </motion.h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4 relative"
                        >
                            {/* A subtle glowing line connecting the dots */}
                            <div className="absolute left-9 top-10 bottom-10 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden sm:block pointer-events-none" />

                            {SOLUTIONS.map((s) => (
                                <motion.div key={s.title} variants={item}>
                                    <SpotlightCard className="p-6 flex items-start gap-5 h-full relative z-10 group">
                                        <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(201,168,76,0.15)] group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300 relative bg-background-dark z-20">
                                            <s.icon size={22} strokeWidth={2} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-2">{s.title}</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
