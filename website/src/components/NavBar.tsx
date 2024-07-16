'use client'

import { ReactNode, useState } from 'react'
import styles from '@/styles/components/nav.module.scss'
import { Github, Icon, Menu, X } from 'lucide-react'
import Image from 'next/image'

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
                    <div className={styles.logo}>
                        <Image
                            src='https://r2.ameliazz.xyz/avatar.png'
                            alt="Amélia's profile icon"
                            width={40}
                            height={40}
                        />
                    </div>

                    <div className={styles.social__links__container}>
                        <Link href='https://github.com/ameliazz'>
                            <Github />
                        </Link>

                        <Link href='https://discord.com/users/699416429338034268'>
                            <Image
                                src='/discord-mark-white.svg'
                                alt='Discord white mark'
                                width='24'
                                height='24'
                            />
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
