'use client'
import Image from 'next/image'

import styles from './page.module.css'

import Blob1 from '../../public/Blob1.svg';
import Blob2 from '../../public/Blob2.svg';
import Blob3 from '../../public/Blob3.svg';
import Blob4 from '../../public/Blob4.svg';
import Logo from '@/components/Logo';
import ProjectsNew from './ProjectsNew/page';
import Testimonials from './Testimonials/page';
import Contact from './Contact/page';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import StarsCanvas from '@/components/StarsCanvas';
import Overview from './Overview/page';
import { RemotionRoot } from '@/components/animoji/root';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Scrollbar, EffectCreative } from 'swiper/modules';
import { EmailTemplate } from '@/components/EmailTemplate';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const teste = useRef<HTMLDivElement>(null);

  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Image src={Blob1} alt='' className={styles.blob1}/>
        <Image src={Blob2} alt='' className={styles.blob2}/>
        <Image src={Blob3} alt='' className={styles.blob3}/>
        <Image src={Blob4} alt='' className={styles.blob4}/>
        {/* // <div className={styles.glass}>  */}
            <div className={styles.content}>
              <div className={styles.contentCol}>
                <div className={styles.title}>
                  <h1 className={styles.text}>Hi, I'm</h1>
                </div>
                <Logo/>
                <div className={styles.description}>
                  <h3 className={styles.emphasis}>Mobile Developer</h3>
                  <h3 className={styles.subtitle}> | I bring your</h3>
                  <h3 className={styles.emphasis}>ideas</h3>
                  <h3 className={styles.subtitle}>to</h3>
                  <h3 className={styles.emphasis}>life</h3>
                </div>
              </div>
            </div>
        {/* // </div>  */}
      </main>
      <div  ref={teste}>
      <Overview/>
      </div>
      <ProjectsNew/>
      {/* <Testimonials/> */}
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
      <footer className={styles.footer}>
        <div className={styles.info}>
          <Logo sm/>
          <div className={styles.descriptionFooter}>
            Web and Mobile Development
          </div>
        </div>
        <div className={styles.links}>
          <svg width="0" height="0">
              <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop stopColor="#FF3B3B" offset="0%" />
                  <stop stopColor="#6600CC" offset="100%" />
              </linearGradient>
          </svg>
          <Link href="">
              <FaTwitter
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </Link>
          <Link href="">
              <FaInstagram
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </Link>
          <Link href="">
              <FaGithub
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </Link>
          <Link href="">
              <FaLinkedin
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </Link>
        </div>

      </footer> 
    </div>
  )
}
