'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, BookOpen } from 'lucide-react';

const CREDENTIALS = [
    {
        icon: Award,
        number: '20+',
        label: 'Anos preparando alunos para concursos, escolas técnicas e reforço escolar',
    },
    {
        icon: Users,
        number: '500+',
        label: 'Alunos aprovados em concursos militares, CEFET, IFRJ e Pedro II',
    },
    {
        icon: Target,
        number: '94%',
        label: 'Taxa de aprovação dos alunos que seguem o método completo',
    },
    {
        icon: BookOpen,
        number: '3',
        label: 'Pilares: Militares, Escolas Técnicas/Federais e Reforço Escolar',
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function AuthoritySection() {
    return (
        <section className="relative py-24 lg:py-32 bg-background-dark overflow-hidden" id="autoridade">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface-dark border border-primary/10">
                            <img
                                src="/assets/images/banner_site.png"
                                alt="Professor Cláudio Brum"
                                className="w-full h-full object-cover object-[80%_20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 bg-surface-dark/80 backdrop-blur-xl border border-primary/10 rounded-2xl px-6 py-4">
                                <p className="font-serif text-lg font-bold text-white">
                                    Prof. Cláudio Brum
                                </p>
                                <p className="text-primary text-sm font-semibold">
                                    Militares • Escolas Técnicas • Reforço Escolar
                                </p>
                            </div>
                        </div>

                        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-primary/10 -z-10 blur-sm" />
                    </motion.div>

                    {/* Right - Copy & Credentials */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="relative mb-8">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-6">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Quem é Cláudio Brum
                                </span>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
                                    <Award size={18} className="text-primary/60" />
                                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
                                </div>
                            </div>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                            Não é só um professor.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">É o estrategista da sua aprovação.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Com mais de <strong className="text-white">20 anos de experiência</strong> na preparação para concursos e no ensino de Matemática, Cláudio Brum é graduado em Física e Matemática e especialista em Psicopedagogia. Foi o idealizador do <strong className="text-white">Clube da Matemática</strong>, um projeto focado em descomplicar o aprendizado e destravar a mente dos alunos para as provas mais exigentes.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Um pilar fundamental do seu método vem de sua experiência como <strong className="text-white">saxofonista</strong>. Matemática e música são linguagens baseadas em <strong className="text-white">padrões</strong> e <strong className="text-white">disciplina</strong>. Ao aplicar o rigor do treino musical aos estudos, com repetição estratégica, correção de erros e refinamento diário, ele ensina o aluno a resolver questões de forma quase automática. O resultado é um método em que a aprovação não é acaso, mas consequência de um processo bem estruturado.
                        </p>

                        {/* Credentials Grid */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {CREDENTIALS.map((cred) => (
                                <motion.div
                                    key={cred.number}
                                    variants={item}
                                    className="p-5 rounded-2xl bg-surface-dark border border-primary/10 hover:border-primary/25 transition-colors group"
                                >
                                    <cred.icon
                                        size={22}
                                        className="text-primary mb-3 group-hover:scale-110 transition-transform"
                                    />
                                    <p className="text-2xl font-black text-white mb-1">{cred.number}</p>
                                    <p className="text-sm text-slate-500 leading-snug">{cred.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
