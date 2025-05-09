import { z } from "zod";

const projectDateSchema = z.object({
  dateDescription: z.string().min(1),
  dateName: z.string().min(1),
  date: z.coerce.date(),
  projectID: z.number().int().positive(),
});

export default projectDateSchema;
