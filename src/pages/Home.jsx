import Logo from "../components/Logo";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import "../assets/scss/pages/home.scss"

function Home() {
    const className = "home";

    return (
        <main className={className}>
            <section>
                <Logo classN={className} />
                <Title classN={className} content={"HRnet"} />
                <Paragraph classN={className} content={"Human Resources Networking"} />
            </section>
        </main>
    )
}

export default Home