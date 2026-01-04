import HeroSection from "../lib/components/heroSection"
import About from "../lib/components/about"
import Header from "../lib/components/header"
import Skills from "../lib/components/skills"
import Certificate from "../lib/components/cerificate"
import Project from "../lib/components/project"
import Contact from "../lib/components/contact"
import Footer from "../lib/components/footer"

export default function MainPage(){
    return (<>
        <Header />
        <HeroSection />
        <About />
        <Skills />
        <Certificate />
        <Project />
        <Contact />
        <Footer />
    </>)
}