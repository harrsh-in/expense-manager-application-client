import type { Metadata } from 'next';
import SignInForm from '@/app/auth/sign-in/SignInForm';

export const metadata: Metadata = {
    title: 'Sign In | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>

            <SignInForm />
        </div>
    );
};

const SignIn = () => {
    return <SignInPage />;
};

export default SignIn;
