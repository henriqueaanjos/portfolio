'use client'

import React, { useRef } from 'react';

import styles from './styles.module.css';
import CommentCard from '@/components/CommentCard';
import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion';
import Carrousel from '@/components/Carrousel';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';


import Me from '../../../public/me.png';


const Overview = () => {
    // const baseX = useMotionValue(0);
    // const { scrollY } = useScroll();
    // const scrollVelocity = useVelocity(scrollY);
    // const smoothVelocity = useSpring(scrollVelocity, {
    //   damping: 50,
    //   stiffness: 400
    // });
    // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    //   clamp: false
    // });
  
    // const y = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    // const directionFactor = useRef<number>(1);
    // useAnimationFrame((t, delta) => {
    //   let moveBy = directionFactor.current * .6 * (delta / 1000);
  
    //   /**
    //    * This is what changes the direction of the scroll once we
    //    * switch scrolling directions.
    //    */
    //   if (velocityFactor.get() < 0) {
    //     directionFactor.current = -1;
    //   } else if (velocityFactor.get() > 0) {
    //     directionFactor.current = 1;
    //   }
  
    //   moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
    //   baseX.set(baseX.get() + moveBy);
    // });

   

    return(
        <div className={styles.container}>
            <motion.div className={styles.titleContent}
                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1
                }}
                transition={{
                    type:"Spring",
                    stiffness: .2 ,
                    duration: .6, 
                    delay:0, 
                    ease:'easeIn' 
                }}
                // style={{ y }}
            >
                <h1 className={styles.title}>Overview</h1>
            </motion.div>
            <motion.div className={`${styles.content}`}
                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1
                }}
                transition={{
                    type:"Spring",
                    stiffness: .2 ,
                    duration: .6, 
                    delay:0, 
                    ease:'easeIn' 
                }}
            >
                <div className={styles.description}>
                    <h1 className={styles.descriptionTitle}>
                        Olá, sou o Henrique e este é o meu portfólio digital! 🚀
                    </h1>
                    <p className={styles.descriptionParagraph}>
                        Fique à vontade para explorar meus projetos, mas antes, que tal bater um papo descontraído? Meu nome é Henrique Anjos, tenho 25 anos e me considero um entusiasta do desenvolvimento mobile, especialmente com React Native. Atualmente, estou concluindo a jornada de Ciências da Computação na UFMS, além de ter uma formação técnica em Informática pelo IFMS. Já estou trabalhando nesse mundo da informática desde 2019, mas minha paixão pela programação começou há 10 anos – sim, é muita história pra contar! 😄
                        <br/><br/>
                        Aqui, a gente gosta de resolver problemas e dar vida a ideias incríveis! Já pensou naquele projeto digital que ficou só na ideia? Que tal ressuscitar esse sonho? Pode ser a chance de ver aquela ideia genial finalmente decolar!
                        <br/><br/>
                        E falando em decolar, quem nunca se viu perdendo tempo com tarefas repetitivas no dia a dia? Se você está aí, refazendo as mesmas coisas e desejando ter mais tempo para diversão ou família, vamos mudar isso! Imagina quanto tempo você pode ganhar! 😎
                    </p>
                </div>
                <div className={styles.frame}>
                 <img src='me-2.jpg' alt='Me' className={styles.photo}/>
                    </div>
            </motion.div>
            <motion.div 
                className={styles.quoteBorder}
                initial={{
                    background: "linear-gradient(to right,#FF3B3B 0%, #B61F81 50%,#6600CC 100%)",
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1
                }}
                animate={{
                    background: [
                        "linear-gradient(to right, #6600CC 0%, #FF3B3B 50%  ,#B61F81 100%)",
                        "linear-gradient(to right,#B61F81 0%, #6600CC 50%,#FF3B3B 100%)",
                        "linear-gradient(to right,#FF3B3B 0%, #B61F81 50%,#6600CC 100%)",
                        "linear-gradient(to right, #6600CC 0%, #FF3B3B 50%  ,#B61F81 100%)"
                    ],
                }}
                transition={{
                    type:"Spring",
                    stiffness: .2 ,
                    duration: .6, 
                    delay:0, 
                    ease:'easeIn' 
                }}
            >
                <div className={styles.quote}
                
                >
                    Bora conversar? Estou aqui para ajudar suas ideias a ganharem vida! Entre em contato e vamos criar algo incrível juntos! 🚀✨
                </div>
            </motion.div>
        </div>
    );
}
export default Overview;