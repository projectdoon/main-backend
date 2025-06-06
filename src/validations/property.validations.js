import { z } from "zod";

export const propertySchema = z.object({
  propertyName: z.string().min(1),
  propertyLocation: z.string().min(1),
  propertyAvailability: z.string().min(1),
  dailyPrice: z.string(),
  hourlyPrice: z.string(),
  dailyBookingLimit: z.string().optional(),
  hourlyBookingLimit: z.string().optional(),
  resourcesAvailable: z.array(z.string()),
  careTakerContact: z.array(z.number()),
  rules: z.string(),
  documentName: z.array(z.string()),
  images: z.array(z.string()),
  authorityName: z.string(),
  uploadedBy: z.string(),
});
