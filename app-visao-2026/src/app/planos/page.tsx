"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.7 } }
  };

  const popVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.6, duration: 0.8 } }
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/80 backdrop-blur-md px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
            <h1 className="text-xl font-bold tracking-tighter text-white">PROF. CLAUDIO BRUM</h1>
          </div>
          <button className="text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        <main className="flex-1 pb-24" ref={targetRef}>
          <section className="relative px-6 py-20 text-center overflow-hidden">
            <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            </motion.div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-xl"
              >
                Invista no Seu <span className="text-primary italic">Futuro</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-sans text-slate-400 text-lg lg:text-xl leading-relaxed mb-12"
              >
                Sua aprovação não é um custo, é o maior investimento da sua vida. Escolha o plano que vai transformar sua carreira.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex justify-center"
              >
                <span className="material-symbols-outlined text-primary text-4xl animate-bounce">keyboard_double_arrow_down</span>
              </motion.div>
            </div>
          </section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="px-4 py-8 space-y-8 max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-6 rounded-xl border border-white/10 bg-surface-onyx p-8 hover:border-white/30 transition-colors duration-300 group">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Essencial</h3>
                <p className="text-slate-400 text-sm line-through">De R$ 147/mês</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">R$ 97</span>
                  <span className="text-slate-400 text-sm font-medium">/ mês</span>
                </div>
              </div>
              <ul className="space-y-4 py-4 border-y border-white/5">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Acesso completo à plataforma</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Materiais base em PDF</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Cronograma padrão de estudos</span>
                </li>
              </ul>
              <Link className="w-full flex justify-center py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all shadow-lg hover:shadow-white/5" href="/checkout">
                Começar Agora
              </Link>
            </motion.div>

            <motion.div variants={popVariants} className="flex flex-col gap-6 rounded-xl border border-primary/50 bg-surface-onyx p-8 relative z-10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none"></div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase shadow-lg shadow-primary/40">
                Mais Vendido
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Pacote Elite Militar</h3>
                <p className="text-slate-400 text-sm line-through">De R$ 297/mês</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white glow-text">R$ 197</span>
                  <span className="text-slate-400 text-sm font-medium">/ mês</span>
                </div>
              </div>
              <ul className="space-y-4 py-4 border-y border-white/5 relative z-10">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">star</span>
                  <span className="text-slate-100 font-semibold">Tudo no Essencial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Suporte prioritário 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Simulados avançados inéditos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neon-cyan text-xl">check_circle</span>
                  <span className="text-slate-300">Comunidade VIP no Discord</span>
                </li>
              </ul>
              <Link className="relative z-10 w-full flex justify-center py-4 rounded-lg bg-primary hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-primary/40 hover:shadow-cyan-500/60 transform hover:-translate-y-1" href="/checkout">
                Quero ser Elite
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 rounded-xl border border-white/10 bg-slate-900 p-8 grayscale hover:grayscale-0 transition-all duration-500 group">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">Mentoria Black</h3>
                  <span className="text-[9px] font-bold text-primary border border-primary px-2 py-0.5 rounded animate-pulse">VAGAS LIMITADAS</span>
                </div>
                <p className="text-slate-400 text-sm">Acompanhamento individualizado</p>
                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-black text-white uppercase tracking-tighter">Sob Consulta</span>
                </div>
              </div>
              <ul className="space-y-4 py-4 border-y border-white/5">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white text-xl">person_pin</span>
                  <span className="text-slate-300">Sessões 1-on-1 com Prof. Cláudio Brum</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white text-xl">map</span>
                  <span className="text-slate-300">Planejamento estratégico individual</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white text-xl">monitoring</span>
                  <span className="text-slate-300">Acompanhamento diário de metas</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-lg bg-white text-slate-900 font-bold transition-all hover:bg-slate-200 transform hover:scale-[1.02]">
                Aplicar para Vaga
              </button>
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="px-6 py-20 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center font-serif">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                "Qual o tempo de dedicação necessário?",
                "O método serve para qualquer nicho?",
                "Quais as formas de pagamento?"
              ].map((q, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30,30,40,1)" }}
                  className="rounded-lg bg-surface-onyx p-5 border border-white/5 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-sm lg:text-base font-medium text-slate-200">{q}</p>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">expand_more</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}