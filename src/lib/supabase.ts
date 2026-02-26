import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl ? 'Defined' : 'Missing');
console.log('Supabase Key:', supabaseAnonKey ? 'Defined' : 'Missing');

if (!supabaseUrl) {
    console.error('CRITICAL: VITE_SUPABASE_URL is missing in the environment!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
