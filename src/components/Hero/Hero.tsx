import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';

import styles from './Hero.module.scss';

export default function Hero(): JSX.Element {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Robert</h1>
                <p className={styles.description}>
                    I'm a full stack developer with 3 years of experience using
                    React and NodeJS
                </p>
                <a
                    href="mailto:refrosjob@gmail.com"
                    className={styles.contactBtn}
                >
                    Contact Me!
                </a>
            </div>
            <div className={styles.imgContainer}>
                <img
                    src={getImageUrl('hero/myImage.png')}
                    alt="Hero"
                    className={styles.heroImg}
                />
            </div>
            {/* <img
                src={getImageUrl('hero/myImage.png')}
                alt="Hero"
                className={styles.heroImg}
            /> */}

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
}
