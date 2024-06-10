import React, { TextareaHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    errorMessage?: string | null
}

const Textarea = ({errorMessage, ...rest}: TextareaProps) => {
    return(
        <div className={styles.container}>
            <textarea
                cols={10} 
                rows={10} 
                className={!!errorMessage ? styles.inputError : styles.input}
                {...rest}
            />
            {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
        </div>
    );
}
export default Textarea;