"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ModelosEnsino() {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative border-t border-slate-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-[#1E3A8A]/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        O Ensino Levado a <span className="text-[#1E3A8A]">Sério</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Do colégio à farda. Das disciplinas isoladas ao curso completo. Nós temos o modelo exato para a sua necessidade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Bloco 1: Apoio Pedagógico */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative bg-[#0B1120] rounded-3xl overflow-hidden border border-slate-800 hover:border-[#1E3A8A]/40 p-1 transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="bg-slate-900 rounded-[22px] p-8 lg:p-12 relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center text-[#3b82f6] mb-8 border border-[#1E3A8A]/20 group-hover:scale-110 transition-transform">
                                <span className="material-icons-round text-3xl">school</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Apoio Pedagógico</h3>
                            <h4 className="text-lg text-[#3b82f6] font-semibold mb-6">Prof. Cláudio Brum</h4>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
                                Resolvemos suas dificuldades individuais em Matemática, Física, Química e mais. Foco total nas exigências da sua escola ou faculdade para você nunca mais ficar de recuperação ou perder semestre.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <span className="material-icons-round text-[#3b82f6] text-xl">done</span> Plantão de Dúvidas
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <span className="material-icons-round text-[#3b82f6] text-xl">done</span> Resolução de Listas
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <span className="material-icons-round text-[#3b82f6] text-xl">done</span> Acompanhamento Escolar
                                </li>
                            </ul>
                            <Link href="#planos" className="inline-flex justify-center items-center py-4 px-6 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 hover:text-white border border-slate-700 transition-all w-full md:w-auto">
                                Conhecer o Apoio Escolar
                            </Link>
                        </div>
                    </motion.div>

                    {/* Bloco 2: Plano Master Personalizado */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-[#1E1B2E] rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 p-1 shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] transition-all"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-amber-500/10 to-transparent z-20"></div>
                        <div className="absolute top-0 right-8 px-4 py-1 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest rounded-b-lg">Premium</div>

                        <div className="bg-[#13111C] rounded-[22px] p-8 lg:p-12 relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 mb-8 border border-amber-500/30 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <span className="material-icons-round text-3xl">workspace_premium</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Monte o Seu <span className="text-amber-400">Curso Sob Medida</span></h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
                                Não pague pelo que não precisa. Escolha exatamente as matérias que você tem dificuldade e feche pacotes exatos de horas. A preparação mais inteligente para acelerar seus resultados.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <span className="block text-amber-400 font-bold mb-1">Flexibilidade</span>
                                    <span className="text-sm text-slate-400">Escolha a carga horária</span>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <span className="block text-amber-400 font-bold mb-1">Foco</span>
                                    <span className="text-sm text-slate-400">Apenas o que precisa</span>
                                </div>
                            </div>
                            <Link href="/planos" className="group/btn relative inline-flex justify-center items-center py-4 px-6 rounded-xl bg-amber-500 text-black font-extrabold hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all overflow-hidden w-full md:w-auto">
                                <span className="relative z-10 flex items-center gap-2">
                                    Montar Meu Plano <span className="material-icons-round group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
}
