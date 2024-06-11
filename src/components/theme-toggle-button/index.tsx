import { useTheme } from '@/context/theme.context';
import DarkMode from '@/icons/DarkMode';
import LightMode from '@/icons/LightMode';
import styles from './theme-toggle-button.module.scss';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles['toggle-button']}>
            <span onClick={toggleTheme}>
                {theme === 'light' ? <DarkMode /> : <LightMode />}
            </span>
        </div>
    );
};

export default ThemeToggleButton;
