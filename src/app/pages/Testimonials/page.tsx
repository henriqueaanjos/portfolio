'use client'

import React, { useRef } from 'react';

import styles from './styles.module.css';
import Carrousel from '@/components/Carrousel';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Testimonials = () => {


    return(
        <div className={styles.container}>
            <div className={styles.titleContent}>
                <h1 className={styles.title}>Testimonials</h1>
            </div>
            <div className={`${styles.content}`}>
                <div className={styles.comments}>
                    <Carrousel data={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}/>
                    <Carrousel data={[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} reverse/>
                </div>
                <div className={styles.banner}>
                    <div className={styles.bannerTitle}>Gostou do meu trabalho ? Gostaria de ter seu comentário aqui também ?</div>
                    <div className={styles.bannerDescription}>Compartilhe seu comentário e me marque em uma das minhas redes sociais que ele aparecerá por aqui!</div>
                    <div className={styles.bannerLinks}>
                        <svg width="0" height="0">
                            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                <stop stopColor="#FF3B3B" offset="0%" />
                                <stop stopColor="#6600CC" offset="100%" />
                            </linearGradient>
                        </svg>
                        <Link href="">
                            <FaTwitter
                                size={32}
                                style={{fill: "url(#gradient)"}}
                            />
                        </Link>
                        <Link href="">
                            <FaInstagram
                                size={32}
                                style={{fill: "url(#gradient)"}}
                            />
                        </Link>
                        <Link href="">
                            <FaGithub
                                size={32}
                                style={{fill: "url(#gradient)"}}
                            />
                        </Link>
                        <Link href="">
                            <FaLinkedin
                                size={32}
                                style={{fill: "url(#gradient)"}}
                            />
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Testimonials;