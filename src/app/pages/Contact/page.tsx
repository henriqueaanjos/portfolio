'use client'

import React, { FormEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import * as Three from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

import styles from './styles.module.css';

import worldSVG from '../../../public/world.svg';
import EarthCanvas from '@/components/EarthCanvas';
import StarsCanvas from '@/components/StarsCanvas';
import { EmailTemplate } from '@/components/EmailTemplate';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';


interface FormData {
    name: string;
    email: string;
    message: string;
}

const contactSchema = yup.object({
    name: yup.string().required('Your name is required!'),
    email: yup.string().email('Digit a valid email!').required('Your email is required!'),
    message: yup.string().nonNullable().required('Your message is required!')
});

const Contact = () => {
    const [messageSended, setMessageSended] = useState(false);

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(contactSchema)
    });


    async function onSubmit({name, email, message}: FormData){
        console.log(name, email, message);
        await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                message
            })
        })
        setMessageSended(true);
    }

    return(
        <div className={styles.container}>
            {messageSended ?
                <div className={styles.box}>
                    <div className={styles.boxContent}>
                        <div className={styles.boxTitleEmphasis}>
                            Message successifully sended!
                        </div>
                    </div>
                </div>
            :
            <div className={styles.box}>
                <div className={styles.boxTitle}>
                    Get in Touch
                </div>
                <div className={styles.boxTitleEmphasis}>Contact</div>
                <div className={styles.boxContent}>
                    <div className={styles.field}>
                        <div className={styles.label}>Name</div>
                        <Controller
                            name='name'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Input 
                                    type="text" 
                                    placeholder="What's your name?"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.name?.message}
                                />
                            }
                        />
                        
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Email</div>
                        <Controller
                            name='email'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Input 
                                    type="text" 
                                    placeholder="What's your email?"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.email?.message}
                                />
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>Message</div>
                        <Controller
                            name='message'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Textarea
                                    placeholder="What's your message?"
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.message?.message}
                                />
                            }
                        />
                    </div>
                    <button className={styles.sendButton} onClick={handleSubmit(onSubmit)}>
                        <h6 className={styles.sendButtonTitle}>Send</h6>
                    </button>
                </div>
            </div>
            }
            
            <div className={styles.canvas}>
                <EarthCanvas/>
            </div>
            
            {/* <Image src={worldSVG} alt="World"/> */}
        </div>
    );
}
export default Contact;