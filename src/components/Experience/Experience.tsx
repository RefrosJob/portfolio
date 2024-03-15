import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../utils';

import skills from '../../data/skills.json';
import history from '../../data/history.json';

import styles from './Experience.module.scss';
export function Experience(): JSX.Element {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div className={styles.skill} key={id}>
                            <div>
                                <img
                                    src={getImageUrl(skill.imageSrc)}
                                    alt={skill.title}
                                />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <li className={styles.historyItem} key={id}>
                            <img
                                src={getImageUrl(historyItem.imageSrc)}
                                alt={`${historyItem.organisation} logo`}
                            />
                            <div>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map(
                                        (experience, id) => (
                                            <li key={id}>{experience}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
