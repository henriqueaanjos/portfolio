'use client'
import { useRef } from 'react';
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import styles from './page.module.css'

import Blob1 from '@/assets/Blob1.svg';
import Blob2 from '@/assets/Blob2.svg';
import Blob3 from '@/assets/Blob3.svg';
import Blob4 from '@/assets/Blob4.svg';

import Logo from '@/components/Logo';
import StarsCanvas from '@/components/StarsCanvas';
import { FloatingButtonLanguage } from '@/components/FloatingButtonLanguage';

import { useLanguage } from '@/hooks/useLanguage';

import {translations} from '@/utils/translations';

import ProjectsNew from './pages/Projects/page';
import Contact from './pages/Contact/page';
import Overview from './pages/Overview/page';
import Testimonials from './pages/Testimonials/page';

export default function Home() {
  const teste = useRef<HTMLDivElement>(null);

  const {language} = useLanguage();

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.blobs}>
          <Image src={Blob1} alt='' className={styles.blob1} />
          <Image src={Blob2} alt='' className={styles.blob2} />
          <Image src={Blob3} alt='' className={styles.blob3} />
          <Image src={Blob4} alt='' className={styles.blob4} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentCol}>
            <div className={styles.title}>
              <h1 className={styles.text}>{translations[language].home.title}</h1>
            </div>
            <Logo />
            <h3 className={styles.subtitle}>{translations[language].home.job}</h3>
            <div className={styles.description}>
              <h2 className={styles.actionPhrase}>{translations[language].home.description[0]}</h2>
              <h3 className={styles.actionPhraseEmphasis}>{translations[language].home.emphasis[0]}</h3>
              <h3 className={styles.actionPhrase}>{translations[language].home.description[1]}</h3>
              <h3 className={styles.actionPhraseEmphasis}>{translations[language].home.emphasis[1]}</h3>
            </div>
          </div>
        </div>
        {/* // </div>  */}
      </main>
      <div ref={teste}>
        <Overview />
      </div>
      <ProjectsNew />
      {/* <Testimonials/> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <footer className={styles.footer}>
        <button className={styles.info} onClick={scrollToTop}>
          <Logo sm />
          <div className={styles.descriptionFooter}>
            {translations[language].home.job}
          </div>
        </button>
        <div className={styles.links}>
          <svg width="0" height="0">
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop stopColor="#E6006E" offset="31%" />
              <stop stopColor="#ED5A4B" offset="69%" />
              <stop stopColor="#F4B628" offset="100%" />
            </linearGradient>
          </svg>
          <a href="https://x.com/henriquean97476" target='_blank'>
            <FaXTwitter
              size={32}
              style={{ fill: "url(#gradient)" }}
            />
          </a>
          <a href="https://www.instagram.com/henriqueanjos.dev/" target='_blank'>
            <FaInstagram
              size={32}
              style={{ fill: "url(#gradient)" }}
            />
          </a>
          <a href="https://github.com/henriqueaanjos" target='_blank'>
            <FaGithub
              size={32}
              style={{ fill: "url(#gradient)" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/henrique-aanjos/" target='_blank'>
            <FaLinkedin
              size={32}
              style={{ fill: "url(#gradient)" }}
            />
          </a>
        </div>
      </footer>
      <FloatingButtonLanguage />
    </div>
  )
}
