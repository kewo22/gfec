"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Search,
  Stamp,
} from "lucide-react";

import { ResolveBaseUrl } from "@/app/utils/common";

const educationLevels = ["O/L", "A/L", "Foundation", "HND", "Bachelors", "Masters"] as const;

const SERVICE_OPTIONS = [
  "Counselling",
  "Visa Guidance",
  "Admissions Support",
  "Study Destination Advice",
] as const;

const SRI_LANKA_CITIES = [
  "Colombo",
  "Dehiwala-Mount Lavinia",
  "Moratuwa",
  "Sri Jayawardenepura Kotte",
  "Negombo",
  "Kandy",
  "Kalmunai",
  "Vavuniya",
  "Galle",
  "Trincomalee",
  "Batticaloa",
  "Jaffna",
  "Katunayake",
  "Kolonnawa",
  "Anuradhapura",
  "Ratnapura",
  "Badulla",
  "Matara",
  "Kurunegala",
  "Puttalam",
  "Chilaw",
  "Kalutara",
  "Panadura",
  "Gampaha",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Hambantota",
  "Monaragala",
  "Kegalle",
  "Ampara",
  "Wattala",
  "Homagama",
  "Maharagama",
  "Kaduwela",
  "Dambulla",
  "Embilipitiya",
  "Chavakachcheri",
  "Point Pedro",
  "Bandarawela",
  "Hatton",
  "Tangalle",
] as const;

const StudentDetailsSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces")
    .min(1, "Name is required"),
  city: z.enum(SRI_LANKA_CITIES, { message: "Please select your city" }),
  email: z.email("Invalid email address"),
  mobile: z
    .string()
    .regex(
      /^(071|072|075|076|077|078)\d{7}$/,
      "Mobile must be 10 digits and start with 071, 072, 075, 076, 077, or 078"
    ),
  education: z.enum(educationLevels, {
    message: "Please select an education level",
  }),
  servicesNeeded: z
    .array(z.enum(SERVICE_OPTIONS))
    .min(1, "Select at least one service"),
});

type StudentDetailsFormData = z.infer<typeof StudentDetailsSchema>;

function FieldSlip({
  index,
  label,
  error,
  children,
}: {
  index: number;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-5">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="slip-mono text-[11px] text-slip-mist shrink-0">
          {String(index).padStart(2, "0")}
        </span>
        <label className="font-slip-display font-bold text-exam-ink text-xs uppercase tracking-wide">
          {label}
        </label>
      </div>
      <div className="pl-[26px]">{children}</div>
      {error && (
        <p className="pl-[26px] mt-2 text-xs font-body text-stamp-red flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function SearchableDropdown({
  value,
  onChange,
  options,
  placeholder,
  error,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder: string;
  error?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery(value);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q === value.toLowerCase()) return options;
    return options.filter((c) => c.toLowerCase().includes(q));
  }, [query, value, options]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filtered.length, open]);

  const commit = (item: string) => {
    onChange(item);
    setQuery(item);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) commit(filtered[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery(value);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <div
        className={`flex items-center gap-2 border-b-2 bg-transparent transition-colors ${
          error ? "border-stamp-red" : open ? "border-exam-navy" : "border-exam-ink/30"
        }`}
      >
        <Search className="w-4 h-4 text-slip-mist shrink-0" />
        <input
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          aria-invalid={!!error}
          disabled={disabled}
          value={query}
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            if (!e.target.value) onChange("");
          }}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 outline-none placeholder:text-slip-mist/70 disabled:opacity-50"
        />
        <ChevronDown
          className={`w-4 h-4 text-slip-mist shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && !disabled && (
        <motion.ul
          ref={listRef}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          role="listbox"
          className="absolute z-30 mt-2 w-full max-h-60 overflow-y-auto bg-slip-surface border border-slip-rule rounded-sm shadow-[var(--shadow-slip-card)]"
        >
          {filtered.length === 0 && (
            <li className="px-4 py-3 font-body text-sm text-slip-mist">
              No match — check spelling.
            </li>
          )}
          {filtered.map((item, i) => (
            <li
              key={item}
              role="option"
              aria-selected={item === value}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                commit(item);
              }}
              className={`px-4 py-2.5 font-body text-sm cursor-pointer flex items-center justify-between transition-colors ${
                i === activeIndex ? "bg-gazette text-exam-ink" : "text-exam-ink/85"
              }`}
            >
              {item}
              {item === value && <Check className="w-3.5 h-3.5 text-exam-navy" />}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

function ServiceStamp({
  label,
  checked,
  onToggle,
  disabled,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={onToggle}
      className={`group relative flex items-center gap-2.5 rounded-sm border px-3.5 py-2.5 text-left transition-all duration-150 disabled:opacity-50 ${
        checked
          ? "border-exam-navy bg-exam-navy/[0.07]"
          : "border-exam-ink/20 hover:border-exam-ink/40 hover:bg-exam-ink/[0.02]"
      }`}
    >
      <span
        className={`flex items-center justify-center w-5 h-5 rounded-[3px] border-2 shrink-0 transition-all ${
          checked
            ? "border-exam-navy bg-exam-navy scale-100"
            : "border-exam-ink/30 bg-transparent scale-95"
        }`}
      >
        <Check
          className={`w-3.5 h-3.5 text-slip-surface transition-all duration-150 ${
            checked ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
          strokeWidth={3}
        />
      </span>
      <span className="font-body text-sm text-exam-ink">{label}</span>
    </button>
  );
}

export interface ApplyFormProps {
  className?: string;
  /** Shown above the form's own "Ref." line, e.g. a custom reference code for the surface embedding this form. */
  refLabel?: string;
}

export default function ApplyForm({ className = "", refLabel = "Ref. GFEC/APP" }: ApplyFormProps) {
  const privacyBasePolicyUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    mobile: "",
    education: "",
  });
  const [servicesNeeded, setServicesNeeded] = useState<string[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFieldChange = (field: "city" | "education") => (v: string) => {
    setFormData((prev) => ({ ...prev, [field]: v }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleService = (service: string) => {
    setServicesNeeded((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
    if (errors.servicesNeeded) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.servicesNeeded;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const validatedData: StudentDetailsFormData = StudentDetailsSchema.parse({
        name: formData.name,
        city: formData.city || undefined,
        email: formData.email,
        mobile: formData.mobile,
        education: formData.education || undefined,
        servicesNeeded,
      });

      setIsLoading(true);

      fetch(`${privacyBasePolicyUrl}/api/apply`, {
        method: "post",
        body: JSON.stringify(validatedData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          setSubmitSuccess(true);
        })
        .catch(() => {
          setSubmitError("An unexpected error occurred. Please try again.");
        })
        .finally(() => {
          setIsLoading(false);
          setFormData({ name: "", city: "", email: "", mobile: "", education: "" });
          setServicesNeeded([]);
        });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-4 -right-3 sm:-right-6 rotate-[8deg] z-10">
        <div className="flex items-center gap-1.5 bg-stamp-red text-slip-surface font-slip-display font-bold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-[var(--shadow-slip-card)]">
          <Stamp className="w-3.5 h-3.5" />
          Open File
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-slip-surface border border-slip-rule rounded-sm shadow-[var(--shadow-slip-card)] px-6 py-7 sm:px-10 sm:py-9"
      >
        <div className="flex items-center justify-between pb-5 border-b border-slip-rule">
          <p className="font-slip-display font-bold text-exam-ink text-xs uppercase tracking-wide">
            Student Particulars
          </p>
          <p className="slip-mono text-[11px] text-slip-mist">{refLabel}</p>
        </div>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 border border-exam-navy/40 bg-exam-navy/[0.06] rounded-sm flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-exam-navy shrink-0" />
            <p className="font-body text-sm text-exam-navy-deep font-medium">
              Filed successfully — we&apos;ll be in touch shortly.
            </p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 border border-stamp-red/40 bg-stamp-red/[0.06] rounded-sm flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-stamp-red shrink-0" />
            <p className="font-body text-sm text-stamp-red">{submitError}</p>
          </motion.div>
        )}

        <div className="divide-y divide-slip-rule">
          <FieldSlip index={1} label="Full Name" error={errors.name}>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="As it appears on your NIC / passport"
              className={`w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 border-b-2 outline-none transition-colors placeholder:text-slip-mist/70 disabled:opacity-50 ${
                errors.name ? "border-stamp-red" : "border-exam-ink/30 focus:border-exam-navy"
              }`}
            />
          </FieldSlip>

          <FieldSlip index={2} label="City" error={errors.city}>
            <SearchableDropdown
              value={formData.city}
              onChange={handleFieldChange("city")}
              options={SRI_LANKA_CITIES}
              placeholder="Search for your city…"
              error={errors.city}
              disabled={isLoading}
            />
          </FieldSlip>

          <FieldSlip index={3} label="Email" error={errors.email}>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="you@example.com"
              className={`w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 border-b-2 outline-none transition-colors placeholder:text-slip-mist/70 disabled:opacity-50 ${
                errors.email ? "border-stamp-red" : "border-exam-ink/30 focus:border-exam-navy"
              }`}
            />
          </FieldSlip>

          <FieldSlip index={4} label="Mobile Number" error={errors.mobile}>
            <input
              type="tel"
              name="mobile"
              autoComplete="tel"
              value={formData.mobile}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="07XXXXXXXX"
              className={`w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 border-b-2 outline-none transition-colors placeholder:text-slip-mist/70 disabled:opacity-50 ${
                errors.mobile ? "border-stamp-red" : "border-exam-ink/30 focus:border-exam-navy"
              }`}
            />
          </FieldSlip>

          <FieldSlip index={5} label="Recent Education Qualification" error={errors.education}>
            <SearchableDropdown
              value={formData.education}
              onChange={handleFieldChange("education")}
              options={educationLevels}
              placeholder="Search for your qualification…"
              error={errors.education}
              disabled={isLoading}
            />
          </FieldSlip>

          <FieldSlip index={6} label="Service Needed" error={errors.servicesNeeded}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_OPTIONS.map((service) => (
                <ServiceStamp
                  key={service}
                  label={service}
                  checked={servicesNeeded.includes(service)}
                  onToggle={() => toggleService(service)}
                  disabled={isLoading}
                />
              ))}
            </div>
          </FieldSlip>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full overflow-hidden mt-7 bg-stamp-red text-slip-surface font-slip-display font-bold text-sm uppercase tracking-wide py-4 rounded-sm transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Filing your details…
            </>
          ) : (
            <>
              <Stamp className="w-4 h-4" />
              Submit &amp; Open My File
            </>
          )}
        </button>

        <p className="mt-4 text-center font-body text-xs text-slip-mist">
          No spam, no obligation — a GFEC counsellor reviews every file by hand.
        </p>
      </form>
    </div>
  );
}
