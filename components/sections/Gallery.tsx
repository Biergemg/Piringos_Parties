import Image from 'next/image';

export function Gallery() {
  const photos = ["/gallery-1.jpeg", "/gallery-2.jpeg", "/gallery-3.jpeg", "/gallery-4.jpeg"];
  return (
    <section className="w-full bg-brand-surface py-32 px-6 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brand-pink/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cta/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-bg text-brand-cta text-sm font-bold uppercase tracking-widest mb-4 shadow-sm border border-brand-cta/20">
            Galería Piringos
          </span>
          <h2 className="text-center text-brand-text mb-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Así se ven nuestras cajas
          </h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto text-lg">
            Cada detalle cuenta. Cuidamos la presentación tanto como el sabor, para que cada niño reciba una sorpresa inolvidable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          {/* Item 1: Tall (Left) */}
          <div className="relative group rounded-[2rem] overflow-hidden md:col-span-1 md:row-span-2 h-[350px] md:h-full shadow-lg border border-brand-text/5">
            <div className="absolute inset-0 bg-brand-text/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image 
              src={photos[0]} 
              alt="Piringos Parties Caja Principal" 
              fill 
              className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 text-center">
                <p className="text-brand-text font-bold text-sm">Presentación Premium</p>
              </div>
            </div>
          </div>

          {/* Item 2: Wide (Top Right) */}
          <div className="relative group rounded-[2rem] overflow-hidden md:col-span-2 md:row-span-1 h-[250px] md:h-full shadow-lg border border-brand-text/5">
            <Image 
              src={photos[1]} 
              alt="Detalle de Caja Piringos" 
              fill 
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <span className="bg-brand-cta text-brand-text px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                Personalizado
              </span>
            </div>
          </div>

          {/* Item 3: Square (Bottom Middle) */}
          <div className="relative group rounded-[2rem] overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-full shadow-lg border border-brand-text/5">
            <div className="absolute inset-0 bg-brand-pink/10 group-hover:bg-brand-pink/0 transition-colors duration-500 z-10"></div>
            <Image 
              src={photos[2]} 
              alt="Caja temática" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Item 4: Square (Bottom Right) */}
          <div className="relative group rounded-[2rem] overflow-hidden md:col-span-1 md:row-span-1 h-[250px] md:h-full shadow-lg border border-brand-text/5">
            <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors duration-500 z-10"></div>
            <Image 
              src={photos[3]} 
              alt="Ingredientes Frescos" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
