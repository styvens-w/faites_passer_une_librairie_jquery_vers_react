import "../assets/scss/layouts/_button.scss"

function Button({ type, value }) {
    return (
        <input value={value} type={type}/>
    )
}

export default Button