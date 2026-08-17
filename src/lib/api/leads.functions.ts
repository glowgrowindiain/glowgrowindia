import { createServerFn } from "@tanstack/react-start";

import { leadSchema } from "./leads.schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    const { insertLead } = await import("./leads.server");
    return insertLead(data);
  });
