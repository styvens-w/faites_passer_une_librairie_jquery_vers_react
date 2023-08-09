import Copyright from "./Copyright";
import "../assets/scss/layouts/_footer.scss"

function Footer() {
    const className = "footer"

    return (
        <footer className={className}>
            <Copyright classN={className} />
        </footer>
    )
}

export default Footer