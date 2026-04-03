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

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-neon-cyan font-black text-xl tracking-tighter">PROF. CLAUDIO BRUM</span>
          </Link>
          <button className="text-slate-100 p-2 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="overflow-x-hidden relative" ref={targetRef}>
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 @container flex flex-col items-center text-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-teal/20 rounded-full blur-[120px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="w-full max-w-3xl mx-auto mb-12 aspect-video rounded-2xl overflow-hidden glow-teal relative group shadow-2xl shadow-electric-teal/20 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center z-20 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,178,214,0.6)] cursor-pointer transition-all"
              >
                <span className="material-symbols-outlined text-white text-5xl leading-none ml-2">play_arrow</span>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full bg-center bg-no-repeat bg-cover relative z-10"
              data-alt="Prof Cláudio Brum presenting the engineering of approval method"
              style={{ backgroundImage: "url('/assets/images/professores/claudio_com_alunos.jpg')" }}
            ></motion.div>
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
            >
              A Engenharia da <span className="text-neon-cyan drop-shadow-md">Aprovação</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-montserrat text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Não é sobre horas líquidas, é sobre precisão cirúrgica. Entenda o método que transforma esforço em vaga.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/checkout" className="w-full sm:w-auto inline-flex bg-primary hover:bg-cyan-500 text-background-dark font-black py-5 px-10 rounded-xl shadow-[0_0_25px_rgba(0,178,214,0.4)] transition-all items-center justify-center gap-3 text-lg hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,178,214,0.6)] group">
                QUERO MINHA APROVAÇÃO
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_up</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 2: The Problem */}
        <section className="px-6 py-24 bg-surface-onyx/30 relative">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-playfair text-3xl md:text-5xl font-bold mb-16 text-white text-center"
            >
              Por que você ainda não passou?
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: "timer_off", color: "text-red-400", bg: "bg-red-500/10", border: "hover:border-red-500/30", title: "Procrastinação", desc: "O ciclo vicioso que adia o seu sonho dia após dia." },
                { icon: "center_focus_weak", color: "text-amber-400", bg: "bg-amber-500/10", border: "hover:border-amber-500/30", title: "Falta de Foco", desc: "O excesso de informação sem direcionamento estratégico." },
                { icon: "auto_stories", color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/30", title: "Estudo Passivo", desc: "Consumir conteúdo sem reter o que realmente cai na prova." }
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 border border-white/5 transition-colors ${problem.border}`}
                >
                  <div className={`${problem.bg} p-4 rounded-full mb-2`}>
                    <span className={`material-symbols-outlined ${problem.color} text-4xl`}>{problem.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">{problem.title}</h3>
                    <p className="text-slate-400 font-montserrat text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: The Pillars */}
        <section className="px-6 py-32 @container overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-neon-cyan font-bold tracking-widest text-sm uppercase bg-neon-cyan/10 px-4 py-1.5 rounded-full">Metodologia Exclusiva</span>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mt-6">Os 3 Pilares da Elite</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 lg:gap-12 relative"
            >
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent z-0"></div>

              {[
                { icon: "biotech", title: "Diagnóstico", desc: "Identificação precisa das suas deficiências fundamentais e lacunas de base." },
                { icon: "strategy", title: "Tática", desc: "Planos personalizados criados por especialistas para maximizar seu tempo de estudo." },
                { icon: "task_alt", title: "Execução", desc: "Disciplina inabalável com rastreamento de progresso e correção de rota em tempo real." }
              ].map((pillar, i) => (
                <motion.div key={i} variants={slideRightVariants} className="glow-border bg-surface-onyx p-10 rounded-3xl text-center group transition-colors hover:bg-surface-onyx/80 relative z-10 flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-24 h-24 bg-[#111] border border-neon-cyan/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(44,191,191,0.2)]"
                  >
                    <span className="material-symbols-outlined text-neon-cyan text-4xl group-hover:text-white transition-colors">{pillar.icon}</span>
                  </motion.div>
                  <h3 className="text-white font-bold text-2xl mb-4">{pillar.title}</h3>
                  <p className="text-slate-400 font-montserrat text-base leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-cyan-700 rounded-[2rem] p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,178,214,0.3)]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none"
            ></motion.div>

            <h2 className="text-white text-4xl md:text-5xl font-playfair font-black mb-6 relative z-10">Assuma o controle do seu <span className="underline decoration-white/40">futuro</span> hoje.</h2>
            <p className="text-white/90 font-montserrat text-lg md:text-xl mb-12 relative z-10 max-w-2xl mx-auto">O Método Claudio Brum está com vagas limitadas para a nova turma de engenharia. E o seu tempo está passando.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
              <Link className="inline-flex w-full sm:w-auto bg-background-dark text-white hover:text-primary font-black py-5 px-10 rounded-xl shadow-2xl transition-all text-lg hover:shadow-background-dark/50" href="/checkout">
                QUERO MINHA APROVAÇÃO AGORA
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}