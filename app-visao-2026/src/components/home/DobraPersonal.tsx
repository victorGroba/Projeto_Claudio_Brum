"use client";

import { motion } from 'framer-motion';

export default function DobraPersonal() {
    return (
        <section className="py-20 lg:py-32 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
            {/* Background elements for dark mode depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#1E3A8A]/50 to-transparent"></div>
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full point-events-none"></div>
            <div className="absolute bottom-0 left-[-100px] w-[300px] h-[300px] bg-[#1E3A8A]/10 blur-[100px] rounded-full point-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                        Por que <span className="text-[#1E3A8A]">90% dos alunos</span> desistem de outros cursinhos?
                    </h2>
                    <p className="text-xl text-slate-300 font-medium">
                        Porque comprar um curso sem suporte é como ir à academia sem um Personal Trainer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Card 1: O Jeito Comum */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-800/80 backdrop-blur-sm border border-rose-900/30 rounded-3xl p-8 lg:p-12 flex flex-col justify-start relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-rose-600/40"></div>

                        <div className="w-full h-48 rounded-xl overflow-hidden mb-8 border border-rose-500/20 relative">
                            <img
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
                                alt="Sala de aula lotada de cursinho tradicional"
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-rose-900/20 to-transparent mix-blend-multiply"></div>
                            <div className="absolute top-4 left-4 w-12 h-12 bg-rose-900/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-rose-500/30 text-rose-400">
                                <span className="material-icons-round text-2xl">group_off</span>
                            </div>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-4">A Academia Lotada</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Você recebe uma senha, entra num sistema cheio de vídeo-aulas e, quando a dúvida aparece, você está <span className="text-rose-400 font-semibold">sozinho</span>. O resultado? Frustração e reprovação.
                        </p>
                        <div className="mt-auto">
                            <div className="inline-flex items-center gap-2 text-rose-400/80 text-sm font-semibold uppercase tracking-wider">
                                <span className="material-icons-round text-base">close</span>
                                Sem acompanhamento
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: O Método Cláudio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 0.6, delay: 0.4, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] border border-[#1E3A8A]/50 rounded-3xl p-8 lg:p-12 flex flex-col justify-start relative overflow-hidden shadow-[0_0_40px_-10px_rgba(30,58,138,0.3)] z-10"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-[#1E3A8A]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="absolute top-0 right-0 py-1 px-4 bg-[#1E3A8A]/20 border-b border-l border-[#1E3A8A]/30 rounded-bl-2xl text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md z-20">
                            O Método Cláudio
                        </div>

                        <div className="w-full h-48 rounded-xl overflow-hidden mb-8 border border-[#1E3A8A]/40 relative z-10 group-hover:shadow-[0_0_20px_rgba(30,58,138,0.3)] transition-all">
                            <img
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
                                alt="Professor dando acompanhamento individualizado"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute top-4 left-4 w-12 h-12 bg-[#1E3A8A]/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-[#1E3A8A]/40 text-blue-200 shadow-[0_0_15px_rgba(30,58,138,0.4)]">
                                <span className="material-icons-round text-2xl">psychology</span>
                            </div>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 relative z-10">O Seu Personal de Estudos</h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6 relative z-10">
                            Nós te damos o mapa e o acompanhamento de perto. Além das aulas focadas, você tem <strong className="text-white font-extrabold scale-110 inline-block px-2 bg-[#1E3A8A]/30 rounded-md">Acompanhamento Pedagógico e Monitores de Plantão</strong> para tirar suas dúvidas de colégio, faculdade ou concurso.
                        </p>
                        <p className="text-white font-medium text-lg border-l-2 border-[#1E3A8A] pl-4 py-1 relative z-10">
                            Nós garantimos a execução perfeita até a sua aprovação.
                        </p>

                        <div className="mt-8 relative z-10">
                            <div className="inline-flex items-center gap-2 text-blue-200 text-sm font-bold uppercase tracking-wider">
                                <span className="material-icons-round text-base">verified</span>
                                Acompanhamento Diário
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1E3A8A]/20 blur-3xl rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
