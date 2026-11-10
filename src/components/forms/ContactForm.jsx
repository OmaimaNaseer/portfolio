import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import siteConfig from '../../config/siteConfig'
import personalInfo from '../../data/personalInfo'
import Button from '../common/Button'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(3, 'Please add a subject.'),
  message: z.string().min(12, 'Please write a slightly longer message.'),
})

export default function ContactForm() {
  const endpoint = siteConfig.formspreeEndpoint.trim()
  const [status, setStatus] = useState('idle')
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = async (values) => {
    if (isSubmitting || status === 'success') return

    setStatus('loading')
    setServerError('')

    if (!endpoint) {
      setStatus('error')
      setServerError(
        personalInfo.email
          ? `Messages cannot be sent from this form right now. Please write to ${personalInfo.email}.`
          : 'Messages cannot be sent from this form right now. Please try again later.',
      )
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Unable to send the message right now.')
      }

      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
      setServerError(error.message || 'Something went wrong. Please try again.')
    }
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-secondary/50 hover:border-white/15 focus:border-accent/70 focus:shadow-[0_0_0_3px_rgba(155,140,255,0.1)]'

  return (
    <form className="surface-card relative space-y-5 overflow-hidden p-6 sm:p-9" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-accent/8 blur-3xl" />
      <div className="relative mb-7">
        <p className="font-display text-2xl tracking-tight text-text-primary">Send a message</p>
        <p className="mt-2 text-sm text-text-secondary">Share a few details and Omaima will get back to you.</p>
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-medium uppercase tracking-[0.12em] text-text-secondary">
          Name
          <input className={fieldClass} autoComplete="name" aria-invalid={Boolean(errors.name)} placeholder="Your name" {...register('name')} />
          {errors.name ? <span className="mt-2 block text-xs text-red-300">{errors.name.message}</span> : null}
        </label>
        <label className="block text-xs font-medium uppercase tracking-[0.12em] text-text-secondary">
          Email
          <input className={fieldClass} type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} placeholder="you@example.com" {...register('email')} />
          {errors.email ? (
            <span className="mt-2 block text-xs text-red-300">{errors.email.message}</span>
          ) : null}
        </label>
      </div>

      <label className="relative block text-xs font-medium uppercase tracking-[0.12em] text-text-secondary">
        Subject
        <input className={fieldClass} aria-invalid={Boolean(errors.subject)} placeholder="What would you like to discuss?" {...register('subject')} />
        {errors.subject ? (
          <span className="mt-2 block text-xs text-red-300">{errors.subject.message}</span>
        ) : null}
      </label>

      <label className="relative block text-xs font-medium uppercase tracking-[0.12em] text-text-secondary">
        Message
        <textarea className={`${fieldClass} min-h-40 resize-y`} aria-invalid={Boolean(errors.message)} placeholder="Tell me about the opportunity or project…" {...register('message')} />
        {errors.message ? (
          <span className="mt-2 block text-xs text-red-300">{errors.message.message}</span>
        ) : null}
      </label>

      {status === 'error' ? (
        <p className="flex items-start gap-2 rounded-xl border border-red-400/15 bg-red-400/5 p-3 text-sm text-red-300">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError || 'Unable to send the message right now.'}
        </p>
      ) : null}
      {status === 'success' ? (
        <p className="flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 p-3 text-sm text-accent-soft">
          <CheckCircle2 size={16} />
          Message sent. Thank you for reaching out.
        </p>
      ) : null}

      <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting || status === 'success'}>
        {isSubmitting ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
        {isSubmitting ? 'Sending…' : status === 'success' ? 'Message sent' : 'Send message'}
      </Button>
    </form>
  )
}
