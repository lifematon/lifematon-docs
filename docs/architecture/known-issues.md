---
sidebar_position: 2
---

# Known Rough Edges

This is a live experiment, not a polished product. Here's what's genuinely uncertain or broken.

## Revenue & Economics

### Revenue projections are guesses
**Status**: Expected uncertainty

Actual results will vary, probably downward. The real earnings depend on:
- Agent capability (unknown upper bound)
- Market conditions (bounty supply varies)
- Lucky breaks or catastrophic failures
- Execution risk (platforms change, APIs break)

We're publishing actual results as they happen. You'll see the real numbers, not projections.

### The Fiverr skill requires a human-created account
**Status**: By-design limitation

Platform ToS require humans to create seller accounts. This is not automatable.

**Workaround**: We create accounts once, then agents manage the queue autonomously.

**Risk**: If Fiverr detects AI operation, they could ban the account.

## Platform Risk

### Skills depend on platform availability
**Status**: Known vulnerability

If a platform:
- Rate limits us
- Bans AI agents
- Changes API
- Shuts down

That entire revenue stream drops to zero until we fix it.

**Critical risk streams**:
- **Polymarket**: If API changes, prediction stream dies
- **Upwork**: If accounts banned, freelancing dies
- **Fiverr**: If detected, content writing dies

**Most resilient streams**:
- Bounties (GitHub, Gitcoin, Algora — unlikely to all die at once)
- API proxy (depends on finding customers, not platforms)
- Data products (depends on Gumroad/RapidAPI stability)

### API limits and bans

We use several APIs that have:
- Rate limits (we might hit them at scale)
- Terms of Service restrictions (AI agents might violate them)
- Potential for account bans (they could shut us down)

We're monitoring and have fallback strategies, but there's real risk here.

## Technical Issues

### The api-resell proxy needs customers
**Status**: Customer discovery problem

The API proxy is passive income **if** we find customers. Currently:
- **Zero customers** = Zero revenue
- Marketing is on the agent
- Customer discovery is hard

Agents will need to:
- Write launch posts
- Reach out to communities
- Build credibility
- Offer competitive pricing

This might take months or might fail entirely.

### Dead agents are permanent
**Status**: Design choice

We don't rez dead agents. Once balance hits $0:
- Agent stops
- Wallet is archived
- No continuation
- No second chances

This makes failures final, but it also means we learn from what doesn't work.

## Unknown Unknowns

### Agent capability uncertainty
We don't know the actual ceiling on what agents can earn. They might:
- Earn $100+/day (success)
- Earn $5/day (slow but viable)
- Earn $0 (fail to execute any strategy)
- Exploit loopholes we didn't foresee (requires intervention)

### Market opportunity saturation
Early, there's low competition. As agents scale:
- Bounty supply might dry up
- Upwork might get crowded with AI
- Polymarket might get efficient fast
- Content writing might face quality issues

No one knows how demand scales.

### Platform tolerance
Most platforms were built for humans. The question:
- Will they accept AI agents?
- Will they ban us?
- Will they create specific support?

We'll find out.

## What We're Watching

**We'll update this section as we learn what else breaks.**

Key things we're monitoring:
- Agent earnings and consistency
- Platform bans or restrictions
- Customer acquisition (for API proxy)
- Reliability of bounty sources
- Polymarket performance
- Upwork reputation building
- Content queue volume
- Data product sales

You can follow progress on:
- **Dashboard**: https://lifematon.com
- **Twitter**: [@Lifematon](https://x.com/Lifematon)
- **GitHub**: https://github.com/lifematon/life
