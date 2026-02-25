import { Metadata } from 'next'
import ClientsClient from './ClientsClient'

export const metadata: Metadata = {
  title: 'Clients | Suyog Infra Solutions',
  description: 'Explore our  at Suyog Infra Solutions. Premier construction and interior solutions in Bangalore.'
}

export default function ClientsPage() {
  return <ClientsClient />
}
