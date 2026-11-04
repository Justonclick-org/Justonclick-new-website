import React from "react";
import { Link } from "react-router-dom";
import { trackCtaClick } from "../utils/analytics";

/**
 * react-router Link that pushes a CTA click event before navigating.
 * track: { type: "contact" | "demo", name: string, location: CTA_LOCATION value }
 */
function TrackedLink({ track, onClick, ...props }) {
  const handleClick = (e) => {
    if (track) trackCtaClick(track.type, track.name, track.location);
    if (onClick) onClick(e);
  };
  return <Link {...props} onClick={handleClick} />;
}

export default TrackedLink;
