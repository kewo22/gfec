"use client";

import React from "react";
import { Eye, EyeOff, Link2, ChevronDown, LayoutGrid } from "lucide-react";

interface MenuPreviewProps {
  items: Array<{
    id: string;
    label: string;
    href: string;
    type: string;
    isVisible: boolean;
    status: string;
    children: Array<{
      id: string;
      label: string;
      href: string;
      isVisible: boolean;
    }>;
  }>;
}

export default function MenuPreview({ items }: MenuPreviewProps) {
  const visibleItems = items.filter((i) => i.isVisible && i.status === "active");

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Preview Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 h-6 bg-slate-100 rounded-full px-3 flex items-center">
          <span className="text-xs text-slate-400">gfec.com</span>
        </div>
      </div>

      {/* Simulated Navbar */}
      <div className="bg-[#110c82] px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-sm tracking-wide">GFEC</span>
          <nav className="flex items-center gap-1">
            {visibleItems.length === 0 ? (
              <span className="text-white/40 text-xs italic">No visible items</span>
            ) : (
              visibleItems.map((item) => (
                <div key={item.id} className="relative group/preview">
                  <div
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
                    {item.type !== "link" && (
                      <ChevronDown className="w-2.5 h-2.5 opacity-70" />
                    )}
                  </div>
                  {/* Dropdown preview on hover */}
                  {item.children.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-slate-100 py-1.5 min-w-[140px] z-10 hidden group-hover/preview:block">
                      {item.children
                        .filter((c) => c.isVisible)
                        .map((child) => (
                          <div
                            key={child.id}
                            className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-[#110c82] transition-colors cursor-pointer"
                          >
                            {child.label}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </nav>
        </div>
      </div>

      {/* Stats below preview */}
      <div className="px-5 py-3 bg-slate-50/80 flex gap-4">
        <Stat
          icon={<Eye className="w-3.5 h-3.5 text-emerald-500" />}
          label="Visible"
          value={items.filter((i) => i.isVisible && i.status === "active").length}
          color="text-emerald-600"
        />
        <Stat
          icon={<EyeOff className="w-3.5 h-3.5 text-slate-400" />}
          label="Hidden / Draft"
          value={items.filter((i) => !i.isVisible || i.status !== "active").length}
          color="text-slate-500"
        />
        <Stat
          icon={<Link2 className="w-3.5 h-3.5 text-[#110c82]" />}
          label="Total"
          value={items.length}
          color="text-[#110c82]"
        />
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {icon}
      <span className={`text-xs font-bold ${color}`}>{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}
