import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string()
})

const { success, data } = envSchema.safeParse(process.env)

if (!success) throw new Error("Invalid environment variables.")

export const env = data