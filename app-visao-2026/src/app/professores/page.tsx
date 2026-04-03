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

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.6 } }
  };

  return (
    <>
      <main className="flex-grow flex flex-col overflow-x-hidden relative" ref={targetRef}>

        {/* Header Navigation */}
        <header className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md border-b border-white/5 p-4 justify-between">
          <Link href="/" className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </Link>
          <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">Elite Dream Team</h2>
          <div className="flex w-10 items-center justify-end"></div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[420px] w-full flex flex-col justify-end overflow-hidden">
          <motion.div style={{ y: headerY }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
          </motion.div>

          <div className="relative z-20 p-6 sm:px-12 lg:px-24 space-y-3 max-w-7xl mx-auto w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif-header leading-tight"
            >
              Quem vai te aprovar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-slate-300 text-base sm:text-lg font-body-alt leading-relaxed max-w-md"
            >
              Você é a média dos professores com quem convive. Estude com a elite da educação brasileira.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1 bg-primary rounded-full mt-4"
            ></motion.div>
          </div>
        </section>

        {/* Founder Featured Section */}
        <section className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="bg-surface-onyx border border-white/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/10 blur-3xl -z-0"></div>
            <div className="flex flex-col md:flex-row p-5 sm:p-8 gap-6 relative z-10">
              <div className="w-full aspect-[4/5] md:w-56 overflow-hidden rounded-lg border-2 border-electric-teal shadow-lg shadow-electric-teal/20 bg-background-dark">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  alt="Professor Claudio Brum"
                  className="w-full h-full object-cover"
                  src="/assets/images/professores/claudio_com_alunos.jpg"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="inline-flex px-3 py-1 rounded-full bg-electric-teal/20 text-electric-teal text-xs font-bold uppercase tracking-wider w-fit">Fundador</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-100">Cláudio Brum</h3>
                <p className="text-slate-400 font-body-alt text-base sm:text-lg leading-relaxed italic border-l-4 border-electric-teal/30 pl-4">
                  "Aprovação não é sorte, é método. Minha filosofia é transformar o potencial de cada aluno em resultado de elite."
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300 font-medium">+20 anos de experiência</span>
                  <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300 font-medium">Especialista em Performance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-electric-teal/40 via-electric-teal/10 to-transparent h-1 w-full"></div>
          </motion.div>
        </section>

        {/* The Dream Team Grid */}
        <section className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight whitespace-nowrap">The Dream Team</h2>
            <div className="flex-grow h-px bg-gradient-to-r from-white/20 to-transparent"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              { 
                name: "Profª. Keit Lima Brum", 
                title: "Língua Portuguesa & Mídias na Educação", 
                desc: "Servidora pública na Educação Básica desde 1994, dedica +20 anos de experiência integral à formação tática para concursos públicos.", 
                img: "/assets/images/professores/Keit.jpeg" 
              },
              { 
                name: "Prof. Eudes Holanda Marins", 
                title: "Química, Física & Matemática", 
                desc: "Formado desde 2012. Especialista em preparação militar com marca registrada na didática clara e resolução de exercícios cirúrgica.", 
                img: "/assets/images/professores/eudesHolanda.png" 
              },
              { 
                name: "Milena Vasconcelos", 
                title: "Coordenação Escolar e Pedagógica", 
                desc: "Responsável pelo acompanhamento contínuo e direcionamento dos alunos para garantir performance máxima e consistência.", 
                img: "/assets/images/professores/MilenaVasconcelo.jpeg" 
              }
            ].map((prof, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-surface-onyx border border-white/5 hover:border-primary/30 rounded-xl p-5 group transition-colors duration-300">
                <div className="aspect-square w-full rounded-lg overflow-hidden border-2 border-transparent transition-all mb-5 relative bg-background-dark">
                  <img alt={prof.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out object-top" src={prof.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">{prof.name}</h4>
                <p className="text-primary text-sm font-semibold mt-1 mb-2">{prof.title}</p>
                <p className="text-slate-400 text-sm font-body-alt leading-snug">{prof.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-8 lg:px-12 py-16 pb-24 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-royalty-purple to-[#2A0F5C] rounded-3xl p-10 sm:p-14 flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl shadow-royalty-purple/20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"
            ></motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white relative z-10 leading-tight">Junte-se ao <br className="sm:hidden" />Esquadrão</h2>
            <p className="text-white/90 text-lg sm:text-xl font-body-alt max-w-lg relative z-10">
              Não perca a chance de ser guiado pelos melhores. As vagas para 2026 são limitadas.
            </p>
            <Link className="w-full sm:w-auto px-10 bg-primary hover:bg-cyan-400 text-background-dark font-black py-5 rounded-xl shadow-[0_0_30px_rgba(0,178,214,0.5)] transition-all relative z-10 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,178,214,0.7)] active:scale-95 text-lg flex items-center justify-center gap-3 group" href="/checkout">
              QUERO MINHA VAGA AGORA
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}