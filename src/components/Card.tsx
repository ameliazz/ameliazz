export const Root = (props: {
    title: string
    tag: string
    children: React.ReactNode
}) => {
    return (
        <div className='card'>
            <div className='card__header'>
                <div>
                    <p className='font__gt'>{props.tag}</p>
                    <h1 className='font__acorn'>{props.title}</h1>
                </div>
            </div>

            {props.children}
        </div>
    )
}

export const Image = ({ src }: { src: string }) => {
    return <img src={src} />
}

export const Footer = ({ children }: { children: React.ReactNode }) => {
    return <div className='card__footer'>{children}</div>
}
