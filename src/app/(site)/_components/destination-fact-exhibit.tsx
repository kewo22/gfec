import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { CountryFact } from "../_constants/destination-content.constants";

type DestinationFactExhibitProps = {
  index: number;
  title: string;
  fact?: CountryFact;
};

export default function DestinationFactExhibit({ index, title, fact }: DestinationFactExhibitProps) {
  if (!fact) return null;

  return (
    <div className="py-7 first:pt-0 last:pb-0 border-b border-slip-rule last:border-b-0">
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <span className="slip-mono text-xs text-slip-mist">{String(index).padStart(2, "0")}</span>
        <h3 className="font-slip-display font-bold text-lg text-exam-ink flex-1 min-w-[160px]">{title}</h3>
        {fact.status === "draft" ? (
          <span className="slip-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-sm bg-stamp-red/10 text-stamp-red border border-stamp-red/30 inline-flex items-center gap-1.5">
            <AlertTriangle size={11} />
            Draft — verify
          </span>
        ) : (
          <span className="slip-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-sm bg-exam-gold/10 text-exam-gold border border-exam-gold/30 inline-flex items-center gap-1.5">
            <CheckCircle2 size={11} />
            Verified
          </span>
        )}
      </div>

      {fact.paragraphs?.map((p, i) => (
        <p key={i} className="font-body text-sm leading-relaxed text-slip-mist mb-3 last:mb-0">
          {p}
        </p>
      ))}

      {fact.table && (
        <div className={`overflow-x-auto rounded-sm border border-slip-rule ${fact.paragraphs ? "mt-4" : ""}`}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gazette-warm">
                {fact.table.headers.map((h) => (
                  <th key={h} className="slip-mono text-[10px] uppercase tracking-wide text-slip-mist text-left px-4 py-2.5 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fact.table.rows.map((row, i) => (
                <tr key={i} className="bg-slip-surface border-t border-slip-rule">
                  {row.map((cell, j) => (
                    <td key={j} className={`font-body text-sm text-exam-ink px-4 py-2.5 ${j > 0 ? "slip-mono whitespace-nowrap" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {fact.bullets && (
        <ul className="mt-3 space-y-1.5 font-body text-sm text-slip-mist list-disc pl-5">
          {fact.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {fact.note && (
        <div className="flex items-start gap-2.5 mt-4 p-3.5 rounded-sm border bg-stamp-red/5 border-stamp-red/25">
          <AlertTriangle size={15} className="text-stamp-red shrink-0 mt-0.5" />
          <p className="font-body text-xs leading-relaxed text-exam-ink/70">{fact.note}</p>
        </div>
      )}

      {fact.source && <p className="slip-mono text-[10px] text-slip-mist mt-3">Source: {fact.source}</p>}
    </div>
  );
}
