import Logo from "./Logo";
import NavBar from "./NavBar";
import navbarLink from "../utils/datas/navbarLink.json"
import "../assets/scss/layouts/_header.scss"

function Header() {
    const className = "header"
    return (
        <header className={className} >
            <a href="/">
                <Logo classN={className} />
            </a>

            <NavBar classN={className} navbarLink={navbarLink} />
        </header>
    )
}

export default Header