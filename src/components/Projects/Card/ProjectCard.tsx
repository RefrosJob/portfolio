import { JSX } from 'preact/jsx-runtime';
import { getImageUrl } from '../../../utils';

import styles from './ProjectCard.module.scss';

interface Props {
    id: number;
    project: {
        title: string;
        imageSrc: string;
        description: string;
        skills: string[];
        source: string;
    };
}

export function ProjectCard({ id, project }: Props): JSX.Element {
    return (
        <div key={id} className={styles.container}>
            <img
                src={getImageUrl(project.imageSrc)}
                alt={`Image of ${project.title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.skills}>
                {project.skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={project.source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
}
