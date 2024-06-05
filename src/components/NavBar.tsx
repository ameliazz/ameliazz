'use client'

import { ReactNode, useState } from 'react'
import styles from '@/styles/components/nav.module.scss'
import { Github, Menu, X } from 'lucide-react'

export const Link = ({
    href,
    children,
}: Readonly<{
    href: string
    children: ReactNode
}>) => {
    return (
        <a href={href} className={styles.link}>
            {children}
        </a>
    )
}

export const Root = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div id={styles.mobile__menu__container} data-openned={open}>
                {children}
            </div>

            <header className={styles.header__container}>
                <nav className={styles.root}>
                    <div className='flex'>
                        <Link href='https://github.com/Canary2000'>
                            <Github />
                        </Link>
                    </div>

                    <div>
                        <div
                            className='flex gap--md'
                            id={styles.links__section}
                        >
                            {children}
                        </div>

                        {open ? (
                            <X
                                id={styles.toggle__menu__button}
                                onClick={() => {
                                    setOpen(!open)
                                }}
                                size={'4vh'}
                            />
                        ) : (
                            <Menu
                                id={styles.toggle__menu__button}
                                onClick={() => {
                                    setOpen(!open)
                                }}
                                size={'4vh'}
                            />
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}
