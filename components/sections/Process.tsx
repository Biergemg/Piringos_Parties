import { PROCESS } from '@/data/content';

export function Process() {
  return (
    <section className="w-full bg-brand-bg py-32 px-6 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-center text-brand-text mb-20 text-4xl md:text-5xl font-bold tracking-tight">¿Cómo funciona?</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-4">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-brand-cta/20 -z-10"></div>
          {/* Connecting Line (Mobile) */}
          <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-brand-cta/0 via-brand-cta/30 to-brand-cta/0 -z-10"></div>
          
          {PROCESS.map((step, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center w-full md:w-1/4 group hover:-translate-y-2 transition-all duration-300 animate-fade-in-up md:delay-${(i % 4 + 1) * 100}`}
            >
              <div className="w-20 h-20 rounded-full bg-white text-brand-text border-2 border-brand-cta/30 shadow-md flex justify-center items-center text-2xl font-black mb-6 group-hover:bg-brand-cta group-hover:text-brand-text group-hover:border-transparent group-hover:shadow-lg transition-all duration-300 relative bg-clip-padding">
                <span className="relative z-10">{i + 1}</span>
              </div>
              <p className="text-brand-text font-bold text-xl px-2 max-w-[200px]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
