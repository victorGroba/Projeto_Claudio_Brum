'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Institution {
    name: string;
    fullName: string;
    category: 'militar' | 'tecnica' | 'federal';
    src?: string;
    cover?: boolean;
}

const ROW_TOP: Institution[] = [
    { name: 'Sargentos das Armas', fullName: 'Escola de Sargentos das Armas', category: 'militar', src: '/assets/images/logo_instituicoes/iconesa.webp' },
    { name: 'Especialistas Aeron.', fullName: 'Escola de Especialistas da Aeronáutica', category: 'militar', src: '/assets/images/logo_instituicoes/iconeear.webp' },
    { name: 'Cadetes do Ar', fullName: 'Escola Preparatória de Cadetes do Ar', category: 'militar', src: '/assets/images/logo_instituicoes/iconeepcar.svg' },
    { name: 'Colégio Naval', fullName: 'Colégio Naval', category: 'militar', src: '/assets/images/logo_instituicoes/colegio_naval.png' },
    { name: 'Cadetes do Exército', fullName: 'Escola Preparatória de Cadetes do Exército', category: 'militar', src: '/assets/images/logo_instituicoes/especex.webp', cover: true },
    { name: 'Fuzileiros Navais', fullName: 'Corpo de Fuzileiros Navais', category: 'militar', src: '/assets/images/logo_instituicoes/iconfuzileirosnavais.webp' },
    { name: 'Aprendizes Marinheiro', fullName: 'Escola de Aprendizes-Marinheiros', category: 'militar', src: '/assets/images/logo_instituicoes/iconaprendizdemarinheiro.webp' },
    { name: 'Bombeiros Militar', fullName: 'Corpo de Bombeiros Militar', category: 'militar', src: '/assets/images/logo_instituicoes/iconebombeiros.jpg' },
];

const ROW_BOTTOM: Institution[] = [
    { name: 'CEFET/RJ', fullName: 'CEFET/RJ', category: 'tecnica', src: '/assets/images/logo_instituicoes/iconcefet.webp' },
    { name: 'Inst. Federal RJ', fullName: 'Instituto Federal do Rio de Janeiro', category: 'tecnica', src: '/assets/images/logo_instituicoes/iconifrj.webp' },
    { name: 'Colégio Pedro II', fullName: 'Colégio Pedro II', category: 'federal', src: '/assets/images/logo_instituicoes/iconcp2.webp' },
    { name: 'FAETEC', fullName: 'FAETEC', category: 'tecnica', src: '/assets/images/logo_instituicoes/iconfaetec.webp' },
    { name: 'ENEM', fullName: 'Exame Nacional do Ensino Médio', category: 'federal', src: '/assets/images/logo_instituicoes/iconenem.webp' },
    { name: 'SESI / FIRJAN', fullName: 'SESI / FIRJAN', category: 'tecnica', src: '/assets/images/logo_instituicoes/iconsesifirjan.webp' },
    { name: 'UERJ', fullName: 'Universidade Est. do Rio de Janeiro', category: 'federal', src: '/assets/images/logo_instituicoes/iconuerj.webp' },
];

const CATEGORY_STYLES = {
    militar: { border: 'border-emerald-500/20', text: 'text-emerald-400', glow: 'shadow-[0_0_24px_rgba(52,211,153,0.15)]' },
    tecnica: { border: 'border-sky-500/20', text: 'text-sky-400', glow: 'shadow-[0_0_24px_rgba(56,189,248,0.15)]' },
    federal: { border: 'border-amber-500/20', text: 'text-amber-400', glow: 'shadow-[0_0_24px_rgba(245,158,11,0.15)]' },
};

const CARD_W = 148;
const CARD_H = 168;
const GAP = 20;
const STEP = CARD_W + GAP;

function CoverflowRow({ institutions, label }: { institutions: Institution[]; label: string }) {
    const count = institutions.length;
    const [activeIndex, setActiveIndex] = useState(Math.floor(count / 2));
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const dragStartIndex = useRef(0);

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    const getCardStyle = (i: number) => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        // scale: center=1, each step away reduces by 0.1, min 0.6
        const scale = Math.max(0.6, 1 - absOffset * 0.1);
        // opacity: center=1, steps: 0.75, 0.5, 0.25, 0
        const opacity = Math.max(0, 1 - absOffset * 0.28);
        // translateX: cards spread around center
        const translateX = offset * STEP;
        // slight perspective depth
        const translateZ = -absOffset * 40;
        // rotateY for coverflow effect
        const rotateY = offset > 0 ? -25 : offset < 0 ? 25 : 0;

        return { scale, opacity, translateX, translateZ, rotateY };
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        dragStartIndex.current = activeIndex;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        const delta = dragStartX.current - e.clientX;
        const indexDelta = Math.round(delta / STEP);
        setActiveIndex(clamp(dragStartIndex.current + indexDelta, 0, count - 1));
    };

    const handlePointerUp = () => setIsDragging(false);

    // Auto-advance every 2.5s, pause on drag
    useEffect(() => {
        if (isDragging) return;
        const id = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % count);
        }, 2500);
        return () => clearInterval(id);
    }, [isDragging, count]);

    return (
        <div className="relative">
            {/* Row Label */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {label}
                </span>
            </div>

            {/* Fade masks */}
            <div className="absolute left-0 top-8 bottom-8 w-32 bg-gradient-to-r from-surface-dark to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-8 bottom-8 w-32 bg-gradient-to-l from-surface-dark to-transparent z-20 pointer-events-none" />

            {/* Coverflow stage */}
            <div
                className="relative flex items-center justify-center overflow-hidden select-none"
                style={{ height: CARD_H + 48, perspective: '800px' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                {institutions.map((inst, i) => {
                    const { scale, opacity, translateX, translateZ, rotateY } = getCardStyle(i);
                    const style = CATEGORY_STYLES[inst.category];
                    const isActive = i === activeIndex;

                    return (
                        <div
                            key={inst.name}
                            onClick={() => setActiveIndex(i)}
                            className="absolute flex flex-col items-center gap-2 cursor-pointer"
                            style={{
                                width: CARD_W,
                                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                                opacity,
                                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.4s ease',
                                zIndex: isActive ? 10 : Math.max(1, 10 - Math.abs(i - activeIndex)),
                            }}
                        >
                            <div
                                className={`rounded-2xl border overflow-hidden ${style.border} ${isActive ? style.glow : ''}`}
                                style={{ width: CARD_W, height: CARD_H }}
                            >
                                {inst.src ? (
                                    <img
                                        src={inst.src}
                                        alt={`Logo ${inst.fullName}`}
                                        className={`w-full h-full transition-transform duration-300 ${inst.cover ? 'object-cover object-center' : 'object-contain p-3'}`}
                                        draggable={false}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className={`material-symbols-outlined text-5xl ${style.text} opacity-50`}
                                            style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                                    </div>
                                )}
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-wide leading-tight text-center px-1 ${style.text}`}>
                                {inst.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
                {institutions.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-4 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function InstitutionLogos() {
    return (
        <section className="relative py-20 lg:py-28 bg-surface-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        Onde nossos alunos são aprovados
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="font-serif text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1]"
                    >
                        Instituições de{' '}
                        <span className="text-primary">excelência</span>
                    </motion.h2>
                </div>
            </div>

            <div className="space-y-10">
                <CoverflowRow institutions={ROW_TOP} label="Concursos Militares" />
                <CoverflowRow institutions={ROW_BOTTOM} label="Técnicas, Federais & Vestibulares" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
                    <span className="flex items-center gap-2 text-emerald-400 font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                        Concursos Militares
                    </span>
                    <span className="flex items-center gap-2 text-sky-400 font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400/50" />
                        Escolas Técnicas
                    </span>
                    <span className="flex items-center gap-2 text-amber-400 font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                        Federais & Vestibulares
                    </span>
                </div>
            </div>
        </section>
    );
}
