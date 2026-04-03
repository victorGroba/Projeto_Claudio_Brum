'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Shield,
    Anchor,
    Plane,
    GraduationCap,
    BookOpen,
    Menu,
    X,
    Rocket,
    Youtube,
    Send,
    Trophy
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from '@/components/icons/SocialIcons';

const COURSES_DATA = [
    {
        title: "Exército",
        icon: <Shield className="text-emerald-400" size={20} />,
        items: ["ESA", "EsPCEx", "Colégio Militar"],
        href: "#concursos"
    },
    {
        title: "Marinha",
        icon: <Anchor className="text-blue-400" size={20} />,
        items: ["Colégio Naval", "Aprendizes", "Fuzileiros Navais"],
        href: "#concursos"
    },
    {
        title: "Aeronáutica",
        icon: <Plane className="text-sky-400" size={20} />,
        items: ["EEAR", "EPCAR"],
        href: "#concursos"
    },
    {
        title: "Técnicas / Federais",
        icon: <GraduationCap className="text-amber-400" size={20} />,
        items: ["CEFET", "IFRJ", "Pedro II", "FAETEC"],
        href: "#concursos"
    },
];

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(4 * 3600 + 59 * 60);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 150);
    };

    if (pathname === '/checkout') {
        return (
            <div className="flex items-center bg-surface-dark p-4 sticky top-0 z-50 border-b border-white/10 backdrop-blur-md">
                <button onClick={() => router.back()} className="text-primary flex size-10 shrink-0 items-center justify-center hover:bg-white/5 rounded-full transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-slate-100 text-lg font-black leading-tight tracking-tight flex-1 text-center uppercase">
                    Checkout Seguro
                </h2>
                <div className="flex w-10 items-center justify-end">
                    <span className="material-symbols-outlined text-primary">lock</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="sticky top-0 z-[60] bg-primary text-background-dark py-2 px-4 text-center font-black text-[10px] md:text-xs tracking-[0.2em] shadow-lg uppercase">
                TURMAS 2026 COM VAGAS LIMITADAS | ENCERRA EM: <span className="font-mono ml-2" suppressHydrationWarning>{formatTime(timeLeft)}</span>
            </div>

            <nav className="fixed w-full z-50 top-[32px] md:top-[36px] px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`
                        mt-4 px-6 flex justify-between h-20 items-center transition-all duration-500
                        ${isScrolled
                            ? 'bg-background-dark/80 backdrop-blur-2xl border border-primary/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                            : 'bg-transparent border-transparent lg:bg-background-dark/70 lg:backdrop-blur-2xl lg:border-primary/10 lg:rounded-[2rem] lg:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                        }
                    `}>
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                            <div className="flex flex-col items-start leading-[0.8]">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-1 ml-0.5">Professor</span>
                                <span className="font-black text-2xl tracking-tighter text-white flex items-center">
                                    CLAUDIO<span className="text-primary">_BRUM</span>
                                </span>
                            </div>
                        </Link>

                        <div className="hidden lg:flex space-x-8 items-center">
                            <div
                                className="relative py-8"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="flex items-center gap-1 text-sm font-black text-slate-300 hover:text-primary transition-colors uppercase tracking-wider">
                                    Cursos
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isMegaMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-surface-dark border border-primary/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-8 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-primary/3 backdrop-blur-3xl"></div>
                                            <div className="relative grid grid-cols-4 gap-6">
                                                {COURSES_DATA.map((section, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        <div className="flex items-center gap-2 pb-2 border-b border-primary/10">
                                                            {section.icon}
                                                            <h4 className="font-black text-xs text-white uppercase tracking-widest">{section.title}</h4>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {section.items.map((item, i) => (
                                                                <li key={i}>
                                                                    <Link
                                                                        href={section.href}
                                                                        className="text-slate-400 hover:text-primary text-sm font-bold block transition-all hover:translate-x-1"
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="relative mt-8 pt-6 border-t border-primary/10 flex justify-between items-center">
                                                <p className="text-slate-500 text-[10px] font-bold uppercase">+500 alunos aprovados nos concursos Militares, Técnicas &amp; Reforço</p>
                                                <Link href="#planos" className="text-primary text-xs font-black uppercase flex items-center gap-1 group">
                                                    Ver planos de preparação
                                                    <Rocket size={12} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                onClick={() => {
                                    const el = document.getElementById('metodo');
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="text-sm font-black text-slate-300 hover:text-primary transition-colors uppercase tracking-wider"
                            >
                                Metodologia
                            </button>
                            <Link href="/aprovados" className="text-sm font-black text-slate-300 hover:text-primary transition-colors uppercase tracking-wider">Aprovados</Link>

                            <a
                                href="https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o preparatório do Professor Claudio Brum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-gold-light text-background-dark px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-tighter shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95"
                            >
                                Quero Minha Vaga
                            </a>
                        </div>

                        <div className="lg:hidden flex items-center gap-4">
                            <a href="https://wa.me/5521999999999?text=Olá! Quero garantir minha vaga." target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark p-2 rounded-lg shadow-lg" aria-label="WhatsApp">
                                <WhatsAppIcon size={20} />
                            </a>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-100 p-2"
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
                            />

                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-background-dark/95 backdrop-blur-3xl z-[100] lg:hidden flex flex-col border-l border-primary/10"
                            >
                                <div className="p-6 flex items-center justify-between border-b border-primary/10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Menu</span>
                                        <div className="font-black text-xl text-white">
                                            CLAUDIO<span className="text-primary">_BRUM</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 bg-white/5 rounded-xl text-slate-400 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                    <div className="space-y-6">
                                        {COURSES_DATA.map((section, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                                className="space-y-3"
                                            >
                                                <div className="flex items-center gap-2 px-1">
                                                    <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/10">
                                                        {section.icon}
                                                    </div>
                                                    <span className="font-black text-xs text-slate-300 uppercase tracking-wider">{section.title}</span>
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {section.items.map((item, i) => (
                                                        <Link
                                                            key={i}
                                                            href={section.href}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="px-3 py-2 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 rounded-xl text-[10px] font-bold text-slate-400 hover:text-white transition-all text-center uppercase tracking-tighter"
                                                        >
                                                            {item}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="space-y-3 pt-6 border-t border-primary/10">
                                        <Link
                                            href="/aprovados"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Trophy size={18} className="text-primary" />
                                                <span className="font-black text-sm text-white uppercase tracking-tight">Mural de Aprovados</span>
                                            </div>
                                            <ChevronDown size={16} className="text-slate-500 -rotate-90" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6 bg-white/5 backdrop-blur-xl border-t border-primary/10 space-y-6">
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <button onClick={() => { setIsMenuOpen(false); document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider py-2">
                                            O Método
                                        </button>
                                        <button onClick={() => { setIsMenuOpen(false); document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider py-2">
                                            A Equipe
                                        </button>
                                        <button onClick={() => { setIsMenuOpen(false); document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider py-2">
                                            Planos
                                        </button>
                                        <button onClick={() => { setIsMenuOpen(false); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider py-2">
                                            FAQ
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-around">
                                        <a href="https://www.instagram.com/professorclaudiobrum" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-primary border border-white/5 hover:border-primary/20 transition-all" aria-label="Instagram">
                                            <InstagramIcon size={20} />
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-red-500 border border-white/5 hover:border-red-500/30 transition-all" aria-label="YouTube">
                                            <Youtube size={20} />
                                        </a>
                                        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-blue-500 border border-white/5 hover:border-blue-500/30 transition-all" aria-label="Telegram">
                                            <Send size={20} />
                                        </a>
                                        <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all" aria-label="WhatsApp">
                                            <WhatsAppIcon size={20} />
                                        </a>
                                    </div>

                                    <a
                                        href="https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o preparatório do Professor Claudio Brum."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full py-4 bg-primary hover:bg-gold-light text-background-dark rounded-2xl font-black text-center uppercase text-sm shadow-xl shadow-primary/20 transition-all block"
                                    >
                                        Quero Minha Vaga
                                    </a>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
