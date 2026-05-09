# Lear Manufacturing Problem-Solving Navigator

A production-grade single-page dashboard built for a Lear-like automotive supplier environment, focused on Seating and E-Systems problem solving with PDCA, DMAIC, A3, and 8D.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

- `src/`
  - `App.tsx` — main dashboard shell and view routing
  - `dataProvider.ts` — static data abstraction layer for future live integration
  - `types/` — shared dashboard data models and domain types
  - `utils/` — filter and recommendation logic
  - `components/` — layout, filter, KPI, chart, and method board components
- `data/` — mock JSON datasets for plants, customers, suppliers, programs, products, initiatives, defects, and timeseries metrics
- `scripts/generateMockData.mjs` — data generation utility for the sample dataset

## Replacing mock data with live sources

This app is built to allow future replacement of the static JSON mock data with live sources.

- Edit `src/dataProvider.ts` to point to REST APIs, SQL-backed services, SharePoint lists, SAP/MES views, or other enterprise feeds.
- Keep the typed model shapes in `src/types/index.ts` consistent with the new source data.
- Use the exported provider methods:
  - `getPlants()`
  - `getCustomers()`
  - `getSuppliers()`
  - `getPrograms()`
  - `getProducts()`
  - `getInitiatives()`
  - `getDefects()`
  - `getMetrics()`

## Key features

- Executive overview with KPI summaries, trend analysis, issue distribution, root cause Pareto, and supplier risk context
- Dedicated PDCA, DMAIC, A3, and 8D boards for realistic automotive manufacturing scenarios
- Comparison view describing method suitability for Seating and E-Systems quality operations
- Decision-support recommender panel for selecting the right problem-solving framework
- Responsive layout, light/dark theme, and a premium industrial SaaS aesthetic

## Notes

- The mock data targets realistic Lear-like business context: seating systems, wire harnesses, connectors, battery disconnect units, launch readiness, supplier quality, and IATF-style corrective action discipline.
- The application uses Vite, React, TypeScript, Tailwind CSS, Recharts, Lucide icons, and a modular component architecture.
