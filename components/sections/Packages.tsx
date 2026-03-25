import { PACKAGES, BUSINESS_DATA } from '@/data/content';

export function Packages() {
  return (
    <section className="w-full bg-brand-bg py-32 px-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cta/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-surface text-brand-text text-sm font-bold uppercase tracking-widest mb-4 shadow-sm border border-brand-text/10">
            Opciones para tu evento
          </span>
          <h2 className="text-brand-text mb-4 text-4xl md:text-5xl font-extrabold tracking-tight">Elige tu paquete</h2>
          <p className="text-brand-text/70 mb-16 text-lg max-w-2xl mx-auto">
            Todos los paquetes incluyen sticker personalizado y presentación individual Premium. Calidad garantizada en cada caja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PACKAGES.map((pkg, idx) => {
            const isPopular = idx === 1; // Highlight the middle package

            return (
              <div 
                key={pkg.id} 
                className={`relative rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500 animate-fade-in-up shadow-xl ${
                  isPopular 
                    ? 'bg-brand-text text-brand-bg scale-100 md:scale-105 border-none shadow-brand-text/40 z-10' 
                    : 'bg-white text-brand-text border border-brand-text/5 hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${(idx % 3 + 1) * 150}ms` }}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg border-2 border-brand-bg transform rotate-1">
                    Más Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`m-0 text-2xl font-extrabold mb-2 tracking-tight ${isPopular ? 'text-white' : 'text-brand-text'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-black ${isPopular ? 'text-brand-cta' : 'text-brand-text'}`}>
                      {pkg.price}
                    </span>
                    <span className={`font-bold ${isPopular ? 'text-white/60' : 'text-brand-text/50'}`}>/caja</span>
                  </div>
                </div>

                <ul className="mb-10 flex-grow space-y-5">
                  {pkg.items.map((item, i) => (
                    <li key={i} className={`flex items-start text-base leading-snug font-medium ${isPopular ? 'text-white/90' : 'text-brand-text/80'}`}>
                      <span className={`mt-0.5 mr-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isPopular ? 'bg-brand-cta/20 text-brand-cta' : 'bg-brand-green/20 text-brand-green'
                      }`}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a 
                  href={BUSINESS_DATA.whatsappUrl}
                  className={`w-full block text-center py-4 rounded-full font-bold transition-all duration-300 shadow-md ${
                    isPopular 
                      ? 'bg-brand-cta text-brand-text hover:bg-white hover:text-brand-text hover:shadow-brand-cta/40 hover:-translate-y-1' 
                      : 'bg-brand-surface text-brand-text hover:bg-brand-cta hover:text-brand-text border border-brand-text/10 hover:border-transparent hover:shadow-brand-cta/30 hover:-translate-y-1'
                  }`}
                 >
                   Pedir este paquete
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
