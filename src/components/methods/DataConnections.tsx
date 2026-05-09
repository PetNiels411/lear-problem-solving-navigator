import { AnimatedPageContent, StaggerContainer, StaggerItem } from '../motion/AnimatedContent'

export default function DataConnections() {
  return (
    <AnimatedPageContent>
      <div className="method-board">
        <div className="method-header">
          <div>
            <p className="eyebrow">Data connections</p>
            <h2>Transform Static Data into Live Real-Time Dashboards</h2>
            <p className="section-copy">
              Convert your dashboard from static reports to a dynamic, real-time monitoring system.
              Connect to live data sources and automate updates for continuous visibility.
            </p>
          </div>
        </div>

        <StaggerContainer delay={0.1}>
          <StaggerItem>
            <div className="chart-card">
              <div className="chart-header">
                <h3>🚀 Quick Start: Go Live in 5 Steps</h3>
              </div>
              <div className="space-y-4 p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Assess Your Current Data Sources</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Identify where your quality, production, and initiative data currently lives.
                      Common sources: MES systems, ERP databases, Excel trackers, API endpoints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Choose Connection Method</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Select the best connection type for your infrastructure: Direct database access,
                      REST APIs, scheduled file imports, or real-time streaming.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Configure Data Mapping</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Map your source data fields to dashboard metrics. Define data transformations,
                      aggregations, and refresh frequencies for optimal performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Set Up Monitoring & Alerts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Configure automated alerts for data connection failures, unusual values,
                      or metric thresholds. Ensure 99.9% uptime for critical dashboards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold">Train Users & Go Live</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Train your team on the new real-time capabilities. Gradually transition
                      from static reports to live dashboards for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="content-grid">
          <StaggerContainer delay={0.2}>
            <StaggerItem>
              <div className="chart-card">
                <div className="chart-header">
                  <h3>📊 Supported Data Sources</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl">🗃️</span>
                      Databases
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• SQL Server, Oracle, MySQL</li>
                      <li>• PostgreSQL, SQLite</li>
                      <li>• Direct table/query access</li>
                      <li>• Stored procedure execution</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl">🌐</span>
                      APIs & Web Services
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• RESTful APIs (JSON/XML)</li>
                      <li>• SOAP web services</li>
                      <li>• OAuth 2.0 authentication</li>
                      <li>• Rate limiting & retry logic</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl">📁</span>
                      Files & Spreadsheets
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Excel (.xlsx, .xls)</li>
                      <li>• CSV with custom delimiters</li>
                      <li>• JSON/JSONL files</li>
                      <li>• Scheduled file imports</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl">🏭</span>
                      Manufacturing Systems
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• MES (Manufacturing Execution)</li>
                      <li>• ERP (SAP, Oracle EBS)</li>
                      <li>• PLM systems</li>
                      <li>• Quality management software</li>
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="chart-card">
                <div className="chart-header">
                  <h3>⚡ Real-Time Data Architecture</h3>
                </div>
                <div className="p-4">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Data Flow Architecture</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <strong>Source Systems</strong> → Data extraction & transformation
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <strong>Real-Time Pipeline</strong> → Streaming data processing
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <strong>Dashboard Engine</strong> → Live metric calculations
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <strong>User Interface</strong> → Real-time visualization updates
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">&lt;15s</div>
                      <div className="text-sm">Critical metric updates</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">&lt;5min</div>
                      <div className="text-sm">Production data refresh</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                      <div className="text-sm">System uptime target</div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <StaggerContainer delay={0.3}>
          <StaggerItem>
            <div className="chart-card">
              <div className="chart-header">
                <h3>🛡️ Security & Compliance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <div>
                  <h4 className="font-semibold mb-3">Data Protection</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      End-to-end encryption for data in transit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Database-level encryption at rest
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Role-based access controls (RBAC)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Audit logging for all data access
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Compliance Standards</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      GDPR & CCPA data protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      ISO 27001 information security
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      SOC 2 Type II compliance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      IATF 16949 automotive standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer delay={0.4}>
          <StaggerItem>
            <div className="chart-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="chart-header">
                <h3>🚀 Ready to Go Live?</h3>
              </div>
              <div className="p-4 text-center">
                <p className="mb-4">
                  Contact your IT team or data engineering group to begin the implementation process.
                  Our technical documentation provides detailed setup guides for each data source type.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    📋 Download Setup Guide
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    📞 Schedule Technical Review
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    🧪 Request Proof of Concept
                  </button>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedPageContent>
  )
}