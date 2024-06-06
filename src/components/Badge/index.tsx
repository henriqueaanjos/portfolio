import React from 'react';

import styles from './styles.module.css';
import Image from 'next/image';

interface BadgedProps{
    src: string,
    alt: string
}

const Badge = ({src, alt}: BadgedProps) => {
    return(
        <div className={styles.container}>
            <Image src={src} alt={alt} width={32} height={32}/>
        </div>
    );
}
export default Badge;