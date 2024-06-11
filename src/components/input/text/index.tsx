import React, { InputHTMLAttributes } from 'react';
import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from 'react-hook-form';
import styles from './text.module.scss';

interface TextInputProps<T extends FieldValues>
    extends InputHTMLAttributes<HTMLInputElement> {
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
}

const TextInput = <T extends FieldValues>({
    id,
    'aria-label': ariaLabel,
    value,
    className,
    register,
    name,
    error,
    ...props
}: TextInputProps<T>) => {
    return (
        <div className={styles['text-input']}>
            <input
                id={id}
                value={value}
                className={`${styles['text-input-field']} ${value ? styles['has-value'] : ''} ${className}`}
                {...register(name)}
                {...props}
            />
            <label htmlFor={id} className={styles['text-input-label']}>
                {ariaLabel}
            </label>

            {error ? (
                <span className={styles['text-input-error']}>
                    {error.message}
                </span>
            ) : (
                ' '
            )}
        </div>
    );
};

export default TextInput;
