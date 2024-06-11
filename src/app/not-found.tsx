import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page not found | Budget Manager',
    description:
        'Seems you are lost! But this is a budget manager for all your needs.',
};

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href='/'>Return Home</Link>
        </div>
    );
};

export default NotFound;
