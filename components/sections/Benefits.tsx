import { BENEFITS } from '@/data/content';
import { Clock, Sparkles, ShieldCheck, Smile, Package } from 'lucide-react';

const icons = [Sparkles, ShieldCheck, Clock, Package, Smile];

export function Benefits() {
  return (
    <section className="w-full bg-brand-surface py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center text-brand-text mb-20 text-3xl md:text-4xl max-w-2xl mx-auto">
          ¿Por qué elegir Piringos Parties?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
          {BENEFITS.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-${(i % 5 + 1) * 100}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-brand-cta/10 flex items-center justify-center mb-6 text-brand-cta group-hover:scale-110 group-hover:bg-brand-cta group-hover:text-brand-text transition-all duration-300">
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="mb-3 text-brand-text text-xl">{b.title}</h3>
                <p className="text-brand-text/70 leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
