import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdbdbbtesffksprvbhyw.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkYmRiYnRlc2Zma3NwcnZiaHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MjQ1NTgsImV4cCI6MjAzOTQwMDU1OH0.w0RUhCF7uoxd94nDAJaR4NI2HInfc9xvpSD4fdbWNqA'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);