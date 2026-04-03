'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export default function BannerGatilho() {
    return (
        <section className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 py-6 overflow-hidden relative group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
                >
                    <div className="flex items-center gap-2 bg-slate-900/10 px-3 py-1 rounded-full backdrop-blur-sm border border-black/5">
                        <TrendingUp size={20} className="text-slate-900 animate-bounce" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-900">Oportunidade Real</span>
                    </div>

                    <h2 className="text-lg md:text-2xl font-black text-slate-900 leading-tight">
                        Ganhe <span className="bg-slate-900 text-emerald-400 px-2 py-0.5 rounded ml-1">R$ 5 mil</span>,
                        <span className="bg-slate-900 text-emerald-400 px-2 py-0.5 rounded mx-1">R$ 10 mil</span> ou até mais de
                        <span className="bg-slate-900 text-emerald-400 px-2 py-0.5 rounded ml-1">R$ 30 mil</span> por mês com estabilidade.
                    </h2>

                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-slate-900" />
                        <p className="text-sm md:text-base font-bold text-slate-900 italic">
                            Sua farda está a um edital de distância.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        </section>
    );
}
