import type { LeadFormValues } from "./leads.schema";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1RLPM32_-PYGcjqmoJRLv6nmuTrRf_rDHJP8fTnLB-Bo";
const RANGE = "Leads!A:I";

/**
 * Appends a lead as a row in the Glow Grow India leads spreadsheet.
 * Never throws — sheet sync must not block saving the enquiry.
 */
export async function appendLeadToSheet(input: LeadFormValues): Promise<void> {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const sheetsApiKey = process.env["GOOGLE_SHEETS_API_KEY"];

  if (!lovableApiKey || !sheetsApiKey) {
    console.warn("[leads] Google Sheets sync skipped: connector credentials missing");
    return;
  }

  const row = [
    new Date().toISOString(),
    input.name,
    input.email,
    input.phone,
    input.company?.trim() || "",
    input.service,
    input.budget,
    input.message,
    "New",
  ];

  try {
    const res = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": sheetsApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      },
    );

    if (!res.ok) {
      const errorBody = await res.text();
      console.error(`[leads] Google Sheets append failed [${res.status}]: ${errorBody}`);
    }
  } catch (err) {
    console.error("[leads] Google Sheets append threw", err);
  }
}
