import { ArrowDownRight, Braces, Code2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import SocialLinks from '../components/common/SocialLinks'
import personalInfo from '../data/personalInfo'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="home" className="relative flex min-h-[min(900px,100svh)] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="page-grid bg-grid-shift absolute -inset-12 opacity-35" />
        <div className="absolute left-[18%] top-[12%] h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative grid items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:pb-24">
        <div className="relative z-10">
          {personalInfo.availability ? (
            <motion.p
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.22em] text-text-secondary"
              {...fade(0.05)}
            >
              <span className="size-1.5 rounded-full bg-accent" />
              {personalInfo.availability}
            </motion.p>
          ) : null}

          <motion.p className="flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-soft" {...fade(0.1)}>
            <span className="h-px w-8 bg-accent" />
            {personalInfo.role}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-4xl font-display text-[clamp(3.6rem,10vw,7.8rem)] leading-[0.9] tracking-[-0.065em] text-text-primary"
            {...fade(0.18)}
          >
            <span className="block text-[0.35em] font-medium leading-none tracking-[-0.03em] text-text-secondary">
              Hello, I&apos;m
            </span>
            <span className="mt-3 block">{personalInfo.name}.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl font-heading text-xl font-medium leading-snug text-text-primary sm:text-2xl"
            {...fade(0.28)}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary" {...fade(0.36)}>
            {personalInfo.shortIntroduction}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...fade(0.46)}>
            <Button href="#projects" className="group">
              Explore My Work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
            {personalInfo.resumeUrl ? (
              <Button href={personalInfo.resumeUrl} variant="ghost">
                Resume
              </Button>
            ) : null}
          </motion.div>

          <motion.div className="mt-8" {...fade(0.54)}>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden aspect-[0.92] w-full max-w-[28rem] lg:block"
          aria-hidden="true"
          {...fade(0.3)}
        >
          <div className="absolute inset-0 rotate-3 rounded-[2.5rem] border border-border bg-surface/40" />
          <div className="absolute inset-6 -rotate-2 overflow-hidden rounded-[2.25rem] border border-border bg-background-secondary shadow-2xl">
            <div className="flex h-14 items-center justify-between border-b border-border px-5">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/10" />
                <span className="size-2 rounded-full bg-accent/70" />
              </div>
              <span className="font-heading text-[0.62rem] uppercase tracking-[0.25em] text-text-secondary">Craft / Logic</span>
            </div>
            <div className="relative grid h-[calc(100%-3.5rem)] place-items-center">
              <div className="page-grid absolute inset-0 opacity-45" />
              <div className="relative grid size-48 place-items-center rounded-full border border-border">
                <div className="absolute inset-5 rounded-full border border-white/6" />
                <Braces size={52} strokeWidth={1.1} className="text-accent-soft" />
              </div>
              <div className="absolute left-7 top-8 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs text-text-secondary">
                <Code2 size={14} className="text-accent-soft" />
                Build with purpose
              </div>
              <div className="absolute bottom-8 right-7 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs text-text-secondary">
                <Sparkles size={14} className="text-accent-soft" />
                Refine with care
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
