import KPIGrid from '../kpi/KPIGrid'
import TrendAreaChart from '../charts/TrendAreaChart'
import SegmentStackedBar from '../charts/SegmentStackedBar'
import ParetoChart from '../charts/ParetoChart'
import { AnimatedPageContent, StaggerContainer, StaggerItem } from '../motion/AnimatedContent'
import type { Customer, DefectRecord, Initiative, MetricsTimeseries, Plant, Supplier } from '../../types'

interface ExecutiveOverviewProps {
  filters: unknown
  initiatives: Initiative[]
  defects: DefectRecord[]
  metrics: MetricsTimeseries
  plants: Plant[]
  customers: Customer[]
  suppliers: Supplier[]
  openInitiatives: number
  openCustomerComplaints: number
  segmentCounts: { Seating: number; 'E-Systems': number }
}

export default function ExecutiveOverview({ initiatives, defects, metrics, plants, suppliers, openInitiatives, openCustomerComplaints, segmentCounts }: ExecutiveOverviewProps) {
  const totalScrap = defects.reduce((total, item) => total + item.scrapCost, 0)
  const totalRework = defects.reduce((total, item) => total + item.reworkHours, 0)
  const initiativeCount = initiatives.length
  const topIssues = defects.slice(0, 5)
  const trendData = metrics.points
  const plantChart = plants.slice(0, 5).map((plant, index) => ({ name: plant.name.split(' ')[0], Seating: index % 2 === 0 ? 8 + index * 3 : 4 + index * 2, 'E-Systems': index % 2 === 0 ? 6 + index * 2 : 3 + index * 3 }))
  const rootCauseData = [
    { category: 'Standard work gap', value: 38, cumulative: 38 },
    { category: 'Supplier variation', value: 24, cumulative: 62 },
    { category: 'Test calibration', value: 14, cumulative: 76 },
    { category: 'Changeover drift', value: 8, cumulative: 84 },
    { category: 'Fixture misalignment', value: 6, cumulative: 90 },
    { category: 'Operator training', value: 4, cumulative: 94 },
    { category: 'JIT sequencing', value: 3, cumulative: 97 },
    { category: 'Electrical validation', value: 2, cumulative: 99 },
  ]

  // Calculate actual method counts from initiatives data
  const methodCounts = initiatives.reduce((acc, initiative) => {
    acc[initiative.method] = (acc[initiative.method] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const pdcaCount = methodCounts.PDCA || 0
  const dmaicCount = methodCounts.DMAIC || 0
  const a3Count = methodCounts.A3 || 0
  const eightDCount = methodCounts['8D'] || 0

  const kpiItems = [
    { title: 'Open initiatives', value: `${openInitiatives}`, detail: 'All active problem-solving efforts', badge: 'Live' },
    { title: 'PDCA / DMAIC / A3 / 8D', value: `${pdcaCount} / ${dmaicCount} / ${a3Count} / ${eightDCount}`, detail: 'Method allocation by initiative' },
    { title: 'Customer complaints', value: `${openCustomerComplaints}`, detail: 'Critical and line-stop cases' },
    { title: 'Internal defect PPM', value: '1,280', detail: 'Across Seating and E-Systems' },
    { title: 'Supplier defect PPM', value: '540', detail: 'Measured in IATF quality events' },
    { title: 'First-time quality', value: '93.8%', detail: 'Final seat / harness functional pass rate' },
    { title: 'Scrap cost', value: `$${totalScrap.toLocaleString()}`, detail: 'Realized in the last 12 months' },
    { title: 'Rework hours', value: `${totalRework}`, detail: 'Shop floor rework labor hours' },
    { title: 'On-time closure', value: '88%', detail: 'Corrective action closures on schedule' },
    { title: 'Average days to closure', value: '24', detail: 'Across quality and launch issues' },
    { title: 'Containment status', value: '82%', detail: 'Active containment coverage rate' },
    { title: 'Escalated OEM incidents', value: '6', detail: 'OEM-level complaints in review' },
  ]

  return (
    <AnimatedPageContent>
      <div className="dashboard-shell" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div className="dashboard-intro">
          <div>
            <p className="eyebrow">Executive overview</p>
            <h2>Quality and launch readiness for Seating and E-Systems.</h2>
            <p className="section-copy">A Lear-like operational cockpit for segment-level delivery, supplier containment, and method selection visibility.</p>
          </div>
          <div className="callout-panel">
            <h3>Method recommendation</h3>
            <p>Use 8D for customer-facing escalations, DMAIC for chronic data-rich analysis, A3 for concise cross-functional alignment, and PDCA for line-side kaizen.</p>
            <div className="info-line">
              <span>Active initiatives</span>
              <strong>{initiativeCount}</strong>
            </div>
            <div className="info-line">
              <span>Segment issue split</span>
              <strong>Seating {segmentCounts.Seating} / E-Systems {segmentCounts['E-Systems']}</strong>
            </div>
          </div>
        </div>

        <StaggerContainer delay={0.1}>
          <StaggerItem><KPIGrid items={kpiItems} /></StaggerItem>
        </StaggerContainer>

        <div className="charts-grid">
          <StaggerContainer delay={0.2}>
            <StaggerItem><TrendAreaChart data={trendData} /></StaggerItem>
            <StaggerItem><SegmentStackedBar data={plantChart} /></StaggerItem>
          </StaggerContainer>
        </div>

        <div className="charts-grid">
          <StaggerContainer delay={0.3}>
            <StaggerItem><ParetoChart data={rootCauseData} /></StaggerItem>
            <StaggerItem>
              <div className="chart-card info-panel">
                <div className="chart-header">
                  <div>
                    <h3>Top recurring issues</h3>
                    <p>Common seating and harness process problems</p>
                  </div>
                </div>
                <div className="list-card">
                  {topIssues.map((item) => (
                    <div key={item.id} className="list-row">
                      <div>
                        <span className="item-label">{item.title}</span>
                        <p className="item-meta">{item.category} • {item.severity} • {item.status}</p>
                      </div>
                      <span className="pill">{item.segment}</span>
                    </div>
                  ))}
                </div>
                <div className="info-grid">
                  <div>
                    <span>Highest supplier exposure</span>
                    {suppliers.slice(0, 4).map((supplier) => (
                      <div key={supplier.id} className="info-line">
                        <span>{supplier.name}</span>
                        <span className="info-detail">{supplier.riskRating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </AnimatedPageContent>
  )
}
