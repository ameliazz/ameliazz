import styles from '@/styles/components/page.module.scss'

import { Sparkles } from 'lucide-react'
import * as Card from '@/components/Card'

export default function Home() {
    const projects = [
        {
            name: 'mozz.env',
            public: true,
            tag: 'library',
            description: 'Your JavaScript Environment Enhancer',
            url: null,
            repository_url: 'https://github.com/ameliazz/mozz.env',
            logo_url: 'https://r2.ameliazz.xyz/mozz.env.png',
            social_preview_url: 'https://r2.ameliazz.xyz/mozz.env.png',
            short_description: 'Your JavaScript Environment Enhancer',
        },
        {
            name: 'api.ameliazz',
            public: true,
            tag: 'api',
            description: "That's my API for AmeliaZz website and more.",
            url: 'https://api.ameliazz.xyz/',
            repository_url: 'https://github.com/ameliazz/api.ameliazz.xyz',
            logo_url: 'https://r2.ameliazz.xyz/api.ameliazz.png',
            social_preview_url: null,
            short_description: 'My personal API',
        },
        {
            name: 'ameliazz',
            public: true,
            tag: 'website',
            description: 'AmeliaZz is my personal website (or, my portfolio)',
            url: 'https://ameliazz.xyz',
            repository_url: 'https://github.com/ameliazz/ameliazz',
            logo_url: 'https://r2.ameliazz.xyz/ameliazz.png',
            social_preview_url: null,
            short_description: 'My personal website',
        },
    ]

    return (
        <>
            <section className={styles.hero__container}>
                <div>
                    <h1 className={styles.hero__title}>
                        Amélia{' '}
                        <Sparkles
                            id={styles.hero__title__sparkle}
                            color='#f5f5f5'
                            fill='#f5f5f5'
                            size={'4rem'}
                        />
                    </h1>

                    <p className='ls--sm'>
                        Your Next Web Front-End <strong>developer</strong>.
                    </p>
                </div>
            </section>

            <section className={styles.about__container} id='about'>
                <h1 className='font__acorn text__hover__underspace'>
                    About Me
                </h1>

                <div className={styles.about__container__inner__container}>
                    <img
                        className='hover__to--top'
                        src='https://r2.ameliazz.xyz/avatar.png'
                        style={{
                            width: '16rem',
                        }}
                    />

                    <div className='flex--column gap--sm' style={{}}>
                        <p
                            className='font__poppins-light hover__to--left'
                            style={{
                                opacity: 0.8,
                            }}
                        >
                            Hello, I'm <strong>Amélia</strong>, a Front-End
                            developer with a few years in the field, inserted in
                            the market as an independent developer, Freelancer.
                        </p>

                        <div>
                            <p
                                className='font__poppins-light hover__to--left'
                                style={{
                                    opacity: 0.8,
                                }}
                            >
                                I've done work for people and companies that
                                sought and continue to seek my knowledge to
                                boost their businesses with new faces in the
                                digital world. However, I have also worked and work in the area of ​​Back-End and Bot development for Discord.
                            </p>
                            <p
                                className='font__poppins-light hover__to--left'
                                style={{
                                    opacity: 0.8,
                                }}
                            >
                                I also work with the main technologies in the
                                current Front-End world, such as: <br />
                                <strong>TypeScript</strong>,{' '}
                                <strong>React</strong>, <strong>Next</strong>,{' '}
                                <strong>Vite</strong>, <strong>Sass</strong>,
                                <strong>TailwindCSS</strong> and{' '}
                                <strong>more</strong>!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section__container} id='works'>
                <h1 className='font__acorn text__hover__underspace'>
                    My Works
                </h1>

                <div className={styles.works__grid__container}>
                    {projects
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((project) => {
                            return (
                                <Card.Root
                                    title={project.name}
                                    tag={`${
                                        project.public ? 'Public' : 'Private'
                                    } (${project.tag.toUpperCase()})`}
                                    key={project.name}
                                >
                                    {project.logo_url ? (
                                        <Card.Image src={project.logo_url} />
                                    ) : project.social_preview_url ? (
                                        <Card.Image
                                            src={project.social_preview_url}
                                        />
                                    ) : (
                                        <Card.Image src='https://r2.ameliazz.xyz/any-project-logo.png' />
                                    )}

                                    <Card.Footer>
                                        {project.url ? (
                                            <a href={project.url}>Visitar</a>
                                        ) : (
                                            ''
                                        )}

                                        {project.repository_url ? (
                                            <a href={project.repository_url}>
                                                Repository
                                            </a>
                                        ) : (
                                            ''
                                        )}
                                    </Card.Footer>
                                </Card.Root>
                            )
                        })}
                </div>
            </section>
        </>
    )
}
