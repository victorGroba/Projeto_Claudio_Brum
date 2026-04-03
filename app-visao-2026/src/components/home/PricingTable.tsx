'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Crown, Calendar, Users, BookOpen, Award, Gift } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

type PlanMode = 'individual' | 'grupo';

interface Plan {
    name: string;
    price: string;
    period: string;
    perClass: string;
    features: string[];
    highlighted?: boolean;
    badge?: string;
    icon: React.ElementType;
}

const INDIVIDUAL_PLANS: Plan[] = [
    {
        name: 'Pacote Básico',
        price: 'R$ 360',
        period: '/ mês',
        perClass: 'R$ 90/aula',
        features: [
            '4 aulas individuais/mês',
            'Acompanhamento quinzenal',
            'Material de apoio incluso',
        ],
        icon: Zap,
    },
    {
        name: 'Pacote Estratégico',
        price: 'R$ 640',
        period: '/ mês',
        perClass: 'R$ 80/aula',
        features: [
            '8 aulas individuais/mês',
            'Plano de estudos por edital',
            'Acompanhamento semanal',
            'Simulados mensais',
        ],
        icon: Star,
    },
    {
        name: 'Pacote Elite',
        price: 'R$ 840',
        period: '/ mês',
        perClass: 'R$ 70/aula',
        features: [
            '12 aulas individuais/mês',
            'Plano estratégico por concurso',
            'Acompanhamento contínuo',
            'Simulados + correção detalhada',
            'Acesso prioritário à equipe',
        ],
        highlighted: true,
        badge: 'O Mais Escolhido',
        icon: Crown,
    },
];

const GROUP_PLANS: Plan[] = [
    {
        name: 'Grupo Essencial',
        price: 'R$ 120',
        period: '/ mês',
        perClass: 'R$ 30/aula',
        features: [
            '4 aulas em grupo/mês',
            'Turmas de 10 a 30 alunos',
            'Material complementar',
            'Ambiente colaborativo',
        ],
        icon: Users,
    },
    {
        name: 'Grupo Estratégico',
        price: 'R$ 200',
        period: '/ mês',
        perClass: 'R$ 25/aula',
        features: [
            '8 aulas em grupo/mês',
            'Turmas de 10 a 30 alunos',
            'Plano de estudos do grupo',
            'Acompanhamento de desempenho',
        ],
        highlighted: true,
        badge: 'Mais Popular',
        icon: Star,
    },
    {
        name: 'Grupo Intensivo ENEM/Militar',
        price: 'R$ 270',
        period: '/ mês',
        perClass: '12 aulas + simulado',
        features: [
            '12 aulas em grupo/mês',
            'Simulado mensal incluso',
            'Foco total em concursos militares',
            'Correção coletiva estratégica',
            'Material exclusivo do intensivo',
        ],
        badge: 'Intensivo',
        icon: Award,
    },
];

const BONUSES = [
    { name: 'Apostila Digital Completa por Edital', value: 'R$ 297' },
    { name: 'Banco de Provas Anteriores (ESA, EEAR, EPCAR)', value: 'R$ 197' },
    { name: 'Grupo VIP de Alunos no WhatsApp', value: 'R$ 97' },
    { name: 'Diagnóstico Pedagógico Inicial Gratuito', value: 'R$ 150' },
];

const WA_BASE = 'https://wa.me/5521999999999?text=';

// Animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function PlanCard({ plan, mode }: { plan: Plan; mode: PlanMode }) {
    const Icon = plan.icon;
    const waText = encodeURIComponent(
        `Olá! Tenho interesse no plano "${plan.name}" (${mode === 'individual' ? 'Individual' : 'Grupo'}). Quero garantir minha vaga!`
    );

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.25, ease: 'easeOut' },
            }}
            className={`relative flex flex-col p-8 rounded-3xl border h-full w-full cursor-default ${
                plan.highlighted
                    ? 'bg-surface-dark border-primary shadow-[0_0_50px_rgba(201,168,76,0.18),0_0_100px_rgba(201,168,76,0.06)]'
                    : 'bg-surface-dark border-white/8 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
            }`}
            style={plan.highlighted ? { boxShadow: '0 0 50px rgba(201,168,76,0.18), 0 0 100px rgba(201,168,76,0.06)' } : undefined}
        >
            {/* Highlighted glow ring */}
            {plan.highlighted && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/25 via-primary/8 to-primary/25 -z-10 blur-[1px]" />
            )}

            {/* Badge */}
            {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    {plan.highlighted ? (
                        <motion.div
                            animate={{ boxShadow: ['0 0 12px rgba(201,168,76,0.4)', '0 0 24px rgba(201,168,76,0.7)', '0 0 12px rgba(201,168,76,0.4)'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap bg-primary text-background-dark"
                        >
                            {plan.badge}
                        </motion.div>
                    ) : (
                        <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap bg-primary/15 text-primary border border-primary/25">
                            {plan.badge}
                        </span>
                    )}
                </div>
            )}

            {/* Icon & Name */}
            <div className="flex items-center gap-3 mb-6 mt-2">
                <div className={`p-2.5 rounded-xl ${plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                    <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            </div>

            {/* Price */}
            <div className="mb-2">
                <span className={`text-4xl font-black ${plan.highlighted ? 'text-primary' : 'text-white'}`}>
                    {plan.price}
                </span>
                <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
            </div>
            <p className={`text-sm font-semibold mb-8 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`}>
                {plan.perClass}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-slate-200">
                        <span
                            className={`material-symbols-outlined text-base mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-primary' : 'text-primary/70'}`}
                        >
                            check_circle
                        </span>
                        {feat}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href={`${WA_BASE}${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98] ${
                    plan.highlighted
                        ? 'bg-primary hover:bg-primary/90 text-background-dark shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_35px_rgba(201,168,76,0.5)]'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                }`}
            >
                <WhatsAppIcon size={18} />
                Quero Este Plano
            </a>
        </motion.div>
    );
}

export default function PricingTable() {
    const [mode, setMode] = useState<PlanMode>('individual');
    const plans = mode === 'individual' ? INDIVIDUAL_PLANS : GROUP_PLANS;

    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="planos">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        Investimento
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-4"
                    >
                        Invista na sua{' '}
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(201,168,76,0.3)]">farda</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-slate-300 text-lg max-w-2xl mx-auto"
                    >
                        Um cursinho presencial militar cobra R$ 800 a R$ 1.200/mês. Aqui, você tem preparação de elite por uma fração do investimento.
                    </motion.p>
                </div>

                {/* Bonus Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto mb-14 p-6 rounded-2xl bg-surface-dark border border-primary/15"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Gift size={20} className="text-primary" />
                        <h3 className="text-white font-black text-sm uppercase tracking-wider">Bônus inclusos em todos os planos</h3>
                    </div>
                    <div className="space-y-3">
                        {BONUSES.map((bonus) => (
                            <div key={bonus.name} className="flex items-center justify-between gap-4">
                                <span className="text-slate-200 text-sm flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-base flex-shrink-0">check_circle</span>
                                    {bonus.name}
                                </span>
                                <span className="text-slate-400 text-sm line-through whitespace-nowrap">{bonus.value}</span>
                            </div>
                        ))}
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                            <span className="text-white font-bold text-sm">Valor total dos bônus</span>
                            <span className="text-primary font-black text-lg">R$ 741 GRÁTIS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Toggle & Scarcity */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center mb-14"
                >
                    <div className="inline-flex p-1.5 rounded-2xl bg-surface-dark border border-white/8">
                        {(['individual', 'grupo'] as PlanMode[]).map((m) => (
                            <button
                                key={m}
                                onClick={() => setMode(m)}
                                className={`relative px-6 sm:px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-200 ${
                                    mode === m ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                                }`}
                            >
                                {mode === m && (
                                    <motion.div
                                        layoutId="pricing-pill"
                                        className="absolute inset-0 bg-primary/15 border border-primary/25 rounded-xl"
                                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">
                                        {m === 'individual' ? 'person' : 'groups'}
                                    </span>
                                    {m === 'individual' ? 'Aulas Individuais' : 'Aulas em Grupo'}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="h-4 mt-4">
                        <AnimatePresence>
                            {mode === 'individual' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center justify-center gap-2 text-primary font-bold text-sm bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
                                >
                                    <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                                    Atenção: Vagas estritamente limitadas para acompanhamento individual.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Plans Grid (3 cards per mode) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-5xl mx-auto items-start pt-6"
                        >
                            {plans.map((plan) => (
                                <PlanCard key={plan.name} plan={plan} mode={mode} />
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <p className="text-slate-400 text-sm max-w-xl mx-auto">
                        Não sabe qual plano é ideal para você?{' '}
                        <a
                            href="https://wa.me/5521999999999?text=Olá! Preciso de ajuda para escolher o plano ideal para minha preparação militar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-bold hover:underline"
                        >
                            Fale com nosso especialista via WhatsApp
                        </a>{' '}
                        e receba uma recomendação personalizada em minutos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
