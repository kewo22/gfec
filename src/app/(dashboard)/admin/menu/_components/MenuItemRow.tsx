"use client";

import React, { useState } from "react";
import {
  GripVertical,
  Eye,
  EyeOff,
  Edit2,
  Trash2,
  ChevronDown,
  ChevronRight,
  Link,
  ChevronDown as DropdownIcon,
  LayoutGrid,
  Plus,
  ExternalLink,
} from "lucide-react";
import { MenuItem, MenuChildItem, MenuItemType, MenuItemStatus } from "../_types/menu.types";
import { STATUS_CONFIG } from "../_data/menu.mock";

interface MenuItemRowProps {
  item: MenuItem;
  index: number;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
  onAddChild: (parentId: string) => void;
  onToggleChildVisibility: (parentId: string, childId: string) => void;
  onEditChild: (parentId: string, child: MenuChildItem) => void;
  onDeleteChild: (parentId: string, childId: string) => void;
  isDragging?: boolean;
}

const TYPE_ICON: Record<MenuItemType, React.ReactNode> = {
  link: <Link className="w-3.5 h-3.5" />,
  dropdown: <DropdownIcon className="w-3.5 h-3.5" />,
  "mega-menu": <LayoutGrid className="w-3.5 h-3.5" />,
};

const TYPE_LABEL: Record<MenuItemType, string> = {
  link: "Link",
  dropdown: "Dropdown",
  "mega-menu": "Mega Menu",
};

export default function MenuItemRow({
  item,
  index,
  isExpanded,
  onToggleExpand,
  onToggleVisibility,
  onEdit,
  onDelete,
  onAddChild,
  onToggleChildVisibility,
  onEditChild,
  onDeleteChild,
  isDragging = false,
}: MenuItemRowProps) {
  const [hoveredChildId, setHoveredChildId] = useState<string | null>(null);
  const statusCfg = STATUS_CONFIG[item.status];
  const hasChildren = item.children.length > 0;

  return (
    <div
      className={`group rounded-xl border transition-all duration-200 overflow-hidden ${
        isDragging
          ? "shadow-2xl border-[#c2962d]/40 bg-white scale-[1.01]"
          : "border-slate-200 bg-white hover:border-[#110c82]/20 hover:shadow-md"
      }`}
    >
      {/* Main Row */}
      <div className="flex items-center gap-3 px-4 py-3.5">
        {/* Drag Handle */}
        <div className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 transition-colors flex-shrink-0">
          <GripVertical className="w-4 h-4" />
        </div>

        {/* Order Badge */}
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center">
          {index + 1}
        </span>

        {/* Expand Toggle */}
        {hasChildren || item.type !== "link" ? (
          <button
            onClick={() => onToggleExpand(item.id)}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors text-slate-400 hover:text-[#110c82]"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <div className="w-6" />
        )}

        {/* Label & Route */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-semibold text-sm ${
                item.isVisible ? "text-slate-800" : "text-slate-400 line-through"
              }`}
            >
              {item.label}
            </span>
            {item.openInNewTab && (
              <ExternalLink className="w-3 h-3 text-slate-400" />
            )}
            {/* Type Badge */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[#110c82]/5 text-[#110c82] border border-[#110c82]/10">
              {TYPE_ICON[item.type]}
              {TYPE_LABEL[item.type]}
            </span>
            {/* Status Badge */}
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${statusCfg.bg} ${statusCfg.color}`}
            >
              {statusCfg.label}
            </span>
            {hasChildren && (
              <span className="text-xs text-slate-400">
                {item.children.length} items
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-0.5 truncate">{item.href}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          <button
            onClick={() => onToggleVisibility(item.id)}
            title={item.isVisible ? "Hide from menu" : "Show in menu"}
            className={`p-1.5 rounded-lg transition-all ${
              item.isVisible
                ? "text-slate-400 hover:text-[#110c82] hover:bg-[#110c82]/5"
                : "text-slate-300 hover:text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            {item.isVisible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => onEdit(item)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#c2962d] hover:bg-[#c2962d]/5 transition-all"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Children Section */}
      {isExpanded && (
        <div className="border-t border-slate-100 bg-slate-50/50 px-4 py-3">
          <div className="ml-10 space-y-1.5">
            {item.children
              .sort((a, b) => a.order - b.order)
              .map((child) => (
                <div
                  key={child.id}
                  onMouseEnter={() => setHoveredChildId(child.id)}
                  onMouseLeave={() => setHoveredChildId(null)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-transparent hover:border-slate-200 hover:bg-white transition-all group/child"
                >
                  <GripVertical className="w-3.5 h-3.5 text-slate-300 cursor-grab flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-sm font-medium ${
                        child.isVisible
                          ? "text-slate-700"
                          : "text-slate-400 line-through"
                      }`}
                    >
                      {child.label}
                    </span>
                    <p className="text-xs text-slate-400 truncate">{child.href}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 transition-opacity ${
                      hoveredChildId === child.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={() => onToggleChildVisibility(item.id, child.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-[#110c82] hover:bg-[#110c82]/5 transition-all"
                    >
                      {child.isVisible ? (
                        <Eye className="w-3.5 h-3.5" />
                      ) : (
                        <EyeOff className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => onEditChild(item.id, child)}
                      className="p-1 rounded-md text-slate-400 hover:text-[#c2962d] hover:bg-[#c2962d]/5 transition-all"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeleteChild(item.id, child.id)}
                      className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            {/* Add child item button */}
            <button
              onClick={() => onAddChild(item.id)}
              className="flex items-center gap-2 px-3 py-2 w-full rounded-lg border border-dashed border-slate-300 text-slate-400 hover:text-[#110c82] hover:border-[#110c82]/40 hover:bg-[#110c82]/3 transition-all text-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Add sub-item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
