import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services | Suyog Infra Solutions',
  description: 'Explore our  at Suyog Infra Solutions. Premier construction and interior solutions in Bangalore.'
}

export default function ServicesPage() {
  return <ServicesClient />
}
