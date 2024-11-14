import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  tiktok: z.string().regex(/^@[\w.-]+$/, "Le compte TikTok doit commencer par @"),
  subject: z.string().min(1),
  message: z.string().min(10).max(1000)
});

export const joinFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  tiktok: z.string().regex(/^@[\w.-]+$/, "Le compte TikTok doit commencer par @"),
  agencyCode: z.string().min(6).max(20),
  referral: z.string().regex(/^@[\w.-]+$/, "Le compte TikTok doit commencer par @"),
  message: z.string().min(10).max(1000)
});