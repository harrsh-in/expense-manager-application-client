import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const HomePage = () => {
    return (
        <h1 className={styles['home']}>
            <p>Home</p>
        </h1>
    );
};

const Home = () => {
    return <HomePage />;
};

export default Home;
