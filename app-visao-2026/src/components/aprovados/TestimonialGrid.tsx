"use client";

import { motion, Variants } from 'framer-motion';

// Strict Type Definition
export interface TestimonialData {
    id: string;
    name: string;
    courseInfo: string;
    quote: string;
    tag: string;
    highlight?: boolean;
}

const allTestimonials: TestimonialData[] = [
    {
        id: "1",
        name: "Lucas Fernandes",
        courseInfo: "Cadete EsPCEx | Aprovado em 2024",
        quote: "Eu estava travado em Física. O acompanhamento diário do Professor Brum destravou minha mente e garantiu a minha farda no exército. O diferencial foi não ser apenas mais um número na plataforma.",
        tag: "Aprovado | EsPCEx",
        highlight: true
    },
    {
        id: "2",
        name: "Mariana Costa",
        courseInfo: "Bolsista Engenharia | MIT",
        quote: "O suporte pedagógico superou as barreiras do ensino médio. O inglês focado e a matemática avançada me levaram a uma bolsa completa nos EUA. A mentoria Black mudou minha vida.",
        tag: "Aprovada | Estados Unidos 🇺🇸",
        highlight: true
    },
    {
        id: "3",
        name: "Rafael Silva",
        courseInfo: "Estudante de Medicina | Milão",
        quote: "As aulas online do projeto me permitiram revalidar meu diploma e seguir meu sonho de praticar medicina na Europa. A qualidade do material em PDF e das aulas diretas ao ponto fez toda a diferença.",
        tag: "Aprovado | Itália 🇮🇹"
    },
    {
        id: "4",
        name: "Beatriz Nogueira",
        courseInfo: "Sargento ESA | Turma 2023",
        quote: "O método do Professor Claudio Brum é direto ao ponto. Não perdi tempo com o que não cai na prova. Recomendo de olhos fechados para quem quer ser Sargento do Exército Brasileiro.",
        tag: "Aprovada | ESA"
    },
    {
        id: "5",
        name: "Carlos Eduardo",
        courseInfo: "Polícia Federal | Turma 2022",
        quote: "Redação sempre foi meu calcanhar de aquiles. Com as correções precisas da equipe técnica, evoluí de 500 para 940 pontos na discursiva e garanti minha vaga.",
        tag: "Aprovado | PF"
    },
    {
        id: "6",
        name: "Juliana Santos",
        courseInfo: "Mestrado U. Porto | Portugal",
        quote: "A tutoria individualizada foi fundamental. Sem o acompanhamento focado nas exigências da banca internacional, eu não teria conseguido.",
        tag: "Aprovada | Portugal 🇵🇹"
    }
];

export default function TestimonialGrid() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
    };

    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
            >
            {allTestimonials.map((testimonial) => (
                <motion.div
                    key={testimonial.id}
                    variants={itemVariants}
                    className={`bg-slate-800/80 backdrop-blur-sm border rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1
                        ${testimonial.highlight
                            ? 'border-primary/50 shadow-[0_10px_40px_-15px_rgba(201,168,76,0.3)] md:col-span-2'
                            : 'border-slate-700/50 hover:border-slate-500/50 shadow-lg'
                        }
                    `}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-sm">
                                {testimonial.name}
                            </h4>
                            <p className="text-primary/70 text-xs font-semibold">{testimonial.courseInfo}</p>
                        </div>
                        {testimonial.highlight && (
                            <span className="material-icons-round text-amber-400 text-2xl">workspace_premium</span>
                        )}
                    </div>

                    <p className={`text-slate-300 italic mb-6 flex-grow leading-relaxed flex items-start text-sm`}>
                        <span className="material-icons-round text-slate-600 mr-2 transform -translate-y-1">format_quote</span>
                        &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
                        <div className={`inline-block px-4 py-1.5 rounded-lg font-bold border ${testimonial.highlight ? 'bg-primary/10 text-white border-primary/30' : 'bg-slate-900 text-slate-400 border-slate-700 text-sm'}`}>
                            {testimonial.tag}
                        </div>
                        <div className="flex text-amber-400">
                            <span className="material-icons-round text-sm">star</span>
                            <span className="material-icons-round text-sm">star</span>
                            <span className="material-icons-round text-sm">star</span>
                            <span className="material-icons-round text-sm">star</span>
                            <span className="material-icons-round text-sm">star</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full mt-20 pt-16 border-t border-slate-800/60"
        >
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div 
                        key={i} 
                        variants={itemVariants}
                        className="break-inside-avoid shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <img
                            src={`/assets/images/relatos-alunos/${i + 1}.jpg`}
                            alt={`Relato de Aprovação ${i + 1}`}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
        
        </>
    );
}
