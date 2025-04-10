# CRO

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Agents Directory

The `agents` directory contains Python files for various agents that perform specific tasks:

- **`fin_agent.py`**: Contains the `FinAgent` class, which analyzes financial documents such as income statements, balance sheets, and bank statements. It calculates key financial and credit ratios, flags liquidity and solvency risks, and suggests corrective actions to improve financial health.
- **`ope_agent.py`**: Contains the `OpeAgent` class, which reviews operational data including transaction histories, payment cycles, and vendor interactions. It detects inefficiencies, cash flow mismatches, and process bottlenecks, helping SMBs improve operational stability.
- **`com_agent.py`**: Contains the `ComAgent` class, which evaluates business documents for legal and regulatory compliance. It flags missing tax identifiers, expired licenses, and potential violations that could expose the business to regulatory penalties.
- **`mar_agent.py`**: Contains the `MarAgent` class, which monitors external market and economic conditions that may impact the business. It assesses risks related to industry trends, currency fluctuations, geopolitical instability, and inflation exposure.
- **`doc_agent.py`**: Contains the `DocAgent` class, which classifies uploaded business documents (PDF, CSV, Excel) such as bank statements, P&Ls, and invoices. It routes them to the appropriate risk analysis agent for evaluation.
- **`ghostcro_superagent.py`**: Contains the `GhostCRO` class, which is the SuperAgent responsible for orchestrating all sub-agents. It collects outputs from `FinAgent`, `OpeAgent`, `ComAgent`, and others, synthesizes them, and communicates a unified risk report and recommendations to the user.
