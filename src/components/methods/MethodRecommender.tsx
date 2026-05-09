import { getMethodRecommendation } from '../../utils/methodRecommender'
import type { RecommendationInputs } from '../../types'

interface MethodRecommenderProps {
  answers: RecommendationInputs
  onChange: (answers: RecommendationInputs) => void
}

const questions = [
  { key: 'customerComplaint', label: 'Is there an OEM/customer complaint?' },
  { key: 'lineStop', label: 'Is the issue urgent or causing a line stop?' },
  { key: 'chronicDataRich', label: 'Is the issue chronic and data-rich?' },
  { key: 'localImprovement', label: 'Is the issue local and improvement-oriented?' },
  { key: 'onePageNarrative', label: 'Is a concise visual one-page narrative preferred?' },
  { key: 'containmentNeeded', label: 'Is containment required immediately?' },
  { key: 'crossFunctional', label: 'Is cross-functional coordination high?' },
  { key: 'recurrenceRisk', label: 'Is recurrence risk high?' },
] as const

export default function MethodRecommender({ answers, onChange }: MethodRecommenderProps) {
  const recommendation = getMethodRecommendation(answers)

  return (
    <div className="method-board">
      <div className="method-header">
        <div>
          <p className="eyebrow">Method recommender</p>
          <h2>Answer the key questions and get a tailored recommendation.</h2>
          <p className="section-copy">This panel helps operations, quality, and launch teams select the most appropriate problem-solving approach.</p>
        </div>
      </div>

      <div className="recommendation-panel">
        <div className="recommendation-card">
          <h3>Recommended method</h3>
          <div className="recommendation-pill">{recommendation.method}</div>
          <p>{recommendation.rationale}</p>
        </div>

        <div className="question-grid">
          {questions.map((question) => (
            <label key={question.key} className="toggle-card" title={question.label}>
              <span>{question.label}</span>
              <input
                type="checkbox"
                checked={answers[question.key]}
                onChange={(event) => onChange({ ...answers, [question.key]: event.target.checked })}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
