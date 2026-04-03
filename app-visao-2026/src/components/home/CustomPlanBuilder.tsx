'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Send, CheckCircle2 } from 'lucide-react';

const DISCIPLINAS = [
    { id: 'mat', label: 'Matemática', color: '#1E3A8A' },
    { id: 'fis', label: 'Física', color: '#3b82f6' },
    { id: 'qui', label: 'Química', color: '#f59e0b' },
    { id: 'por', label: 'Português/Redação', color: '#8b5cf6' }
];

const CARGAS_HORARIAS = [4, 8, 12, 16];

export default function CustomPlanBuilder() {
    const [selectedDisciplinas, setSelectedDisciplinas] = useState<string[]>(['mat']);
    const [cargaHoraria, setCargaHoraria] = useState<number>(8);

    const toggleDisciplina = (id: string) => {
        setSelectedDisciplinas(prev =>
            prev.includes(id)
                ? prev.filter(d => d !== id)
                : [...prev, id]
        );
    };

    const resumoCopy = useMemo(() => {
        const nomes = DISCIPLINAS
            .filter(d => selectedDisciplinas.includes(d.id))
            .map(d => d.label);

        if (nomes.length === 0) return 'Selecione pelo menos uma disciplina';
        if (nomes.length === 1) return `${nomes[0]} - ${cargaHoraria}h/semana`;
        const last = nomes.pop();
        return `${nomes.join(', ')} e ${last} - ${cargaHoraria}h/semana`;
    }, [selectedDisciplinas, cargaHoraria]);

    return (
        <section className="py-24 bg-slate-900" id="personalizar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-4"
                    >
                        Monte Seu Plano de <span className="text-[#1E3A8A]">Estudos Sob Medida</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Por que pagar por matérias que você já domina? Escolha apenas o que você precisa e tenha um Personal Matemático dedicado ao seu sucesso.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Coluna da Esquerda: Opções */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="text-[#1E3A8A]" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Quais matérias você precisa?</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {DISCIPLINAS.map((disc) => (
                                    <motion.button
                                        key={disc.id}
                                        onClick={() => toggleDisciplina(disc.id)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all relative overflow-hidden group ${selectedDisciplinas.includes(disc.id)
                                            ? 'bg-slate-800 border-[#1E3A8A] shadow-[0_0_20px_rgba(30,58,138,0.1)]'
                                            : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center relative z-10">
                                            <span className={`text-lg font-bold ${selectedDisciplinas.includes(disc.id) ? 'text-white' : 'text-slate-400'
                                                }`}>
                                                {disc.label}
                                            </span>
                                            <AnimatePresence>
                                                {selectedDisciplinas.includes(disc.id) && (
                                                    <motion.div
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ scale: 0, opacity: 0 }}
                                                    >
                                                        <CheckCircle2 className="text-[#1E3A8A]" size={24} />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        {selectedDisciplinas.includes(disc.id) && (
                                            <motion.div
                                                layoutId="active-bg"
                                                className="absolute inset-0 bg-[#1E3A8A]/5"
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="text-[#1E3A8A]" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Carga Horária Semanal</h3>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {CARGAS_HORARIAS.map((h) => (
                                    <button
                                        key={h}
                                        onClick={() => setCargaHoraria(h)}
                                        className={`py-6 rounded-2xl border-2 font-black text-xl transition-all ${cargaHoraria === h
                                            ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white shadow-[0_0_30px_rgba(30,58,138,0.3)]'
                                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                                            }`}
                                    >
                                        {h}h
                                    </button>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-slate-500 italic">
                                *As horas são distribuídas conforme sua necessidade real diagnosticada em mentoria.
                            </p>
                        </div>
                    </div>

                    {/* Coluna da Direita: Resumo Sticky */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            layout
                            className="p-8 rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] shadow-2xl shadow-[#1E3A8A]/20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Send size={120} />
                            </div>

                            <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-6">Resumo do Seu Projeto</h3>

                            <div className="space-y-4 mb-8">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                    <p className="text-white text-xl font-black leading-tight">
                                        &quot;{resumoCopy}&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-blue-100">
                                    <CheckCircle2 size={16} />
                                    <span className="text-sm font-bold">Personal Matemático Dedicado</span>
                                </div>
                                <div className="flex items-center gap-2 text-blue-100">
                                    <CheckCircle2 size={16} />
                                    <span className="text-sm font-bold">Plano de Estudos por Nível</span>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/5521999999999?text=Olá! Montei meu plano no site: ${resumoCopy}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-slate-900 hover:bg-black text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
                            >
                                Enviar meu Projeto
                                <Send size={24} />
                            </a>

                            <p className="text-center mt-4 text-blue-100 text-xs font-bold">
                                Receba uma proposta sob medida no WhatsApp em 3 segundos.
                            </p>
                        </motion.div>

                        <div className="mt-8 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <span className="flex size-2 bg-[#1E3A8A] rounded-full animate-ping"></span>
                                Diagnóstico Gratuito
                            </h4>
                            <p className="text-slate-400 text-sm">
                                Ao enviar seu plano, nossa equipe realizará uma análise pedagógica do seu perfil sem custo adicional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
