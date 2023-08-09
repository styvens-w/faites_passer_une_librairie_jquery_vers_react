import logo from "../assets/image/logo.webp"
import logoFull from "../assets/image/logoFull.webp"

function Logo({ classN }) {
    const className = `${classN}__logo`;

    return <img className={className} src={classN === "header" ? logo : logoFull} alt="logo"/>
}

export default Logo