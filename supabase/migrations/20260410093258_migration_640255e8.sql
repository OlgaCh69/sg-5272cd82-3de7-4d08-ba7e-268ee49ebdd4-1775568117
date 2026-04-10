-- Add phone column to contacts table
ALTER TABLE contacts ADD COLUMN phone text NOT NULL DEFAULT '';

-- Remove the default after adding the column (we want it mandatory going forward)
ALTER TABLE contacts ALTER COLUMN phone DROP DEFAULT;