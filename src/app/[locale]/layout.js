import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import ThemeInitializer from '../../components/theme/ThemeInitializer'
import Header from '../../components/home/Header'

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeInitializer />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}