import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';

import styles from './Contact.module.scss';

export function Contact(): JSX.Element {
    return (
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt="Email Icon"
                    />
                    <a href="mailto:refrosjob@gmail">refrosjob@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt="LinkedIn Icon"
                    />
                    <a href="https://www.linkedin.com">linkedIn.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt="GitHub Icon"
                    />
                    <a href="https://github.com/refrosjob">refrosJob</a>
                </li>
            </ul>
        </footer>
    );
}
