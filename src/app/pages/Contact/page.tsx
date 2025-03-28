'use client'

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './styles.module.css';

import EarthCanvas from '@/components/EarthCanvas';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/utils/translations';


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
 
export default function Contact(){
    const [messageSended, setMessageSended] = useState(false);

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(contactSchema)
    });

    const { language } = useLanguage();


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
    function handleSendOtherMessage(){
        setMessageSended(false);
    }

    return(
        <div className={styles.container}>
            {messageSended ?
                <div className={styles.box}>
                    <div className={styles.boxContent}>
                        <div className={styles.boxTitle}>
                            {translations[language].contact.successfullTitle}
                        </div>
                        <div className={styles.boxSuccessfullyTitleEmphasis}>
                            {translations[language].contact.successfullEmphasis}
                        </div>
                        <div className={styles.boxSubtitle}>
                            {translations[language].contact.successfullSubtitle}
                        </div>
                        <button className={styles.sendButton} onClick={handleSendOtherMessage}>
                            <h6 className={styles.sendButtonTitle}>
                                {translations[language].contact.sucessfullButton}
                            </h6>
                        </button>
                    </div>
                </div>
            :
            <div className={styles.box}>
                <div className={styles.boxTitle}>
                    {translations[language].contact.title}
                </div>
                <div className={styles.boxTitleEmphasis}>{translations[language].contact.emphasis}</div>
                <div className={styles.boxContent}>
                    <div className={styles.field}>
                        <div className={styles.label}>{translations[language].contact.labels[0]}</div>
                        <Controller
                            name='name'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Input 
                                    type="text" 
                                    placeholder={translations[language].contact.placeholder[0]}
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.name?.message}
                                />
                            }
                        />
                        
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>{translations[language].contact.labels[1]}</div>
                        <Controller
                            name='email'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Input 
                                    type="text" 
                                    placeholder={translations[language].contact.placeholder[1]}
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.email?.message}
                                />
                            }
                        />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.label}>{translations[language].contact.labels[2]}</div>
                        <Controller
                            name='message'
                            control={control}
                            render={({field: {onChange, value}}) => 
                                <Textarea
                                    placeholder={translations[language].contact.placeholder[2]}
                                    value={value}
                                    onChange={onChange}
                                    errorMessage={errors.message?.message}
                                />
                            }
                        />
                    </div>
                    <button className={styles.sendButton} onClick={handleSubmit(onSubmit)}>
                        <h6 className={styles.sendButtonTitle}>{translations[language].contact.button}</h6>
                    </button>
                </div>
            </div>
            }
            
            <div className={styles.canvas}>
                <EarthCanvas/>
            </div>
        </div>
    );
}