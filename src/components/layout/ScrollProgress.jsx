import { motion } from 'motion/react'
import useScrollProgress from '../../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-accent"
        style={{ scaleX: progress }}
      />
    </div>
  )
}
