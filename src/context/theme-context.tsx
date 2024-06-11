'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType | null;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
    children,
    initialTheme,
}: {
    initialTheme: ThemeType;
    children: ReactNode;
}) => {
    const [theme, setTheme] = useState<ThemeType>(
        ['light', 'dark'].includes(initialTheme) ? initialTheme : 'light',
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.cookie = `theme=${newTheme};path=/;`;
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
