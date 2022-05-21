import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import { Services } from "../../services/Services";


function AboutPage() {
    const services = ["UX/UI", "frontend", "backend", "flutter", "sql", "python"];

    return (
        <div>
            <h2>About Page</h2>
            <Header />
            <Services services={services} />
            <Footer />
        </div>
    )
}
export default AboutPage;