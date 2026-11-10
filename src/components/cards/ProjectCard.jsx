import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion } from 'motion/react'

function PlaceholderArt({ title, featured }) {
  return (
    <div className={`relative flex h-full items-end overflow-hidden bg-background-secondary p-7 ${featured ? 'min-h-[22rem]' : 'min-h-[16rem]'}`}>
      <div className="page-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="absolute -right-10 -top-10 size-52 rounded-full border border-border" />
      <div className="absolute right-12 top-12 size-28 rounded-full border border-white/8 bg-accent/10" />
      <div className="absolute bottom-8 left-8 h-px w-20 bg-accent/60" />
      <p className="relative ml-24 font-display text-xl tracking-tight text-text-secondary">{title}</p>
    </div>
  )
}

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <motion.article
      className={`surface-card group overflow-hidden ${featured ? 'lg:grid lg:grid-cols-[1.35fr_0.65fr]' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -4 }}
    >
      <div className="overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width={featured ? 1440 : 960}
            height={featured ? 900 : 640}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] ${
              featured ? 'h-72 lg:h-full lg:min-h-[28rem]' : 'h-56 sm:h-64'
            }`}
          />
        ) : (
          <PlaceholderArt title={project.title} featured={featured} />
        )}
      </div>

      <div className={`flex flex-col p-6 sm:p-7 ${featured ? 'justify-center lg:p-9' : ''}`}>
        {project.category ? (
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent-soft">{project.category}</p>
        ) : null}
        <h3 className={`font-display tracking-[-0.03em] ${featured ? 'mt-3 text-3xl' : 'mt-3 text-2xl'}`}>{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{project.description}</p>

        {project.technologies?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-background/50 px-3 py-1 text-[0.7rem] text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {project.githubUrl || project.liveUrl ? (
          <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <Code2 size={16} />
              Repository
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  )
}
