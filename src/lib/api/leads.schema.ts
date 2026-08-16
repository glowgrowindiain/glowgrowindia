import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(30),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1, "Pick what you need help with").max(120),
  budget: z.string().trim().min(1, "Pick a budget range").max(120),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

export type LeadFormValues = z.infer<typeof leadSchema>;