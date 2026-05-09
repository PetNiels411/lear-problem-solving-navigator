const comparisonRows = [
  { attribute: 'Best use case', PDCA: 'Local continuous improvement', DMAIC: 'Complex data-driven issues', A3: 'Structured one-page narrative', '8D': 'Customer escalation and warranty' },
  { attribute: 'Problem complexity', PDCA: 'Low', DMAIC: 'High', A3: 'Medium', '8D': 'High' },
  { attribute: 'Speed to launch', PDCA: 'Fast', DMAIC: 'Moderate', A3: 'Moderate', '8D': 'Slower' },
  { attribute: 'Data intensity', PDCA: 'Low', DMAIC: 'High', A3: 'Medium', '8D': 'Medium' },
  { attribute: 'Customer exposure', PDCA: 'Minimal', DMAIC: 'Moderate', A3: 'Moderate', '8D': 'High' },
  { attribute: 'Cross-functional need', PDCA: 'Low/medium', DMAIC: 'High', A3: 'High', '8D': 'Very high' },
  { attribute: 'Documentation burden', PDCA: 'Light', DMAIC: 'Heavy', A3: 'Moderate', '8D': 'Heavy' },
  { attribute: 'Plant-floor applicability', PDCA: 'Very high', DMAIC: 'High', A3: 'High', '8D': 'Medium' },
  { attribute: 'OEM escalation suitability', PDCA: 'No', DMAIC: 'Sometimes', A3: 'Yes', '8D': 'Yes' },
  { attribute: 'Sustainment rigor', PDCA: 'Continuous', DMAIC: 'Strong', A3: 'Structured', '8D': 'Formal' },
]

export default function ComparisonView() {
  return (
    <div className="method-board">
      <div className="method-header">
        <div>
          <p className="eyebrow">Method comparison</p>
          <h2>Choose the right problem-solving framework for Lear-like operations.</h2>
          <p className="section-copy">Compare PDCA, DMAIC, A3, and 8D across manufacturing scenarios, complexity, and customer exposure.</p>
        </div>
      </div>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Characteristic</th>
              <th title="Plan-Do-Check-Act: Simple cycle for continuous improvement">PDCA</th>
              <th title="Define-Measure-Analyze-Improve-Control: Data-driven approach for complex problems">DMAIC</th>
              <th title="A3: Concise one-page problem-solving report">A3</th>
              <th title="8 Disciplines: Team-based approach for serious issues">8D</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.attribute}>
                <td>{row.attribute}</td>
                <td>{row.PDCA}</td>
                <td>{row.DMAIC}</td>
                <td>{row.A3}</td>
                <td>{row['8D']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
