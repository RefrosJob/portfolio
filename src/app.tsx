import { JSX } from 'preact/jsx-runtime';
import styles from './app.module.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

export function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <NavBar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}
