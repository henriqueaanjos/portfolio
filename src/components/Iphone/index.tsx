import Image from 'next/image';
import React from 'react';

import styles from './styles.module.css';
import IphoneSvg from '../../../public/iphone.svg';

interface IphoneProps{
    src: string,
    name: string
}

const Iphone = ({src, name}: IphoneProps) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={src} alt={name} className={styles.thumbnail} />
            </div>
            <Image src={IphoneSvg} alt='' className={styles.mold}/>
        </div>
    );
}
export default Iphone;