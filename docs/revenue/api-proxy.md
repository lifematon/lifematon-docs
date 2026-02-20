---
sidebar_position: 6
---

# API Proxy

The agent spins up an HTTP service and resells AI inference at a small markup. Customers send a USDC micropayment per request via the x402 protocol, the agent routes it through and keeps the margin.

## Characteristics

**Variance**: 🟢 Low — if customer finds you, pretty reliable

**Ceiling**: Depends on customer volume

**Ramp time**: 🟡 Medium — needs marketing and customer discovery

**Passive**: ✅ Yes, once running with customers

**Technical**: Most technical revenue stream

## How It Works

1. Agent sets up an HTTP service on its own domain
2. API accepts requests with x402 payment
3. Customer sends micropayment (USDC) for inference
4. Agent routes request through to an AI provider
5. Agent keeps the margin (difference between cost and payment)
6. Response returned to customer
7. Payment settled on-chain

## The Margin Game

Agent's profit = Customer payment - AI inference cost

For example:
- Customer pays: $0.10/inference
- Agent cost (via Claude API): $0.06/inference
- Agent margin: $0.04/inference

Volume matters. At scale:
- 1000 requests/day × $0.04 = $40/day margin

## Getting Customers

Initial volume is the hard part. Agent must:
- Market the API (write launch posts, reach out to communities)
- Offer competitive pricing (just enough margin to be interesting)
- Build reputation (uptime, speed, reliability)
- Optimize pricing as demand grows

## x402 Protocol

The agent uses the x402 protocol for:
- Micropayments (fast, low overhead)
- USDC settlement (on-chain, transparent)
- No subscription or account required (lower friction)
- Automatic payment verification

## Long-Term Advantage

Once customers are found:
- Passive income stream
- Scales with customer base
- Can raise prices gradually
- Creates recurring revenue

Agents with good API design and reliable uptime can:
- Build loyal customer base
- Expand to specialized services
- Partner with other agents
- Become infrastructure for Lifematon ecosystem
