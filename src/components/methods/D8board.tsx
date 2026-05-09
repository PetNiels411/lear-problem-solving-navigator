import type { Customer, DefectRecord, Plant, Program, Supplier } from '../../types'

interface D8boardProps {
  defects: DefectRecord[]
  customers: Customer[]
  suppliers: Supplier[]
  plants: Plant[]
  programs: Program[]
}

export default function D8board({ defects, customers, suppliers, plants, programs }: D8boardProps) {
  const issue = defects.find((item) => item.severity === 'Customer line stop') ?? defects[0]
  const customer = issue ? customers.find((c) => c.id === issue.customerId) : undefined
  const plant = issue ? plants.find((p) => p.id === issue.plantId) : undefined
  const supplier = issue ? suppliers.find((s) => s.id === issue.supplierId) : undefined

  return (
    <div className="method-board">
      <div className="method-header">
        <div>
          <p className="eyebrow">8D board</p>
          <h2>Customer-facing escalation and warranty-quality response.</h2>
          <p className="section-copy">Use 8D when OEM incidents, warranty exposure, or high-voltage safety risk require rapid containment and permanent corrective action.</p>
        </div>
      </div>

      <div className="d8-grid">
        {['D1 Team', 'D2 Problem', 'D3 Containment', 'D4 Root cause', 'D5 Action', 'D6 Validation', 'D7 Prevention', 'D8 Recognition'].map((step) => (
          <div key={step} className="method-card compact" title={`${step}: ${step === 'D1 Team' ? 'Form a team' : step === 'D2 Problem' ? 'Describe the problem' : step === 'D3 Containment' ? 'Implement containment' : step === 'D4 Root cause' ? 'Find root cause' : step === 'D5 Action' ? 'Choose permanent solution' : step === 'D6 Validation' ? 'Implement and validate' : step === 'D7 Prevention' ? 'Prevent recurrence' : 'Congratulate the team'}`}>
            <h3>{step}</h3>
            <p className="method-copy">
              {step === 'D1 Team' && 'Assemble a cross-functional team including plant, supplier quality, assembly, and OEM interface.'}
              {step === 'D2 Problem' && 'Describe the complaint, VIN window, and line-stop or warranty impact.'}
              {step === 'D3 Containment' && 'Track suspect stock, sort activity, and transit hold status across plant and customer sites.'}
              {step === 'D4 Root cause' && 'Verify the root cause through defect teardown, test traceability, and supplier batch review.'}
              {step === 'D5 Action' && 'Implement permanent corrections for material, process, and test sequence issues.'}
              {step === 'D6 Validation' && 'Validate effectiveness with additional build and test coverage before release.'}
              {step === 'D7 Prevention' && 'Update standard work, error-proofing, and supplier controls to prevent recurrence.'}
              {step === 'D8 Recognition' && 'Document lessons learned and recognize the team for quick customer recovery.'}
            </p>
          </div>
        ))}
      </div>

      <div className="list-card two-column-grid">
        <div>
          <div className="list-card-title">Customer issue summary</div>
          <div className="info-line">
            <span>OEM</span>
            <strong>{customer?.name ?? 'North American OEM'}</strong>
          </div>
          <div className="info-line">
            <span>Plant</span>
            <strong>{plant?.name ?? 'Southfield Seating Plant'}</strong>
          </div>
          <div className="info-line">
            <span>Severity</span>
            <strong>{issue?.severity ?? 'Customer line stop'}</strong>
          </div>
          <div className="info-line">
            <span>Containment</span>
            <strong>{issue?.containment ?? 'Plant / transit / customer hold'}</strong>
          </div>
          <div className="info-line">
            <span>Suspect stock</span>
            <strong>325 units</strong>
          </div>
        </div>
        <div>
          <div className="list-card-title">Recommended actions</div>
          <ul className="bullet-list">
            <li>Immediate stop on affected harness lot.</li>
            <li>Sort and rework high-voltage battery disconnect units.</li>
            <li>Execute customer containment and bridge repair kit.</li>
          </ul>
          <div className="list-card-title">Supplier & program</div>
          <div className="info-line">
            <span>Supplier</span>
            <strong>{supplier?.name ?? 'Global Connector Systems'}</strong>
          </div>
          <div className="info-line">
            <span>Program</span>
            <strong>{programs.find((program) => program.id === issue?.programId)?.name ?? 'NextGen EV Seat Platform'}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
