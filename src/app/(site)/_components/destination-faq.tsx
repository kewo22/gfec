"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function DestinationFaq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-exam-ink/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="border-b border-exam-ink/10">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 py-6 text-left group"
            >
              <span className="slip-mono text-exam-green text-xs shrink-0 pt-1.5 w-8">
                {`Q${String(i + 1).padStart(2, "0")}`}
              </span>
              <span className="font-slip-display font-bold text-exam-ink text-base lg:text-lg flex-1 group-hover:text-exam-green-deep transition-colors">
                {faq.question}
              </span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300 motion-reduce:transition-none ${
                  isOpen ? "rotate-45 border-exam-green-bright text-exam-green-bright" : "border-exam-ink/20 text-exam-ink/50"
                }`}
              >
                <Plus size={14} strokeWidth={2.5} />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="font-body text-slip-mist text-sm leading-relaxed pb-6 pl-12 pr-6 max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
