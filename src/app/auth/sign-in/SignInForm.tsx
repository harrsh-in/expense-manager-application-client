'use client';

import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/app/auth/sign-in/sign-in.module.scss';
import TextInput from '@/components/input/text';
import SignInFormSchema, {
    SignInFormSchemaType,
} from '@/app/auth/sign-in/sign-in-form.schema';
import PasswordInput from '@/components/input/password';
import PrimaryButton from '@/components/button/primary-button';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

interface SignInFormProps {
    csrfToken: string;
}

const SignInForm = ({ csrfToken }: SignInFormProps) => {
    const defaultValues: SignInFormSchemaType = {
        email: '',
        password: '',
    };

    const router = useRouter();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<SignInFormSchemaType>({
        defaultValues,
        resolver: zodResolver(SignInFormSchema),
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ['signIn'],
        mutationFn: () =>
            signIn('credentials', {
                redirect: false,
                ...getValues(),
            }),
        onSuccess: (data) => {
            console.log(data);
            if (!data) {
                return;
            }
            if (!data.ok) {
                toast.error(data.error);
                return;
            }

            console.log('Signed in');
            window.history.replaceState(null, '', '/app/dashboard');
            router.push('/app/dashboard');
        },
        onError: (error) => {
            console.error('Failed to sign in');
            console.log(error);
        },
    });

    const onSubmit: SubmitHandler<SignInFormSchemaType> = (data) => {
        console.log(data);
        mutate();
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

            <PrimaryButton type='submit'>Sign In</PrimaryButton>
        </form>
    );
};

export default SignInForm;
