CREATE TABLE IF NOT EXISTS hospitality_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_type text NOT NULL,
  rooms text NOT NULL,
  number_of_properties text NOT NULL,
  country text NOT NULL,
  selected_challenges text[] NOT NULL,
  top_priorities text[] NOT NULL,
  impact text[] NOT NULL,
  urgency text NOT NULL,
  current_pms text,
  existing_tools text,
  integration_challenges text,
  current_ai text,
  full_name text NOT NULL,
  position text NOT NULL,
  hotel_group text NOT NULL,
  email text NOT NULL,
  contact_country text NOT NULL,
  phone text,
  comments text,
  marketing_consent boolean DEFAULT false,
  submitted_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

ALTER TABLE hospitality_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_anonymous_insert" ON hospitality_assessments 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "admin_read" ON hospitality_assessments 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);