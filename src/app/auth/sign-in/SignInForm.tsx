'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '@/app/auth/sign-in/sign-in.module.scss';
import TextInput from '@/components/input/text';
import { SignInFormSchemaType } from '@/app/auth/sign-in/sign-in-form.schema';

const SignInForm = () => {
    const { register, handleSubmit } = useForm<SignInFormSchemaType>();
    const onSubmit: SubmitHandler<SignInFormSchemaType> = (data) =>
        console.log(data);

    return (
        <form
            className={styles['sign-in-form']}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextInput
                aria-label={'Email'}
                id={'email'}
                placeholder={'Enter Email address'}
                type={'email'}
                {...register('email')}
            />
        </form>
    );
};

export default SignInForm;
