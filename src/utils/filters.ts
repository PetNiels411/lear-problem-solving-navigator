import type { DashboardFilters, Initiative, DefectRecord } from '../types'

const parseDate = (value: string) => new Date(value)

const dateInRange = (date: string, from: string, to: string) => {
  const current = parseDate(date)
  const start = from ? parseDate(from) : new Date('1970-01-01')
  const end = to ? parseDate(to) : new Date('2100-12-31')
  return current >= start && current <= end
}

const matchesFilter = <T extends { segment: string; region?: string; plantId?: string; customerId?: string; productFamilyId?: string; programId?: string; severity: string; status: string; issueDate?: string; startDate?: string }>(
  record: T,
  filters: DashboardFilters,
) => {
  if (filters.segment !== 'All' && record.segment !== filters.segment) {
    return false
  }
  if (filters.region !== 'All' && 'region' in record && record.region !== filters.region) {
    return false
  }
  if (filters.plant !== 'All' && record.plantId !== filters.plant) {
    return false
  }
  if (filters.customer !== 'All' && record.customerId !== filters.customer) {
    return false
  }
  if (filters.productFamily !== 'All' && record.productFamilyId !== filters.productFamily) {
    return false
  }
  if (filters.program !== 'All' && record.programId !== filters.program) {
    return false
  }
  if (filters.severity !== 'All' && record.severity !== filters.severity) {
    return false
  }
  if (filters.status !== 'All' && record.status !== filters.status) {
    return false
  }

  const dateField = record.issueDate ?? record.startDate
  if (dateField) {
    return dateInRange(dateField, filters.dateFrom, filters.dateTo)
  }

  return true
}

export const filterInitiatives = (initiatives: Initiative[], filters: DashboardFilters) => {
  return initiatives.filter((initiative) => matchesFilter(initiative, filters))
}

export const filterDefects = (defects: DefectRecord[], filters: DashboardFilters) => {
  return defects.filter((defect) => matchesFilter(defect, filters))
}
