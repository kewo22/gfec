"use client";

import React, { useState } from "react";
import { motion } from 'motion/react';

import Container from "../_components/layouts/container";

import { Typography } from "@/app/_components/ui/typography";
import { ResolveBaseUrl } from "@/app/utils/common";
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const educationLevels = ['O/L', 'A/L', 'Foundation', 'HND', "Bachelors", "Masters"] as const;

const StudentDetailsSchema = z.object({
  name: z.string().regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces').min(1, 'Name is required'),
  city: z.string().regex(/^[a-zA-Z\s]+$/, 'City must contain only letters and spaces').min(1, 'City is required'),
  email: z.email('Invalid email address'),
  mobile: z.string().regex(/^(071|072|075|076|077|078)\d{7}$/, 'Mobile must be 10 digits and start with 071, 072, 075, 076, 077, or 078'),
  education: z.enum(educationLevels, {
    message: 'Please select an education level',
  }),
});

type StudentDetailsFormData = z.infer<typeof StudentDetailsSchema>;

export default function ApplyNow() {
  const privacyBasePolicyUrl = ResolveBaseUrl(
    process.env.NEXT_PUBLIC_VERCEL_ENV!
  );
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    mobile: '',
    education: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Parse form data with Zod
      const validatedData = StudentDetailsSchema.parse({
        name: formData.name,
        city: formData.city,
        email: formData.email,
        mobile: formData.mobile,
        education: formData.education || undefined,
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
        })
        .finally(() => {
          setIsLoading(false);
          setFormData({ name: '', city: '', email: '', mobile: '', education: '' });
        });

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to field-specific errors
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitError('An unexpected error occurred. Please try again.');
      }
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <section className="bg-slate-100">
      <Container className="mx-5 xl:mx-auto py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Apply Now
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Free and easy application process to kickstart your journey with us.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center flex-row gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div className="flex flex-row items-center gap-2 justify-center">
                <Typography variant="md" className="text-green-800 font-semibold tracking-wide">Success! Your details submitted successfully.</Typography>
              </div>
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{submitError}</p>
            </div>
          )}

          <div className="space-y-5">
            <div className="flex flex-col items-start">
              <Typography variant="label" className="mb-1">
                Full Name *
              </Typography>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                disabled={isLoading}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <Typography variant="label" className="mb-1">
                City *
              </Typography>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.city ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                disabled={isLoading}
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.city}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <Typography variant="label" className="mb-1">
                Email *
              </Typography>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <Typography variant="label" className="mb-1">
                Mobile number *
              </Typography>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.mobile ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                disabled={isLoading}
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600 flex items-start gap-1 flex-row justify-start text-left">
                  <AlertCircle className="w-4 h-4" />
                  {errors.mobile}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start">
              <Typography variant="label" className="mb-1">
                Recent Education Qualification *
              </Typography>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${errors.education ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                disabled={isLoading}
              >
                <option value="">Select education level</option>
                <option value="O/L">O/L</option>
                <option value="A/L">A/L</option>
                <option value="Foundation">Foundation</option>
                <option value="HND">HND</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
              </select>
              {errors.education && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.education}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-secondary text-white font-medium py-3 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting your details...
                </>
              ) : (
                'Submit Your Details'
              )}
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
}
