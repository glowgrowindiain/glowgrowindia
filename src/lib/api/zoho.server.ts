import process from "node:process";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/zoho_crm";

export type LeadInput = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
};

function splitName(full: string) {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: undefined, lastName: parts[0] };
  return { firstName: parts.slice(0, -1).join(" "), lastName: parts[parts.length - 1] };
}

export async function createZohoLead(input: LeadInput) {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const zohoKey = process.env["ZOHO_CRM_API_KEY"];

  if (!lovableApiKey || !zohoKey) {
    throw new Error("Zoho CRM connector is not configured");
  }

  const { firstName, lastName } = splitName(input.name);

  const record: Record<string, unknown> = {
    Last_Name: lastName,
    Email: input.email,
    Phone: input.phone,
    Company: input.company?.trim() || input.name,
    Lead_Source: "Website",
    Lead_Status: "New",
    Description: [
      `Service: ${input.service}`,
      `Budget: ${input.budget}`,
      "",
      input.message,
    ].join("\n"),
  };
  if (firstName) record.First_Name = firstName;

  const response = await fetch(`${GATEWAY_URL}/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${lovableApiKey}`,
      "X-Connection-Api-Key": zohoKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [record] }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Zoho CRM lead creation failed [${response.status}]: ${errorBody}`);
    throw new Error(`Zoho CRM request failed [${response.status}]: ${errorBody}`);
  }

  const payload = (await response.json()) as {
    data?: Array<{ code?: string; status?: string; message?: string; details?: { id?: string } }>;
  };
  const first = payload.data?.[0];
  if (first?.status && first.status !== "success") {
    console.error(`Zoho CRM rejected lead: ${JSON.stringify(first)}`);
    throw new Error(first.message ?? "Zoho CRM rejected the lead");
  }

  return { id: first?.details?.id ?? null };
}