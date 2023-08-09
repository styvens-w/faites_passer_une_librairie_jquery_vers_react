import Link from "./Link";

function NavBar({ navbarLink, classN }) {
    const className = `${classN}__nav`

    return (
        <nav className={className}>
            {
                navbarLink.map(({title, link}) => (
                    <Link key={title} classN={className} title={title} link={link} />
                ))
            }
        </nav>
    )
}

export default NavBar