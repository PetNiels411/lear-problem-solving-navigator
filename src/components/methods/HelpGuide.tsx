import React from 'react';
import { HelpCircle, BookOpen, Users, TrendingUp, BarChart3, PieChart, Target, CheckCircle, AlertTriangle, Clock, Factory, Wrench, Shield } from 'lucide-react';

const HelpGuide: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <HelpCircle className="mx-auto h-12 w-12 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lear Manufacturing Problem-Solving Navigator Guide</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          A beginner-friendly guide to understanding manufacturing issues, problem-solving methods, and navigating this dashboard.
        </p>
      </div>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BookOpen className="h-6 w-6 mr-2" />
          Getting Started
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This dashboard helps manufacturing teams at Lear Corporation identify and solve problems in their Seating and E-Systems operations.
          Use the sidebar on the left to switch between different views. Each view shows different aspects of problems and solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h3 className="font-medium text-blue-900 dark:text-blue-100">Navigation</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">Click the icons in the left sidebar to switch views. The active view is highlighted.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h3 className="font-medium text-green-900 dark:text-green-100">Filters</h3>
            <p className="text-sm text-green-800 dark:text-green-200">Use the filter panel to focus on specific plants, regions, or types of issues.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Factory className="h-6 w-6 mr-2" />
          Lear Manufacturing Basics
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Seating Division</h3>
            <p className="text-gray-700 dark:text-gray-300">Makes car seats and related components. Common issues include squeaks, comfort problems, and assembly defects.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">E-Systems Division</h3>
            <p className="text-gray-700 dark:text-gray-300">Produces electrical systems like wiring harnesses and connectors. Issues often involve electrical failures or connection problems.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">JIT (Just-In-Time)</h3>
            <p className="text-gray-700 dark:text-gray-300">A manufacturing approach where parts arrive exactly when needed, reducing inventory but requiring perfect quality and timing.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">IATF 16949</h3>
            <p className="text-gray-700 dark:text-gray-300">An international quality standard for automotive suppliers. Ensures consistent, high-quality manufacturing processes.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2" />
          Key Performance Indicators (KPIs)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          KPIs are measurable values that show how well the manufacturing process is performing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Open Issues</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Number of problems currently being worked on.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Closed Issues</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Number of problems that have been resolved.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Average Resolution Time</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">How long it takes to fix problems, on average.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Target className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Quality Score</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overall measure of product quality and defect rates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <BarChart3 className="h-6 w-6 mr-2" />
          Charts and Visualizations
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Trend Charts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Show how issues change over time. Upward lines mean more problems; downward means improvement.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Bar Charts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Compare quantities between different categories, like problems by plant or region.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              Pareto Charts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Shows the most common causes of problems. The bars show frequency, the line shows cumulative percentage. Focus on the left side for biggest impact.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Wrench className="h-6 w-6 mr-2" />
          Problem-Solving Methods
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Different structured approaches to solve manufacturing problems. Choose based on the situation.
        </p>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-900 dark:text-white">PDCA (Plan-Do-Check-Act)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A simple cycle for continuous improvement:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Plan:</strong> Identify the problem and plan a solution</li>
              <li><strong>Do:</strong> Implement the solution on a small scale</li>
              <li><strong>Check:</strong> Measure the results</li>
              <li><strong>Act:</strong> If successful, implement fully; if not, start over</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Best for: Simple problems, quick improvements</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-gray-900 dark:text-white">DMAIC (Define-Measure-Analyze-Improve-Control)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A data-driven approach for complex problems:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Define:</strong> Clearly state the problem</li>
              <li><strong>Measure:</strong> Collect data about the current situation</li>
              <li><strong>Analyze:</strong> Find root causes using data</li>
              <li><strong>Improve:</strong> Develop and test solutions</li>
              <li><strong>Control:</strong> Monitor to prevent recurrence</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Best for: Chronic problems needing data analysis</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-medium text-gray-900 dark:text-white">A3</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A concise, one-page problem-solving report:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>Clarify:</strong> Understand the problem</li>
              <li><strong>Break Down:</strong> Analyze current situation</li>
              <li><strong>Set Target:</strong> Define success criteria</li>
              <li><strong>Analyze:</strong> Find root causes</li>
              <li><strong>Develop:</strong> Propose countermeasures</li>
              <li><strong>Evaluate:</strong> Check effectiveness</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Best for: Structured communication and documentation</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-medium text-gray-900 dark:text-white">8D (8 Disciplines)</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">A team-based approach for serious issues:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li><strong>D1:</strong> Form a team</li>
              <li><strong>D2:</strong> Describe the problem</li>
              <li><strong>D3:</strong> Implement containment</li>
              <li><strong>D4:</strong> Find root cause</li>
              <li><strong>D5:</strong> Choose permanent solution</li>
              <li><strong>D6:</strong> Implement solution</li>
              <li><strong>D7:</strong> Prevent recurrence</li>
              <li><strong>D8:</strong> Congratulate the team</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Best for: Customer complaints and major quality issues</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Users className="h-6 w-6 mr-2" />
          Using the Dashboard
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Executive Overview</h3>
            <p className="text-gray-700 dark:text-gray-300">High-level summary of all issues. Start here to get the big picture.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Method Boards</h3>
            <p className="text-gray-700 dark:text-gray-300">Detailed views for each problem-solving method. See active projects and their progress.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Comparison View</h3>
            <p className="text-gray-700 dark:text-gray-300">Compare different problem-solving methods to choose the right one for your situation.</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Method Recommender</h3>
            <p className="text-gray-700 dark:text-gray-300">Answer questions about your problem to get a recommendation on which method to use.</p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Shield className="h-6 w-6 mr-2" />
          Common Terms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Root Cause</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">The underlying reason why a problem occurs, not just the symptoms.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Containment</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Temporary actions to prevent a problem from affecting customers while finding a permanent fix.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Countermeasure</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">A specific action taken to solve a problem or prevent it from happening again.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Kaizen</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Japanese for "continuous improvement" - small, ongoing changes to make processes better.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">OEM</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Original Equipment Manufacturer - the car companies that buy Lear's products.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">PPM</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Parts Per Million - a quality measure showing how many defective parts per million produced.</p>
          </div>
        </div>
      </section>

      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        Need more help? Contact your local quality team or refer to Lear's quality manual.
      </div>
    </div>
  );
};

export default HelpGuide;