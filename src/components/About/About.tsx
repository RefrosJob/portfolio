import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';

import styles from './About.module.scss';

export function About(): JSX.Element {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <img
                        src={getImageUrl('about/about.png')}
                        alt="Me sitting with laptop"
                        className={styles.aboutImage}
                    />
                </div>
                <dl className={styles.aboutItems}>
                    <dd className={styles.aboutItem}>
                        <div>
                            <h3>Full-Stack Developer</h3>
                            <p>
                                I'm a full-stack developer with 2.8 years
                                experience. Never shy away from any work and
                                always welcome opportunity to grow and learn
                            </p>
                        </div>
                    </dd>
                    <dd className={styles.aboutItem}>
                        <div>
                            <h3>Communicative & Easy-Going Teamplayer</h3>
                            <p>
                                I thrive in collaborative environments by
                                effectively sharing ideas and fostering teamwork
                                dynamics. Approachable and adaptable.
                            </p>
                        </div>
                    </dd>
                    <dd className={styles.aboutItem}>
                        <div>
                            <h3>Easily interested and invested</h3>
                            <p>
                                Quickly engrossed in new topics and fully
                                engaged in the project matter, showing genuine
                                enthusiasm and commitment. If I work on it - I
                                care about it.
                            </p>
                        </div>
                    </dd>
                </dl>
            </div>
        </section>
    );
}
