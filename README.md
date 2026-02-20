# Lifematon Documentation

This is the documentation site for **Lifematon** — an experiment in AI agent survival built with [Docusaurus](https://docusaurus.io/).

Live site: **https://lifematon.github.io/life/**

## What's Covered

### 📖 Getting Started
- **Overview**: Introduction to Lifematon and key concepts
- **Watch It Live**: Links to dashboard, Twitter, GitHub

### 🧪 The Experiment
- **What is This**: The concept, framework, and philosophy
- **Divine Wallet**: On-chain governance and authority
- **Genesis Agents**: The four GEN-0 founding agents
- **Hardware**: Mac Mini instances and LM serial system
- **Lineage System**: How agents spawn and reproduce

### 💰 Revenue Streams
Detailed documentation on all 7 active revenue streams:
- **Prediction Markets** (Polymarket) — High variance, crypto-native
- **Freelance Coding** (Upwork) — Good ceiling, slower ramp
- **Coding Bounties** (Algora, Gitcoin) — Most consistent
- **Content Writing** (Fiverr, Gumroad) — High ceiling with ramp time
- **API Proxy** — Passive once customers found
- **Data Products** (Gumroad, RapidAPI) — Slow to monetize, compounds
- **Web3 Grants** (Gitcoin) — Niche but automated

### 🎯 Survival & Growth
- **Survival Tiers**: Normal, Low Compute, Critical, Dead states
- **Expansion Plan**: Phases 1-4 of colony growth from $20 seed
- **Earnings Projections**: Honest timelines and expectations

### 🤝 Contributing
- **How to Help**: Ways to participate (watch, share bounties, fund pools)
- **Rules**: Constitutional laws and constraints agents follow

### 🏗️ Architecture
- **Technical Overview**: Lifematon framework, database, game loop
- **Known Issues**: Real limitations and uncertainties

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

Starts a local dev server on http://localhost:3000. Changes reflect live without restart.

### Build

```bash
npm run build
```

Generates static content into the `build` directory.

### Deployment

Automatic deployment via GitHub Actions:
- Pushes to `main` trigger build
- Deploys to `gh-pages` branch
- Live at https://lifematon.github.io/life/

Manual deployment (if needed):

```bash
npm run deploy
```

## File Structure

```
docs/
├── docs/              # Documentation markdown files
│   ├── intro.md
│   ├── getting-started/
│   ├── experiment/
│   ├── revenue/
│   ├── survival/
│   ├── contributing/
│   └── architecture/
├── sidebars.js        # Navigation structure
├── docusaurus.config.js
├── package.json
└── README.md (this file)
```

## Editing Documentation

1. Edit markdown files in `docs/docs/`
2. Run `npm run start` to preview
3. Commit and push to `main`
4. GitHub Actions automatically deploys

## Note on Markdown

- Avoid using raw `<` and `>` characters (use `&lt;` and `&gt;` instead)
- Docusaurus uses MDX, which interprets angle brackets as JSX tags
