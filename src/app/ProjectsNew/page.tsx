'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaMobile, FaLaptop } from 'react-icons/fa'
import tinyColor from 'tinycolor2';

import styles from './styles.module.css';

import Doted from '../../../public/doted.svg';
import DotedDark from '../../../public/doted_dark.svg';

import Switch from '@/components/Switch';
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
import DifficultyRanking from '@/components/DifficultyRanking';

const ProjectsNew = () => {
    const [platform, setPlatform] = useState('mobile');
    const [project, setProject] = useState(projects[0] as ProjectDTO);
    // const [color, setColor] = useState(projects[0].color);
    const [isDarkColor, setIsDarkColor] = useState(false)
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

    function isBackgroundDark(){
        const hex = project.color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const lum = (r*999 + g* 587 + b* 114) / 1000;

        const isDark = 
        setIsDarkColor(tinyColor(project.color).isDark());
    }

    useEffect(()=> {
        if(projectscontent.current)
            projectscontent.current.style.backgroundColor = project.color;
        isBackgroundDark();
        console.log('PROJECT:', project.title);
        console.log('COLOR:', project.color);
        console.log('IS DARK COLOR:', isDarkColor);
    }, [project]);


    return(
        <div className={styles.container} ref={projectsMain}>
            <div className={styles.titleContent}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            <Modal ref={modalRef} />
            <div className={`${styles.content}`} ref={projectscontent}>
                <Image src={isDarkColor ? Doted : DotedDark} alt='' className={styles.doted}/>
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
                            bulletClass: `swiper-pagination-bullet bg-descriptions opacity-100`
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
                                                <img src={mov.icon} alt='' className={styles.appLogoLarger}/>
                                                <p className={isDarkColor ? styles.descriptionLight : styles.descriptionDark} >
                                                    {mov.description}
                                                </p>
                                            </motion.div>
                                            <img src={mov.icon} alt='' className={styles.appLogo}/>
                                            <img src={mov.thumbnail} alt='' className={styles.iphone}/>
                                            <motion.div 
                                                className={styles.appDetailsTech}
                                                animate={infoAnimation}
                                                initial={{opacity: 1}}
                                            >
                                                <div className={styles.difficulty}>
                                                    <h1 className={isDarkColor ? styles.techTitleLight : styles.techTitleDark}>Difficulty:</h1>
                                                    <DifficultyRanking difficulty={project.difficulty}/>
                                                </div>
                                                <div className={styles.techs}>
                                                    <h1 className={isDarkColor ? styles.techTitleLight : styles.techTitleDark}>Technologies:</h1>
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
                                                    <a href={mov.githubUrl} target='_blank'>
                                                        <img src="/stamps/github_stamp.svg" alt="Github" />
                                                    </a>
                                                    <a href={mov.figmaUrl}>
                                                        <img src="/stamps/figma_stamp.svg" alt="Figma" />
                                                    </a>
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