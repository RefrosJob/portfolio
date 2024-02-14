import { JSX } from 'preact/jsx-runtime';
import styles from './app.module.scss';
import NavBar from './components/NavBar/NavBar';

export function App(): JSX.Element {
    return (
        <div className={styles.app}>
            <NavBar />
        </div>
    );
}
