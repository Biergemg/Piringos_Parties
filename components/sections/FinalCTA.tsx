import { BUSINESS_DATA } from '@/data/content';
import { MessageSquare } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="w-full bg-brand-bg py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto bg-brand-surface p-12 md:p-20 rounded-[2.5rem] shadow-lg border border-brand-text/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cta/5 to-transparent pointer-events-none"></div>
        <h2 className="text-brand-text mb-6 text-3xl md:text-5xl relative z-10">¿Listo para tu evento?</h2>
        <p className="text-brand-text/80 mb-10 text-lg md:text-xl relative z-10">Escríbenos por WhatsApp y cotizamos sin compromiso.</p>
        <a 
          href={BUSINESS_DATA.whatsappUrl}
          className="inline-flex items-center gap-3 bg-brand-cta text-brand-text py-5 px-12 rounded-full font-bold text-lg shadow-xl shadow-brand-cta/30 hover:-translate-y-1 hover:shadow-brand-cta/40 transition-all relative z-10"
        >
          <MessageSquare className="w-6 h-6" fill="currentColor" />
          Solicitar cotización
        </a>
      </div>
    </section>
  );
}
