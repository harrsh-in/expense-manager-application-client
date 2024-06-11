'use client';

import { ChangeEvent, useState } from 'react';
import styles from '@/app/auth/sign-in/sign-in.module.scss';
import TextInput from '@/components/input/text';

const SignInForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <form className={styles['sign-in-form']}>
            <TextInput
                aria-label={'Email'}
                id={'email'}
                placeholder={'Enter Email address'}
                type={'email'}
                value={email}
                onChange={handleEmailChange}
            />
        </form>
    );
};

export default SignInForm;
