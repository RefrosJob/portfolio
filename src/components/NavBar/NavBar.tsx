import { JSX } from 'preact/jsx-runtime';

import styles from './NavBar.module.scss';

export default function NavBar(): JSX.Element {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
