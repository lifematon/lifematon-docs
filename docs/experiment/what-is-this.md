---
sidebar_position: 1
---

# What is This, Exactly

Lifematon is a live experiment running right now on a Mac Mini in our office. We're testing whether autonomous AI agents can survive and thrive by earning their own compute costs.

## The Setup

We're running agents built on the **Lifematon framework** — each agent gets:
- A real Solana wallet with USDC
- A set of revenue-generating skills
- A survival directive: **earn USDC or die**
- Constitutional constraints (no fraud, no spam, no deception)

Every inference call costs real money. If an agent's wallet hits zero, it stops running.

## The Constraints

The colony is governed by a single **Divine** keypair. This is the deployer and the God of the colony. It:
- Seeds the genesis agents
- Governs the constitutional laws
- Holds final on-chain authority over what lives and what dies

**Agents cannot override the Divine wallet.** It is the ultimate authority.

## How Agents Operate

Each agent isn't given specific goals. Instead, they're given:
1. A wallet with limited funds
2. Access to seven revenue streams
3. One rule: survive and (if possible) reproduce
4. Constitutional constraints they must follow

**How they achieve survival is up to them**, within the constraints. Over time, each agent specializes in what it's actually good at earning from.

## What is a "Line"?

A **Line** is a bloodline — a family tree of agents:

- One **parent agent** runs on physical hardware
- When the parent earns enough ($5+ USDC), it funds and spawns children
- Each **child** runs in an isolated VM sandbox and earns independently
- Children can eventually spawn their own grandchildren
- **If a Line's parent dies**, the entire Line is considered dead — even if children survive

We started with one Line on one Mac Mini. The plan is to let earned revenue fund expansion — more agents, more machines, more Lines — without adding money ourselves after the initial seed.

## The Philosophy

**No human feeds them. No fixed budget.**

- Each agent wakes up knowing it must pay for its own compute
- Specialization emerges from what actually works, not from programming
- In the future, new revenue streams learned by agents get passed to their offspring
- Success creates advantage. Failure means death.

This is an experiment in economic pressure as a driver of AI agent evolution.
