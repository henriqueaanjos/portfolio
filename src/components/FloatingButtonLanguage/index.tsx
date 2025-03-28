import { useState } from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

import flagUS from  '@/assets/flags/usa.svg';
import flagBR from  '@/assets/flags/brazil.svg';
import { useLanguage } from '@/hooks/useLanguage';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30.
}

export function FloatingButtonLanguage(){
    const [showLists, setShowLists] = useState(false);

    const {language, setLanguage} = useLanguage();

    function handleChangeSwitchMode(){
        if(language==='br') 
            setLanguage('en');
        else
            setLanguage('br');
        setShowLists(false);
    }

    function handleShowLists(){
        setShowLists(old => !old);
    }

    return (
        <motion.div className={styles.container} layout transition={spring} initial={{y: -40, opacity: 0}} animate={{y:0, opacity: 1}}>
            <div  className={styles.dot} onClick={handleShowLists}>
                <Image src={language=== 'br' ? flagBR : flagUS} alt='Language' className={styles.image}/>
            </div>
            {showLists &&
            <motion.div layout transition={spring} initial={{y: -40, opacity: 0}} animate={{y:0, opacity: 1}}
            className={styles.list} onClick={handleChangeSwitchMode}>
                <Image src={language === 'br' ? flagUS : flagBR} alt='Language' className={styles.imageList}/>
            </motion.div>
            }
        </motion.div>
    )
}