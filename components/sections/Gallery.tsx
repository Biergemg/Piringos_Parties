import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

const photos = ['/gallery-1.jpeg', '/gallery-2.jpeg', '/gallery-3.jpeg', '/gallery-4.jpeg'] as const;

export function Gallery() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-surface px-6 py-32">
      <div className="pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-brand-pink/20 blur-[80px]"></div>
      <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-brand-blue/20 blur-[100px]"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cta/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galería Piringos"
          title="Así se ven nuestras cajas"
          description="Cada detalle cuenta. Cuidamos la presentación tanto como el sabor, para que cada niño reciba una sorpresa inolvidable."
          className="mb-20"
          eyebrowClassName="mb-4 bg-brand-bg text-brand-cta border border-brand-cta/20"
          titleClassName="mb-4 text-4xl md:text-5xl"
          descriptionClassName="mx-auto max-w-2xl text-lg"
        />

        <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-3 md:grid-rows-2 md:gap-6">
          <FadeIn delay={0} className="md:col-span-1 md:row-span-2">
            <div className="group relative h-[350px] overflow-hidden rounded-[2rem] border border-brand-text/5 shadow-lg md:h-full">
              <div className="absolute inset-0 z-10 bg-brand-text/10 transition-colors duration-500 group-hover:bg-transparent"></div>
              <Image
                src={photos[0]}
                alt="Piringos Parties Caja Principal"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute right-6 bottom-6 left-6 z-20 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-white/50 bg-white/80 p-4 text-center shadow-xl backdrop-blur-md">
                  <p className="text-sm font-bold text-brand-text">Presentación Premium</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="md:col-span-2 md:row-span-1">
            <div className="group relative h-[250px] overflow-hidden rounded-[2rem] border border-brand-text/5 shadow-lg md:h-full">
              <Image
                src={photos[1]}
                alt="Detalle de Caja Piringos"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <span className="rounded-full bg-brand-cta px-4 py-1 text-xs font-bold tracking-wide text-brand-text uppercase shadow-lg">
                  Personalizado
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="md:col-span-1 md:row-span-1">
            <div className="group relative h-[250px] overflow-hidden rounded-[2rem] border border-brand-text/5 shadow-lg md:h-full">
              <div className="absolute inset-0 z-10 bg-brand-pink/10 transition-colors duration-500 group-hover:bg-brand-pink/0"></div>
              <Image
                src={photos[2]}
                alt="Caja temática"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300} className="md:col-span-1 md:row-span-1">
            <div className="group relative h-[250px] overflow-hidden rounded-[2rem] border border-brand-text/5 shadow-lg md:h-full">
              <div className="absolute inset-0 z-10 bg-brand-blue/10 transition-colors duration-500 group-hover:bg-brand-blue/0"></div>
              <Image
                src={photos[3]}
                alt="Ingredientes Frescos"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
