import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const Home = () => {
    return <h1 className={styles['home']}>Home Two</h1>;
};

export default Home;
