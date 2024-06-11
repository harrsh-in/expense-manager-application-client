import styles from './text.module.scss';
import { InputHTMLAttributes } from 'react';

const TextInput = ({
    id,
    'aria-label': ariaLabel,
    value,
    className,
    'aria-errormessage': error,
    ...props
}: TextInputProps) => {
    return (
        <div className={styles['text-input']}>
            <input
                id={id}
                value={value}
                className={`${styles['text-input__field']} ${value ? styles['has-value'] : ''} ${className} `}
                {...props}
            />
            <label htmlFor={id} className={styles['text-input__label']}>
                {ariaLabel}
            </label>

            {error && (
                <span className={styles['text-input__error']}>{error}</span>
            )}
        </div>
    );
};

export default TextInput;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
