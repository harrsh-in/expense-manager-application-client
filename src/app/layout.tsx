import { cookies } from 'next/headers';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';
import { ThemeType } from '@/context/theme.context';
import 'react-toastify/dist/ReactToastify.css';
import RootLayoutClient from '@/app/root-layout-client';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    preload: true,
});

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    const cookieStore = cookies();
    const theme = (cookieStore.get('theme')?.value ?? 'light') as ThemeType;

    return (
        <html lang='en' data-theme={theme}>
            <body className={poppins.className}>
                <RootLayoutClient theme={theme}>{children}</RootLayoutClient>
            </body>
        </html>
    );
};

export default RootLayout;
