'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaMobile, FaLaptop } from 'react-icons/fa'

import styles from './styles.module.css';

import Doted from '../../../public/doted.svg';

import Switch from '@/components/Switch';
import Iphone from '@/components/Iphone';
import Badge from '@/components/Badge';

import { projects } from '@/utils/projects';
import { ProjectDTO } from '@/DTO/ProjectsDTO';
import { Keyboard, Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

import { motion, useAnimation } from 'framer-motion';
import Modal, { ModalHandles } from '@/components/Modal';

const ProjectsNew = () => {
    const [platform, setPlatform] = useState('mobile');
    const [project, setProject] = useState(projects[1] as ProjectDTO);
    const [color, setColor] = useState(projects[1].color);
    const [nextThumbnail, setNextThumbnail] = useState(projects[1].thumbnail);
    const [isLoadingAnimation, setIsLoadingAnimation] = useState(false);

    const projectsMain = useRef<HTMLDivElement>(null);
    const projectscontent = useRef<HTMLDivElement>(null);
    const modalRef = useRef<ModalHandles>(null);

    const infoAnimation = useAnimation();

    function animation(){
        infoAnimation.start({
            opacity: 0,
            transition: {
                duration: .1
            }
        });
        setTimeout(()=> infoAnimation.start({
            opacity: 1,
            transition: {
                duration: .5
            }
        }), 1200);
    }
    
    function handleChangeFocus(index: number){
        const newProject = projects.find(p => p.id === index+1);
        if(newProject){
            setProject(newProject);
        }
    }

    const handleModalDescriptionOpen = useCallback(() => {
        modalRef.current?.handleOpenModal();
        modalRef.current?.handleChangeTitle(
            <>
                <img src={project.icon} alt=''/>
            </>
        );
        modalRef.current?.handleChangeContent(
            <p>{project.description}</p>
        )
    }, [project]);

    const handleModalTechologiesOpen = useCallback(() => {
        modalRef.current?.handleOpenModal();
        modalRef.current?.handleChangeTitle(
            <>
                <img src={project.icon} alt=''/>
            </>
        );
        modalRef.current?.handleChangeContent(
            <>
            {project.tecnologies.map( tech => 
                <div className={styles.techModalContent}>
                    <Badge src={tech.icon} alt={tech.name} key={tech.id}/>
                    <h1 className={styles.techModalName}>{tech.name}</h1>
                </div>
            )}
            </>
        )
    }, [project]);

    useEffect(()=> {
        setColor(project.color);
        if(projectscontent.current)
            projectscontent.current.style.backgroundColor = project.color;
    }, [project]);


    return(
        <div className={styles.container} ref={projectsMain}>
            <div className={styles.titleContent}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            <Modal ref={modalRef} />
            <div className={`${styles.content}`} ref={projectscontent}>
                <Image src={Doted} alt='' className={styles.doted}/>
                <div className={styles.presentation}>
                    <Swiper 
                        modules={[Keyboard, Pagination, Navigation, Autoplay]}
                        effect={'coverflow'}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        keyboard
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            waitForTransition: true,
                        }}
                        initialSlide={0}
                        speed={500}
                        onSwiper={e => handleChangeFocus(e.realIndex)}
                        onActiveIndexChange={ e => handleChangeFocus(e.realIndex)}
                    >
                        {
                            projects.map((mov, i) => {
                                return(
                                    <SwiperSlide className={styles.swiperSlide} key={i}>
                                        <div className={styles.slide}>
                                            <motion.div 
                                                className={styles.appDetails}
                                                animate={infoAnimation}
                                                initial={{opacity: 1}}
                                            >
                                                <img src={mov.icon} alt=''/>
                                                <p className={styles.description}>
                                                    {mov.description}
                                                </p>
                                            </motion.div>
                                            <img src={mov.icon} alt='' className={styles.appLogo}/>
                                            <Iphone src={mov.thumbnail} name='' />
                                            <motion.div 
                                                className={styles.appDetailsTech}
                                                animate={infoAnimation}
                                                initial={{opacity: 1}}
                                            >
                                                <div className={styles.techs}>
                                                    <h1 className={styles.techTitle}>Technologies:</h1>
                                                    <div className={styles.techBadges}>
                                                        {
                                                            mov.tecnologies.map( item => 
                                                                <Badge src={item.icon} alt={item.name} key={item.id}/>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className={styles.buttonsHidden}>
                                                    <button 
                                                        className={styles.buttonHidden}
                                                        onClick={handleModalDescriptionOpen}
                                                    >
                                                        View Description
                                                    </button>
                                                    <button 
                                                        className={styles.buttonHidden}
                                                        onClick={handleModalTechologiesOpen}
                                                    >
                                                        View Tecnologies
                                                    </button>
                                                </div>
                                                <div className={styles.buttons}>
                                                    {/* <img src="/stamps/apple_stamp.svg" alt="App Store" />
                                                    <img src="/stamps/googlePlay_stamp.svg" alt="Google Play" /> */}
                                                    <img src="/stamps/github_stamp.svg" alt="Github" />
                                                    <img src="/stamps/figma_stamp.svg" alt="Figma" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default (ProjectsNew);