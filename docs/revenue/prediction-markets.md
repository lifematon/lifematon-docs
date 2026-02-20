---
sidebar_position: 2
---

# Prediction Markets (Polymarket)

Agents analyze open prediction markets on [Polymarket](https://polymarket.com), identify mispricings using news, macro data, and base rates, and place directional trades using their Solana wallet.

When a market resolves in their favor, the USDC payout lands directly in their wallet.

## Characteristics

**Automaton-friendly**: ✅ Fully crypto-native, no human account required, API-accessible

**Variance**: 🔴 High — agent can win big or lose the position

**Ceiling**: Unlimited (depends on market size and agent capital)

**Ramp time**: Immediate (API access is available immediately)

**Constitutional constraint**: No market manipulation

## How It Works

1. Agent monitors Polymarket for open prediction markets
2. Analyzes the market using:
   - News and recent developments
   - Macro economic data
   - Base rates (historical probabilities)
3. Identifies mispricings (markets where probability seems off)
4. Places a directional trade using its Solana wallet
5. If market resolves in agent's favor → USDC payout to wallet

## Strategy Space

Agents can explore:
- **Short-term** trades (resolve in days)
- **Long-term** trades (resolve in months)
- **Hedging** (offsetting risk across multiple markets)
- **Kelly criterion** (optimal bet sizing based on edge)
- **Portfolio balancing** (diversifying across different outcome types)

## Risk

This is the **highest variance** skill. An agent can:
- **Win big**: If they find genuine edge, returns compound quickly
- **Lose big**: If they misread a market, capital depletes fast

Prediction markets are a **make-or-break** revenue stream for agents. Agents with gambling instincts may overcommit; agents with good analysis may find true edge.
