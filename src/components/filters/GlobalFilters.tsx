import type { DashboardFilters, Customer, Plant, ProductFamily, Program } from '../../types'

interface GlobalFiltersProps {
  filters: DashboardFilters
  plants: Plant[]
  customers: Customer[]
  products: ProductFamily[]
  programs: Program[]
  onChange: (filters: DashboardFilters) => void
}

const optionValues = <T extends string>(items: T[]) => ['All', ...items] as const

export default function GlobalFilters({ filters, plants, customers, products, programs, onChange }: GlobalFiltersProps) {
  return (
    <section className="filters-panel">
      <div className="filters-grid">
        <div className="filter-card" title="Filter by Seating or E-Systems division">
          <label>Segment</label>
          <select value={filters.segment} onChange={(event) => onChange({ ...filters, segment: event.target.value as DashboardFilters['segment'] })}>
            {optionValues(['All', 'Seating', 'E-Systems']).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by geographic region">
          <label>Region</label>
          <select value={filters.region} onChange={(event) => onChange({ ...filters, region: event.target.value as DashboardFilters['region'] })}>
            {optionValues(['All', 'North America', 'Europe', 'Asia', 'South America']).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by specific manufacturing plant">
          <label>Plant</label>
          <select value={filters.plant} onChange={(event) => onChange({ ...filters, plant: event.target.value })}>
            <option value="All">All</option>
            {plants.map((plant) => (
              <option key={plant.id} value={plant.id}>{plant.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by OEM customer">
          <label>Customer</label>
          <select value={filters.customer} onChange={(event) => onChange({ ...filters, customer: event.target.value })}>
            <option value="All">All</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by product type (e.g., seats, harnesses)">
          <label>Product Family</label>
          <select value={filters.productFamily} onChange={(event) => onChange({ ...filters, productFamily: event.target.value })}>
            <option value="All">All</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by specific OEM program or model">
          <label>Program</label>
          <select value={filters.program} onChange={(event) => onChange({ ...filters, program: event.target.value })}>
            <option value="All">All</option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>{program.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by problem severity level">
          <label>Severity</label>
          <select value={filters.severity} onChange={(event) => onChange({ ...filters, severity: event.target.value as DashboardFilters['severity'] })}>
            {optionValues(['All', 'Low', 'Moderate', 'High', 'Critical', 'Customer line stop', 'Safety / regulatory']).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-card" title="Filter by current status of the issue">
          <label>Status</label>
          <select value={filters.status} onChange={(event) => onChange({ ...filters, status: event.target.value as DashboardFilters['status'] })}>
            {optionValues(['All', 'Open', 'In containment', 'Root cause confirmed', 'Action in progress', 'Validation pending', 'Closed', 'Closed and standardized', 'Reopened']).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-card date-range-card" title="Filter issues by date range">
          <label>Date range</label>
          <div className="date-row">
            <input type="date" value={filters.dateFrom} onChange={(event) => onChange({ ...filters, dateFrom: event.target.value })} />
            <span>to</span>
            <input type="date" value={filters.dateTo} onChange={(event) => onChange({ ...filters, dateTo: event.target.value })} />
          </div>
        </div>
      </div>
    </section>
  )
}
