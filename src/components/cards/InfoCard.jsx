export default function InfoCard({ label, value }) {
  if (!value) return null

  return (
    <article className="surface-card p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-text-secondary">{label}</p>
      <p className="mt-2 font-heading text-base text-text-primary">{value}</p>
    </article>
  )
}
