import styles from '@/styles/components/page.module.scss'
import { Sparkles } from 'lucide-react'

import * as Card from '@/components/Card'

export default function Home() {
    return (
        <>
            <section className={styles.hero__container}>
                <div>
                    <h1
                        className={styles.hero__title}
                        style={{
                            fontSize: '4.5rem',
                            textAlign: 'center',
                        }}
                    >
                        Amélia{' '}
                        <Sparkles
                            color='#f5f5f5'
                            fill='#f5f5f5'
                            size={'4rem'}
                        />
                    </h1>

                    <p
                        style={{
                            letterSpacing: '4px',
                        }}
                    >
                        Your Next Web Front-End <strong>developer</strong>.
                    </p>
                </div>
            </section>

            <section className='container flex--center flex--column gap--md'>
                <h1 className='font__acorn'>My Works</h1>

                <section
                    id='about'
                    className='container flex--center gap--md'
                    style={{
                        flexWrap: 'wrap',
                    }}
                >
                    <Card.Root title='Mozz.Env' tag='Public (library)'>
                        <Card.Image src='https://r2.ameliazz.xyz/mozz.env.png' />
                        <Card.Footer>
                            <a href='https://github.com/Canary2000/mozz.env'>
                                Repo
                            </a>
                            <a href='https://npmjs.com/package/mozz.env'>npm</a>
                        </Card.Footer>
                    </Card.Root>

                    <Card.Root title='api.ameliazz.xyz' tag='Public (API)'>
                        <Card.Image src='https://r2.ameliazz.xyz/api.ameliazz.png' />
                        <Card.Footer>
                            <a href='https://github.com/Canary2000/api.ameliazz.xyz'>
                                Repo
                            </a>
                        </Card.Footer>
                    </Card.Root>
                </section>
            </section>

            <footer>
                <div>
                    <h3 className='font__acorn-200'>© 2024 Amélia Ribeiro</h3>
                </div>
            </footer>
        </>
    )
}
