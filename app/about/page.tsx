import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About | Suyog Infra Solutions',
  description: 'Explore our  at Suyog Infra Solutions. Premier construction and interior solutions in Bangalore.'
}

export default function AboutPage() {
  return <AboutClient />
}
