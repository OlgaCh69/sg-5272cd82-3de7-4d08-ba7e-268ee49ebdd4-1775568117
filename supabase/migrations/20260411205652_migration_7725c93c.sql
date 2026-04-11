-- Add platform column to contacts table
ALTER TABLE contacts ADD COLUMN platform text;

-- Add comment for clarity
COMMENT ON COLUMN contacts.platform IS 'Platform of interest: Instagram, WhatsApp, Telegram, or All Platforms';