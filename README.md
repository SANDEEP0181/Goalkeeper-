# Goalkeeper

Goalkeeper is a TON + Telegram Web3 Mini-App prototype focused on missions, streaks, events, referrals, community activity and wallet identity.

## Current status

- TON wallet connection is testnet-oriented and does not request payments.
- Telegram Mini-App session verification uses the existing Goalkeeper backend endpoints.
- Points are activity/testnet XP and have no cash value.
- Genesis Keeper NFT eligibility requires a **30-day Keeper Streak**.
- NFT minting remains disabled until an approved TON Testnet collection is deployed.
- AdsGram rewards are disabled until a valid/approved ad configuration is available.
- InterLink integration is present as a disabled adapter layer and requires an official App ID/SDK/auth flow before activation.
- No $ITL transaction, payment or token reward is enabled.

## Deployment

The frontend is static and can be deployed to GitHub Pages or another static host. The TON Connect manifest must remain reachable from the deployed origin.

For Telegram Mini-App use, open the deployed app through the configured Goalkeeper bot Mini-App URL.

## Security

Never place Telegram bot secrets, InterLink secrets, private keys, API keys or server credentials in frontend files.

Important identity and reward operations should remain server-authoritative. Client-side local storage is only a UI/test fallback when the verified Telegram backend is unavailable.

## InterLink

The `interlink/` directory contains the integration boundary. It is intentionally disabled until InterLink provides the required App ID and official authentication/API contract.

## Validation

GitHub Actions checks every JavaScript file with Node's syntax checker on pushes and pull requests.
