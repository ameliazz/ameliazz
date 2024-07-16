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
    title: 'AméliaZz',
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
        icon: '/favicon.png',
    },
    twitter: {
        title: 'AméliaZz (dev)',
        description: 'Your Next Web Front-End developer.',
        images: ['https://r2.ameliazz.xyz/avatar.png'],
    },
    openGraph: {
        title: 'AméliaZz (dev)',
        description: 'Your Next Web Front-End developer.',
        images: [
            {
                url: 'https://r2.ameliazz.xyz/avatar.png',
            },
        ],
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
                </NavBar.Root>

                <main>{children}</main>

                <footer>
                    <div>
                        <h2 className='font__poppins-light text__hover__underspace'>
                            Connect to me
                        </h2>
                        <ul>
                            <li>
                                <a
                                    href='https://github.com/ameliazz'
                                    target='_blank'
                                    className='footer__link'
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://discord.com/users/699416429338034268'
                                    target='_blank'
                                    className='footer__link'
                                >
                                    Discord
                                </a>
                            </li>

                            <li>
                                <a
                                    href='mailto:contato@ameliazz.xyz'
                                    target='_blank'
                                    className='footer__link'
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex--center'>
                        <h3 className='font__poppins-light hover__underspace'>
                            © 2024 Amélia Ribeiro
                        </h3>
                    </div>
                </footer>
            </body>
        </html>
    )
}
