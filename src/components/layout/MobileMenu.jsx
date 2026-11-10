import { AnimatePresence, motion } from 'motion/react'
import navigation from '../../data/navigation'

export default function MobileMenu({ open, onClose, activeId }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/75 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={onClose}
          />
          <motion.nav
            aria-label="Mobile"
            className="absolute inset-x-4 top-[4.75rem] overflow-hidden rounded-3xl border border-border bg-background-secondary p-3 shadow-2xl"
            initial={{ y: -16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item, index) => {
                const isActive = activeId === item.id

                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 font-heading text-base transition-colors ${
                        isActive
                          ? 'bg-surface text-text-primary'
                          : 'text-text-secondary hover:bg-surface/50 hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                      <span className={`size-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-transparent'}`} />
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
