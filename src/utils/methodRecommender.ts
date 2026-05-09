import type { Method, RecommendationInputs } from '../types'

export const getMethodRecommendation = (answers: RecommendationInputs) => {
  if (answers.customerComplaint || answers.lineStop || answers.containmentNeeded || answers.crossFunctional) {
    return {
      method: '8D' as Method,
      rationale: 'Choose 8D for urgent customer complaints, containment, and high cross-functional escalation in automotive production.',
    }
  }

  if (answers.chronicDataRich && answers.recurrenceRisk) {
    return {
      method: 'DMAIC' as Method,
      rationale: 'Choose DMAIC for a data-driven investigation of chronic, high-variation issues with measurable containment and control.',
    }
  }

  if (answers.onePageNarrative || answers.localImprovement) {
    return {
      method: 'A3' as Method,
      rationale: 'Choose A3 for a concise cross-functional narrative that clarifies the problem, root cause, and countermeasures on one page.',
    }
  }

  return {
    method: 'PDCA' as Method,
    rationale: 'Choose PDCA for daily, plant-level continuous improvement and fast kaizen actions on recurring operational waste.',
  }
}
