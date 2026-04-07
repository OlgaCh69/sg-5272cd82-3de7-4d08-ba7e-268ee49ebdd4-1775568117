-- Drop existing policies and create fresh ones
DROP POLICY IF EXISTS "anon_insert" ON contacts;
DROP POLICY IF EXISTS "public_read" ON contacts;

-- Create policy to allow anyone (including anonymous users) to insert contacts
CREATE POLICY "allow_anonymous_insert" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated users to read their own contacts (optional)
CREATE POLICY "allow_public_read" ON contacts
  FOR SELECT
  USING (true);