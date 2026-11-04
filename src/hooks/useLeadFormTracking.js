import { useCallback, useRef } from "react";
import { trackFormStart, trackLeadSuccess } from "../utils/analytics";

/**
 * Form analytics for one mounted form instance.
 * - markStarted: call from field change handlers; pushes form_start once.
 * - markSuccess: call only once the lead has actually been handed off; pushes
 *   lead_form_success once, so double submits don't create duplicate leads.
 * Events fire from event handlers (not effects), so StrictMode re-renders can't duplicate them.
 */
export function useLeadFormTracking(leadType, formName) {
  const started = useRef(false);
  const succeeded = useRef(false);

  const markStarted = useCallback(() => {
    if (started.current) return;
    started.current = true;
    trackFormStart(formName);
  }, [formName]);

  const markSuccess = useCallback(() => {
    if (succeeded.current) return;
    succeeded.current = true;
    trackLeadSuccess(leadType, formName);
  }, [leadType, formName]);

  return { markStarted, markSuccess };
}
