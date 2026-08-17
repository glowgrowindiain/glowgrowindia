import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { BUDGETS, SERVICE_OPTIONS } from "@/lib/site-content";
import { leadSchema, type LeadFormValues } from "@/lib/api/leads.schema";
import { submitLead } from "@/lib/api/leads.functions";
import { SubmitButton } from "./ui-bits";

type FormValues = LeadFormValues;

const fieldCls =
  "w-full border border-white/12 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-brand-glow/70";
const labelCls = "mb-2 block text-[10px] font-semibold tracking-[0.24em] text-foreground/55 uppercase";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const send = useServerFn(submitLead);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { service: "", budget: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setError(null);
    try {
      await send({ data: values });
      setSent(true);
      reset({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
    } catch (err) {
      console.error("[contact-form] submission failed", err);
      setError(
        "We couldn't save your enquiry just now. Please try again, or reach us on email or WhatsApp.",
      );
    }
  };

  if (sent) {
    return (
      <div className="border border-brand-glow/40 bg-brand-glow/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-brand-glow" />
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight uppercase">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          Thank you! Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 text-[10px] font-semibold tracking-[0.22em] text-brand-glow uppercase"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-white/10 bg-brand-surface/50 p-6 backdrop-blur-sm sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input id="name" className={fieldCls} placeholder="Your name" {...register("name")} />
          {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className={fieldCls} placeholder="you@brand.com" {...register("email")} />
          {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input id="phone" className={fieldCls} placeholder="+91" {...register("phone")} />
          {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="company">
            Company / Brand
          </label>
          <input id="company" className={fieldCls} placeholder="Optional" {...register("company")} />
        </div>
        <div>
          <label className={labelCls} htmlFor="service">
            What do you need help with?
          </label>
          <select id="service" className={fieldCls} {...register("service")}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-brand-ink">
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-2 text-xs text-destructive">{errors.service.message}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="budget">
            Budget Range
          </label>
          <select id="budget" className={fieldCls} {...register("budget")}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b} className="bg-brand-ink">
                {b}
              </option>
            ))}
          </select>
          {errors.budget && <p className="mt-2 text-xs text-destructive">{errors.budget.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={fieldCls}
            placeholder="Tell us about your brand and what growth looks like for you."
            {...register("message")}
          />
          {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>}
        </div>
      </div>

      <div className="mt-8">
        {error && (
          <p role="alert" className="mb-4 text-xs text-destructive">
            {error}
          </p>
        )}
        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              Sending <Loader2 className="h-3.5 w-3.5 animate-spin" />
            </>
          ) : (
            <>
              Send Enquiry <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </SubmitButton>
      </div>
    </form>
  );
}