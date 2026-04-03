'use client';

import { motion } from 'framer-motion';
import { Shield, GraduationCap, BookOpen, ChevronRight, Calculator, Atom, FlaskConical, Languages, PenTool } from 'lucide-react';

const PILARES = [
    {
        icon: Shield,
        title: 'Concursos Militares',
        subtitle: 'Ensino Médio',
        description: 'ESA, EEAR, EPCAR, Colégio Naval, Fuzileiros Navais, EsPCEx. Preparação cirúrgica por edital, com simulados de bancas reais e acompanhamento estratégico.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        hoverBorder: 'hover:border-emerald-500/40',
        glowColor: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.06)]',
        targets: [
            { name: 'ESA', img: '/assets/images/logo_instituicoes/iconesa.webp' },
            { name: 'EEAR', img: '/assets/images/logo_instituicoes/iconeear.webp' },
            { name: 'EPCAR', img: '/assets/images/logo_instituicoes/iconeepcar.svg' },
            { name: 'Col. Naval', img: '/assets/images/logo_instituicoes/colegio_naval.png' },
            { name: 'EsPCEx', img: '/assets/images/logo_instituicoes/especex.webp' },
            { name: 'Fuzileiros', img: '/assets/images/logo_instituicoes/iconfuzileirosnavais.webp' },
        ],
    },
    {
        icon: GraduationCap,
        title: 'Escolas Técnicas e Federais',
        subtitle: 'Rio de Janeiro',
        description: 'CEFET, IFRJ, Colégio Pedro II e FAETEC. Preparação focada nas provas de admissão, com metodologia adaptada ao perfil de cada instituição.',
        color: 'text-sky-400',
        bg: 'bg-sky-500/10',
        border: 'border-sky-500/20',
        hoverBorder: 'hover:border-sky-500/40',
        glowColor: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]',
        targets: [
            { name: 'CEFET', img: '/assets/images/logo_instituicoes/iconcefet.webp' },
            { name: 'IFRJ', img: '/assets/images/logo_instituicoes/iconifrj.webp' },
            { name: 'Pedro II', img: '/assets/images/logo_instituicoes/iconcp2.webp' },
            { name: 'FAETEC', img: '/assets/images/logo_instituicoes/iconfaetec.webp' },
        ],
    },
    {
        icon: BookOpen,
        title: 'Acompanhamento Escolar',
        subtitle: 'Reforço & Excelência',
        description: 'Reforço personalizado do Fundamental II ao Ensino Médio. Diagnóstico de lacunas, plano de estudos sob medida e relatórios de evolução para os pais.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        hoverBorder: 'hover:border-violet-500/40',
        glowColor: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.06)]',
        targets: [
            { name: 'Matemática', lucide: Calculator },
            { name: 'Física', lucide: Atom },
            { name: 'Química', lucide: FlaskConical },
            { name: 'Português', lucide: Languages },
            { name: 'Redação', lucide: PenTool },
        ],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function IdentificationSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="pilares">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header — High Impact */}
                <div className="text-center mb-24 relative">
                    {/* Glow behind title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Para quem é o método
                        </span>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
                            <Shield size={20} className="text-primary/60" />
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] max-w-5xl mx-auto mb-8">
                            Três caminhos. Um método.{' '}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">A sua aprovação.</span>
                        </h2>

                        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Seja para vestir a farda, entrar numa escola técnica de excelência ou dominar as matérias do ano letivo, aqui você encontra a preparação certa.
                        </p>
                    </motion.div>
                </div>

                {/* Three Pillars */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {PILARES.map((pilar) => {
                        const Icon = pilar.icon;
                        return (
                            <motion.div
                                key={pilar.title}
                                variants={item}
                                className={`relative p-8 rounded-3xl bg-surface-dark border ${pilar.border} ${pilar.hoverBorder} ${pilar.glowColor} transition-all group h-full flex flex-col`}
                            >
                                {/* Icon + Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-2xl ${pilar.bg} ${pilar.color}`}>
                                        <Icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-lg leading-tight">{pilar.title}</h3>
                                        <p className={`text-xs font-bold uppercase tracking-wider ${pilar.color}`}>
                                            {pilar.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                    {pilar.description}
                                </p>

                                {/* Target badges - Animated Marquee Carousel */}
                                <div className="w-full relative mb-8 overflow-hidden group/carousel">
                                    {/* Gradient masks for edge fading */}
                                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
                                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />
                                    
                                    <motion.div 
                                        animate={{ x: ["0%", "-50%"] }}
                                        transition={{ 
                                            ease: "linear", 
                                            duration: 15, 
                                            repeat: Infinity 
                                        }}
                                        className="flex gap-4 py-2 w-max"
                                    >
                                        {[...pilar.targets, ...pilar.targets].map((t: any, idx) => (
                                            <div key={`${t.name}-${idx}`} className="shrink-0 flex flex-col items-center justify-start w-[80px]">
                                                <div className={`w-16 h-16 rounded-full flex items-center justify-center p-2.5 mb-2 overflow-hidden bg-background-dark/80 border ${pilar.border} group-hover:border-white/20 transition-colors shadow-inner`}>
                                                    {t.img ? (
                                                        <img src={t.img} alt={t.name} className="w-full h-full object-contain filter drop-shadow-sm" />
                                                    ) : t.lucide ? (
                                                        <t.lucide size={26} className={pilar.color} />
                                                    ) : null}
                                                </div>
                                                <span className="text-[11px] text-slate-400 font-bold uppercase text-center w-full truncate px-1 tracking-wider">
                                                    {t.name}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/5521999999999?text=Olá! Tenho interesse em ${pilar.title}. Quero saber mais!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl ${pilar.bg} border ${pilar.border} ${pilar.color} font-bold text-sm hover:brightness-125 transition-all mt-auto`}
                                >
                                    Quero saber mais
                                    <ChevronRight size={16} />
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
