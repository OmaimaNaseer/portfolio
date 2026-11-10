import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import personalInfo from '../../data/personalInfo'
import navigation from '../../data/navigation'
import useActiveSection from '../../hooks/useActiveSection'
import Container from '../common/Container'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => navigation.map((item) => item.id), [])
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3 font-display text-lg tracking-tight text-text-primary">
          <span className="grid size-8 place-items-center rounded-full border border-border bg-surface text-xs font-semibold text-accent-soft transition-colors group-hover:border-accent/50">
            OM
          </span>
          <span>{personalInfo.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = activeId === item.id

            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-colors ${
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
                ) : null}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-text-primary transition-colors hover:border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} activeId={activeId} />
      </div>
    </header>
  )
}
