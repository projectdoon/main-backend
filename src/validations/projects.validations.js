import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string().min(1),
  departmentName: z.string().min(1),
  projectDescription: z.string().min(1),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  addressLineOne: z.string().optional().nullable(),
  addressLineTwo: z.string().optional().nullable(),
  district: z.string().min(1),
  state: z.string().min(1),
  authorityName: z.string().min(1),
  organization: z.string().min(1),
  status: z.number().refine((val) => val === 1 || val === 2, {
    message: "Status must be 1 or 2",
  }),
  uploadedBy: z.string().min(1),
}); 
