'use client';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import tinyColor from 'tinycolor2';

import styles from './styles.module.css';

import Badge from '@/components/Badge';

import { projects } from '@/utils/projects';
import { ProjectDTO } from '@/DTO/ProjectsDTO';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

import { motion, useAnimation } from 'framer-motion';
import Modal, { ModalHandles } from '@/components/Modal';
import DifficultyRanking from '@/components/DifficultyRanking';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/utils/translations';
import Switch from '@/components/Switch';
import { FaDesktop, FaMobile } from 'react-icons/fa6';
import Link from 'next/link';

const ProjectsNew = () => {
    const [platform, setPlatform] = useState<'mobile' | 'web'>('mobile');
    const [project, setProject] = useState(projects['mobile'][0] as ProjectDTO);
    const [isDarkColor, setIsDarkColor] = useState(false)

    const projectsMain = useRef<HTMLDivElement>(null);
    const projectscontent = useRef<HTMLDivElement>(null);
    const modalRef = useRef<ModalHandles>(null);

    const infoAnimation = useAnimation();

    const { language } = useLanguage();

    const handleChangeFocus = useCallback((index: number) =>  {
        const newProject = projects[platform].find(p => p.id === index + 1);
        if (newProject) {
            setProject(newProject);
        }
    }, [platform]);
    const handleChangePlatform = useCallback((index: number) =>  {
        const newProject = projects[platform].find(p => p.id === index);
        if (newProject) {
            setProject(newProject);
        }
    }, [platform]);

    const handleModalDescriptionOpen = useCallback(() => {
        modalRef.current?.handleOpenModal();
        modalRef.current?.handleChangeTitle(
            <>
                <Image src={project.icon} alt='' className={styles.appLogo} />
            </>
        );
        modalRef.current?.handleChangeContent(
            <p>{project.description[language]}</p>
        )
    }, [project, language]);

    const handleModalTechologiesOpen = useCallback(() => {
        modalRef.current?.handleOpenModal();
        modalRef.current?.handleChangeTitle(
            <>
                <Image src={project.icon} alt='' className={styles.appLogo} />
            </>
        );
        modalRef.current?.handleChangeContent(
            <>
                {project.tecnologies.map(tech =>
                    <div className={styles.techModalContent}
                        key={tech.id}
                    >
                        <Badge src={tech.icon} alt={tech.name} key={tech.id} />
                        <h1 className={styles.techModalName}>{tech.name}</h1>
                    </div>
                )}
            </>
        )
    }, [project]);

    const isBackgroundDark = useCallback(() => {
        const hex = project.color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const lum = (r * 999 + g * 587 + b * 114) / 1000;

        const isDark =
            setIsDarkColor(tinyColor(project.color).isDark());
    }, [setIsDarkColor, project]);

    useEffect(() => {
        if (projectscontent.current)
            projectscontent.current.style.backgroundColor = project.color;
        isBackgroundDark();
    }, [project, isBackgroundDark, platform]);

    useEffect(() => {
        handleChangePlatform(projects[platform][0].id + 1)
    }, [platform,handleChangePlatform]);


    return (
        <div className={styles.container} ref={projectsMain}>
            <div className={styles.titleContainer}>
                <GradientText text={translations[language].projects.title} />
            </div>
            <Modal ref={modalRef} />
            <div className={styles.content} ref={projectscontent}>
                <div className={styles.switchContainer}>
                    <svg width="0" height="0">
                        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                            <stop stopColor="#E6006E" offset="0%" />
                            <stop stopColor="#F4B628" offset="100%" />
                        </linearGradient>
                    </svg>
                    <section>
                        <FaMobile size={20} style={platform === 'mobile' ? { fill: "url(#gradient)" } : isDarkColor ? { fill: "#e1e1e1" } : { fill: "#303030" }} />
                        <Switch setValue={setPlatform} />
                        <FaDesktop size={20} style={platform === 'web' ? { fill: "url(#gradient)" } : isDarkColor ? { fill: "#e1e1e1" } : { fill: "#303030" }} />
                    </section>
                </div>
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
                    onActiveIndexChange={e => handleChangeFocus(e.realIndex)}
                >
                    {
                        projects[platform].map((mov, i) => {
                            return (
                                <SwiperSlide className={isDarkColor ? styles.slideLight : styles.slideDark} key={i}>
                                    <motion.div
                                        className={styles.appDetails}
                                        animate={infoAnimation}
                                        initial={{ opacity: 1 }}
                                    >
                                        <img src={mov.icon} alt='' className={styles.appLogoLarger} />
                                        <p className={isDarkColor ? styles.descriptionLight : styles.descriptionDark} >
                                            {mov.description[language]}
                                        </p>
                                    </motion.div>
                                    <img src={mov.icon} alt='' className={styles.appLogo} />
                                    <Link href={platform === 'web' ? mov.url : ''} target='_blank'>
                                        <Image src={mov.thumbnail} alt='' className={platform === 'mobile' ? styles.iphone: styles.desktop }  width={2800} height={3054} />
                                    </Link>
                                    <motion.div
                                        className={styles.appDetailsTech}
                                        animate={infoAnimation}
                                        initial={{ opacity: 1 }}
                                    >
                                        <div className={styles.difficulty}>
                                            <h1 className={isDarkColor ? styles.techTitleLight : styles.techTitleDark}>{translations[language].projects.difficulty}:</h1>
                                            <DifficultyRanking difficulty={project.difficulty} />
                                        </div>
                                        <div className={styles.techs}>
                                            <h1 className={isDarkColor ? styles.techTitleLight : styles.techTitleDark}>{translations[language].projects.technologies}:</h1>
                                            <div className={styles.techBadges}>
                                                {
                                                    mov.tecnologies.map(item =>
                                                        <Badge src={item.icon} alt={item.name} key={item.id} />
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
                                                <Image src="/stamps/github_stamp.svg" alt="Github" className={styles.image} width={80} height={39} />
                                            </a>
                                            <a href={mov.figmaUrl}>
                                                <Image src="/stamps/figma_stamp.svg" alt="Figma" className={styles.image} width={70} height={39} />
                                            </a>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}
export default (ProjectsNew);