import { AccordionItem } from '../ui/Accordion';
import { FAQS } from '@/data/content';

export function FAQ() {
  return (
    <section className="w-full bg-brand-bg px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-brand-text md:text-5xl">
          Preguntas frecuentes
        </h2>
        <div className="flex flex-col border-t border-brand-text/10">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
