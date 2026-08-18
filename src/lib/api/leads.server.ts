import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { LeadFormValues } from "./leads.schema";

export async function insertLead(input: LeadFormValues) {
  const { data, error } = await supabaseAdmin
    .from("leads")
    .insert({
      name: input.name,
      email: input.email,
      phone: input.phone,
      company: input.company?.trim() || null,
      service: input.service,
      budget: input.budget,
      message: input.message,
      status: "New",
    })
    .select("id")
    .single();

  if (error) {
    console.error("[leads] insert failed", { message: error.message, details: error.details, hint: error.hint, code: error.code });
    throw new Error(`Failed to save enquiry: ${error.message}`);
  }

  // Mirror the lead into the Google Sheet (best-effort, never blocks the response).
  const { appendLeadToSheet } = await import("./google-sheets.server");
  await appendLeadToSheet(input);

  return { id: data.id };
}
