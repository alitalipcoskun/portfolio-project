"use server"
import { createClient } from "";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_PSWRD;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
