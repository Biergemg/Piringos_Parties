import { SERVICES } from '@/data/content';

export function Services() {
  return (
    <section className="w-full bg-brand-surface py-32 px-6 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-bg text-brand-cta text-sm font-bold uppercase tracking-widest mb-4 shadow-sm border border-brand-cta/10">
            Versatilidad
          </span>
          <h2 className="text-brand-text text-4xl md:text-5xl font-extrabold tracking-tight">¿Para qué tipo de evento?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="group bg-brand-bg rounded-[2rem] p-8 text-center border border-brand-text/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-brand-text m-0 text-lg font-bold group-hover:text-brand-pink transition-colors">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
