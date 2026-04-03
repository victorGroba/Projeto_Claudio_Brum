"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonialsMock = [
    {
        name: "Lucas Fernandes",
        course: "Cadete EsPCEx",
        quote: "Eu estava travado em Física. O acompanhamento do Professor Brum destravou minha mente e garantiu a minha farda no Exército.",
        tag: "Aprovado | EsPCEx",
        transformation: "De estagiário sem perspectiva a Oficial do Exército com estabilidade.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe4n-tA5u3pAqK3Qi76XkFCD98KJ00z5O9WBXC7yJtoe8GM35MxaPY9OX0xlr7VfucAVQXMkdq6JplNcrBOdj-5jLLWWYrxEHy4ShJpUQEqsbo30VkQdhjYnZJC1-AhAttocQ45GDCA6vl0KBBTkWKzyookG-nXfDyIOEAdlC9wkGVYWYIt9XOxiJ0psRRcE0b8orTYZ6D1k-buNiPEmHHcl11MR-cVsDjerjVv0AiO1goJjutPgDAgu5A9MsV300yV3uzJ2a8gYE"
    },
    {
        name: "Amanda Reis",
        course: "Sargento EEAR",
        quote: "O método focado na banca da Aeronáutica me mostrou exatamente o que estudar. Aprovada na EEAR com 8 meses de preparação.",
        tag: "Aprovada | EEAR",
        transformation: "De vendedora em loja a Sargento da Força Aérea Brasileira.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeByAmni80-W57bwJjxJueMd6kCwPObCRCC48EF5g4lbxbZ4uCTwGTTMrL1VuCycRjQVWkY11Y129UnE2Sjc7nFV-aKCZQ06e3acbBoCyHCXDHpfEFUTlJkM7e4V22jPN-29qXthG89vdvlTOPum2zgssUUp3k_frGOd1npG919MBDwpshDnSlT2MlBjF1EL1j4sufLHvU_W_js-YQAoecbGKjx1p-sxX-67DAiz73T7VuEJO4deK35WEsFzmKz1GsMK24IcdFYmI"
    },
    {
        name: "Rafael Souza",
        course: "Aluno EPCAR",
        quote: "Tentei 2 anos sozinho e nunca passava. Em menos de 1 ano com o Professor Claudio, fui aprovado na EPCAR. O método é outro nível.",
        tag: "Aprovado | EPCAR",
        transformation: "De reprovado 2 vezes a aluno da EPCAR com futuro de Oficial.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWL6egc0pgmv6hg4iD7P26xto73qpga_dlcHja-FaH2G04JPS-E8ywnSpmUVLxnyYpJMsi9Mb2wSeuy9BzeXsq38HRz1E74hMtptRnkBs9I0DC_iLPWtT-Y7FE-Tj455Fi7U3ZcPI3CLOomSDqK_KVDcWVbwqiTYljGrI_kDaelOv4dbEjSJYv_5b-M99Tb3N7_AqhoGsYaW9udMF8B447s7pjicxVEiPuQzw1MDOaSWB-CDFPco3BfjEeAgsh6jlOHsmcHX4dJoM"
    },
    {
        name: "Beatriz Nogueira",
        course: "Sargento ESA",
        quote: "O método do Professor Claudio Brum é direto ao ponto. Não perdi tempo com o que não cai na prova. Recomendo de olhos fechados!",
        tag: "Aprovada | ESA",
        transformation: "Independência financeira conquistada aos 19 anos.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtvxs92_Fln19fmFHnDzcmuhgOviOZIzsH22lauI6_OiluiHgamJ2IbJ8hqq5lIn-xr5G4Ks_jaq2XvSbnWCqYINqCVviy8N8EooGVBIjfyKvN2taRCi3Ba_wJNms50_UFkaZQIux4acc9CJHzjWEgzS7Kj0FfeBDYx9ScCoNTgSD-VM1xJbCML6XJ4Y4ZtLtw0wtwvC370GSMo5gE0fFpXpPbWk0dNkW4o5JQvXI4xLv0R1syFUhx2aVdgq6LnGCbpoW-RH-tF98"
    }
];

export default function ProvaSocialHome() {
    return (
        <section className="py-24 bg-surface-dark overflow-hidden relative border-t border-primary/10">
            <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/3 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Vidas <span className="text-primary">Transformadas</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Histórias reais de quem seguiu o método e garantiu a farda.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {testimonialsMock.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-background-dark/80 backdrop-blur-sm border border-primary/10 hover:border-primary/25 rounded-2xl p-6 transition-all group shadow-lg flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors object-cover"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-primary text-sm font-semibold">{testimonial.course}</p>
                                </div>
                            </div>

                            <p className="text-slate-300 italic mb-6 flex-grow leading-relaxed flex items-start">
                                <span className="material-icons-round text-slate-600 mr-2 transform -translate-y-1">format_quote</span>
                                &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="mt-auto">
                                <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg text-primary text-xs font-bold border border-primary/20 mb-2">
                                    {testimonial.tag}
                                </div>
                                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-wider leading-tight">
                                    {testimonial.transformation}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="flex justify-center"
                >
                    <Link href="/aprovados" className="group flex items-center justify-center gap-3 bg-primary hover:bg-gold-light text-background-dark px-10 py-5 rounded-2xl font-black text-xl lg:text-2xl shadow-[0_0_40px_-10px_rgba(201,168,76,0.5)] transition-all transform hover:-translate-y-1 w-full md:w-auto">
                        Ver o Mural Completo de Aprovados
                        <span className="material-icons-round text-3xl group-hover:translate-x-2 transition-transform">emoji_events</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
