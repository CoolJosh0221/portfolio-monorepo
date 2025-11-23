/**
 * Enhanced Click Spark Effect
 * Creates a spark animation on click for better interactivity
 */

'use client'

import { motion } from 'framer-motion'
import { useState, MouseEvent } from 'react'

interface ClickSparkProps {
  children: React.ReactNode
  className?: string
}

interface Spark {
  id: number
  x: number
  y: number
}

export function ClickSparkWrapper({ children, className = '' }: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSpark: Spark = {
      id: Date.now(),
      x,
      y,
    }

    setSparks((prev) => [...prev, newSpark])

    // Remove spark after animation completes
    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id))
    }, 600)
  }

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      {children}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute pointer-events-none"
          style={{
            left: spark.x,
            top: spark.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Spark particles */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[hsl(var(--accent))] rounded-full"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: Math.cos((i * Math.PI) / 4) * 30,
                y: Math.sin((i * Math.PI) / 4) * 30,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}
