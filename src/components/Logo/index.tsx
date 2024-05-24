import React from 'react';

import styles from './styles.module.css';

interface logoProps{
    sm?: boolean
}

const Logo = ({sm}: logoProps) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>

                <h1 className={`${sm ? styles.titleSm : styles.title}`}>
                    Henrique Anjos
                </h1>
            </div>
        </div>
    );
}
export default Logo;