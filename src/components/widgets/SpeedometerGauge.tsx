import { motion } from 'framer-motion'

interface SpeedometerGaugeProps {
  value: number
  max: number
  title: string
  unit: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  zones?: { min: number; max: number; color: string; label: string }[]
}

export default function SpeedometerGauge({
  value,
  max,
  title,
  unit,
  color = '#3b82f6',
  size = 'md',
  zones = [
    { min: 0, max: 60, color: '#22c55e', label: 'Good' },
    { min: 60, max: 80, color: '#eab308', label: 'Warning' },
    { min: 80, max: 100, color: '#ef4444', label: 'Critical' }
  ]
}: SpeedometerGaugeProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const angle = (percentage / 100) * 180 - 90 // -90 to +90 degrees

  const sizeClasses = {
    sm: 'w-28 h-20',
    md: 'w-36 h-24',
    lg: 'w-44 h-28'
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        {/* Speedometer arc */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 10 40 A 35 35 0 0 1 90 40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
              className="dark:stroke-gray-700"
            />

            {/* Colored zones */}
            {zones.map((zone, index) => {
              const startAngle = (zone.min / 100) * Math.PI - Math.PI/2
              const endAngle = (zone.max / 100) * Math.PI - Math.PI/2
              const x1 = 50 + 35 * Math.cos(startAngle)
              const y1 = 40 + 35 * Math.sin(startAngle)
              const x2 = 50 + 35 * Math.cos(endAngle)
              const y2 = 40 + 35 * Math.sin(endAngle)
              const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0

              return (
                <path
                  key={index}
                  d={`M ${x1} ${y1} A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2}`}
                  fill="none"
                  stroke={zone.color}
                  strokeWidth="8"
                />
              )
            })}

            {/* Needle */}
            <motion.g
              initial={{ transform: 'rotate(-90 50 40)' }}
              animate={{ transform: `rotate(${angle} 50 40)` }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            >
              <line
                x1="50"
                y1="40"
                x2="50"
                y2="15"
                stroke="#374151"
                strokeWidth="2"
                className="dark:stroke-gray-300"
              />
              <circle cx="50" cy="40" r="3" fill="#374151" className="dark:fill-gray-300" />
            </motion.g>
          </svg>
        </div>
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</div>
        <div className="text-lg font-bold" style={{ color }}>
          {value}{unit}
        </div>
        <div className="flex justify-center gap-1 mt-1">
          {zones.map((zone, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: zone.color }}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{zone.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}