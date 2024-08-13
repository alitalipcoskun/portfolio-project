import { createClient } from "@supabase/supabase-js";
require('dotenv').config()


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PSWRD;
console.log(supabaseUrl)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
