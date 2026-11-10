import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import goals from '../data/goals'

const labels = {
  short: 'Short-term',
  long: 'Long-term',
  interest: 'Interest',
}

export default function Goals() {
  if (!goals.length) return null

  return (
    <section id="goals" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Direction"
          title="Learning and career goals."
          description="The near-term work, the longer path, and the interests that guide both."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {goals.map((goal, index) => (
            <Reveal key={goal.title} delay={index * 0.08}>
              <article className="surface-card h-full p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-soft">
                  {labels[goal.timeframe] ?? 'Goal'}
                </p>
                <h3 className="mt-3 font-heading text-xl">{goal.title}</h3>
                {goal.description ? (
                  <p className="mt-3 text-sm text-text-secondary">{goal.description}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
