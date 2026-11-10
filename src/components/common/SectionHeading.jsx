import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`mb-14 max-w-2xl lg:mb-16 ${alignment}`}>
      {eyebrow ? (
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-accent-soft">
            <span className="h-px w-6 bg-accent/80" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-4xl leading-[1.03] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
