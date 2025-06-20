import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fintsegnkpnqrdfonnea.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbnRzZWdua3BucXJkZm9ubmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0ODYxNzUsImV4cCI6MjA0NDA2MjE3NX0.AJ7rHc09MfqEasl4iQbFwSDfytqA3DvCDaXXhuoUKQg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
