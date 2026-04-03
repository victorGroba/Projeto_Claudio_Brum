'use client';

import { motion } from 'framer-motion';

const TEAM = [
    {
        name: 'Cláudio Brum',
        role: 'Idealizador e Estrategista',
        desc: 'Graduado em Matemática e Física, pós-graduado em Finanças e especialista em concursos públicos. Empreendedor, saxofonista e a mente estratégica por trás de todo o método.',
        image: '/assets/images/professores/claudio_com_alunos.jpg',
    },
    {
        name: 'Keit Lima Brum',
        role: 'Especialista em Língua Portuguesa',
        desc: 'Especialista em Mídias na Educação e servidora pública com atuação desde 1994. Dedica sua vida à formação e preparação de alto nível para os concursos mais difíceis do país.',
        image: '/assets/images/professores/Keit.jpeg',
    },
    {
        name: 'Eudes Holanda Marins',
        role: 'Química e Exatas',
        desc: 'Formado desde 2012, com sólida base desde 2008 na preparação para vestibulares e meios militares. Sua didática pragmática e focada na resolução estratégica de exercícios alavanca o desempenho prático.',
        image: '/assets/images/professores/eudesHolanda.png',
    },
    {
        name: 'Milena Vasconcelos',
        role: 'Língua Portuguesa e Redação',
        desc: 'Focada em destravar a escrita e a interpretação textual, utiliza uma metodologia prática orientada a resultados desde 2022 para dominar as principais competências exigidas do concurseiro.',
        image: '/assets/images/professores/MilenaVasconcelo.jpeg',
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function TeamSection() {
    return (
        <section className="relative py-24 bg-surface-dark overflow-hidden" id="equipe">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            O Esquadrão
                        </span>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
                            <span className="material-symbols-outlined text-primary/60 text-xl">groups</span>
                            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                            Uma tropa de especialistas pronta para{' '}
                            <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">alavancar sua nota.</span>
                        </h2>

                        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            Você não estudará sozinho. Nosso corpo docente compartilha a mesma visão estratégica focada puramente em resultado.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => {
                        // Each card gets a unique entrance animation
                        const entranceVariants = [
                            { hidden: { opacity: 0, x: -60, rotateY: -15 }, show: { opacity: 1, x: 0, rotateY: 0 } },
                            { hidden: { opacity: 0, y: 80, scale: 0.85 }, show: { opacity: 1, y: 0, scale: 1 } },
                            { hidden: { opacity: 0, y: -60, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } },
                            { hidden: { opacity: 0, x: 60, rotateY: 15 }, show: { opacity: 1, x: 0, rotateY: 0 } },
                        ];
                        const variant = entranceVariants[index % 4];

                        return (
                            <motion.div
                                key={member.name}
                                initial={variant.hidden}
                                whileInView={variant.show}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="relative bg-background-dark/50 border border-white/5 rounded-3xl overflow-hidden group cursor-pointer"
                            >
                                {/* Animated glow border on hover */}
                                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:via-yellow-400/20 group-hover:to-primary/30 transition-all duration-500 -z-10 blur-[2px]" />

                                <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                    
                                    {/* Name overlay with slide-up entrance */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                                        >
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{member.role}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                                            <p className="text-primary text-sm font-semibold group-hover:text-yellow-400 transition-colors duration-300">{member.role}</p>
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {member.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
