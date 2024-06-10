import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    errorMessage?: string | null
}

const Input = ({errorMessage, ...rest}: InputProps) => {
    return(
        <div className={styles.container}>
            <input
                className={!!errorMessage ? styles.inputError : styles.input}
                {...rest}
            />
            {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    );
}
export default Input;