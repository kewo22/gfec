"use client";

import React, { useEffect, useState } from "react";
import { X, Link, ChevronDown, LayoutGrid, ExternalLink, Save, AlertCircle } from "lucide-react";
import { MenuItem, MenuChildItem, MenuItemStatus, MenuItemType } from "../_types/menu.types";

interface MenuItemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: Partial<MenuItem>) => void;
  editingItem?: MenuItem | null;
  editingChild?: { parentId: string; child: MenuChildItem } | null;
  mode: "item" | "child" | "new-item" | "new-child";
  parentId?: string;
}

const STATUS_OPTIONS: { value: MenuItemStatus; label: string; desc: string }[] = [
  { value: "active", label: "Active", desc: "Visible to all site visitors" },
  { value: "draft", label: "Draft", desc: "Only visible to admins" },
  { value: "hidden", label: "Hidden", desc: "Not shown anywhere" },
];

const TYPE_OPTIONS: { value: MenuItemType; label: string; desc: string; icon: React.ReactNode }[] = [
  {
    value: "link",
    label: "Simple Link",
    desc: "A single navigation link",
    icon: <Link className="w-4 h-4" />,
  },
  {
    value: "dropdown",
    label: "Dropdown",
    desc: "Link with sub-menu items",
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    value: "mega-menu",
    label: "Mega Menu",
    desc: "Large grid-style menu",
    icon: <LayoutGrid className="w-4 h-4" />,
  },
];

export default function MenuItemDrawer({
  isOpen,
  onClose,
  onSave,
  editingItem,
  editingChild,
  mode,
  parentId,
}: MenuItemDrawerProps) {
  const isChildMode = mode === "child" || mode === "new-child";
  const isNewMode = mode === "new-item" || mode === "new-child";

  const [label, setLabel] = useState("");
  const [href, setHref] = useState("");
  const [type, setType] = useState<MenuItemType>("link");
  const [status, setStatus] = useState<MenuItemStatus>("active");
  const [openInNewTab, setOpenInNewTab] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [errors, setErrors] = useState<{ label?: string; href?: string }>({});

  useEffect(() => {
    if (!isOpen) return;

    if (editingItem && mode === "item") {
      setLabel(editingItem.label);
      setHref(editingItem.href);
      setType(editingItem.type);
      setStatus(editingItem.status);
      setOpenInNewTab(editingItem.openInNewTab);
      setIsVisible(editingItem.isVisible);
    } else if (editingChild && mode === "child") {
      setLabel(editingChild.child.label);
      setHref(editingChild.child.href);
      setIsVisible(editingChild.child.isVisible);
    } else {
      setLabel("");
      setHref("");
      setType("link");
      setStatus("active");
      setOpenInNewTab(false);
      setIsVisible(true);
    }
    setErrors({});
  }, [isOpen, editingItem, editingChild, mode]);

  const validate = () => {
    const newErrors: { label?: string; href?: string } = {};
    if (!label.trim()) newErrors.label = "Label is required";
    if (!href.trim()) newErrors.href = "URL / path is required";
    else if (!href.startsWith("/") && !href.startsWith("http")) {
      newErrors.href = "Must start with / or http(s)://";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    if (isChildMode) {
      const child: Partial<MenuChildItem> = {
        ...(editingChild?.child || {}),
        label,
        href,
        isVisible,
      };
      onSave(child as any);
    } else {
      const item: Partial<MenuItem> = {
        ...(editingItem || {}),
        label,
        href,
        type,
        status,
        openInNewTab,
        isVisible,
      };
      onSave(item);
    }
    onClose();
  };

  const title = isNewMode
    ? isChildMode
      ? "Add Sub-Item"
      : "Add Menu Item"
    : isChildMode
    ? "Edit Sub-Item"
    : "Edit Menu Item";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] max-w-full bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-800">{title}</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {isChildMode
                ? "Configure this sub-navigation item"
                : "Configure this top-level menu entry"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Label */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Menu Label <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
                if (errors.label) setErrors((prev) => ({ ...prev, label: undefined }));
              }}
              placeholder="e.g. Destinations"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:ring-2 ${
                errors.label
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : "border-slate-200 focus:border-[#110c82] focus:ring-[#110c82]/10"
              }`}
            />
            {errors.label && (
              <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
                <AlertCircle className="w-3 h-3" /> {errors.label}
              </p>
            )}
          </div>

          {/* URL/Path */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              URL / Path <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={href}
              onChange={(e) => {
                setHref(e.target.value);
                if (errors.href) setErrors((prev) => ({ ...prev, href: undefined }));
              }}
              placeholder="e.g. /destinations"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:ring-2 ${
                errors.href
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : "border-slate-200 focus:border-[#110c82] focus:ring-[#110c82]/10"
              }`}
            />
            {errors.href && (
              <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
                <AlertCircle className="w-3 h-3" /> {errors.href}
              </p>
            )}
          </div>

          {/* Menu Type — only for top-level items */}
          {!isChildMode && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Menu Type
              </label>
              <div className="space-y-2">
                {TYPE_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                      type === opt.value
                        ? "border-[#110c82] bg-[#110c82]/5 text-[#110c82]"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      checked={type === opt.value}
                      onChange={() => setType(opt.value)}
                      className="sr-only"
                    />
                    <span
                      className={`${
                        type === opt.value ? "text-[#110c82]" : "text-slate-400"
                      }`}
                    >
                      {opt.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{opt.label}</p>
                      <p className="text-xs text-slate-400">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        type === opt.value
                          ? "border-[#110c82]"
                          : "border-slate-300"
                      }`}
                    >
                      {type === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-[#110c82]" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Status — only for top-level items */}
          {!isChildMode && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Status
              </label>
              <div className="space-y-2">
                {STATUS_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                      status === opt.value
                        ? "border-[#c2962d] bg-[#c2962d]/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      checked={status === opt.value}
                      onChange={() => setStatus(opt.value)}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <p
                        className={`text-sm font-semibold ${
                          status === opt.value ? "text-[#c2962d]" : "text-slate-700"
                        }`}
                      >
                        {opt.label}
                      </p>
                      <p className="text-xs text-slate-400">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        status === opt.value
                          ? "border-[#c2962d]"
                          : "border-slate-300"
                      }`}
                    >
                      {status === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-[#c2962d]" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Toggles */}
          <div className="space-y-3">
            {/* Visibility toggle */}
            <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <p className="text-sm font-semibold text-slate-700">Visible</p>
                <p className="text-xs text-slate-400">Show in the website menu</p>
              </div>
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  isVisible ? "bg-[#110c82]" : "bg-slate-200"
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                    isVisible ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Open in new tab — only for top-level items */}
            {!isChildMode && (
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Open in New Tab
                    </p>
                    <p className="text-xs text-slate-400">
                      Opens link in a new browser tab
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenInNewTab(!openInNewTab)}
                  className={`relative w-11 h-6 rounded-full transition-colors ${
                    openInNewTab ? "bg-[#110c82]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                      openInNewTab ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-slate-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-[#110c82] text-white text-sm font-semibold hover:bg-[#0d0a6e] transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            {isNewMode ? "Create" : "Save Changes"}
          </button>
        </div>
      </div>
    </>
  );
}
