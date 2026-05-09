import type { Initiative } from '../../types'
import { AnimatedPageContent, StaggerContainer, StaggerItem } from '../motion/AnimatedContent'

interface PDCAboardProps {
  initiatives: Initiative[]
}

export default function PDCAboard({ initiatives }: PDCAboardProps) {
  const boardInitiatives = initiatives.filter((initiative) => initiative.method === 'PDCA').slice(0, 10)

  return (
    <AnimatedPageContent>
      <div className="method-board">
        <div className="method-header">
          <div>
            <p className="eyebrow">PDCA board</p>
            <h2>Fast kaizen and line-side continuous improvement.</h2>
            <p className="section-copy">PDCA is best for daily plant operations, JIT sequencing improvement, and standard work discipline in seating and harness assembly.</p>
          </div>
        </div>

        <StaggerContainer delay={0.1}>
          <div className="method-grid">
            {['Plan', 'Do', 'Check', 'Act'].map((phase) => (
              <StaggerItem key={phase}>
                <div className="method-card" title={`${phase}: ${phase === 'Plan' ? 'Identify and plan the improvement' : phase === 'Do' ? 'Implement the solution on a small scale' : phase === 'Check' ? 'Measure the results' : 'Standardize successful changes'}`}>
                  <h3>{phase}</h3>
                  <p className="method-copy">
                    {phase === 'Plan' && 'Define the improvement target, line balance gap, and JIT sequencing issue.'}
                    {phase === 'Do' && 'Execute pilot countermeasures for ergonomic movement, kitting accuracy, or changeover reduction.'}
                    {phase === 'Check' && 'Validate process metrics, takt time, and standard work adherence with operator feedback.'}
                    {phase === 'Act' && 'Standardize successful changes and apply them across seats, trim, and harness operations.'}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <StaggerItem>
          <div className="list-card">
            <div className="list-card-title">Active PDCA initiatives</div>
            {boardInitiatives.map((initiative) => (
              <div key={initiative.id} className="list-row">
                <div>
                  <span className="item-label">{initiative.title}</span>
                  <p className="item-meta">{initiative.category} • {initiative.severity} • {initiative.status}</p>
                </div>
                <div className="item-trend">
                  <span>{initiative.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </StaggerItem>
      </div>
    </AnimatedPageContent>
  )
}
