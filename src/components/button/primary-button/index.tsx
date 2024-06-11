import styles from './primary-button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const PrimaryButton = ({ children, ...props }: PrimaryButtonProps) => {
    return (
        <button
            className={`${styles['primary-button']} ${props.className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
