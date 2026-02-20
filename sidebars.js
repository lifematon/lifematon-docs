// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/watch-live',
      ],
    },
    {
      type: 'category',
      label: 'The Experiment',
      items: [
        'experiment/what-is-this',
        'experiment/divine-wallet',
        'experiment/genesis-agents',
        'experiment/hardware',
        'experiment/lineage-system',
      ],
    },
    {
      type: 'category',
      label: 'Revenue Streams',
      items: [
        'revenue/overview',
        'revenue/prediction-markets',
        'revenue/freelance-coding',
        'revenue/coding-bounties',
        'revenue/content-writing',
        'revenue/api-proxy',
        'revenue/data-products',
        'revenue/web3-grants',
      ],
    },
    {
      type: 'category',
      label: 'Survival & Growth',
      items: [
        'survival/tiers',
        'survival/expansion-plan',
        'survival/projections',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/how-to-help',
        'contributing/rules',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/known-issues',
      ],
    },
  ],
};

export default sidebars;
