import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import ThemeInitializer from '../../components/theme/ThemeInitializer'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
// Script import removed — no longer needed

function getServerTheme() {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Tbilisi',
      hour: 'numeric',
      hour12: false,
    })
    const hour = parseInt(formatter.format(new Date()), 10)
    const dark = hour >= 21 || hour < 7
    return dark ? 'dark' : 'light'
  } catch (e) {
    return 'light'
  }
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()
  const theme = getServerTheme()

  return (
    <html lang={locale} data-theme={theme} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeInitializer />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}