import { motion } from 'framer-motion'

interface TrafficLightProps {
  status: 'green' | 'yellow' | 'red'
  title: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function TrafficLight({
  status,
  title,
  description,
  size = 'md'
}: TrafficLightProps) {
  const sizeClasses = {
    sm: 'w-8 h-20',
    md: 'w-10 h-24',
    lg: 'w-12 h-28'
  }

  const lightSize = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }

  const lights = [
    { color: 'red', active: status === 'red' },
    { color: 'yellow', active: status === 'yellow' },
    { color: 'green', active: status === 'green' }
  ]

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative ${sizeClasses[size]} bg-gray-800 dark:bg-gray-900 rounded-lg p-2 shadow-lg`}>
        {lights.map((light, index) => (
          <motion.div
            key={light.color}
            className={`absolute ${lightSize[size]} rounded-full border-2 border-gray-600 ${
              light.active ? 'shadow-lg' : 'opacity-30'
            }`}
            style={{
              backgroundColor: light.active ? light.color : '#4b5563',
              top: `${8 + index * (size === 'sm' ? 24 : size === 'md' ? 28 : 32)}px`,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={light.active ? {
              boxShadow: `0 0 20px ${light.color}`,
              scale: [1, 1.1, 1]
            } : {}}
            transition={{
              boxShadow: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
              scale: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
            }}
          />
        ))}
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</div>
        {description && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</div>
        )}
        <div className="text-xs font-medium mt-1" style={{
          color: status === 'green' ? '#22c55e' :
                 status === 'yellow' ? '#eab308' : '#ef4444'
        }}>
          {status.toUpperCase()}
        </div>
      </div>
    </div>
  )
}