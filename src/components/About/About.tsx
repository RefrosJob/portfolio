import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';
import styles from './About.module.scss';

export function About(): JSX.Element {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl('about/aboutImage.png')}
                    alt="Me sitting with laptop"
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt="Cursor icon"
                        />
                        <div>
                            <h3>full-stack Developer</h3>
                            <p>
                                I'm a full-stack developer with 3 years
                                experience
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
