# Goalkeeper × InterLink

This folder is a future integration boundary for InterLink.

## Current state
- Disabled by default.
- No App ID or secret is stored.
- No $ITL transaction is enabled.
- No private keys are used.
- Existing TON/Telegram functionality remains independent.

## Activation requirements
1. Obtain an official InterLink App ID/approval.
2. Confirm the current official SDK/MDK package and supported browser/mini-app runtime.
3. Implement the official authentication flow.
4. Add server-side verification before trusting identity.
5. Only then evaluate supported payments/on-chain capabilities.

Do not enable features by changing client flags until the corresponding official backend verification and integration contract exists.