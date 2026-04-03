"use client";

import { motion } from 'framer-motion';

// Strict TypeScript Interface ready for Web-scraping
export interface ConcursoRadar {
    nome: string;
    nivel: "Médio" | "Superior";
    status: "Aberto" | "Previsto" | "Edital Aberto";
    vagas: number | string;
    remuneracao: string;
    destaque?: string;
}

// Updated mocked data with User's specific requirements
const concursosMock: ConcursoRadar[] = [
    {
        nome: "PRF (Polícia Rodoviária Federal)",
        nivel: "Superior",
        status: "Previsto",
        vagas: 263,
        remuneracao: "R$ 10.790,87",
        destaque: "ALTO GANHO"
    },
    {
        nome: "ESA (Escola de Sargentos das Armas)",
        nivel: "Médio",
        status: "Edital Aberto",
        vagas: 1100,
        remuneracao: "R$ 3.825,00",
        destaque: "+ Adicionais Militares"
    },
    {
        nome: "PCDF (Polícia Civil do DF)",
        nivel: "Superior",
        status: "Previsto",
        vagas: 150,
        remuneracao: "R$ 26.690,15",
        destaque: "ELITE"
    }
];

export default function RadarConcursos() {
    return (
        <section className="py-20 bg-[#0A0A0A] border-y border-slate-800 relative z-10" id="concursos">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 text-[#3b82f6] text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="material-icons-round text-sm animate-pulse">radar</span> Radar Ao Vivo
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                            Radar de <span className="text-[#3b82f6]">Carreiras e Ganhos</span>
                        </h2>
                        <p className="text-slate-400 italic">Professor Claudio_Brum: Sua farda ou cargo público a um edital de distância.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {concursosMock.map((concurso, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 30px -10px rgba(30,58,138,0.3)",
                                borderColor: "rgba(30,58,138,0.5)"
                            }}
                            className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 transition-all shadow-lg shadow-black/50 group cursor-default relative overflow-hidden"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1E3A8A]/5 blur-2xl group-hover:bg-[#1E3A8A]/10 transition-colors"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors mb-1">
                                        {concurso.nome}
                                    </h3>
                                    {concurso.destaque && (
                                        <span className="text-[10px] font-black tracking-widest text-[#3b82f6] uppercase bg-[#1E3A8A]/10 px-2 py-0.5 rounded">
                                            {concurso.destaque}
                                        </span>
                                    )}
                                </div>
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase whitespace-nowrap ${concurso.status === 'Edital Aberto' || concurso.status === 'Aberto'
                                    ? 'bg-[#1E3A8A] text-white'
                                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                                    }`}>
                                    {concurso.status}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Vagas</span>
                                    <span className="text-slate-300 font-bold">{concurso.vagas} vagas</span>
                                </div>

                                <div className="pt-2">
                                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Remuneração Inicial</span>
                                    <div className="flex items-baseline gap-2">
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            className="text-4xl font-black text-[#3b82f6] tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                        >
                                            {concurso.remuneracao.split(' ')[1]}
                                        </motion.span>
                                        <span className="text-[#3b82f6] font-bold">BRUTO</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 mt-2 italic font-medium leading-tight">
                                        *Valor base sujeito a adicionais e benefícios de carreira.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 bg-slate-800 hover:bg-[#1E3A8A] hover:text-white text-[#3b82f6] font-bold rounded-xl transition-all border border-[#1E3A8A]/20 text-sm">
                                Ver Detalhes do Plano
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
