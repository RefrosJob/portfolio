import { JSX } from 'preact/jsx-runtime';
import { ProjectCard } from './Card/ProjectCard';

import styles from './Projects.module.scss';

import projects from '../../data/projects.json';

export function Projects(): JSX.Element {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => (
                    <ProjectCard key={id} id={id} project={project} />
                ))}
            </div>
        </section>
    );
}
