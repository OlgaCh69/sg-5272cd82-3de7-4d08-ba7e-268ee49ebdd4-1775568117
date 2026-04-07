-- Drop the trigger and function - we'll use a simpler client-side approach instead
DROP TRIGGER IF EXISTS on_contact_created ON contacts;
DROP FUNCTION IF EXISTS notify_new_contact();