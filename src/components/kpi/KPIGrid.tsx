interface KPIGridProps {
  items: Array<{ title: string; value: string; detail?: string; badge?: string }>
}

export default function KPIGrid({ items }: KPIGridProps) {
  return (
    <div className="kpi-grid">
      {items.map((item) => (
        <div key={item.title} className="kpi-card" title={`${item.title}: ${item.detail || 'Key performance metric'}`}>
          <div className="kpi-top">
            <span className="kpi-title">{item.title}</span>
            {item.badge ? <span className="kpi-badge">{item.badge}</span> : null}
          </div>
          <div className="kpi-value">{item.value}</div>
          {item.detail ? <div className="kpi-detail">{item.detail}</div> : null}
        </div>
      ))}
    </div>
  )
}
