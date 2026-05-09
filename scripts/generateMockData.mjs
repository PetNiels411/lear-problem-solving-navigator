import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const output = (name) => writeFileSync(join(root, 'data', name), JSON.stringify(data[name], null, 2), 'utf8')

const segments = ['Seating', 'E-Systems']
const regions = ['North America', 'Europe', 'Asia', 'South America']
const severities = ['Low', 'Moderate', 'High', 'Critical', 'Customer line stop', 'Safety / regulatory']
const statuses = ['Open', 'In containment', 'Root cause confirmed', 'Action in progress', 'Validation pending', 'Closed', 'Closed and standardized', 'Reopened']
const methods = ['PDCA', 'DMAIC', 'A3', '8D']
const productFamilies = [
  'Complete seats', 'Seat structures', 'Recliners', 'Tracks', 'Latches', 'Headrests', 'Foam pads', 'Trim covers',
  'Leather surfaces', 'Textile surfaces', 'Seat heater mats', 'Lumbar systems', 'Wire harnesses', 'Connectors', 'Terminals',
  'Junction components', 'Battery disconnect units', 'Electronic control modules',
]
const processes = ['Cutting', 'Sewing', 'Foam molding', 'Trim assembly', 'Stamping', 'Recliner assembly', 'Final assembly', 'Harness crimp', 'Connector insertion', 'Continuity test', 'HV assembly', 'Potting', 'Electrical validation', 'JIT sequencing']
const rootCauses = ['Process parameter drift', 'Standard work not followed', 'Tool wear', 'Fixture misalignment', 'Supplier material defect', 'Incoming inspection gap', 'Inadequate training', 'Incorrect setup/changeover', 'Preventive maintenance missed', 'Design/tolerance interaction', 'Test system calibration issue', 'Error-proofing failure', 'Planning / sequencing logic issue']
const customers = ['Continental Auto', 'Global Mobility', 'Pacific OEM', 'EuroMotors', 'Jade Automotive', 'Summit Vehicles', 'NexGen Autos', 'United Wheels']
const suppliers = ['Precision Wire Systems', 'Global Connector Systems', 'Comfort Trim Solutions', 'Advanced Foam Works', 'High-Voltage Assemblies', 'Dynamic Fasteners', 'Torque Components', 'Sequence Logistics', 'Safety Sensor Works', 'Thermal Comfort Technologies', 'Seat Frame Dynamics', 'Junction Systems', 'Premium Leather Supply', 'Sustainability Materials', 'Integrated Harness Partners', 'Motion Control Devices', 'Assembly Line Systems', 'Quality Audit Services', 'Flex Cable Group', 'Battery Interface Solutions']
const programs = ['NextGen EV Seat Platform', 'Global Sedan Seating', 'Luxury SUV Comfort', 'EV Harness Architecture', 'Battery Disconnect Program', 'Premium Seating Launch', 'Commercial Van Integration', 'Autonomous Mobility UX', 'High-Voltage Distribution', 'North America JIT Program']
const plants = [
  { name: 'Southfield Seating Plant', region: 'North America', country: 'USA', segment: 'Seating', facilityType: 'Final seat assembly' },
  { name: 'Mexico Seat Assembly', region: 'North America', country: 'Mexico', segment: 'Seating', facilityType: 'Seat assembly and trim' },
  { name: 'Poland Components Plant', region: 'Europe', country: 'Poland', segment: 'Seating', facilityType: 'Seat component machining' },
  { name: 'Morocco Harness Plant', region: 'Europe', country: 'Morocco', segment: 'E-Systems', facilityType: 'Wire harness assembly' },
  { name: 'Shanghai Seating JV', region: 'Asia', country: 'China', segment: 'Seating', facilityType: 'Comfort systems assembly' },
  { name: 'Germany E-Systems Plant', region: 'Europe', country: 'Germany', segment: 'E-Systems', facilityType: 'Connector and terminal production' },
  { name: 'Serbia Harness Plant', region: 'Europe', country: 'Serbia', segment: 'E-Systems', facilityType: 'High-voltage harness assembly' },
  { name: 'Romania Electronics Plant', region: 'Europe', country: 'Romania', segment: 'E-Systems', facilityType: 'ECU and distribution assembly' },
  { name: 'India Seating Plant', region: 'Asia', country: 'India', segment: 'Seating', facilityType: 'Trim and foam assembly' },
  { name: 'Brazil JIT Center', region: 'South America', country: 'Brazil', segment: 'E-Systems', facilityType: 'Sequencing and export logistics' },
]

const data = {}

data['plants.json'] = plants.map((plant, index) => ({
  id: `plant-${index + 1}`,
  name: plant.name,
  region: plant.region,
  country: plant.country,
  segment: plant.segment,
  facilityType: plant.facilityType,
  oee: Number((78 + index * 1.2).toFixed(1)),
  ftq: Number((90 + index * 0.5).toFixed(1)),
  jitAccuracy: Number((92 + index * 0.6).toFixed(1)),
}))

data['customers.json'] = customers.map((name, index) => ({
  id: `customer-${index + 1}`,
  name,
  tier: index < 4 ? 'OEM' : 'Tier 1',
  region: regions[index % regions.length],
}))

data['suppliers.json'] = suppliers.map((name, index) => ({
  id: `supplier-${index + 1}`,
  name,
  productFocus: index % 2 === 0 ? 'Electrical' : 'Seating materials',
  riskRating: index % 3 === 0 ? 'High' : index % 3 === 1 ? 'Medium' : 'Low',
}))

data['programs.json'] = programs.map((name, index) => ({
  id: `program-${index + 1}`,
  name,
  platform: `Platform ${index + 1}`,
  customerId: `customer-${(index % customers.length) + 1}`,
  segment: index % 2 === 0 ? 'Seating' : 'E-Systems',
  launchPhase: index % 4 === 0 ? 'Launch' : index % 4 === 1 ? 'Ramp' : index % 4 === 2 ? 'Sustain' : 'NPI',
}))

data['products.json'] = productFamilies.map((name, index) => ({
  id: `product-${index + 1}`,
  name,
  segment: index < 11 ? 'Seating' : 'E-Systems',
  processFamily: processes[index % processes.length],
}))

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]
const mkDate = (year, month, day) => `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

const initiativeTitles = [
  'Reduce seat trim damage', 'Improve foam-to-trim ergonomics', 'Reduce harness picking errors', 'Increase JIT sequence accuracy',
  'Cut connector crimp line changeover time', 'Stabilize heater mat test yield', 'Raise final seat FTQ', 'Contain supplier material variation',
  'Standardize layered process audits', 'Improve station balance on harness line', 'Reduce recliner torque drift', 'Optimize packaging damage handling',
]

data['initiatives.json'] = Array.from({ length: 72 }, (_, index) => {
  const title = initiativeTitles[index % initiativeTitles.length]
  const segment = index % 2 === 0 ? 'Seating' : 'E-Systems'
  return {
    id: `initiative-${index + 1}`,
    title: `${title} (${segments[index % segments.length]})`,
    segment,
    plantId: `plant-${(index % plants.length) + 1}`,
    programId: `program-${(index % programs.length) + 1}`,
    productFamilyId: `product-${(index % productFamilies.length) + 1}`,
    method: methods[index % methods.length],
    status: statuses[index % statuses.length],
    severity: severities[index % severities.length],
    owner: ['Quality lead', 'Plant manager', 'Launch engineer', 'Supplier quality'][index % 4],
    startDate: mkDate(2024, (index % 12) + 1, ((index * 3) % 28) + 1),
    targetDate: mkDate(2024, ((index + 3) % 12) + 1, ((index * 5) % 28) + 1),
    closeDate: index % 5 === 0 ? mkDate(2025, ((index + 5) % 12) + 1, ((index * 7) % 28) + 1) : undefined,
    progress: [30, 45, 60, 75, 90][index % 5],
    impactSummary: 'Improves launch readiness and reduces warranty exposure.',
    section: ['Plan', 'Measure', 'Analyze', 'Do', 'Act'][index % 5],
    category: getRandom(['Process waste', 'Quality escape', 'Supplier defect', 'Assembly error', 'Launch risk', 'Safety check']),
  }
})

const defectCategories = ['Dimensional out of spec', 'Cosmetic defect', 'Wrong part / wrong sequence', 'Electrical continuity failure', 'Crimp pull-test failure', 'Terminal back-out', 'Connector mismatch', 'Seat heater open circuit', 'Lumbar function failure', 'Torque out of spec', 'Squeak/rattle', 'Supplier material variation', 'Labeling error', 'Packaging damage', 'Software/configuration mismatch']

data['defects.json'] = Array.from({ length: 260 }, (_, index) => {
  const segment = index % 2 === 0 ? 'Seating' : 'E-Systems'
  return {
    id: `defect-${index + 1}`,
    title: `${getRandom(defectCategories)} in ${segment} line`,
    segment,
    plantId: `plant-${(index % plants.length) + 1}`,
    programId: `program-${(index % programs.length) + 1}`,
    productFamilyId: `product-${(index % productFamilies.length) + 1}`,
    customerId: `customer-${(index % customers.length) + 1}`,
    supplierId: `supplier-${(index % suppliers.length) + 1}`,
    category: defectCategories[index % defectCategories.length],
    rootCause: getRandom(rootCauses),
    status: statuses[index % statuses.length],
    severity: severities[index % severities.length],
    containment: index % 4 === 0 ? 'Plant / customer hold' : 'Plant hold',
    issueDate: mkDate(2024, (index % 12) + 1, ((index * 2) % 28) + 1),
    resolutionDate: index % 3 === 0 ? mkDate(2025, ((index + 2) % 12) + 1, ((index * 4) % 28) + 1) : undefined,
    scrapCost: Math.round(1500 + Math.random() * 8500),
    reworkHours: Math.round(6 + Math.random() * 22),
    ppm: Math.round(80 + Math.random() * 440),
    recurrenceRate: Number((Math.random() * 12).toFixed(1)),
  }
})

const baseMonths = ['2024-06', '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05']

data['metrics-timeseries.json'] = {
  points: baseMonths.map((month, index) => ({
    month,
    opened: 38 + (index % 5) * 12 + Math.round(Math.random() * 8),
    closed: 22 + (index % 4) * 10 + Math.round(Math.random() * 6),
    seatingPPM: 1200 + index * 12 + Math.round(Math.random() * 40),
    eSystemsPPM: 900 + index * 20 + Math.round(Math.random() * 35),
    complaints: 6 + (index % 3) * 2,
    scrapCost: 42000 + index * 800 + Math.round(Math.random() * 4200),
    reworkHours: 900 + index * 12 + Math.round(Math.random() * 60),
  })),
}

for (const name of ['plants.json', 'customers.json', 'suppliers.json', 'programs.json', 'products.json', 'initiatives.json', 'defects.json', 'metrics-timeseries.json']) {
  output(name)
}

console.log('Mock data generated in data/ folder')
