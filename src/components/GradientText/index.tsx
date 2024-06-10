import React from 'react';

import styles from './styles.module.css';

interface Props{
    text: string;
}

export function GradientText({text}: Props){
    return(
        <div className={styles.container}>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
}