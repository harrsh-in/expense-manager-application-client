import styles from '@/app/auth/sign-in/sign-in.module.scss';
import type { Metadata } from 'next';
import SignInForm from '@/app/auth/sign-in/SignInForm';
import Link from 'next/link';
import { getCsrfToken } from 'next-auth/react';

export const metadata: Metadata = {
    title: 'Sign In | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const SignInPage = async () => {
    const csrfToken = await getCsrfToken();

    if (!csrfToken) {
        return;
    }

    return (
        <div className={styles['sign-in-container']}>
            <h2 className={styles['sign-in-title']}>Sign in to Minimal</h2>

            <SignInForm csrfToken={csrfToken} />

            <Link
                href={'/auth/forgot-password'}
                className={styles['forgot-password']}
            >
                Forgot password?
            </Link>
        </div>
    );
};

const SignIn = () => {
    return <SignInPage />;
};

export default SignIn;
