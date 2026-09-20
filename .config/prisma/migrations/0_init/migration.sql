-- This is an empty migration.

/* Generated migration SQL */

CREATE OR REPLACE FUNCTION notify_on_insert() 
RETURNS TRIGGER AS $$ 
BEGIN
  PERFORM pg_notify('new_record', NEW.id::text); 
  RETURN NEW; 
END; 
$$ LANGUAGE plpgsql; 