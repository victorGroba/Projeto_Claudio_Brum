'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
    {
        id: "1",
        name: "Pimentel",
        role: "Capitão de Corveta",
        quote: "Indica o curso do Professor Cláudio Brum! Agradecemos imensamente a confiança em nossa metodologia e no trabalho desenvolvido por toda a equipe.",
        youtubeId: "1hH0IA-QP5U",
        thumbnail: "https://img.youtube.com/vi/1hH0IA-QP5U/0.jpg"
    },
    {
        id: "2",
        name: "Sérgio",
        role: "Oficial Militar",
        quote: "Quem entende de disciplina e resultado indica! Recomenda o Curso Professor Cláudio Brum para você que sonha com a aprovação em um cargo público.",
        youtubeId: "L78mtIihQG8",
        thumbnail: "https://img.youtube.com/vi/L78mtIihQG8/0.jpg"
    },
    {
        id: "3",
        name: "Josh Duart",
        role: "Aluno Pelo Mundo",
        quote: "Estudando diretamente da gringa! É muito gratificante ver que nosso esforço ultrapassa fronteiras e inspira alunos em diferentes lugares pelo mundo inteiro.",
        youtubeId: "m7hhFKRiNw4",
        thumbnail: "https://img.youtube.com/vi/m7hhFKRiNw4/0.jpg"
    },
    {
        id: "4",
        name: "Márcio Borges",
        role: "Suboficial Fuzileiro Naval",
        quote: "Confiou no Curso para a preparação de sua filha. Receber a confiança de uma família que vive a disciplina das Forças Armadas é motivo de grande orgulho.",
        youtubeId: "Q2x7VAEtyLg",
        thumbnail: "https://img.youtube.com/vi/Q2x7VAEtyLg/0.jpg"
    },
    {
        id: "5",
        name: "Jhony",
        role: "Sargento",
        quote: "Ex-aluno que hoje atua como Sargento! Recomenda com enorme entusiasmo o curso e a metodologia do Professor Cláudio Brum.",
        youtubeId: "Dv9OMjt470U",
        thumbnail: "https://i.ytimg.com/vi/Dv9OMjt470U/hqdefault.jpg"
    },
    {
        id: "6",
        name: "Welington Borges",
        role: "Empresário e Servidor Público",
        quote: "Empresário e funcionário público atestando a excelência do curso para quem busca alcançar resultados de verdade na aprovação.",
        youtubeId: "VE4Uo98TBew",
        thumbnail: "https://i.ytimg.com/vi/VE4Uo98TBew/hqdefault.jpg"
    },
    {
        id: "7",
        name: "Josias Castro",
        role: "Aluno Pelo Mundo",
        quote: "Diretamente da ensolarada Flórida, nos Estados Unidos! Um reconhecimento incrível que certifica que o método funciona sem barreiras.",
        youtubeId: "Z6nBsbhNRpY",
        thumbnail: "https://i.ytimg.com/vi/Z6nBsbhNRpY/hqdefault.jpg"
    },
    {
        id: "8",
        name: "Márcio",
        role: "Policial do BOPE",
        quote: "Recomendação de quem vive a elite diariamente! O Policial Márcio, do BOPE, atesta a alta performance e a disciplina do método.",
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
                            className="relative group flex flex-col items-center bg-white/5 border border-primary/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-colors backdrop-blur-xl"
                        >
                            {testimonial.role === "Aluno Pelo Mundo" && (
                                <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-yellow-500 text-black text-[10px] font-black tracking-wide uppercase px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(201,168,76,0.3)] z-20 flex items-center gap-1.5 border border-white/20">
                                    <span className="material-symbols-outlined text-[14px] font-bold">public</span>
                                    <span>Internacional</span>
                                </div>
                            )}

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
