function Title({ classN, content }) {
    const className = `${classN}__title`

    return (
        <h1 className={className}>
            {content}
        </h1>
    )
}

export default Title