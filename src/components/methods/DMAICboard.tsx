import type { Initiative, DefectRecord } from '../../types'
import { AnimatedPageContent, StaggerContainer, StaggerItem } from '../motion/AnimatedContent'

interface DMAICboardProps {
  initiatives: Initiative[]
  defects: DefectRecord[]
}

export default function DMAICboard({ initiatives, defects }: DMAICboardProps) {
  const boardInitiatives = initiatives.filter((item) => item.method === 'DMAIC').slice(0, 8)
  const topDrivers = ['Crimp variation', 'Electrical test failure', 'Heater mat open circuit']
  const processFocus = ['Harness crimp', 'Weld cell', 'Heater mat assembly']
  const defectCount = defects.length

  return (
    <AnimatedPageContent>
      <div className="method-board">
        <div className="method-header">
          <div>
            <p className="eyebrow">DMAIC board</p>
            <h2>Analytical problem solving for chronic and costly failures.</h2>
            <p className="section-copy">DMAIC is best when measurement, process capability, and control planning are required for automotive launch and warranty prevention.</p>
          </div>
        </div>

        <StaggerContainer delay={0.1}>
          <div className="method-grid five-columns">
            {['Define', 'Measure', 'Analyze', 'Improve', 'Control'].map((step) => (
              <StaggerItem key={step}>
                <div className="method-card compact" title={`${step}: ${step === 'Define' ? 'Clearly state the problem' : step === 'Measure' ? 'Collect data' : step === 'Analyze' ? 'Find root causes' : step === 'Improve' ? 'Develop solutions' : 'Monitor to prevent recurrence'}`}>
                  <h3>{step}</h3>
                  <p className="method-copy">
                    {step === 'Define' && 'Capture the problem charter, CTQ, and customer impact for OEM launch issues.'}
                    {step === 'Measure' && 'Collect process, test, and defect data for harness, connector, and seat comfort failures.'}
                    {step === 'Analyze' && 'Identify major drivers with Pareto, correlation, and capability analysis.'}
                    {step === 'Improve' && 'Pilot targeted countermeasures in assembly, crimp, and test cells.'}
                    {step === 'Control' && 'Lock in control plans, audits, and digital KPI tracking for sustained quality.'}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <StaggerItem>
          <div className="list-card two-column-grid">
            <div>
              <div className="list-card-title">Active DMAIC charters</div>
              {boardInitiatives.map((initiative) => (
                <div key={initiative.id} className="list-row">
                  <div>
                    <span className="item-label">{initiative.title}</span>
                    <p className="item-meta">{initiative.status} • {initiative.severity}</p>
                  </div>
                  <span className="pill">{initiative.progress}%</span>
                </div>
              ))}
            </div>
            <div>
              <div className="list-card-title">Issue context</div>
              <div className="info-line">
                <span>DMAIC charters</span>
                <strong>{boardInitiatives.length}</strong>
              </div>
              <div className="info-line">
                <span>Defect records</span>
                <strong>{defectCount}</strong>
              </div>
              <div className="list-card-title">Top defect drivers</div>
              {topDrivers.map((driver) => (
                <div key={driver} className="info-line">
                  <span>{driver}</span>
                  <span className="info-detail">High impact</span>
                </div>
              ))}
              <div className="list-card-title">Process focus areas</div>
              {processFocus.map((area) => (
                <div key={area} className="info-line">
                  <span>{area}</span>
                  <span className="info-detail">Improvement target</span>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>
      </div>
    </AnimatedPageContent>
  )
}
