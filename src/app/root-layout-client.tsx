'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider, ThemeType } from '@/context/theme.context';
import SessionProvider from '@/context/session.context';
import Navbar from '@/components/navbar';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Bounce, ToastContainer } from 'react-toastify';

const RootLayoutClient = ({
    children,
    theme,
}: {
    children: ReactNode;
    theme: ThemeType;
}) => {
    const queryClient = new QueryClient();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider initialTheme={theme}>
                <SessionProvider>
                    <Navbar />
                    <main>{children}</main>
                </SessionProvider>
            </ThemeProvider>
            <ToastContainer
                draggable
                pauseOnHover
                closeOnClick
                position='top-right'
                theme='colored'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss={false}
                transition={Bounce}
            />
        </QueryClientProvider>
    );
};

export default RootLayoutClient;
