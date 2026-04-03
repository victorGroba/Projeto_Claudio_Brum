'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

export function BottomNav() {
    const pathname = usePathname();

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-primary/10 bg-background-dark/90 backdrop-blur-lg px-4 pb-4 pt-2 lg:hidden">
                <Link href="/" className={`flex flex-1 flex-col items-center justify-end gap-1 ${pathname === '/' ? 'text-primary' : 'text-slate-500'}`}>
                    <span className="material-symbols-outlined" style={pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
                    <p className="text-[10px] font-medium leading-normal">Início</p>
                </Link>
                <button
                    onClick={() => {
                        const el = document.getElementById('pilares');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500"
                >
                    <span className="material-symbols-outlined">school</span>
                    <p className="text-[10px] font-medium leading-normal">Cursos</p>
                </button>
                <button
                    onClick={() => {
                        const el = document.getElementById('metodo');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500"
                >
                    <span className="material-symbols-outlined">psychology</span>
                    <p className="text-[10px] font-medium leading-normal">Método</p>
                </button>
                <a href="https://wa.me/5521999999999?text=Olá! Quero saber mais sobre o preparatório do Professor Claudio Brum." target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col items-center justify-end gap-1 text-emerald-500">
                    <WhatsAppIcon size={24} />
                    <p className="text-[10px] font-bold leading-normal">WhatsApp</p>
                </a>
            </div>
            <div className="h-20 bg-background-dark lg:hidden"></div>
        </>
    );
}
