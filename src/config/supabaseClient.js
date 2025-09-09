
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY

// Ensure both env vars are set
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase environment variables are missing!")
}

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
