import styles from './page.module.scss';
import type { Metadata } from 'next';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
    title: 'Home | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const HomePage = () => {
    return (
        <h1 className={styles['home']}>
            <p>Home</p>

            <ThemeToggle />
        </h1>
    );
};

const Home = () => {
    return <HomePage />;
};

export default Home;
