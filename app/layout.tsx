import SessionProviderWrapper from '@/components/sessionProviderWrapper';
import Header from '../components/Header';

import './global.css';
import './global.scss';

export const metadata = {
  title: 'Port Arthur',
  description: "Port Arthur's hjemmeside",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProviderWrapper>
    <html lang="da">
      <head>
        <meta name="favicon" content="" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
    </SessionProviderWrapper>
  )
}
