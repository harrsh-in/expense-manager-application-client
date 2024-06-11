import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    preload: true,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
