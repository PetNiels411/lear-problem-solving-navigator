import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface TrendAreaChartProps {
  data: Array<{ month: string; opened: number; closed: number }>
}

export default function TrendAreaChart({ data }: TrendAreaChartProps) {
  return (
    <div className="chart-card" title="Trend chart showing monthly issues opened (blue) vs closed (green). Upward blue lines indicate more problems; upward green lines show better resolution.">
      <div className="chart-header">
        <div>
          <h3>Issues opened vs closed</h3>
          <p>Monthly trend across seating and E-Systems programs</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradOpened" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="gradClosed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#34d399" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
          <XAxis dataKey="month" tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 10, border: 'none', background: 'var(--surface)' }} itemStyle={{ color: 'var(--text)' }} />
          <Area type="monotone" dataKey="opened" stroke="#3b82f6" fill="url(#gradOpened)" strokeWidth={3} />
          <Area type="monotone" dataKey="closed" stroke="#22c55e" fill="url(#gradClosed)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
