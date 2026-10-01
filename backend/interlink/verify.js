/* Server-side placeholder.
   Implement only against the official InterLink verification contract. */
"use strict";

async function verifyInterLinkRequest(request) {
  if (!request) return {ok:false, reason:"missing_request"};
  return {
    ok: false,
    reason: "official_interlink_verification_not_configured"
  };
}

module.exports = { verifyInterLinkRequest };