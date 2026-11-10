import { motion } from 'motion/react'

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  ...props
}) {
  const styles = {
    primary:
      'bg-accent text-background shadow-[0_12px_35px_rgba(155,140,255,0.2)] hover:bg-accent-soft disabled:opacity-60',
    secondary:
      'border border-border bg-surface/40 text-text-primary hover:border-white/20 hover:bg-surface',
    ghost: 'text-text-secondary hover:text-text-primary',
  }

  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${styles[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
