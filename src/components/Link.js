function Link({ classN, title, link }) {
    const className = `${classN}__link`

    return (
        <a className={className} href={link}>{title}</a>
    )
}

export default Link