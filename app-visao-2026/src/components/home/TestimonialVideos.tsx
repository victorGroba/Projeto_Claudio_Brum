'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
    {
        id: "1",
        name: "Indicação Autoridade Militar",
        role: "Oficial",
        quote: "O trabalho do Professor Claudio Brum aprova dezenas de candidatos anualmente.",
        youtubeId: "Dv9OMjt470U",
        thumbnail: "https://i.ytimg.com/vi/Dv9OMjt470U/hqdefault.jpg"
    },
    {
        id: "2",
        name: "Indicação de Excelência",
        role: "Aluno Aprovado",
        quote: "O método de repetição estruturada foi fundamental para chegar ao concurso.",
        youtubeId: "VE4Uo98TBew",
        thumbnail: "https://i.ytimg.com/vi/VE4Uo98TBew/hqdefault.jpg"
    },
    {
        id: "3",
        name: "Indicação Estratégica",
        role: "Profissional",
        quote: "Seguimos a grade programática e garantimos evolução desde a primeira aula.",
        youtubeId: "Z6nBsbhNRpY",
        thumbnail: "https://i.ytimg.com/vi/Z6nBsbhNRpY/hqdefault.jpg"
    },
    {
        id: "4",
        name: "Indicação Padrão MB",
        role: "Coordenação",
        quote: "Material direto ao ponto. Exatamente o que o aluno necessita e mais cai em prova.",
        youtubeId: "n7foTNmJ-tQ",
        thumbnail: "https://i.ytimg.com/vi/n7foTNmJ-tQ/hqdefault.jpg"
    }
];

export function TestimonialVideos() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="relative py-24 bg-background-dark overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-sm"
                    >
                        Prova Social
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        INDICAÇÕES DE <span className="text-primary drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">PESO</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Ouça direto de quem já validou a metodologia nas maiores corporações do Brasil.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col items-center bg-white/5 border border-primary/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors backdrop-blur-xl"
                        >
                            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                                <img
                                    src={testimonial.thumbnail}
                                    alt={testimonial.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                                />
                                <button
                                    onClick={() => setActiveVideo(testimonial.id)}
                                    className="relative z-10 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(201,168,76,0.4)] group-hover:scale-110 transition-transform duration-300 border border-white/20"
                                >
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                                </button>
                            </div>

                            <div className="p-6 w-full text-center flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/40">
                                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">{testimonial.name}</h3>
                                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4">{testimonial.role}</span>
                                <p className="text-slate-300 text-sm font-medium leading-relaxed italic border-l-2 border-primary pl-4 text-left">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-10"
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(201,168,76,0.2)] border-4 border-primary"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const video = TESTIMONIALS.find(v => v.id === activeVideo);
                                if (!video) return null;
                                return (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                        title={`Depoimento de ${video.name}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
