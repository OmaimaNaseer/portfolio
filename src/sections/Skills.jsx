import SkillCard from '../components/cards/SkillCard'
import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import skills, { skillCategories } from '../data/skills'
import { Braces } from 'lucide-react'

export default function Skills() {
  const grouped = skillCategories
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length)

  const uncategorized = skills.filter((skill) => !skillCategories.includes(skill.category))
  const hasSkills = skills.length > 0

  return (
    <section id="skills" className="section-shell bg-background-secondary">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A focused practice."
          description="Languages, interfaces, and tools used with care."
        />

        {hasSkills ? (
          <div className="space-y-10">
            {grouped.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 font-heading text-sm uppercase tracking-[0.22em] text-text-secondary">
                  {group.category}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
            {uncategorized.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {uncategorized.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16">
              <div className="page-grid absolute inset-0 opacity-35" />
              <div className="relative flex max-w-xl items-start gap-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-background text-accent-soft">
                  <Braces size={21} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-text-primary">
                    Technology profile in progress.
                  </h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    Omaima’s confirmed languages, frameworks, and development tools will be presented here.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
