"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Rocket, GraduationCap, Trophy } from 'lucide-react';

const CATEGORIES = [
    { text: "Concursos", highlight: "Públicos", color: "text-blue-400" },
    { text: "Carreiras", highlight: "Militares", color: "text-amber-400" },
    { text: "Vestibulares", highlight: "Federais", color: "text-[#1E3A8A]" }
];

export default function HeroAnimated() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

    // Lógica para alternar as categorias
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % CATEGORIES.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header ref={targetRef} className="relative min-h-[100vh] w-full overflow-hidden bg-[#050B14]">
            {/* Imagem de Fundo Imersiva */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y: yParallax }}
                    className="hidden lg:block absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/80 to-transparent w-full lg:w-[60%] z-10 transition-all duration-700"></div>
                    <img
                        src="/assets/images/banner_site.png"
                        alt="Professor Claudio Brum"
                        className="w-full h-full object-cover object-[70%_top] lg:object-[80%_top]"
                    />
                </motion.div>

                <div className="lg:hidden absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent z-10 h-[60%] top-auto bottom-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/80 to-transparent z-10 w-[70%]"></div>
                    <img
                        src="/assets/images/banner-mobile.png"
                        alt="Professor Claudio Brum"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/* Conteúdo Overlay */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full min-h-[100vh] flex items-center">
                <div className="w-full lg:max-w-xl xl:max-w-2xl text-left pt-[45vh] pb-12 lg:pt-0 lg:pb-0 flex flex-col items-start pr-4 sm:pr-0">
                    <motion.div
                        style={{ opacity: textOpacity, y: textY }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2 }}
                            className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/20 border border-[#1E3A8A]/30 text-[#1E3A8A] text-[10px] font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-md mx-auto lg:mx-0 w-fit"
                        >
                            <Trophy size={14} className="animate-pulse" />
                            A Elite da Aprovação para 2026
                        </motion.div>

                        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                            CONQUISTE SEU <span className="text-amber-400 inline-block drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">SONHO</span> <br className="hidden sm:block" />
                            DA <span className="text-amber-400 inline-block decoration-[#1E3A8A] underline underline-offset-8 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">APROVAÇÃO!</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-100 mb-8 max-w-lg leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] pr-4 sm:pr-0">
                            Eu Cláudio Brum, tenho uma equipe pronta e disponível para te ajudar a alcançar sua sonhada Aprovação!
                        </p>

                        {/* Categoria Alternante Animada */}
                        <div className="relative h-16 mb-10 overflow-hidden flex items-center justify-start">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5, ease: "backOut" }}
                                    className="flex items-center gap-4 bg-[#050B14]/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-2xl group cursor-default min-w-[300px]"
                                >
                                    <div className="p-2 rounded-full bg-[#1E3A8A] text-white shadow-[0_0_15px_rgba(30,58,138,0.6)]">
                                        <Trophy size={18} />
                                    </div>
                                    <span className="text-white font-black text-lg lg:text-xl whitespace-nowrap">
                                        {CATEGORIES[index].text} <span className={`uppercase tracking-wide ${CATEGORIES[index].color}`}>{CATEGORIES[index].highlight}</span>
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-start w-full sm:w-auto">
                            <Link href="/checkout" className="group flex items-center justify-center gap-3 bg-[#1E3A8A] hover:bg-[#1e40af] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#1E3A8A]/40 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 w-full sm:w-auto">
                                ASSINAR AGORA
                                <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                            <Link href="#personalizar" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all group w-full sm:w-auto">
                                METODOLOGIA
                                <GraduationCap size={24} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fade Inferior Suave */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050B14] to-transparent z-10"></div>
        </header>
    );
}
