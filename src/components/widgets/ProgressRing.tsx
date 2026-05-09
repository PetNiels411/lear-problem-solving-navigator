import { motion } from 'framer-motion'

interface ProgressRingProps {
  value: number
  max: number
  title: string
  unit?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
}

export default function ProgressRing({
  value,
  max,
  title,
  unit = '%',
  color = '#3b82f6',
  size = 'md',
  showValue = true
}: ProgressRingProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const circumference = 2 * Math.PI * 40 // radius = 40
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  }

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          className="transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
            className="dark:stroke-gray-700"
          />

          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            strokeLinecap="round"
          />
        </svg>

        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-bold ${textSize[size]} text-gray-900 dark:text-gray-100`}>
              {Math.round(percentage)}{unit}
            </span>
          </div>
        )}
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</div>
        {showValue && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {value} / {max}
          </div>
        )}
      </div>
    </div>
  )
}