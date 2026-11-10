import ProjectCard from '../components/cards/ProjectCard'
import Container from '../components/common/Container'
import Reveal from '../components/common/Reveal'
import SectionHeading from '../components/common/SectionHeading'
import projects from '../data/projects'
import { ArrowDownRight, FolderCode } from 'lucide-react'

export default function Projects() {
  const [featuredProject, ...additionalProjects] = projects

  return (
    <section id="projects" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects and assignments."
          description="A considered collection of software and coursework."
        />

        {featuredProject ? (
          <div className="space-y-6">
            <ProjectCard project={featuredProject} featured />
            {additionalProjects.length ? (
              <div className="grid gap-6 md:grid-cols-2">
                {additionalProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface">
              <div className="grid min-h-[30rem] lg:grid-cols-[1.25fr_0.75fr]">
                <div className="relative overflow-hidden border-b border-border bg-background-secondary lg:border-b-0 lg:border-r">
                  <div className="page-grid absolute inset-0 opacity-55" />
                  <div className="absolute left-[10%] top-[18%] h-[64%] w-[76%] rotate-[-3deg] rounded-[2rem] border border-border bg-surface/60" />
                  <div className="absolute left-[15%] top-[23%] h-[64%] w-[76%] rotate-[2deg] rounded-[2rem] border border-border bg-surface shadow-2xl">
                    <div className="flex h-12 items-center gap-2 border-b border-border px-5">
                      <span className="size-2 rounded-full bg-accent/70" />
                      <span className="h-px w-16 bg-white/10" />
                    </div>
                    <div className="grid h-[calc(100%-3rem)] place-items-center">
                      <FolderCode size={44} strokeWidth={1.1} className="text-accent-soft" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-accent-soft">
                    Portfolio in development
                  </p>
                  <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-text-primary sm:text-4xl">
                    Selected work is being prepared.
                  </h3>
                  <p className="mt-5 leading-relaxed text-text-secondary">
                    Real project details, screenshots, technologies, and verified links will appear here when available.
                  </p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                    Start a conversation
                    <ArrowDownRight size={16} className="text-accent-soft" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
