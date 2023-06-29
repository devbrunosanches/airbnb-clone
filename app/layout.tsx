import { ToasterProvider } from '@/providers'

import { Cabin } from 'next/font/google'
import './globals.css'

import {
  ClientOnly,
  Navbar,
  RegisterModal,
  LoginModal,
  RentModal,
  SearchModal,
} from '@/components'

import getCurrentUser from '@/app/actions/getCurrentUser'

const font = Cabin({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
