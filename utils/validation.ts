import { z } from "zod";

export const phoneSchema = z.object({
  phone: z
    .string()
    .length(10, "Phone number must be 10 digits")
    .regex(/^[6-9]\d{9}$/, "Enter valid Indian mobile number"),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .length(4, "OTP must be 4 digits")
    .regex(/^\d{4}$/, "Invalid OTP"),
});