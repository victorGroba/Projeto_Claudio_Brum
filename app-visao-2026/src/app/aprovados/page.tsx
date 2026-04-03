import Link from 'next/link';
import TestimonialGrid from '@/components/aprovados/TestimonialGrid';

export const metadata = {
    title: "Mural de Vitórias | Professor Claudio Brum",
    description: "Conheça as histórias reais de quem treinou com o método do Professor Cláudio Brum e garantiu a farda, a vaga ou a melhor nota.",
};

export default function AprovadosPage() {
    return (
        <main className="min-h-screen bg-[#0A0F1C] pt-32 pb-24 selection:bg-primary/30">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
            <div className="fixed top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 relative">
                    {/* Badge */}
                    <div className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm">
                        <span className="material-icons-round text-[#3b82f6] text-sm">social_distance</span>
                        Resultados Comprovados
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        O Nosso Mural de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Vitórias</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                        Conheça as histórias reais de quem treinou com o nosso método e garantiu a farda, a vaga ou a melhor nota.
                    </p>
                </div>

                {/* Animated Grid Container (Client Component) */}
                <TestimonialGrid />

                {/* Bottom CTA */}
                <div className="mt-24 text-center border-t border-slate-800 pt-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        O próximo rosto aqui pode ser o seu.
                    </h3>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        Junte-se ao time que mais aprova no Brasil. Escolha o seu plano e comece a estudar do jeito certo hoje mesmo.
                    </p>

                    <Link href="/planos" className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_30px_-5px_rgba(201,168,76,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(201,168,76,0.6)]">
                        Escolher Meu Plano
                        <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

            </div>
        </main>
    );
}
