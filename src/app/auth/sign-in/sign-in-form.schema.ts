import { object, string, z } from 'zod';

const SignInFormSchema = object({
    email: string({
        message: 'Please enter a valid email address',
        required_error: 'Please enter your email address',
        invalid_type_error: 'Please enter a valid email address',
    }).email({
        message: 'Please enter a valid email address',
    }),
    password: string({
        message: 'Please enter a valid password',
        required_error: 'Please enter your password',
        invalid_type_error: 'Please enter a valid password',
    }).min(6, 'Password must be at least 6 characters long'),
});

export default SignInFormSchema;

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
