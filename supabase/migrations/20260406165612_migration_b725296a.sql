-- Create function to call Edge Function on new contact
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  request_id bigint;
  project_url text;
BEGIN
  -- Get project URL from environment
  project_url := current_setting('app.settings.project_url', true);
  
  IF project_url IS NULL THEN
    project_url := 'https://your-project-ref.supabase.co';
  END IF;

  -- Call Edge Function asynchronously using http extension
  SELECT http_post(
    project_url || '/functions/v1/send-contact-notification',
    jsonb_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'company', NEW.company,
      'plan', NEW.plan,
      'message', NEW.message,
      'created_at', NEW.created_at
    )::text,
    'application/json'
  ) INTO request_id;

  RETURN NEW;
END;
$$;

-- Create trigger to fire on new contact insert
DROP TRIGGER IF EXISTS on_contact_created ON contacts;
CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();