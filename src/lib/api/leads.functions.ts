import { createServerFn } from "@tanstack/react-start";

import { leadSchema } from "./leads.schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    const { createZohoLead } = await import("./zoho.server");
    return createZohoLead(data);
  });