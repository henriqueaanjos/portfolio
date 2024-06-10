'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { GradientText } from '@/components/GradientText';

import Me from '../../../../public/me.svg';

import styles from './styles.module.css';

const Overview = () => {
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <GradientText text='Overview'/>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.infoHeader}>
                        <h1 className={styles.infoTitle}>
                            Sou o Henrique,
                        </h1>
                        <h3 className={styles.infoSubtitle}>
                            e este é o meu portfólio digital!
                        </h3>
                    </div>
                    <p className={styles.infoDescription}>
                        Meu nome é Henrique Anjos, tenho 25 anos e me considero um entusiasta do desenvolvimento mobile, especialmente com React Native. Atualmente, estou concluindo a jornada de Ciências da Computação na UFMS, além de ter uma formação em Informática pelo IFMS.
                        <br/><br/>
                        Trabalho nesse mundo do desenvolvimento desde 2019, mas minha paixão pela programação começou há 10 anos - sim, é muita história pra contar!
                        <br/><br/>
                        Minha especialidade é solucionar problemas e dar vida as suas ideias! Já pensou naquele projeto digital que agregaria valor a sua empresa ou negócio? Ou então algo que automatizaria sua vida ? Que tal ressuscitar esse sonho? Pode ser a chance de ver aquela ideia genial finalmente decolar!
                        <br/><br/>
                        E falando em decolar, se você está aí, refazendo as mesmas coisas e desejando ter mais tempo para diversão ou família, vamos mudar isso! Imagine quanto tempo você pode ganhar!
                        <br/><br/>
                        Fique à vontade para explorar meus projetos!
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
                        Estou aqui para ajudar suas ideias a ganharem vida! Entre em contato e vamos criar algo incrível juntos!
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
export default Overview;