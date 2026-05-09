import { motion } from 'framer-motion'

interface TemperatureGaugeProps {
  value: number
  max: number
  min: number
  title: string
  unit: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function TemperatureGauge({
  value,
  max,
  min,
  title,
  unit,
  color = '#ef4444',
  size = 'md'
}: TemperatureGaugeProps) {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))
  const angle = (percentage / 100) * 180 - 90 // -90 to +90 degrees

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  }

  const needleSize = {
    sm: 'w-1 h-8',
    md: 'w-1.5 h-10',
    lg: 'w-2 h-12'
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClasses[size]} rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700`}>
        {/* Gauge background */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          {/* Temperature zones */}
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(from 180deg, #22c55e 0%, #eab308 50%, ${color} 100%)`
          }} />
          <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />

          {/* Needle */}
          <motion.div
            className={`absolute bottom-1/2 left-1/2 origin-bottom ${needleSize[size]} bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg`}
            style={{
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${angle}deg)`
            }}
            initial={{ rotate: -90 }}
            animate={{ rotate: angle }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          />
        </div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md" />
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</div>
        <div className="text-lg font-bold" style={{ color }}>
          {value}{unit}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {min}{unit} - {max}{unit}
        </div>
      </div>
    </div>
  )
}