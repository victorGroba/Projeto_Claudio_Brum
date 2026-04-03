// Server Component - No "use client" needed
import HeroSection from '@/components/home/HeroSection';
import IdentificationSection from '@/components/home/IdentificationSection';
import InstitutionLogos from '@/components/home/InstitutionLogos';
import BrasoesSection from '@/components/home/BrasoesSection';
import AuthoritySection from '@/components/home/AuthoritySection';
import TeamSection from '@/components/home/TeamSection';
import MethodSection from '@/components/home/MethodSection';
import ReforcoEscolarSection from '@/components/home/ReforcoEscolarSection';
import PricingTable from '@/components/home/PricingTable';
import { TestimonialVideos } from '@/components/home/TestimonialVideos';
import SocialProofSection from '@/components/home/SocialProofSection';
import GuaranteeFAQ from '@/components/home/GuaranteeFAQ';
import FinalCTA from '@/components/home/FinalCTA';

export default function Page() {
    return (
        <main className="min-h-screen bg-background-dark selection:bg-primary/30">
            {/* 1. Gancho e Identificação */}
            <HeroSection />
            <IdentificationSection />

            {/* 2. Autoridade e Equipe */}
            <AuthoritySection />
            <TeamSection />

            {/* 3. Prova Social Visual e Currículo (O que preparamos) */}
            <InstitutionLogos />
            <BrasoesSection />

            {/* 4. Lógica e Método */}
            <MethodSection />
            <ReforcoEscolarSection />

            {/* 5. Avalanche de Prova Social e Desejo */}
            <TestimonialVideos />
            <SocialProofSection />

            {/* 6. A Oferta Irrecusável */}
            <PricingTable />

            {/* 7. Reversão de Risco e FAQ */}
            <GuaranteeFAQ />

            {/* 8. Última Chamada */}
            <FinalCTA />
        </main>
    );
}
