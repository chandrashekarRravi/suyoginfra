import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Suyog Infra Solutions',
  description: 'Explore our  at Suyog Infra Solutions. Premier construction and interior solutions in Bangalore.'
}

export default function ContactPage() {
  return <ContactClient />
}
