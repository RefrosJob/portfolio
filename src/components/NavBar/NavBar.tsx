import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';
import { useState } from 'preact/hooks';

import styles from './NavBar.module.scss';

export default function NavBar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={getImageUrl(
                        isMenuOpen ? 'nav/closeIcon.png' : 'nav/menuIcon.png'
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
                    onClick={() => setIsMenuOpen(false)}
                >
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
            <a className={styles.title} href="/">
                Portfolio
            </a>
        </nav>
    );
}
