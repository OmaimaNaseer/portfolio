import personalInfo from '../../data/personalInfo'
import navigation from '../../data/navigation'
import Container from '../common/Container'
import SocialLinks from '../common/SocialLinks'
import { ArrowUpRight } from 'lucide-react'

const copyrightYear = new Date().getFullYear()

export default function Footer() {
  const year = copyrightYear

  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-12 py-14 lg:flex-row lg:items-start lg:justify-between lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-border bg-surface font-display text-xs text-accent-soft">OM</span>
            <div>
              <p className="font-display text-xl tracking-tight">{personalInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">{personalInfo.role}</p>
            </div>
          </div>
          <SocialLinks className="mt-5" />
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-text-secondary">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-text-secondary sm:grid-cols-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-border py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-text-primary">
          Back to top <ArrowUpRight size={14} />
        </a>
      </Container>
    </footer>
  )
}
