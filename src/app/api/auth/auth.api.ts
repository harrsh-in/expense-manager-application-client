import axios from 'axios';

export const SignInApi = async ({
    credentials,
}: {
    credentials: Record<'email' | 'password', string> | undefined;
}) => {
    return await axios.post('https://dummyjson.com/auth/login', {
        ...credentials,
        username: 'emilysa',
        password: 'emilyspass',
    });
};
