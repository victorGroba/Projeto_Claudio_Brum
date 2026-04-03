'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

export default function FinalCTA() {
    return (
        <section className="relative py-24 lg:py-32 bg-surface-dark overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-8">
                        <Clock size={14} />
                        As vagas não esperam
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08] mb-6">
                        Cada dia que passa é um dia{' '}
                        <span className="text-primary">a menos</span>{' '}
                        até a próxima prova.
                    </h2>

                    <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
                        Enquanto você hesita, outros estão estudando com o método certo. Seja para <strong className="text-white">concursos militares</strong>, <strong className="text-white">escolas técnicas</strong> ou <strong className="text-white">melhorar as notas na escola</strong>, a diferença está na decisão que você toma agora.
                    </p>

                    <p className="text-white text-lg font-semibold mb-10">
                        Não deixe para amanhã o que pode mudar sua vida hoje.
                    </p>

                    <a
                        href="https://wa.me/5521999999999?text=Olá! Quero começar minha preparação com o Professor Claudio Brum. Pode me ajudar?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-gold-light text-background-dark px-10 py-6 rounded-2xl font-black text-xl shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(201,168,76,0.4)] active:scale-[0.98]"
                    >
                        <WhatsAppIcon size={24} className="group-hover:scale-110 transition-transform" />
                        Quero Garantir Minha Vaga | Falar Agora
                    </a>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                        <span className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-primary" />
                            Garantia de 7 dias
                        </span>
                        <span className="flex items-center gap-2">
                            <Award size={16} className="text-primary" />
                            +500 aprovados
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            Vagas limitadas
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
