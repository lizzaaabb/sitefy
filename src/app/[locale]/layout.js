import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import ThemeInitializer from '../../components/theme/ThemeInitializer'
import Header from '../../components/home/Header'

const themeScript = `
  (function() {
    try {
      var formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Tbilisi',
        hour: 'numeric',
        hour12: false,
      });
      var hour = parseInt(formatter.format(new Date()), 10);
      var dark = hour >= 21 || hour < 7;
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    } catch (e) {}
  })();
`

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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