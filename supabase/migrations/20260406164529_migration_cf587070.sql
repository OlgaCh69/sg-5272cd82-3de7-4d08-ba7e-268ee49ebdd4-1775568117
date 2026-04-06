-- Create contacts table to store form submissions
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  plan TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact form submissions (T3 pattern)
CREATE POLICY "anon_insert" ON contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated admins can read contacts (for future admin panel)
CREATE POLICY "admin_read" ON contacts 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);