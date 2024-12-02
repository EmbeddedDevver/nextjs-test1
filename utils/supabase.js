import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://erilgjtnsawgmsztwzhr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyaWxnanRuc2F3Z21zenR3emhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMzg1ODMsImV4cCI6MjA0ODYxNDU4M30.U68eFY4fVzP4fJpi_gjQnSirZ2vofj7BDCDDl6jZMpw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
