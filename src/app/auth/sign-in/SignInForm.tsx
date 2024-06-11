'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/app/auth/sign-in/sign-in.module.scss';
import TextInput from '@/components/input/text';
import SignInFormSchema, {
    SignInFormSchemaType,
} from '@/app/auth/sign-in/sign-in-form.schema';
import PasswordInput from '@/components/input/password';

const SignInForm = () => {
    const defaultValues: SignInFormSchemaType = {
        email: '',
        password: '',
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormSchemaType>({
        defaultValues,
        resolver: zodResolver(SignInFormSchema),
    });
    const onSubmit: SubmitHandler<SignInFormSchemaType> = (data) => {
        console.log(data);
    };

    return (
        <form
            className={styles['sign-in-form']}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextInput<SignInFormSchemaType>
                aria-label={'Email'}
                id={'email'}
                placeholder={'Enter Email address'}
                type={'email'}
                error={errors.email}
                name={'email'}
                register={register}
            />

            <PasswordInput<SignInFormSchemaType>
                aria-label={'Password'}
                id={'password'}
                placeholder={'Enter password'}
                error={errors.password}
                name={'password'}
                register={register}
            />
        </form>
    );
};

export default SignInForm;
