import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SocialLinks from '../components/common/SocialLinks'
import ContactForm from '../components/forms/ContactForm'
import personalInfo from '../data/personalInfo'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-shell relative overflow-hidden bg-background-secondary">
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-accent/6 blur-[100px]" />
      <Container className="relative grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s start a conversation."
            description="For collaboration, coursework, or professional opportunities, this is the place to reach Omaima."
          />
          {personalInfo.email ? (
            <a className="group inline-flex items-center gap-3 border-b border-border pb-2 font-heading text-lg text-text-primary transition-colors hover:border-accent/50" href={`mailto:${personalInfo.email}`}>
              <Mail size={18} className="text-accent-soft" />
              {personalInfo.email}
              <ArrowUpRight size={16} className="text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
              Contact details will be available here soon. You can still introduce yourself using the form.
            </p>
          )}
          <SocialLinks className="mt-7" />
        </div>
        <ContactForm />
      </Container>
    </section>
  )
}
