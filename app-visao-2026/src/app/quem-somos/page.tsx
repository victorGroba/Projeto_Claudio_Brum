"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
  };

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden" ref={targetRef}>

        {/* Header / Nav Area (simplified for demo) */}
        <header className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md border-b border-white/5 p-4 justify-between">
          <Link href="/" className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </Link>
          <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">Quem Somos</h2>
          <div className="flex w-10 items-center justify-end"></div>
        </header>

        <section className="px-6 py-24 sm:py-32 bg-surface-dark w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <div className="max-w-7xl mx-auto w-full">
            {/* O Professor Cláudio Brum Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[45%] shrink-0"
              >
                <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,178,214,0.15)] border border-white/10 group bg-background-dark">
                  <img src="/assets/images/professores/claudio_com_alunos.jpg" alt="Professor Cláudio Brum e alunos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/10 to-transparent z-10"></div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20">
                    <div className="bg-primary text-background-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-3">O Fundador</div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white font-playfair">Professor<br/>Cláudio Brum</h3>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-[55%] space-y-6 lg:pl-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-playfair leading-[1.1] text-white mb-6">
                  Nossa missão é <br className="hidden sm:block" />
                  <span className="text-primary italic">aprovar você.</span>
                </h1>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Referência no estado na preparação de elite, o <strong className="text-white">Professor Cláudio Brum</strong> dedicou os últimos 20 anos construindo um método à prova de falhas: O foco irrestrito na resolução estratégica e o diagnóstico individual.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Não somos apenas um cursinho preparatório, somos um centro de treinamento voltado para <strong>desempenho tático e resultados práticos</strong>. Guiamos o aluno pelas bancas militares e técnicas com precisão cirúrgica, economizando tempo e energia com o que realmente cai na prova.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6 sm:gap-8">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="text-3xl sm:text-4xl font-black text-white mb-1">+20</p>
                    <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">Anos de Ensino</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4">
                    <p className="text-3xl sm:text-4xl font-black text-white mb-1">+500</p>
                    <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">Aprovações</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-16 text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-playfair mb-4 leading-tight text-white">
                Grandes vitórias<br className="block" />
                <span className="text-primary italic"> não acontecem sozinhas.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Conheça algumas das histórias de superação guiadas pelo método do Professor Brum.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {[
                { name: "Lucas M.", exam: "ESA 2025", quote: "O método do Professor Claudio mudou minha forma de estudar. Em 6 meses, saí de 40% de acerto para aprovação na ESA. O acompanhamento individual fez toda a diferença.", letter: "L" },
                { name: "Juliana R.", exam: "CEFET/RJ", quote: "Sonhava com o CEFET mas não sabia por onde começar. O plano de estudos focado na prova do CEFET me deu confiança. Passei de primeira!", letter: "J" },
                { name: "Amanda F.", exam: "EEAR 2025", quote: "Achava que nunca passaria na EEAR. O plano de estudos focado na banca da Aeronáutica me mostrou exatamente o que estudar. Resultado: aprovada!", letter: "A" },
                { name: "Rafael C.", exam: "EPCAR", quote: "Tentei 2 anos sozinho. Em 8 meses com o Professor Claudio, passei na EPCAR. O método é cirúrgico. Você estuda só o que cai na prova.", letter: "R" }
              ].map((student, i) => (
                <motion.div key={i} variants={itemVariants} className="relative group break-inside-avoid">
                  <div className="bg-background-dark border border-white/5 hover:border-primary/40 rounded-xl overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-primary/10 h-full flex flex-col">
                    <div className="w-full h-32 border-b border-white/5 flex items-center justify-center bg-gradient-to-br from-surface-onyx to-background-dark group-hover:from-primary/10 group-hover:to-background-dark transition-colors duration-500 shrink-0">
                      <span className="text-6xl font-black text-white/5 group-hover:text-primary/20 font-serif transition-colors">{student.letter}</span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="font-bold text-base text-slate-100">{student.name}</p>
                      <p className="text-primary text-xs font-semibold tracking-wider uppercase mt-1">{student.exam}</p>
                      <p className="text-slate-400 text-sm mt-3 italic border-l-2 border-primary/30 pl-3">"{student.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-6 py-20 lg:py-32 max-w-4xl mx-auto w-full">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold font-display mb-16 flex items-center gap-4 text-white"
          >
            <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl animate-pulse">auto_graph</span>
            Nossa Jornada de Conquistas
          </motion.h3>

          <div className="relative space-y-16 lg:space-y-20 timeline-line before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { year: "2018", title: "O Início da Jornada", desc: "Primeiras turmas presenciais e o nascimento da metodologia 'Claudio Brum'.", highlight: false },
              { year: "2021", title: "Expansão Digital", desc: "Alcançamos todos os estados do Brasil através da nossa plataforma exclusiva.", highlight: false },
              { year: "2024", icon: "workspace_premium", title: "Marca de 5.000 Aprovados", desc: "Consolidação como a maior referência em concursos militares e vestibulares de alta concorrência.", highlight: true }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={slideInVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-16 md:pl-0"
              >
                <div className="md:hidden absolute left-0 top-1 w-10 h-10 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center z-10 glow-teal shadow-[0_0_15px_rgba(0,178,214,0.3)]">
                  {item.icon ? (
                    <span className="material-symbols-outlined text-white text-sm">{item.icon}</span>
                  ) : (
                    <span className="text-[10px] font-bold text-primary">{item.year}</span>
                  )}
                </div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:ml-auto md:text-left' : 'md:pl-16 md:mr-auto md:text-right'} relative`}>
                  {/* Desktop Circle */}
                  <div className={`hidden md:flex absolute top-1 ${i % 2 === 0 ? '-left-5' : '-right-5'} w-10 h-10 rounded-full bg-background-dark border-2 border-primary items-center justify-center z-10 shadow-[0_0_15px_rgba(0,178,214,0.3)] transition-transform hover:scale-110`}>
                    {item.icon ? (
                      <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                    ) : (
                      <span className="text-[10px] font-bold text-primary">{item.year}</span>
                    )}
                  </div>

                  <div className={`bg-surface-onyx p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors shadow-lg ${item.highlight ? 'ring-1 ring-primary/50 shadow-primary/10' : ''}`}>
                    <h4 className={`text-xl font-bold ${item.highlight ? 'text-primary' : 'text-slate-100'} mb-2`}>{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 text-center bg-gradient-to-b from-transparent to-primary/10 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="max-w-md mx-auto space-y-8 relative z-10"
          >
            <h3 className="text-3xl sm:text-4xl font-bold font-display leading-tight text-white mb-2">Faça parte da próxima geração de aprovados</h3>

            <Link href="/checkout" className="w-full bg-primary hover:bg-cyan-400 text-background-dark py-5 px-8 rounded-xl font-black text-lg transition-all duration-300 shadow-[0_0_30px_rgba(0,178,214,0.4)] hover:shadow-[0_0_40px_rgba(0,178,214,0.6)] active:scale-95 flex items-center justify-center gap-3 group translate-y-2">
              QUERO MINHA VAGA
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
            </Link>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-4 pt-6"
            >
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-background-dark relative z-30 bg-primary flex items-center justify-center text-background-dark font-black text-sm">L</div>
                <div className="w-10 h-10 rounded-full border-2 border-background-dark relative z-20 bg-surface-onyx flex items-center justify-center text-white font-black text-sm">M</div>
                <div className="w-10 h-10 rounded-full border-2 border-background-dark relative z-10 bg-electric-teal flex items-center justify-center text-background-dark font-black text-sm">A</div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-400 text-xs">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-300 font-medium">+12k alunos ativos</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

      </div >
    </>
  );
}