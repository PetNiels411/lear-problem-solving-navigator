import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from 'recharts'

interface ParetoChartProps {
  data: Array<{ category: string; value: number; cumulative: number }>
}

export default function ParetoChart({ data }: ParetoChartProps) {
  return (
    <div className="chart-card" title="Pareto chart showing root causes of defects. Blue bars show frequency of each cause; green line shows cumulative percentage. Focus on causes contributing to the leftmost 80% for maximum impact.">
      <div className="chart-header">
        <div>
          <h3>Root cause pareto</h3>
          <p>Top drivers for recurring defects</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 24, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.12} />
          <XAxis dataKey="category" tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} interval={0} angle={-25} textAnchor="end" height={70} />
          <YAxis yAxisId="left" tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} tick={{ fill: 'var(--muted)' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 10, border: 'none', background: 'var(--surface)' }} itemStyle={{ color: 'var(--text)' }} formatter={(value: any, name: any) => [name === 'cumulative' && typeof value === 'number' ? `${value}%` : value, name]} />
          <Bar yAxisId="left" dataKey="value" fill="#38bdf8" radius={[6, 6, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="cumulative" stroke="#22c55e" strokeWidth={3} dot={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
