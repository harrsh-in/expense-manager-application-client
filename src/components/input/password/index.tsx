import { InputHTMLAttributes, useState } from 'react';
import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from 'react-hook-form';
import styles from './password.module.scss';
import HideVisibility from '@/icons/HideVisibility';
import Visibility from '@/icons/Visibility';

interface PasswordInputProps<T extends FieldValues>
    extends InputHTMLAttributes<HTMLInputElement> {
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
}

const PasswordInput = <T extends FieldValues>({
    id,
    'aria-label': ariaLabel,
    value,
    className,
    register,
    name,
    error,
    ...props
}: PasswordInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={styles['password-input-container']}>
            <div className={styles['password-input']}>
                <input
                    id={id}
                    value={value}
                    type={showPassword ? 'text' : 'password'}
                    className={`${styles['password-input-field']} ${value ? styles['has-value'] : ''} ${className}`}
                    {...register(name)}
                    {...props}
                />
                <label htmlFor={id} className={styles['password-input-label']}>
                    {ariaLabel}
                </label>

                <span
                    className={styles['password-input-toggle']}
                    onClick={toggleShowPassword}
                    aria-label={
                        showPassword ? 'Hide password' : 'Show password'
                    }
                >
                    {showPassword ? <HideVisibility /> : <Visibility />}
                </span>
            </div>

            <span className={styles['password-input-error']}>
                {error ? error.message : ' '}
            </span>
        </div>
    );
};

export default PasswordInput;
