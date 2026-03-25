'use client';

import { useId, useState } from 'react';

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="border-b border-brand-surface py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 text-left focus:outline-none"
        aria-expanded={open}
        aria-controls={contentId}
      >
        <h3 className="m-0 text-base font-bold text-brand-text">{question}</h3>
        <span className="ml-4 text-xl font-bold text-brand-cta">{open ? '-' : '+'}</span>
      </button>
      {open ? (
        <p id={contentId} className="mt-2 text-brand-text/80">
          {answer}
        </p>
      ) : null}
    </div>
  );
}
