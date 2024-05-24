import React from 'react';

import styles from './styles.module.css';

interface BadgedProps{
    src: string,
    alt: string
}

const Badge = ({src, alt}: BadgedProps) => {
    return(
        <div className={styles.container}>
            <img src={src} alt={alt} className={styles.icon} />
        </div>
    );
}
export default Badge;