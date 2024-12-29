import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  tiktok: z.string().min(1, "Le pseudo TikTok est requis"),
  subject: z.string().min(1),
  message: z.string().min(10).max(1000)
});

export const joinFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  tiktok: z.string().min(1, "Le pseudo TikTok est requis"),
  agencyCode: z.string().min(6).max(20),
  referral: z.string().optional(),
  message: z.string().min(1).max(1000)
});
