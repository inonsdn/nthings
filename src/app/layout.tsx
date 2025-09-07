import { DbProvider } from '@/contexts/DbContext'
import '@/styles/globals.css'

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang='en'>
            <body >
                <DbProvider>
                    {children}
                </DbProvider>
            </body>
        </html>
    )
}