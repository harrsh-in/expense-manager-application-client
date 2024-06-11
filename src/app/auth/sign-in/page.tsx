import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In | Budget Manager',
    description: 'A budget manager for all your needs.',
};

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>
        </div>
    );
};

const SignIn = () => {
    return <SignInPage />;
};

export default SignIn;
