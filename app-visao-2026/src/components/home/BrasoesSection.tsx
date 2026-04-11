'use client';

import { motion } from 'framer-motion';
import { Shield, Anchor, Plane, GraduationCap, TrendingUp, FileText, Siren, Flame, ShieldCheck } from 'lucide-react';

interface Concurso {
    nome: string;
    vagas: string;
    detalhe: string;
    status: 'Edital Aberto' | 'Previsto' | 'Inscrições' | 'Autorizado';
}

interface Categoria {
    nome: string;
    icon: React.ElementType;
    cor: string;
    corBg: string;
    corBorder: string;
    logoPlaceholder: string;
    concursos: Concurso[];
}

const CATEGORIAS: Categoria[] = [
    {
        nome: 'Exército Brasileiro',
        icon: Shield,
        cor: 'text-emerald-400',
        corBg: 'bg-emerald-500/10',
        corBorder: 'border-emerald-500/20',
        logoPlaceholder: '/assets/images/brasoes/exercitobrasileiro.webp',
        concursos: [
            { nome: 'ESA | Escola de Sargentos', vagas: '1.100 vagas', detalhe: 'R$ 3.825 + adicionais', status: 'Edital Aberto' },
            { nome: 'EsPCEx | Escola Preparatória', vagas: '440 vagas', detalhe: 'Carreira de Oficial', status: 'Previsto' },
        ],
    },
    {
        nome: 'Marinha do Brasil',
        icon: Anchor,
        cor: 'text-blue-400',
        corBg: 'bg-blue-500/10',
        corBorder: 'border-blue-500/20',
        logoPlaceholder: '/assets/images/brasoes/marinhadobrasil.jpeg',
        concursos: [
            { nome: 'Colégio Naval', vagas: '180 vagas', detalhe: 'Carreira de Oficial', status: 'Previsto' },
            { nome: 'Aprendizes de Marinheiro', vagas: '900 vagas', detalhe: 'R$ 1.303 (aluno)', status: 'Inscrições' },
            { nome: 'Fuzileiros Navais', vagas: '960 vagas', detalhe: 'R$ 3.825 + adicionais', status: 'Previsto' },
        ],
    },
    {
        nome: 'Força Aérea Brasileira',
        icon: Plane,
        cor: 'text-sky-400',
        corBg: 'bg-sky-500/10',
        corBorder: 'border-sky-500/20',
        logoPlaceholder: '/assets/images/brasoes/forçaaereabrasileira.jpg',
        concursos: [
            { nome: 'EEAR | Escola de Especialistas', vagas: '252 vagas', detalhe: 'R$ 3.825 + adicionais', status: 'Edital Aberto' },
            { nome: 'EPCAR | Escola Preparatória', vagas: '130 vagas', detalhe: 'Carreira de Oficial', status: 'Previsto' },
        ],
    },
    {
        nome: 'Polícia Militar do RJ',
        icon: Siren,
        cor: 'text-red-400',
        corBg: 'bg-red-500/10',
        corBorder: 'border-red-500/20',
        logoPlaceholder: '/assets/images/brasoes/policia.jpg',
        concursos: [
            { nome: 'Soldado PM | PMERJ', vagas: '2.000 vagas previstas', detalhe: 'R$ 5.233 após formação', status: 'Autorizado' },
            { nome: 'Curso de Formação', vagas: 'Ensino Médio completo', detalhe: 'R$ 2.956 (aluno)', status: 'Previsto' },
        ],
    },
    {
        nome: 'Corpo de Bombeiros Militar RJ',
        icon: Flame,
        cor: 'text-orange-400',
        corBg: 'bg-orange-500/10',
        corBorder: 'border-orange-500/20',
        logoPlaceholder: '/assets/images/brasoes/bombeiros.jpeg',
        concursos: [
            { nome: 'Soldado BM | CBMERJ', vagas: 'Busca e Salvamento', detalhe: 'R$ 5.233 após formação', status: 'Previsto' },
            { nome: 'SMTV | Temporário Voluntário', vagas: '1.500 vagas', detalhe: 'R$ 2.956 (aluno)', status: 'Edital Aberto' },
        ],
    },
    {
        nome: 'Guarda Municipal do RJ',
        icon: ShieldCheck,
        cor: 'text-cyan-400',
        corBg: 'bg-cyan-500/10',
        corBorder: 'border-cyan-500/20',
        logoPlaceholder: '/assets/images/brasoes/Guarda_municipal.png',
        concursos: [
            { nome: 'Guarda Municipal | GM-Rio', vagas: 'A ser definido', detalhe: 'Ensino Médio completo', status: 'Previsto' },
            { nome: 'Força Municipal (Elite)', vagas: '600 vagas (interno)', detalhe: 'Divisão armada de elite', status: 'Inscrições' },
        ],
    },
    {
        nome: 'Escolas Técnicas e Federais',
        icon: GraduationCap,
        cor: 'text-amber-400',
        corBg: 'bg-amber-500/10',
        corBorder: 'border-amber-500/20',
        logoPlaceholder: '/assets/images/brasoes/escolastecnicas.jpg',
        concursos: [
            { nome: 'CEFET/RJ', vagas: 'Ensino Médio Técnico', detalhe: 'Referência em Engenharia', status: 'Previsto' },
            { nome: 'IFRJ | Instituto Federal', vagas: 'Ensino Médio Integrado', detalhe: 'Diversas unidades no RJ', status: 'Previsto' },
            { nome: 'Colégio Pedro II', vagas: 'Ensino Fundamental e Médio', detalhe: 'Escola Federal centenária', status: 'Previsto' },
            { nome: 'FAETEC', vagas: 'Ensino Médio Técnico', detalhe: 'Rede estadual do RJ', status: 'Inscrições' },
        ],
    },
    {
        nome: 'ENEM | Vestibulares',
        icon: FileText,
        cor: 'text-violet-400',
        corBg: 'bg-violet-500/10',
        corBorder: 'border-violet-500/20',
        logoPlaceholder: '/assets/images/logo_instituicoes/iconenem.webp',
        concursos: [
            { nome: 'ENEM', vagas: 'Exame Nacional', detalhe: 'Porta de entrada para universidades', status: 'Previsto' as const },
            { nome: 'UERJ | Vestibular', vagas: 'Universidade Estadual', detalhe: 'Referência no RJ', status: 'Previsto' as const },
        ],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BrasoesSection() {
    return (
        <section className="relative py-24 lg:py-32 bg-surface-dark overflow-hidden" id="concursos">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.03),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.15em] mb-6"
                    >
                        <TrendingUp size={14} />
                        Oportunidades Reais
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4"
                    >
                        Militares. Técnicas. Federais.{' '}
                        <span className="text-primary">Nós preparamos para todas.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Concursos militares de Ensino Médio e processos seletivos das melhores escolas técnicas e federais do país. Veja onde nossos alunos são aprovados.
                    </motion.p>
                </div>

                {/* Grid - 2x2 on desktop */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {CATEGORIAS.map((cat, idx) => {
                        const Icon = cat.icon;
                        const isLast = idx === CATEGORIAS.length - 1 && CATEGORIAS.length % 2 !== 0;
                        return (
                            <motion.div
                                key={cat.nome}
                                variants={item}
                                className={`relative rounded-3xl bg-background-dark border ${cat.corBorder} p-8 hover:shadow-lg transition-all group overflow-hidden ${isLast ? 'md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto' : ''}`}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-2xl ${cat.corBg} ${cat.cor}`}>
                                        <Icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-lg">{cat.nome}</h3>
                                        <p className={`text-xs font-bold uppercase tracking-wider ${cat.cor}`}>
                                            {cat.concursos.length} {cat.concursos.length > 1 ? 'opções' : 'opção'}
                                        </p>
                                    </div>
                                </div>

                                {/* Logo */}
                                <div className="w-full h-36 mb-6 rounded-2xl overflow-hidden">
                                    <img
                                        src={cat.logoPlaceholder}
                                        alt={`Brasão ${cat.nome}`}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            if (target.parentElement) {
                                                const fallback = document.createElement('div');
                                                fallback.className = `flex flex-col items-center gap-2 ${cat.cor}`;
                                                fallback.innerHTML = `<span class="material-symbols-outlined text-5xl" style="font-variation-settings: 'FILL' 1">school</span><span class="text-xs font-bold uppercase tracking-wider">Logo</span>`;
                                                target.parentElement.appendChild(fallback);
                                            }
                                        }}
                                    />
                                </div>

                                {/* Entries */}
                                <div className="space-y-3">
                                    {cat.concursos.map((c, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white/3 border border-white/5 hover:border-primary/15 transition-colors">
                                            <div className="flex items-start justify-between mb-1.5">
                                                <h4 className="text-white font-bold text-sm leading-tight flex-1">
                                                    {c.nome}
                                                </h4>
                                                <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase whitespace-nowrap ${
                                                    c.status === 'Edital Aberto'
                                                        ? 'bg-primary text-background-dark'
                                                        : c.status === 'Inscrições'
                                                        ? 'bg-secondary/20 text-secondary border border-secondary/20'
                                                        : c.status === 'Autorizado'
                                                        ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                                                        : 'bg-white/10 text-slate-400 border border-white/10'
                                                }`}>
                                                    {c.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-slate-500 font-semibold">{c.vagas}</span>
                                                <span className="text-primary font-bold">{c.detalhe}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/5521999999999?text=Olá! Tenho interesse em ${cat.nome}. Quero saber mais sobre a preparação!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold text-sm hover:bg-primary/20 transition-all"
                                >
                                    Quero me Preparar
                                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
