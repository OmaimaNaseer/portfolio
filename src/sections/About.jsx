import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import personalInfo from '../data/personalInfo'

export default function About() {
  const biography = personalInfo.biography || personalInfo.shortIntroduction

  return (
    <section id="about" className="section-shell">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 translate-x-5 translate-y-5 rounded-[2rem] border border-border" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface">
            {personalInfo.profileImage ? (
              <img
                src={personalInfo.profileImage}
                alt={`Portrait of ${personalInfo.name}`}
                width={720}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div className="relative aspect-[4/5] min-h-[25rem]" aria-hidden="true">
                <div className="page-grid absolute inset-0 opacity-45" />
                <div className="absolute inset-[16%] rounded-full border border-border" />
                <div className="absolute inset-[28%] rounded-full border border-white/6" />
                <div className="absolute bottom-[15%] right-[12%] size-36 rounded-full bg-accent/18 blur-3xl" />
                <div className="absolute left-[16%] top-[16%] flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-text-secondary">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Thoughtful by design
                </div>
              </div>
            )}
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="A considered approach to software."
            description={biography}
          />

          <Reveal delay={0.14}>
            <div className="border-y border-border py-6">
              <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Current role</p>
              <p className="mt-2 font-heading text-xl text-text-primary">{personalInfo.role}</p>
            </div>
          </Reveal>

          {personalInfo.currentFocus ? (
            <Reveal delay={0.18}>
              <div className="border-b border-border py-6">
                <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Current focus</p>
                <p className="mt-2 leading-relaxed text-text-primary">{personalInfo.currentFocus}</p>
              </div>
            </Reveal>
          ) : null}

          {personalInfo.professionalInterests?.length ? (
            <Reveal delay={0.22}>
              <div className="pt-6">
                <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Interests</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {personalInfo.professionalInterests.map((interest) => (
                    <li key={interest} className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
