import './globals.css'

export const metadata = {
  title: 'SIYANA Beta',
  description: 'AI operating system for your body — ИИ-операционная система организма',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
