import type { Initiative } from '../../types'

interface A3boardProps {
  initiatives: Initiative[]
}

export default function A3board({ initiatives }: A3boardProps) {
  const initiative = initiatives.find((item) => item.method === 'A3')

  return (
    <div className="method-board">
      <div className="method-header">
        <div>
          <p className="eyebrow">A3 board</p>
          <h2>Concise, cross-functional problem-solving narrative.</h2>
          <p className="section-copy">A3 is best when teams need a one-page visual story that aligns design, launch, supplier, and quality stakeholders.</p>
        </div>
      </div>

      <div className="a3-canvas">
        <div className="a3-section" title="Clarify the problem: Understand and describe the issue clearly">
          <h3>Clarify the problem</h3>
          <p>Launch readiness gap on a new OEM seat platform, with recurring seat heater failures and packaging damage during JIT sequencing.</p>
        </div>
        <div className="a3-section" title="Current condition: Analyze the current situation and performance">
          <h3>Current condition</h3>
          <ul>
            <li>11% end-of-line electrical test failure on seat heaters</li>
            <li>Sequence accuracy under 94% for mixed trim builds</li>
            <li>Supplier soft trim batch variation driving defects</li>
          </ul>
        </div>
        <div className="a3-section" title="Target condition: Define what success looks like">
          <h3>Target condition</h3>
          <ul>
            <li>Reduce heater failure to 2% or less</li>
            <li>Improve JIT sequence accuracy to 98%</li>
            <li>Standardize inspection and containment by next plant audit</li>
          </ul>
        </div>
        <div className="a3-section" title="Root cause: Identify the underlying reasons for the problem">
          <h3>Root cause</h3>
          <p>Joint issue between supplier material tolerance drift, invalidated test calibration, and incomplete standard work at the assembly line.</p>
        </div>
        <div className="a3-section" title="Countermeasures: Propose specific actions to solve the problem">
          <h3>Countermeasures</h3>
          <ul>
            <li>Standardize pre-kitting inspection and material traceability</li>
            <li>Install error-proofing on harness routing and connector insertion</li>
            <li>Execute cross-functional launch readiness reviews with OEM quality</li>
          </ul>
        </div>
        <div className="a3-section" title="Follow-up: Track progress and ensure completion">
          <h3>Follow-up</h3>
          <div className="followup-grid">
            <div>
              <strong>Owner</strong>
              <p>Plant quality manager</p>
            </div>
            <div>
              <strong>Due</strong>
              <p>2025-05-10</p>
            </div>
            <div>
              <strong>Status</strong>
              <p>Action in progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="list-card">
        <div className="list-card-title">Example A3 initiative</div>
        <div className="list-row">
          <div>
            <span className="item-label">{initiative?.title ?? 'Improving new seat program launch readiness'}</span>
            <p className="item-meta">{initiative?.status ?? 'Action in progress'} • {initiative?.severity ?? 'High'}</p>
          </div>
          <span className="pill">{initiative?.method ?? 'A3'}</span>
        </div>
      </div>
    </div>
  )
}
