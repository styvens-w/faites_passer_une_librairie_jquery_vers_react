function Paragraph({ classN, content }) {
    const className = `${classN}__paragraph`

    return (
        <p className={className}>
            {content}
        </p>
    )
}

export default Paragraph