import { Boxes, Braces, Code2, Database, GitBranch, LayoutTemplate, Palette, Terminal, Wrench } from 'lucide-react'
import { motion } from 'motion/react'

const icons = {
  boxes: Boxes,
  braces: Braces,
  code: Code2,
  database: Database,
  git: GitBranch,
  layout: LayoutTemplate,
  palette: Palette,
  terminal: Terminal,
  wrench: Wrench,
}

export default function SkillCard({ skill, index = 0 }) {
  const Icon = icons[skill.icon] ?? Code2

  return (
    <motion.article
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/70 p-4 transition-colors hover:border-white/15 hover:bg-surface-hover"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent-soft transition-transform group-hover:scale-105">
        <Icon size={19} strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="font-heading text-[0.95rem] font-semibold text-text-primary">{skill.name}</h3>
        {skill.description ? (
          <p className="mt-1 text-xs leading-relaxed text-text-secondary">{skill.description}</p>
        ) : null}
      </div>
    </motion.article>
  )
}
