import { FAQS, BUSINESS_DATA } from '@/data/content';
import { AccordionItem } from '../ui/Accordion';

export function FAQ() {
  return (
    <section className="w-full bg-brand-bg py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-brand-text mb-16 text-4xl md:text-5xl font-bold tracking-tight">Preguntas frecuentes</h2>
        <div className="flex flex-col border-t border-brand-text/10">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
