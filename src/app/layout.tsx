import '../styles/globals.scss'
import * as NavBar from '@/components/NavBar'

import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: 'Amélia.Zz',
    description: 'Your Next Web Front-End developer.',
    keywords: ['amelia', 'ameliazz', 'canary', 'dev', 'mozz.env', 'mozz'],
    alternates: {
        canonical: 'https://www.ameliazz.xyz',
    },
    category: 'technology',
    creator: 'Amélia.Zz',
    authors: [
        {
            name: 'Amélia',
            url: 'https://github.com/ameliazz',
        },
    ],
    icons: {
        icon: '/red_butterfly.jpg',
    },
    twitter: {
        title: 'Amélia.Zz (dev)',
        description: 'Your Next Web Front-End developer.',
        images: ['https://r2.ameliazz.xyz/avatar.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en-US'>
            <body>
                <NavBar.Root>
                    <NavBar.Link href='/'>
                        Work <span className='tag'>/</span>
                    </NavBar.Link>
                    {/* <NavBar.Link href='/about'>About</NavBar.Link> */}
                    {/* <NavBar.Link href='/contact'>Contact</NavBar.Link> */}
                </NavBar.Root>

                <main>{children}</main>
            </body>
        </html>
    )
}
