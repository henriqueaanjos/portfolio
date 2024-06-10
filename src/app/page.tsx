'use client'
import Image from 'next/image'

import styles from './page.module.css'

import Blob1 from '../../public/Blob1.svg';
import Blob2 from '../../public/Blob2.svg';
import Blob3 from '../../public/Blob3.svg';
import Blob4 from '../../public/Blob4.svg';
import Logo from '@/components/Logo';
import ProjectsNew from './pages/Projects/page';
import Testimonials from './pages/Testimonials/page';
import Contact from './pages/Contact/page';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter} from 'react-icons/fa6';
import StarsCanvas from '@/components/StarsCanvas';
import Overview from './pages/Overview/page';
import { useRef } from 'react';

export default function Home() {
  const teste = useRef<HTMLDivElement>(null);

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.blobs}>
          <Image src={Blob1} alt='' className={styles.blob1}/>
          <Image src={Blob2} alt='' className={styles.blob2}/>
          <Image src={Blob3} alt='' className={styles.blob3}/>
          <Image src={Blob4} alt='' className={styles.blob4}/>
        </div>
            <div className={styles.content}>
              <div className={styles.contentCol}>
                <div className={styles.title}>
                  <h1 className={styles.text}>Hi, I&apos;m</h1>
                </div>
                <Logo/>
                <h3 className={styles.subtitle}>Mobile Developer</h3>
                <div className={styles.description}>
                  <h2 className={styles.actionPhrase}>I bring your</h2>
                  <h3 className={styles.actionPhraseEmphasis}>ideas</h3>
                  <h3 className={styles.actionPhrase}>to</h3>
                  <h3 className={styles.actionPhraseEmphasis}>life</h3>
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
        <button className={styles.info} onClick={scrollToTop}>
          <Logo sm/>
          <div className={styles.descriptionFooter}>
            Mobile Developer
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
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </a>
          <a href="https://www.instagram.com/henriqueanjos.dev/" target='_blank'>
              <FaInstagram
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </a>
          <a href="https://github.com/henriqueaanjos" target='_blank'>
              <FaGithub
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </a>
          <a href="https://www.linkedin.com/in/henrique-aanjos/" target='_blank'>
              <FaLinkedin
                  size='2rem'
                  style={{fill: "url(#gradient)"}}
              />
          </a>
        </div>

      </footer> 
    </div>
  )
}
