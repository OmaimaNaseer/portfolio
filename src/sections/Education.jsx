import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import education from '../data/education'
import personalInfo from '../data/personalInfo'

export default function Education() {
  const entries = education.length ? education : personalInfo.education

  if (!entries.length) return null

  return (
    <section id="education" className="section-shell bg-background-secondary">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic path."
          description="Institutions, fields of study, and the years that shaped the work."
        />

        <ol className="relative space-y-6 border-l border-border pl-8">
          {entries.map((item) => (
            <li key={`${item.institution}-${item.startYear}`}>
              <Reveal>
                <article className="surface-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-soft">
                    {[item.startYear, item.endYear].filter(Boolean).join(' — ')}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">{item.institution}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {[item.qualification, item.field].filter(Boolean).join(' · ')}
                  </p>
                  {item.description ? (
                    <p className="mt-3 text-sm text-text-secondary">{item.description}</p>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
