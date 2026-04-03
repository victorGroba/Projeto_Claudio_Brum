'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Shield, GraduationCap, BookOpen } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

const PILLARS = [
    { icon: Shield, label: 'Concursos Militares', color: 'text-emerald-400' },
    { icon: GraduationCap, label: 'Escolas Técnicas e Federais', color: 'text-sky-400' },
    { icon: BookOpen, label: 'Reforço Escolar', color: 'text-secondary' },
];

export default function HeroSection() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

    return (
        <header ref={targetRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-background-dark">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y: yParallax }}
                    className="hidden lg:block absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/85 to-transparent w-[65%] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40 z-10" />
                    <img
                        src="/assets/images/banner_site.png"
                        alt="Professor Claudio Brum | Preparatório de Elite"
                        className="w-full h-full object-cover object-[70%_top] lg:object-[80%_top]"
                    />
                </motion.div>

                <div className="lg:hidden absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark/40 via-transparent to-transparent z-10" />
                    <img
                        src="/assets/images/banner-mobile.png"
                        alt="Professor Claudio Brum"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] z-0 pointer-events-none" />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full min-h-[100dvh] flex items-center">
                <div className="w-full lg:max-w-2xl xl:max-w-3xl text-left pt-[48vh] pb-16 lg:pt-0 lg:pb-0 flex flex-col items-start px-2 sm:px-0">
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.15em] mb-8 backdrop-blur-md"
                        >
                            <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                            Turmas Abertas 2026 | Vagas Limitadas
                        </motion.div>

                        {/* Headline */}
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6 [text-shadow:_0_2px_8px_rgba(0,0,0,0.8),_0_0_2px_rgba(0,0,0,0.9)] lg:[text-shadow:none]">
                            A{' '}
                            <span className="text-primary drop-shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                                aprovação
                            </span>{' '}
                            que você sempre sonhou começa aqui.
                        </h1>

                        {/* Sub-headline */}
                        <p className="font-sans text-lg lg:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
                            Concursos militares, escolas técnicas federais ou reforço escolar, o <strong className="text-white">Método Professor Claudio Brum</strong> já aprovou mais de 500 alunos e o próximo pode ser você (ou seu filho).
                        </p>

                        {/* Three Pillars Mini-badges */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {PILLARS.map((p) => (
                                <div
                                    key={p.label}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                                >
                                    <p.icon size={16} className={p.color} />
                                    <span className="text-white text-sm font-bold">{p.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o preparatório do Professor Claudio Brum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-primary hover:bg-gold-light text-background-dark px-8 py-5 rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(201,168,76,0.35)] active:scale-[0.98] w-full sm:w-auto"
                            >
                                <WhatsAppIcon size={22} className="group-hover:scale-110 transition-transform" />
                                Quero Garantir Minha Vaga
                            </a>
                            <a
                                href="#pilares"
                                className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all w-full sm:w-auto"
                            >
                                Conhecer os Cursos
                                <ChevronDown size={20} />
                            </a>
                        </div>

                        {/* Trust Signals */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
                        >
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base">verified</span>
                                +500 aprovados
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base">school</span>
                                20+ anos de experiência
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base">military_tech</span>
                                Militares, Técnicas &amp; Reforço
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background-dark to-transparent z-10" />
        </header>
    );
}
