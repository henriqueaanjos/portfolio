'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { GradientText } from '@/components/GradientText';
import { CarrouselTechs } from '@/components/CarrouselTechs';

import Me from '@/assets/me.svg';

import { translations } from '@/utils/translations';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './styles.module.css';

export default function Overview(){
    const {language} = useLanguage();
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <GradientText text={translations[language].overview.title}/>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.infoHeader}>
                        <h1 className={styles.infoTitle}>
                            {translations[language].overview.hero}
                        </h1>
                        <h3 className={styles.infoSubtitle}>
                            {translations[language].overview.subtitle}
                        </h3>
                    </div>
                    <p className={styles.infoDescription}>
                        {translations[language].overview.description.map(item => (
                           <> 
                            {item} <br/> <br/>
                           </>
                        ))}
                    </p>
                </div>
                <Image src={Me} alt='Me' className={styles.image}/>
            </div>
            <motion.div 
                className={styles.quoteBorder}
                initial={{
                    background: "linear-gradient(to right,#E6006E 31%, #ED5A4B 69%,#F4B628 100%)"
                }}
                animate={{
                    background: [
                        "linear-gradient(to right,#E6006E 31%, #ED5A4B 69%,#F4B628 100%)",
                        "linear-gradient(to right,#F4B628 31%, #E6006E 69%,#ED5A4B 100%)",
                        "linear-gradient(to right,#ED5A4B 31%, #F4B628 69%,#E6006E 100%)",
                        "linear-gradient(to right,#E6006E 31%, #ED5A4B 69%,#F4B628 100%)"
                    ],
                }}
                transition={{
                    type:"Spring",
                    stiffness: .2 ,
                    duration: 2, 
                    delay:0,
                    repeat: Infinity
                }}
            >
                <div className={styles.quote}>
                    <span className={styles.quoteText}>
                        {translations[language].overview.quote}
                    </span>
                    <CarrouselTechs/>
                </div>
                
            </motion.div>
        </div>
    );
}