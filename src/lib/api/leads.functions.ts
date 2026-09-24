import { createServerFn } from "@tanstack/react-start";

import { leadSubmissionSchema } from "./leads.schema";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSubmissionSchema)
  .handler(async ({ data }) => {
    const elapsed = Date.now() - data.startedAt;
    if (elapsed < 2_000 || elapsed > 7_200_000 || data.website) {
      throw new Error("Submission rejected");
    }
    const { insertLead } = await import("./leads.server");
    return insertLead(data);
  });
