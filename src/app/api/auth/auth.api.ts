import axios from 'axios';

export const SignInApi = async ({
    credentials,
}: {
    credentials: Record<'username' | 'password', string> | undefined;
}) => {
    return await axios.post('https://dummyjson.com/auth/login', {
        ...credentials,
        username: 'emilys',
        password: 'emilyspass',
    });
};
