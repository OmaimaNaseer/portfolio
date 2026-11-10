import { AtSign, Code2, Globe, Link } from 'lucide-react'
import { motion } from 'motion/react'
import socialLinks from '../../data/socialLinks'

const icons = {
  github: Code2,
  linkedin: Globe,
  email: AtSign,
}

export default function SocialLinks({ className = '' }) {
  if (!socialLinks.length) return null

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = icons[link.id] ?? Link

        return (
          <li key={link.id}>
            <motion.a
              href={link.href}
              target={link.id === 'email' ? undefined : '_blank'}
              rel={link.id === 'email' ? undefined : 'noreferrer noopener'}
              aria-label={link.label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/50 text-text-secondary transition-all hover:border-accent/40 hover:bg-surface hover:text-text-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={18} strokeWidth={1.6} />
            </motion.a>
          </li>
        )
      })}
    </ul>
  )
}
