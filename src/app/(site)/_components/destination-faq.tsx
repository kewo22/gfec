"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function DestinationFaq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-hairline border-t border-b border-hairline">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
            >
              <span className="font-display font-semibold text-navy text-base">{faq.question}</span>
              <Plus size={18} className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            {isOpen && (
              <p className="font-body text-mist text-sm leading-relaxed pb-5 max-w-2xl">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
