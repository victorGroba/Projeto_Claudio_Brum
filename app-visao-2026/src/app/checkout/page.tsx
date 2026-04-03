"use client";

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
  };

  const summaryVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 } }
  };

  return (
    <>
      <div className="relative min-h-screen bg-background-light dark:bg-background-dark font-sans overflow-x-hidden">
        {/* Top Navigation */}
        <header className="flex items-center bg-background-light dark:bg-background-dark/95 backdrop-blur-md p-4 border-b border-white/5 justify-between sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-widest font-display uppercase">Prof. Claudio Brum</h2>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(0,178,214,0.15)]">
            <span className="material-symbols-outlined text-primary text-sm animate-pulse">lock</span>
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-tighter hidden sm:inline-block">Pagamento 100% Seguro</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter sm:hidden">Seguro</span>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 md:grid md:grid-cols-12 md:gap-10 relative">

          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none -z-10"></div>

          {/* Left Column: Checkout Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="md:col-span-7 space-y-8"
          >
            <motion.section variants={itemVariants} className="bg-surface-onyx/50 border border-white/5 p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold shadow-[0_0_15px_rgba(0,178,214,0.2)]">1</span>
                <h3 className="text-2xl font-bold font-display text-white">Dados Pessoais</h3>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">Nome Completo</label>
                  <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 px-4 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none" placeholder="Como no seu documento" type="text" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">E-mail</label>
                    <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 px-4 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none" placeholder="seu@email.com" type="email" />
                  </div>
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">WhatsApp</label>
                    <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 px-4 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none" placeholder="(00) 00000-0000" type="tel" />
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-surface-onyx/50 border border-white/5 p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold shadow-[0_0_15px_rgba(0,178,214,0.2)]">2</span>
                <h3 className="text-2xl font-bold font-display text-white">Formato de Pagamento</h3>
              </div>
              <div className="flex gap-2 p-1.5 bg-background-dark/50 rounded-xl border border-white/5 mb-8">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-background-dark font-bold text-sm shadow-md transition-all">
                  <span className="material-symbols-outlined text-xl">credit_card</span>
                  Cartão de Crédito
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-white/5 text-slate-400 font-bold text-sm transition-all">
                  <span className="material-symbols-outlined text-xl">qr_code_2</span>
                  PIX
                </button>
              </div>

              {/* Credit Card Form Placeholder */}
              <div className="space-y-5">
                <div className="flex flex-col gap-2 relative group">
                  <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">Número do Cartão</label>
                  <div className="relative">
                    <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 pl-4 pr-12 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none font-mono tracking-widest text-lg" placeholder="0000 0000 0000 0000" type="text" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-50 text-slate-300">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">Validade</label>
                    <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 px-4 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none font-mono text-center text-lg" placeholder="MM/AA" type="text" />
                  </div>
                  <div className="flex flex-col gap-2 relative group">
                    <label className="text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors">CVV</label>
                    <div className="relative">
                      <input className="w-full bg-background-dark/50 border border-white/10 rounded-xl h-14 pl-4 pr-10 text-slate-100 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none font-mono text-center text-lg" placeholder="123" type="text" />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-slate-500 cursor-help" title="Os 3 dígitos no verso do cartão">info</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.div variants={itemVariants} className="pt-2">
              <button className="w-full font-black py-5 rounded-xl text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-[#008ba8] hover:from-[#00c5eb] hover:to-primary text-background-dark shadow-[0_0_20px_rgba(0,178,214,0.4)] hover:shadow-[0_0_30px_rgba(0,178,214,0.6)] transform hover:-translate-y-1 active:scale-[0.98]">
                Finalizar Matrícula
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs text-center px-4">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Seus dados estão protegidos sob criptografia militar (AES-256).
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Summary & Trust */}
          <motion.aside
            variants={summaryVariants}
            initial="hidden"
            animate="show"
            className="md:col-span-5 mt-10 md:mt-0"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-8 sticky top-28 border border-white/10 bg-gradient-to-br from-surface-dark to-background-dark shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>

              <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">shopping_cart_checkout</span>
                  Resumo do Pedido
                </h4>

                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <p className="font-bold text-xl text-white">Pacote Elite Militar</p>
                      <p className="text-xs text-slate-400 mt-1">Plano Anual • Acesso Vitalício</p>
                    </div>
                    <p className="font-black text-xl text-white">12x R$ 97,00</p>
                  </div>
                  <div className="flex justify-between pt-4 text-slate-400 text-sm">
                    <span>Subtotal</span>
                    <span className="line-through">R$ 1.164,00</span>
                  </div>
                  <div className="flex justify-between pt-3 text-primary font-black">
                    <span className="text-lg">Total Especial</span>
                    <span className="text-2xl">R$ 997,00</span>
                  </div>
                </div>
              </div>

              {/* Urgency & Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-red-400 animate-pulse">local_fire_department</span>
                  <p className="text-sm font-bold text-red-200">Atenção: Apenas <span className="text-red-400">4 Vagas</span> Restantes neste lote</p>
                </div>

                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-green-500">verified_user</span>
                  <div>
                    <p className="text-sm font-bold text-green-400">Garantia Incondicional</p>
                    <p className="text-xs text-green-500/80 mt-0.5">7 Dias para testar ou seu dinheiro de volta, sem perguntas.</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="border border-white/5 bg-background-dark/50 rounded-xl p-5 mt-6 relative">
                <span className="material-symbols-outlined absolute -top-3 -right-2 text-4xl text-white/10 rotate-180">format_quote</span>
                <div className="flex gap-3 items-center mb-3">
                  <img alt="Student portrait" className="w-10 h-10 rounded-full object-cover border-2 border-primary/50 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUL8zGLVeVMRYBmI4zidPDtzg9IlskOBHbynryux-O98FMcaSFGvXgb0MScYpiupWTCDwQg7Mf9kKIEjgxrW53lfUSZ2J3O6Q5z0vU8CqBE3zUO0IbNkrxVacT3RkwvzgoBzzaRcNlsvN3E4SNdwfo3W1dIWnrladVgpWOyIWI1aBFAGgCQrOGqm8Dqv_z4GK65ymPeu2Bh0BwTS70SLwKzkY0MYdyslH-6RIO4eokwk0esDhsF-21NhkWq0YxznUBU12uBcXVW3o" />
                  <div>
                    <p className="text-sm font-bold text-slate-200">Guilherme Santos</p>
                    <div className="flex text-amber-400 text-xs mt-0.5">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-slate-300 font-light leading-relaxed">
                  "O melhor investimento que já fiz para minha carreira. O conteúdo é prático e direto ao ponto."
                </p>
              </div>
            </div>
          </motion.aside>
        </main>
      </div>
    </>
  );
}