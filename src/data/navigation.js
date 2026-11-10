import education from './education'
import goals from './goals'
import personalInfo from './personalInfo'

const navigation = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'goals', label: 'Goals', href: '#goals' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const hasEducation = education.length > 0 || personalInfo.education.length > 0
const hasGoals = goals.length > 0

export default navigation.filter((item) => {
  if (item.id === 'education') return hasEducation
  if (item.id === 'goals') return hasGoals
  return true
})
