import { ArrowRight, BarChart3, CheckCircle2, Database, FileText, HelpCircle, LayoutDashboard, ShieldCheck, Sparkles, Square } from 'lucide-react'

type ViewId = 'overview' | 'pdca' | 'dmaic' | 'a3' | '8d' | 'compare' | 'recommend' | 'data' | 'help'

interface SidebarProps {
  views: Array<{ id: ViewId; label: string }>
  activeView: ViewId
  onSelect: (value: ViewId) => void
}

const tooltips: Record<ViewId, string> = {
  overview: 'Executive Overview - See high-level metrics and trends',
  pdca: 'PDCA - Plan-Do-Check-Act for continuous improvement',
  dmaic: 'DMAIC - Data-driven problem solving method',
  a3: 'A3 - Concise one-page problem-solving report',
  '8d': '8D - Customer-facing escalation response',
  compare: 'Compare different problem-solving methods',
  recommend: 'Get method recommendation based on your situation',
  data: 'Data Connections - Set up live data sources and real-time updates',
  help: 'Help - Get contextual help and guidance for using the dashboard',
}

const iconMap: Record<ViewId, typeof ArrowRight> = {
  overview: LayoutDashboard,
  pdca: Sparkles,
  dmaic: BarChart3,
  a3: FileText,
  '8d': ShieldCheck,
  compare: Square,
  recommend: CheckCircle2,
  data: Database,
  help: HelpCircle,
}

export default function Sidebar({ views, activeView, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar-panel">
      <div className="sidebar-brand">
        <div className="brand-mark">L</div>
        <div>
          <div className="brand-title">Lear Manufacturing</div>
          <div className="brand-subtitle">Problem-Solving Navigator</div>
        </div>
      </div>

      <div className="nav-list">
        {views.map((view) => {
          const Icon = iconMap[view.id] || ArrowRight
          return (
            <button
              key={view.id}
              type="button"
              className={view.id === activeView ? 'nav-item active' : 'nav-item'}
              onClick={() => onSelect(view.id)}
              title={tooltips[view.id]}
            >
              <Icon className="nav-icon" size={18} />
              <span>{view.label}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
