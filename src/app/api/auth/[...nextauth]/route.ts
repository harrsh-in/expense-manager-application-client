import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { AuthOptions } from 'next-auth';
import { SignInApi } from '@/app/api/auth/auth.api';

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    type: 'text',
                },
                password: {
                    type: 'password',
                },
            },
            async authorize(credentials) {
                try {
                    const userResponse = await SignInApi({ credentials });

                    const userData = userResponse.data;
                    if (!userData) {
                        return;
                    }
                    return userData;
                } catch (error) {
                    console.error('Failed to authenticate:', error);
                    throw new Error('Failed to authenticate.');
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/sign-in',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
