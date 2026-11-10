import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary shadow-lg sm:right-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -2 }}
        >
          <ArrowUp size={18} />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
