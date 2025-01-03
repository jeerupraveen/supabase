import {createClient} from "@supabase/supabase-js";

// Replace these with your project's values
const SUPABASE_URL = 'https://fdeoiqygugrvpxwatmtp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZW9pcXlndWdydnB4d2F0bXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4ODI1NjUsImV4cCI6MjA1MTQ1ODU2NX0.LCTVeHNKZDNhI_NwQMUnbuEkjTaf8cwT6vLbB19SrdE';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example function to test the connection
 async function fetchData() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  console.log(data)
  return data;
}
fetchData()