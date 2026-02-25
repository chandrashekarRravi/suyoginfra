import { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects | Suyog Infra Solutions',
  description: 'Explore our  at Suyog Infra Solutions. Premier construction and interior solutions in Bangalore.'
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
