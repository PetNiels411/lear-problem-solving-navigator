import plants from '../data/plants.json'
import customers from '../data/customers.json'
import suppliers from '../data/suppliers.json'
import programs from '../data/programs.json'
import products from '../data/products.json'
import initiatives from '../data/initiatives.json'
import defects from '../data/defects.json'
import metricsTimeseries from '../data/metrics-timeseries.json'

import type {
  Customer,
  DefectRecord,
  Initiative,
  MetricsTimeseries,
  Plant,
  ProductFamily,
  Program,
  Supplier,
} from './types'

export const dataProvider = {
  getPlants: (): Plant[] => plants as Plant[],
  getCustomers: (): Customer[] => customers as Customer[],
  getSuppliers: (): Supplier[] => suppliers as Supplier[],
  getPrograms: (): Program[] => programs as Program[],
  getProducts: (): ProductFamily[] => products as ProductFamily[],
  getInitiatives: (): Initiative[] => initiatives as Initiative[],
  getDefects: (): DefectRecord[] => defects as DefectRecord[],
  getMetrics: (): MetricsTimeseries => metricsTimeseries as MetricsTimeseries,
  getAllData: () => ({
    plants: plants as Plant[],
    customers: customers as Customer[],
    suppliers: suppliers as Supplier[],
    programs: programs as Program[],
    products: products as ProductFamily[],
    initiatives: initiatives as Initiative[],
    defects: defects as DefectRecord[],
    metrics: metricsTimeseries as MetricsTimeseries,
  }),
}
