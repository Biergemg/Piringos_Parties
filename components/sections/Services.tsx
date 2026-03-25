import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { SERVICES } from '@/data/content';

export function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-surface px-6 py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-[80px]"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Versatilidad"
          title="¿Para qué tipo de evento?"
          className="mb-16"
          eyebrowClassName="mb-4 bg-brand-bg text-brand-cta border border-brand-cta/10"
          titleClassName="text-4xl md:text-5xl"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service} delay={idx * 100}>
              <div className="group flex h-full items-center justify-center rounded-[2rem] border border-brand-text/5 bg-brand-bg p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="m-0 text-lg font-bold text-brand-text transition-colors group-hover:text-brand-pink">
                  {service}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
