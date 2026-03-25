"use client";
import { useState } from 'react';

export function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-surface py-4">
      <button onClick={() => setOpen(!open)} className="flex w-full justify-between items-center text-left py-2 focus:outline-none">
        <h3 className="text-brand-text m-0 text-base font-bold">{question}</h3>
        <span className="text-xl font-bold ml-4 text-brand-cta">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-brand-text/80">{answer}</p>}
    </div>
  );
}
