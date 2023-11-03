import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomThemeProvider from './components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '오늘의 한줄',
  description: '넌 할 수 있어!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      // 폰트 적용을 위한 주석
      // className={inter.className}
      >
        {/* <CustomThemeProvider> */}
        {children}
        {/* </CustomThemeProvider> */}

        

        
        </body>
    </html>
  )
}
