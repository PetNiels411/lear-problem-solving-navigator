import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ViewId = 'overview' | 'pdca' | 'dmaic' | 'a3' | '8d' | 'compare' | 'recommend' | 'data'
type HelpSection = ViewId | 'general'

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
  section: HelpSection;
}

const helpContent = {
  general: {
    title: 'Dashboard Help & Data Connections',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">🎯 Welcome to Lear Manufacturing Problem-Solving Navigator</h4>
          <p className="mb-4">This interactive dashboard transforms complex manufacturing data into actionable insights. Whether you're a plant manager, quality engineer, or executive, this tool helps you:</p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-4">
            <li><strong>Monitor real-time performance</strong> across Seating and E-Systems segments</li>
            <li><strong>Identify problem patterns</strong> using statistical analysis and trend charts</li>
            <li><strong>Choose the right problem-solving method</strong> (PDCA, DMAIC, A3, 8D) for each situation</li>
            <li><strong>Track initiative progress</strong> from identification to resolution</li>
            <li><strong>Connect to live data sources</strong> for automated updates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🧭 Navigation Guide</h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <strong className="text-blue-800 dark:text-blue-200">Left Sidebar:</strong> Switch between Executive Overview, PDCA Board, DMAIC Board, A3 Canvas, 8D Report, Method Comparison, and Method Recommender
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <strong className="text-green-800 dark:text-green-200">Top Filters:</strong> Narrow down data by Segment (Seating/E-Systems), Region, Plant, Date Range, and Priority Level
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <strong className="text-purple-800 dark:text-purple-200">Help Button:</strong> Click anytime for context-specific guidance about what you're viewing
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <strong className="text-orange-800 dark:text-orange-200">Theme Toggle:</strong> Switch between light and dark modes for optimal viewing
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📊 Understanding the Visual Widgets</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌡️</span>
              <div>
                <strong>Temperature Gauges:</strong> Show "heat" levels - red means critical attention needed, green means performing well
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚗</span>
              <div>
                <strong>Speedometer Gauges:</strong> Performance indicators with color-coded zones (green=good, yellow=warning, red=critical)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚦</span>
              <div>
                <strong>Traffic Lights:</strong> Simple go/stop indicators for supplier status, containment effectiveness, etc.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">⭕</span>
              <div>
                <strong>Progress Rings:</strong> Circular progress indicators showing completion percentages or achievement levels
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🔗 Connecting to Live Data Sources</h4>
          <p className="mb-3">Transform this dashboard into a real-time monitoring system by connecting to your data sources:</p>

          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2 text-gray-900 dark:text-white">📋 Supported Data Formats</h5>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>CSV Files:</strong> Standard comma-separated values with headers</li>
                <li><strong>Excel (.xlsx):</strong> Multi-sheet workbooks with formatted data</li>
                <li><strong>JSON:</strong> Structured API responses or exported data</li>
                <li><strong>SQL Databases:</strong> Direct connections to Oracle, SQL Server, MySQL</li>
                <li><strong>API Endpoints:</strong> RESTful APIs with authentication</li>
                <li><strong>MES Systems:</strong> Manufacturing Execution System integrations</li>
                <li><strong>ERP Systems:</strong> SAP, Oracle EBS, Microsoft Dynamics</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2 text-gray-900 dark:text-white">⚙️ Data Connection Setup</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>1. Quality Data (Defects, PPM, Scrap):</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Source: MES system or quality database</li>
                    <li>Frequency: Real-time or hourly updates</li>
                    <li>Fields: defect_id, timestamp, category, severity, cost, plant_id</li>
                  </ul>
                </div>
                <div>
                  <strong>2. Production Metrics (FTQ, Cycle Time):</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Source: Shop floor control systems</li>
                    <li>Frequency: Every 15-30 minutes</li>
                    <li>Fields: line_id, part_number, quantity, defects, timestamp</li>
                  </ul>
                </div>
                <div>
                  <strong>3. Initiative Tracking (PDCA, DMAIC, etc.):</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Source: Project management system or Excel tracker</li>
                    <li>Frequency: Daily updates</li>
                    <li>Fields: initiative_id, method, status, owner, due_date, progress</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2 text-gray-900 dark:text-white">🚀 Getting Started with Live Data</h5>
              <ol className="list-decimal list-inside text-sm space-y-2">
                <li><strong>Assess your current systems:</strong> Identify where quality, production, and initiative data lives</li>
                <li><strong>Define data refresh frequency:</strong> Critical metrics every 15 minutes, daily metrics once per day</li>
                <li><strong>Set up automated exports:</strong> Configure your source systems to push data to a central location</li>
                <li><strong>Configure API connections:</strong> Use secure authentication (OAuth, API keys) for live connections</li>
                <li><strong>Test data flows:</strong> Start with sample data, then switch to live feeds gradually</li>
                <li><strong>Set up monitoring:</strong> Create alerts for data connection failures or unusual values</li>
                <li><strong>Train users:</strong> Show teams how to interpret the new real-time information</li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
              <h5 className="font-medium mb-2 text-yellow-800 dark:text-yellow-200">⚠️ Data Security & Privacy</h5>
              <ul className="list-disc list-inside text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>Never store sensitive data (customer PII, financial details) in the dashboard</li>
                <li>Use encrypted connections (HTTPS, SSL) for all data transfers</li>
                <li>Implement role-based access controls for different user types</li>
                <li>Regularly audit data access logs and connection security</li>
                <li>Comply with GDPR, CCPA, and other data protection regulations</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🎓 Learning Resources</h4>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">📖 Six Sigma Green Belt Training Guide</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">📊 Statistical Process Control Handbook</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">🔧 Root Cause Analysis Techniques</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">📈 Lean Manufacturing Principles</a>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">🎯 Problem-Solving Method Selection Guide</a>
          </div>
        </div>
      </div>
    ),
  },
  overview: {
    title: 'Executive Overview - Your Manufacturing Control Center',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">📈 Understanding Your Dashboard</h4>
          <p className="mb-4">The Executive Overview is your mission control for manufacturing performance. It combines real-time data with visual indicators to give you immediate insights into plant health and problem-solving progress.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🎨 Visual Performance Indicators</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌡️</span>
                <strong className="text-red-800 dark:text-red-200">Quality Temperature Gauge</strong>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                Shows overall quality "heat" level. Red indicates critical issues requiring immediate attention.
                Green means quality targets are being met. Use this to prioritize your focus areas.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🚗</span>
                <strong className="text-blue-800 dark:text-blue-200">On-Time Delivery Speedometer</strong>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Performance indicator with three zones: Green (90-100%), Yellow (80-89%), Red (&lt;80%).
                The needle shows current delivery performance against customer requirements.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🚦</span>
                <strong className="text-yellow-800 dark:text-yellow-200">Supplier Status Traffic Light</strong>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Simple go/stop indicator for supplier performance. Green = all suppliers meeting requirements.
                Yellow = some suppliers at risk. Red = critical supplier issues requiring immediate action.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⭕</span>
                <strong className="text-green-800 dark:text-green-200">First-Time Quality Ring</strong>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Circular progress indicator showing the percentage of products that pass quality inspection on the first attempt.
                Target is typically 95% or higher for world-class performance.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📊 Key Performance Metrics Explained</h4>
          <div className="space-y-3 text-sm">
            <div className="border-l-4 border-blue-500 pl-4">
              <strong>Open Initiatives:</strong> Number of active problem-solving projects. High numbers may indicate systemic issues or effective problem identification.
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <strong>Customer Complaints:</strong> Critical issues reported by customers. These require immediate 8D responses and containment actions.
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <strong>Internal Defect PPM:</strong> Parts per million defective internally. Target is typically &lt;1000 PPM for automotive industry.
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong>Supplier Defect PPM:</strong> Quality performance of supplied components. Higher than internal PPM indicates supplier quality issues.
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <strong>Scrap Cost:</strong> Financial impact of defective products that cannot be repaired. Use this to prioritize cost-saving initiatives.
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <strong>Rework Hours:</strong> Labor hours spent fixing defects. High rework indicates process inefficiencies.
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📈 Chart Types and Their Purpose</h4>
          <div className="space-y-3 text-sm">
            <div>
              <strong className="text-blue-600">Trend Area Charts:</strong> Show how quality metrics change over time.
              Look for upward/downward trends, seasonal patterns, or step changes after improvements.
            </div>
            <div>
              <strong className="text-green-600">Pareto Charts:</strong> Identify the "vital few" problems causing most issues.
              The principle is 80% of problems are caused by 20% of root causes. Focus improvement efforts here.
            </div>
            <div>
              <strong className="text-purple-600">Stacked Bar Charts:</strong> Compare performance between Seating and E-Systems segments.
              Helps identify if problems are segment-specific or company-wide.
            </div>
            <div>
              <strong className="text-orange-600">Top Issues Lists:</strong> Current highest-priority problems ranked by impact.
              Each issue shows category, severity, status, and affected segment.
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">💡 Pro Tips for Executives</h4>
          <ul className="list-disc list-inside text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>Check the dashboard first thing in the morning to understand overnight issues</li>
            <li>Look for "hot spots" - areas where multiple indicators are in the red zone</li>
            <li>Use the trend charts to validate if recent changes improved performance</li>
            <li>Focus on leading indicators (supplier PPM) to prevent future customer complaints</li>
            <li>Celebrate green indicators and investigate red ones immediately</li>
          </ul>
        </div>
      </div>
    ),
  },
  pdca: {
    title: 'PDCA - Continuous Improvement',
    content: (
      <div className="space-y-4">
        <p><strong>Plan-Do-Check-Act</strong> is a simple cycle for everyday improvements.</p>
        <div>
          <h4 className="font-medium mb-2">The Four Phases:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Plan:</strong> Identify the improvement target</li>
            <li><strong>Do:</strong> Test the solution on a small scale</li>
            <li><strong>Check:</strong> Measure the results</li>
            <li><strong>Act:</strong> Standardize if successful or repeat</li>
          </ul>
        </div>
        <p className="text-sm">Best for: Quick improvements, daily line-side problem solving, kaizen events</p>
      </div>
    ),
  },
  dmaic: {
    title: 'DMAIC - Data-Driven Problem Solving',
    content: (
      <div className="space-y-4">
        <p><strong>Define-Measure-Analyze-Improve-Control</strong> is a structured approach using data.</p>
        <div>
          <h4 className="font-medium mb-2">The Five Phases:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Define:</strong> Clearly state the problem</li>
            <li><strong>Measure:</strong> Collect baseline data</li>
            <li><strong>Analyze:</strong> Find root causes with data</li>
            <li><strong>Improve:</strong> Develop and pilot solutions</li>
            <li><strong>Control:</strong> Maintain improvements long-term</li>
          </ul>
        </div>
        <p className="text-sm">Best for: Chronic problems, high-impact issues, where data analysis is needed</p>
      </div>
    ),
  },
  a3: {
    title: 'A3 - Concise Problem Solving',
    content: (
      <div className="space-y-4">
        <p>The <strong>A3</strong> method documents problem solving on a single page.</p>
        <div>
          <h4 className="font-medium mb-2">Key Sections:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Clarify:</strong> Define the problem clearly</li>
            <li><strong>Current State:</strong> Analyze what exists today</li>
            <li><strong>Target State:</strong> Define what success looks like</li>
            <li><strong>Root Cause:</strong> Identify underlying issues</li>
            <li><strong>Countermeasures:</strong> Propose solutions</li>
            <li><strong>Follow-up:</strong> Track progress</li>
          </ul>
        </div>
        <p className="text-sm">Best for: Cross-functional communication, launch readiness, structured documentation</p>
      </div>
    ),
  },
  '8d': {
    title: '8D - Customer Escalation Response',
    content: (
      <div className="space-y-4">
        <p>The <strong>8 Disciplines</strong> method addresses serious customer complaints.</p>
        <div>
          <h4 className="font-medium mb-2">The Eight Steps:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>D1:</strong> Form a cross-functional team</li>
            <li><strong>D2:</strong> Describe the problem clearly</li>
            <li><strong>D3:</strong> Implement immediate containment</li>
            <li><strong>D4:</strong> Find the root cause</li>
            <li><strong>D5:</strong> Choose permanent solution</li>
            <li><strong>D6:</strong> Implement and validate</li>
            <li><strong>D7:</strong> Prevent recurrence with controls</li>
            <li><strong>D8:</strong> Recognize team effort</li>
          </ul>
        </div>
        <p className="text-sm">Best for: OEM complaints, warranty issues, customer escalations</p>
      </div>
    ),
  },
  compare: {
    title: 'Method Comparison',
    content: (
      <div className="space-y-4">
        <p>Choose the right problem-solving method for your situation.</p>
        <div>
          <h4 className="font-medium mb-2">Quick Decision Guide:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>Simple daily improvement?</strong> → Use PDCA</li>
            <li><strong>Complex issue with lots of data?</strong> → Use DMAIC</li>
            <li><strong>Need a clear one-page narrative?</strong> → Use A3</li>
            <li><strong>Customer complaint or warranty issue?</strong> → Use 8D</li>
          </ul>
        </div>
        <p className="text-sm">The comparison table shows how each method differs in speed, complexity, data needs, and documentation.</p>
      </div>
    ),
  },
  recommend: {
    title: 'Method Recommender',
    content: (
      <div className="space-y-4">
        <p>Not sure which method to use? Answer the questions to get a recommendation.</p>
        <div>
          <h4 className="font-medium mb-2">What to Consider:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Is there a customer complaint?</li>
            <li>Is it urgent or causing a line stop?</li>
            <li>Do you have data about the problem?</li>
            <li>Is it a local improvement or complex issue?</li>
            <li>Do you need containment immediately?</li>
          </ul>
        </div>
        <p className="text-sm">Answer honestly and the system will suggest the best method for your situation.</p>
      </div>
    ),
  },
  data: {
    title: 'Data Connections - Live Dashboard Setup',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">🔌 Connecting Your Dashboard to Live Data</h4>
          <p className="mb-4">Transform your static dashboard into a real-time monitoring powerhouse. This guide walks you through connecting to live data sources for automated updates and continuous visibility.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">📋 Prerequisites Checklist</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Identify your data sources (MES, ERP, databases, APIs)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Ensure network connectivity to data sources</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Obtain necessary credentials and access permissions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Define data refresh frequencies and business requirements</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">🔧 Configuration Steps</h4>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2">Step 1: Data Source Assessment</h5>
              <p className="text-sm mb-2">Evaluate your current systems:</p>
              <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                <li>What systems contain quality data? (MES, QMS, ERP)</li>
                <li>What format is the data in? (Database tables, APIs, files)</li>
                <li>How frequently is the data updated?</li>
                <li>Who owns/manages these data sources?</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2">Step 2: Connection Method Selection</h5>
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <strong>Database Direct:</strong> Best for SQL Server, Oracle, MySQL with stable schemas
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <strong>REST APIs:</strong> Ideal for cloud services, modern web applications
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                  <strong>Scheduled Files:</strong> Good for legacy systems, batch processing
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
              <h5 className="font-medium mb-2">Step 3: Field Mapping</h5>
              <p className="text-sm mb-2">Map source fields to dashboard metrics:</p>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm font-mono">
                defect_id → Issue ID<br/>
                timestamp → Date/Time<br/>
                category → Problem Type<br/>
                severity → Priority Level<br/>
                scrap_cost → Financial Impact
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">⚡ Performance Optimization</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium mb-2">Refresh Frequencies</h5>
              <ul className="space-y-1">
                <li><strong>Critical metrics:</strong> Every 15 seconds</li>
                <li><strong>Production data:</strong> Every 5 minutes</li>
                <li><strong>Daily summaries:</strong> Hourly updates</li>
                <li><strong>Historical trends:</strong> Daily batch</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Data Volume Management</h5>
              <ul className="space-y-1">
                <li>Implement data pagination for large datasets</li>
                <li>Use incremental updates vs. full refreshes</li>
                <li>Cache frequently accessed data</li>
                <li>Compress data in transit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🚨 Important Considerations</h4>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li><strong>Security:</strong> Never store credentials in dashboard configuration</li>
            <li><strong>Performance:</strong> Test connection speeds before going live</li>
            <li><strong>Reliability:</strong> Implement retry logic and failure notifications</li>
            <li><strong>Compliance:</strong> Ensure data handling meets GDPR/CCPA requirements</li>
            <li><strong>Monitoring:</strong> Set up alerts for connection failures or data anomalies</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">🎯 Success Metrics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">99.9%</div>
              <div>Uptime Target</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">&lt;30s</div>
              <div>Data Latency</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">&lt;5min</div>
              <div>Issue Detection</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">24/7</div>
              <div>Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

const HelpPanel: React.FC<HelpPanelProps> = ({ isOpen, onClose, section }) => {
  const content = helpContent[section];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />
          
          {/* Side Panel */}
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-2xl z-50 border-l border-gray-200 dark:border-gray-700 overflow-y-auto"
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{content.title}</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Close help panel"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-gray-700 dark:text-gray-300">
              {content.content}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HelpPanel;
