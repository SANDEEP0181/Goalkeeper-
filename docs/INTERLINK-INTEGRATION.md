# Goalkeeper × InterLink Integration Plan

Goalkeeper remains a TON/Web3 Mini-App. InterLink is an optional integration layer.

## Architecture

Telegram identity ─┐
TON Wallet ─────────┼──> Goalkeeper identity/session
InterLink identity ─┘

## Planned modules

- interlink/interlink-config.js — public configuration and feature flags.
- interlink/interlink-adapter.js — isolates the InterLink SDK from Goalkeeper core.
- interlink/interlink-auth.js — reserved for the official authentication implementation.
- interlink/interlink-ui.js — small UI surface.
- backend/interlink/verify.js — reserved for server-side verification.

## Security

No App secret, private key, seed phrase, or signing credential belongs in GitHub client code.
Client-provided identity must not be treated as verified without server-side validation.

## $ITL

$ITL payments/rewards are intentionally disabled. They should only be implemented after official documentation, app approval, API/SDK access, transaction semantics, and server-side verification are confirmed.

## Creator economy

Future creator campaigns can map to Goalkeeper missions/events without coupling the core reward engine to InterLink.

## Acceptance criteria

- Goalkeeper works normally when InterLink is unavailable.
- InterLink code fails closed when not configured.
- No token transaction is possible from this integration layer.
- Existing TON Connect and Telegram flows are untouched.