'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsAppIcon, InstagramIcon } from '@/components/icons/SocialIcons';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const QUICK_LINKS = [
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Equipe', href: '/professores' },
    { label: 'Metodologia', href: '/metodo' },
    { label: 'Aprovados', href: '/aprovados' },
];

const SERVICES = [
    'Concursos Militares',
    'Escolas Técnicas',
    'Reforço Escolar',
    'Acompanhamento Individual',
];

export function Footer() {
    const pathname = usePathname();
    if (pathname === '/checkout') return null;

    return (
        <footer className="relative bg-background-dark overflow-hidden">
            {/* Top CTA Banner */}
            <div className="relative border-t border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                                Pronto para conquistar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary">aprovação?</span>
                            </h3>
                            <p className="text-slate-400 text-sm">Fale com a nossa equipe e descubra o plano ideal para o seu objetivo.</p>
                        </div>
                        <a
                            href="https://wa.me/5521999999999?text=Olá! Quero saber mais sobre os cursos do Professor Claudio Brum."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] active:scale-[0.98] shrink-0"
                        >
                            <WhatsAppIcon size={22} />
                            Falar no WhatsApp
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2.5 mb-6">
                                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                                <div>
                                    <span className="font-black text-xl text-white tracking-tighter block leading-none">PROF. CLAUDIO</span>
                                    <span className="font-black text-xl text-primary tracking-tighter block leading-none">BRUM</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
                                Preparatório de elite para concursos militares, escolas técnicas e federais. +500 alunos aprovados com metodologia estratégica e acompanhamento individual.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.instagram.com/professorclaudiobrum"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-500/10 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <InstagramIcon size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-400/30 hover:bg-red-500/10 transition-all duration-300"
                                    aria-label="YouTube"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>
                                <a
                                    href="https://wa.me/5521999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-500/10 transition-all duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <WhatsAppIcon size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary/40" />
                                Navegação
                            </h4>
                            <ul className="space-y-3">
                                {QUICK_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-colors duration-200"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary/40" />
                                Serviços
                            </h4>
                            <ul className="space-y-3">
                                {SERVICES.map((service) => (
                                    <li key={service} className="flex items-center gap-2 text-slate-500 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary/40" />
                                Contato
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-500 text-sm">
                                    <MapPin size={16} className="text-primary/60 mt-0.5 shrink-0" />
                                    <span>Rio de Janeiro, RJ</span>
                                </li>
                                <li>
                                    <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                                        <Phone size={16} className="text-primary/60 mt-0.5 shrink-0" />
                                        <span>(21) 99999-9999</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/professorclaudiobrum" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-500 hover:text-pink-400 text-sm transition-colors">
                                        <InstagramIcon size={16} className="text-primary/60 mt-0.5 shrink-0" />
                                        <span>@professorclaudiobrum</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[11px] text-slate-600 text-center sm:text-left">
                            © {new Date().getFullYear()} Professor Cláudio Brum. Todos os direitos reservados.
                        </p>

                        {/* Groba Tech Branding */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-700" />
                            <div className="flex items-center gap-2 group">
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Desenvolvido por</span>
                                <a href="https://grobatech.online" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity duration-300">
                                    <img src="/assets/images/groba3.png" alt="Groba Tech" className="h-5 object-contain" />
                                </a>
                            </div>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-700" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
}
