'use client'

import React, { FormEvent, useEffect } from 'react';
import Image from 'next/image';
import * as Three from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

import styles from './styles.module.css';

import worldSVG from '../../../public/world.svg';
import EarthCanvas from '@/components/EarthCanvas';
import StarsCanvas from '@/components/StarsCanvas';
import { EmailTemplate } from '@/components/EmailTemplate';

const Contact = () => {
    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log("ENTROU AQUI");

        // return <EmailTemplate name="Henrique" email="henrique.aa01@gmail.com" message='Teste Message'/>
        await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Henrique',
                email: 'henrique.aa01@gmail.com',
                message: 'Hello world'
            })
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.canvas}>
                <EarthCanvas/>
            </div>
            <div className={styles.box}>
                <div className={styles.boxTitle}>
                    Get in Touch
                </div>
                <div className={styles.boxTitleEmphasis}>Contact</div>
                <div className={styles.boxContent}>
                    <div className={styles.field}>
                        <div className={styles.label}>Name</div>
                        <input type="text" className={styles.input} placeholder="What's your name?"/>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Email</div>
                        <input type="text" className={styles.input} placeholder="What's your email?"/>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Message</div>
                        <textarea name="" id="" cols={10} rows={10} className={styles.input} placeholder="What  ?"/>
                    </div>
                    <button className={styles.sendButton} onClick={handleSubmit}>
                        <h6 className={styles.sendButtonTitle}>Send</h6>
                    </button>
                </div>
            </div>
            
            
            {/* <Image src={worldSVG} alt="World"/> */}
        </div>
    );
}
export default Contact;