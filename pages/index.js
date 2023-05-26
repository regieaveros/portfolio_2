import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
