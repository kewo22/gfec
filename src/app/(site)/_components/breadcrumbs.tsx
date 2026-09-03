import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const BASE_URL = "https://gfeconsultancy.com";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${BASE_URL}${item.href ?? ""}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/" className="font-body text-sm text-inherit opacity-60 hover:opacity-100 transition-opacity">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight size={14} className="opacity-40" />
          {item.href && i !== items.length - 1 ? (
            <Link href={item.href} className="font-body text-sm text-inherit opacity-60 hover:opacity-100 transition-opacity">
              {item.label}
            </Link>
          ) : (
            <span className="font-body text-sm text-inherit opacity-90">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
