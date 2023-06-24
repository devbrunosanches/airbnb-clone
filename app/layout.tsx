import './globals.css'
import { Cabin } from 'next/font/google'

import { ClientOnly, Modal, Navbar, RegisterModal } from '@/components'
import { ToasterProvider } from '@/src/providers'

const font = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
