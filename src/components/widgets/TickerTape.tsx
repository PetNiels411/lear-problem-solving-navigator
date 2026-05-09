import { motion } from 'framer-motion'

interface TickerTapeProps {
  items: string[]
  speed?: number
}

export default function TickerTape({ items, speed = 50 }: TickerTapeProps) {
  const duplicatedItems = [...items, ...items] // Duplicate for seamless loop

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [-100, -2000], // Move from right to left
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ width: '200%' }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {item}
          </span>
        ))}
      </motion.div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-blue-600 to-transparent" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-600 to-transparent" />
    </div>
  )
}