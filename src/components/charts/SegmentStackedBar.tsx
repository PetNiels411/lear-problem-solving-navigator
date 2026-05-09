import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface SegmentStackedBarProps {
  data: Array<{ name: string; Seating: number; 'E-Systems': number }>
}

export default function SegmentStackedBar({ data }: SegmentStackedBarProps) {
  return (
    <div className="chart-card" title="Stacked bar chart showing issues by plant. Blue bars represent Seating problems; cyan bars represent E-Systems problems. Taller bars indicate more issues at that location.">
      <div className="chart-header">
        <div>
          <h3>Issues by plant and region</h3>
          <p>Seating and E-Systems issue distribution</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.12} />
          <XAxis dataKey="name" tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 10, border: 'none', background: 'var(--surface)' }} itemStyle={{ color: 'var(--text)' }} />
          <Bar dataKey="Seating" stackId="stack" fill="#2563eb" radius={[6, 6, 0, 0]} />
          <Bar dataKey="E-Systems" stackId="stack" fill="#0891b2" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
