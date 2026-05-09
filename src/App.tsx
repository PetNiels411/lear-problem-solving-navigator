import { useMemo, useState } from 'react'
import { dataProvider } from './dataProvider'
import type { DashboardFilters, RecommendationInputs } from './types'
import { filterDefects, filterInitiatives } from './utils/filters'
import ExecutiveOverview from './components/methods/ExecutiveOverview'
import PDCAboard from './components/methods/PDCAboard'
import DMAICboard from './components/methods/DMAICboard'
import A3board from './components/methods/A3board'
import D8board from './components/methods/D8board'
import ComparisonView from './components/methods/ComparisonView'
import MethodRecommender from './components/methods/MethodRecommender'
import DataConnections from './components/methods/DataConnections'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import HelpPanel from './components/layout/HelpPanel'
import GlobalFilters from './components/filters/GlobalFilters'
import './index.css'

const initialFilters: DashboardFilters = {
  segment: 'All',
  region: 'All',
  plant: 'All',
  customer: 'All',
  productFamily: 'All',
  program: 'All',
  severity: 'All',
  status: 'All',
  dateFrom: '2024-06-01',
  dateTo: '2025-05-31',
}

type ViewId = 'overview' | 'pdca' | 'dmaic' | 'a3' | '8d' | 'compare' | 'recommend' | 'data' | 'help'

const views: Array<{ id: ViewId; label: string }> = [
  { id: 'overview', label: 'Executive Overview' },
  { id: 'pdca', label: 'PDCA' },
  { id: 'dmaic', label: 'DMAIC' },
  { id: 'a3', label: 'A3' },
  { id: '8d', label: '8D' },
  { id: 'compare', label: 'Comparison' },
  { id: 'recommend', label: 'Method Recommender' },
  { id: 'data', label: 'Data Connections' },
  { id: 'help', label: 'Help' },
]

type HelpSection = ViewId | 'general'

function App() {
  const [activeView, setActiveView] = useState<ViewId>('overview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [filters, setFilters] = useState<DashboardFilters>(initialFilters)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [helpSection, setHelpSection] = useState<HelpSection>('general')
  const [recommenderInputs, setRecommenderInputs] = useState<RecommendationInputs>({
    customerComplaint: false,
    lineStop: false,
    chronicDataRich: false,
    localImprovement: true,
    onePageNarrative: false,
    containmentNeeded: false,
    crossFunctional: false,
    recurrenceRisk: false,
  })

  const openHelpFor = (section: HelpSection) => {
    setHelpSection(section)
    setIsHelpOpen(true)
  }

  const navigateToMethod = (method: string) => {
    const methodMap: Record<string, ViewId> = {
      'pdca': 'pdca',
      'dmaic': 'dmaic',
      'a3': 'a3',
      '8d': '8d',
    }
    const viewId = methodMap[method.toLowerCase()] || 'overview'
    setActiveView(viewId)
  }

  const plants = dataProvider.getPlants()
  const customers = dataProvider.getCustomers()
  const suppliers = dataProvider.getSuppliers()
  const programs = dataProvider.getPrograms()
  const products = dataProvider.getProducts()
  const initiatives = dataProvider.getInitiatives()
  const defects = dataProvider.getDefects()
  const metrics = dataProvider.getMetrics()

  const filteredInitiatives = useMemo(() => filterInitiatives(initiatives, filters), [initiatives, filters])
  const filteredDefects = useMemo(() => filterDefects(defects, filters), [defects, filters])

  const segmentCounts = useMemo(() => {
    return filteredDefects.reduce(
      (acc, defect) => {
        acc[defect.segment] += 1
        return acc
      },
      { Seating: 0, 'E-Systems': 0 },
    )
  }, [filteredDefects])

  const openInitiatives = filteredInitiatives.filter((item) => item.status !== 'Closed' && item.status !== 'Closed and standardized').length
  const openCustomerComplaints = filteredDefects.filter((item) => item.severity === 'Customer line stop' || item.severity === 'Critical').length

  return (
    <div className={theme === 'dark' ? 'app-shell theme-dark' : 'app-shell theme-light'}>
      <Sidebar views={views} activeView={activeView} onSelect={(value) => setActiveView(value)} />
      <div className="main-content">
        <Header
          title="Lear Manufacturing Problem-Solving Navigator"
          summary={`${openInitiatives} open initiatives, ${openCustomerComplaints} customer-critical issues`}
          theme={theme}
          onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          onHelpClick={() => openHelpFor(activeView)}
          defects={filteredDefects}
          initiatives={filteredInitiatives}
          onNavigateToMethod={navigateToMethod}
        />

        <div className="content-grid">
          <GlobalFilters
            filters={filters}
            plants={plants}
            customers={customers}
            products={products}
            programs={programs}
            onChange={setFilters}
          />

          <div className="page-panel">
            {activeView === 'overview' && (
              <ExecutiveOverview
                filters={filters}
                initiatives={filteredInitiatives}
                defects={filteredDefects}
                metrics={metrics}
                plants={plants}
                customers={customers}
                suppliers={suppliers}
                openInitiatives={openInitiatives}
                openCustomerComplaints={openCustomerComplaints}
                segmentCounts={segmentCounts}
              />
            )}
            {activeView === 'pdca' && <PDCAboard initiatives={filteredInitiatives} />}
            {activeView === 'dmaic' && <DMAICboard initiatives={filteredInitiatives} defects={filteredDefects} />}
            {activeView === 'a3' && <A3board initiatives={filteredInitiatives} />}
            {activeView === '8d' && <D8board defects={filteredDefects} customers={customers} suppliers={suppliers} plants={plants} programs={programs} />}
            {activeView === 'compare' && <ComparisonView />}
            {activeView === 'recommend' && (
              <MethodRecommender answers={recommenderInputs} onChange={setRecommenderInputs} />
            )}
            {activeView === 'data' && <DataConnections />}
            {activeView === 'help' && <HelpPanel isOpen={true} onClose={() => setActiveView('overview')} section="general" />}
          </div>
        </div>
      </div>
      <HelpPanel isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} section={helpSection as any} />
    </div>
  )
}

export default App
