import personalInfo from './personalInfo'

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: personalInfo.github,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: personalInfo.linkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: personalInfo.email ? `mailto:${personalInfo.email}` : '',
  },
].filter((link) => Boolean(link.href))

export default socialLinks
