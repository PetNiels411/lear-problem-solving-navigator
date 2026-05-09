# Lear Manufacturing Problem-Solving Navigator

A comprehensive dashboard for manufacturing problem-solving and quality management at Lear Corporation.

## Features

- **Executive Overview**: High-level KPIs and performance metrics
- **Problem-Solving Methods**: PDCA, DMAIC, A3, and 8D methodologies
- **Interactive Dashboards**: Charts, filters, and real-time data visualization
- **Search Functionality**: Find issues and initiatives across the organization
- **Responsive Design**: Works on desktop and mobile devices

## Live Demo

🚀 **View the live application**: [GitHub Pages Link - Update this after deployment]

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/lear-problem-solving-navigator.git
cd lear-problem-solving-navigator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Step-by-Step Deployment

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `lear-problem-solving-navigator`
   - Make it public (recommended for sharing)
   - **Don't initialize with README** (we already have one)

2. **Connect Local Repository**:
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/lear-problem-solving-navigator.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Your site will be live at**:
   `https://YOUR_USERNAME.github.io/lear-problem-solving-navigator/`

### Updating the Live Site

After making changes:
```bash
git add .
git commit -m "Your update message"
git push
```
GitHub Pages will automatically rebuild and deploy your changes.

## Project Structure

```
src/
├── components/
│   ├── charts/          # Chart components (Pareto, Trend, Stacked Bar)
│   ├── filters/         # Global filter components
│   ├── kpi/            # KPI display grid
│   ├── layout/         # Header, Sidebar, Help panel
│   ├── methods/        # Problem-solving method views (PDCA, DMAIC, A3, 8D)
│   ├── search/         # Search modal and functionality
│   └── widgets/        # Dashboard widgets (gauges, progress rings)
├── data/               # Mock JSON data files
├── types/              # TypeScript type definitions
└── utils/              # Filter and recommendation utilities
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization library
- **Lucide React** - Icon library

## Replacing Mock Data with Live Sources

This app is designed to easily replace static JSON data with live enterprise systems:

- Edit `src/dataProvider.ts` to connect to REST APIs, databases, or enterprise systems
- Keep the typed interfaces in `src/types/index.ts` consistent
- Available data provider methods:
  - `getPlants()`, `getCustomers()`, `getSuppliers()`
  - `getInitiatives()`, `getDefects()`, `getMetrics()`
  - `getFilteredData()` for dynamic filtering

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is proprietary to Lear Corporation.
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
