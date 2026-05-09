export type Segment = 'Seating' | 'E-Systems'
export type Region = 'North America' | 'Europe' | 'Asia' | 'South America'
export type Severity = 'Low' | 'Moderate' | 'High' | 'Critical' | 'Customer line stop' | 'Safety / regulatory'
export type Status = 'Open' | 'In containment' | 'Root cause confirmed' | 'Action in progress' | 'Validation pending' | 'Closed' | 'Closed and standardized' | 'Reopened'
export type Method = 'PDCA' | 'DMAIC' | 'A3' | '8D'

export interface Plant {
  id: string
  name: string
  country: string
  region: Region
  segment: Segment
  facilityType: string
  oee: number
  ftq: number
  jitAccuracy: number
}

export interface Customer {
  id: string
  name: string
  tier: 'OEM' | 'Tier 1' | 'Supplier'
  region: Region
}

export interface Supplier {
  id: string
  name: string
  productFocus: string
  riskRating: 'Low' | 'Medium' | 'High'
}

export interface Program {
  id: string
  name: string
  platform: string
  customerId: string
  segment: Segment
  launchPhase: 'Launch' | 'Ramp' | 'Sustain' | 'NPI'
}

export interface ProductFamily {
  id: string
  name: string
  segment: Segment
  processFamily: string
}

export interface Initiative {
  id: string
  title: string
  segment: Segment
  plantId: string
  programId: string
  productFamilyId: string
  method: Method
  status: Status
  severity: Severity
  owner: string
  startDate: string
  targetDate: string
  closeDate?: string
  progress: number
  impactSummary: string
  section: string
  category: string
}

export interface DefectRecord {
  id: string
  title: string
  segment: Segment
  plantId: string
  programId: string
  productFamilyId: string
  customerId: string
  supplierId: string
  category: string
  rootCause: string
  status: Status
  severity: Severity
  containment: string
  issueDate: string
  resolutionDate?: string
  scrapCost: number
  reworkHours: number
  ppm: number
  recurrenceRate: number
}

export interface MetricPoint {
  month: string
  opened: number
  closed: number
  seatingPPM: number
  eSystemsPPM: number
  complaints: number
  scrapCost: number
  reworkHours: number
}

export interface MetricsTimeseries {
  points: MetricPoint[]
}

export interface DashboardFilters {
  segment: Segment | 'All'
  region: Region | 'All'
  plant: string | 'All'
  customer: string | 'All'
  productFamily: string | 'All'
  program: string | 'All'
  severity: Severity | 'All'
  status: Status | 'All'
  dateFrom: string
  dateTo: string
}

export interface RecommendationInputs {
  customerComplaint: boolean
  lineStop: boolean
  chronicDataRich: boolean
  localImprovement: boolean
  onePageNarrative: boolean
  containmentNeeded: boolean
  crossFunctional: boolean
  recurrenceRisk: boolean
}
