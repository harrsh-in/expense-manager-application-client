'use client';

import styles from './navbar.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import PrimaryButton from '@/components/button/primary-button';
import ThemeToggleButton from '@/components/theme-toggle-button';

const Navbar = () => {
    const path = usePathname();
    const router = useRouter();
    const { status } = useSession();

    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        });
        window.history.replaceState(null, '', '/');
        router.push('/');
    };

    const links = path.startsWith('/app')
        ? AppLinks
        : path.startsWith('/auth')
          ? AuthLinks
          : PublicLinks;

    return (
        <nav className={styles['navbar']}>
            <h1 className={styles['navbar-heading']}>
                <Link href={'/'}>Budget Manager</Link>
            </h1>

            <ul className={styles['links']}>
                {links.map(({ name, href }) => (
                    <li key={name} className={styles['link']}>
                        <Link href={href}>{name}</Link>
                    </li>
                ))}

                <ThemeToggleButton />

                {status === 'authenticated' ? (
                    <PrimaryButton onClick={handleSignOut}>
                        Sign out
                    </PrimaryButton>
                ) : status === 'unauthenticated' ? (
                    <Link href={'/auth/sign-in'}>
                        <PrimaryButton>Sign in</PrimaryButton>
                    </Link>
                ) : (
                    ''
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

const AppLinks = [
    {
        name: 'Dashboard',
        href: '/app/dashboard',
    },
    {
        name: 'Transactions',
        href: '/app/transactions',
    },
    {
        name: 'Budgets',
        href: '/app/budgets',
    },
    {
        name: 'Settings',
        href: '/app/settings',
    },
];

const AuthLinks: { name: string; href: string }[] = [];

const PublicLinks = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
];
