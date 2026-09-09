"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Loader2,
  Stamp,
} from "lucide-react";

import { ResolveBaseUrl } from "@/app/utils/common";

const TIME_SLOTS = [
  "9:00 - 9:30",
  "9:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 1:00",
  "1:00 - 1:30",
  "1:30 - 2:00",
  "2:00 - 2:30",
  "2:30 - 3:00",
  "3:00 - 3:30",
  "3:30 - 4:00",
  "4:00 - 4:30",
  "4:30 - 5:00",
  "5:00 - 5:30",
  "5:30 - 6:00",
  "6:00 - 6:30",
  "6:30 - 7:00",
  "7:00 - 7:30",
  "7:30 - 8:00",
] as const;

const dateMinusOne = (): Date => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return today;
};

const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  mobile: z
    .string()
    .regex(/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/, "Enter a valid Sri Lankan mobile number"),
  preferredDate: z
    .string()
    .optional()
    .refine((val) => !val || new Date(val) >= dateMinusOne(), "Select today or a future date"),
  preferredTime: z.string().optional(),
});

type ContactFormData = z.infer<typeof ContactSchema>;

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

const fieldClass = (hasError: boolean) =>
  `w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 border-b-2 outline-none transition-colors placeholder:text-slip-mist/70 disabled:opacity-50 ${
    hasError ? "border-stamp-red" : "border-exam-ink/30 focus:border-exam-green"
  }`;

export default function GetInTouchSlipForm() {
  const privacyBasePolicyUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const validatedData: ContactFormData = ContactSchema.parse(formData);

      setIsLoading(true);

      const payload = {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        mobile: validatedData.mobile,
        preferredTime: validatedData.preferredTime || "",
        preferredDate: validatedData.preferredDate ? new Date(validatedData.preferredDate).toString() : "",
        createdAt: new Date(),
      };

      fetch(`${privacyBasePolicyUrl}/api/getInTouch`, {
        method: "post",
        body: JSON.stringify(payload),
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
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            preferredDate: "",
            preferredTime: "",
          });
        });
    } catch (error: unknown) {
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
    <div className="relative">
      <div className="absolute -top-4 -right-3 sm:-right-6 rotate-[8deg] z-10">
        <div className="flex items-center gap-1.5 bg-stamp-red text-slip-surface font-slip-display font-bold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-[var(--shadow-slip-card)]">
          <Stamp className="w-3.5 h-3.5" />
          Reserve Slot
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-slip-surface border border-slip-rule rounded-sm shadow-[var(--shadow-slip-card)] px-6 py-7 sm:px-10 sm:py-9"
      >
        <div className="flex items-center justify-between pb-5 border-b border-slip-rule">
          <p className="font-slip-display font-bold text-exam-ink text-xs uppercase tracking-wide">
            Consultation Request
          </p>
          <p className="slip-mono text-[11px] text-slip-mist">Ref. GFEC/CONSULT</p>
        </div>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 border border-exam-green/40 bg-exam-green/[0.06] rounded-sm flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-exam-green shrink-0" />
            <p className="font-body text-sm text-exam-green-deep font-medium">
              Booked — a consultant will confirm your slot shortly.
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
          <FieldSlip index={1} label="First Name" error={errors.firstName}>
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="As it appears on your NIC / passport"
              className={fieldClass(!!errors.firstName)}
            />
          </FieldSlip>

          <FieldSlip index={2} label="Last Name" error={errors.lastName}>
            <input
              type="text"
              name="lastName"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="As it appears on your NIC / passport"
              className={fieldClass(!!errors.lastName)}
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
              className={fieldClass(!!errors.email)}
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
              className={fieldClass(!!errors.mobile)}
            />
          </FieldSlip>

          <FieldSlip index={5} label="Preferred Consultation Slot" error={errors.preferredDate || errors.preferredTime}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-center gap-2 border-b-2 border-exam-ink/30 focus-within:border-exam-green transition-colors">
                <CalendarDays className="w-4 h-4 text-slip-mist shrink-0" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 outline-none disabled:opacity-50"
                />
              </div>
              <div className="flex items-center gap-2 border-b-2 border-exam-ink/30 focus-within:border-exam-green transition-colors">
                <Clock className="w-4 h-4 text-slip-mist shrink-0" />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-transparent font-body text-exam-ink text-[15px] py-2.5 outline-none disabled:opacity-50 appearance-none"
                >
                  <option value="">Select a time</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
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
              Booking your consultation…
            </>
          ) : (
            <>
              <Stamp className="w-4 h-4" />
              Book My Consultation
            </>
          )}
        </button>

        <p className="mt-4 text-center font-body text-xs text-slip-mist">
          No spam, no obligation — a GFEC consultant reviews every request by hand.
        </p>
      </form>
    </div>
  );
}
