'use client';
import Image from 'next/image';
import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FaMobile, FaLaptop } from 'react-icons/fa'
import { motion, PanInfo, useAnimation, useDragControls } from 'framer-motion';

import styles from './styles.module.css';

import Doted from '../../../public/doted.svg';

import Switch from '@/components/Switch';
import Iphone from '@/components/Iphone';
import Badge from '@/components/Badge';

import { projects } from '@/utils/projects';
import { ProjectDTO } from '@/DTO/ProjectsDTO';
import Modal, { ModalHandles } from '@/components/Modal';

const Projects = () => {
    const [platform, setPlatform] = useState('mobile');
    const [project, setProject] = useState(projects[0] as ProjectDTO);
    const [prevThumbnail, setPrevThumbnail] = useState(projects[projects.length-1].thumbnail);
    const [color, setColor] = useState(projects[0].color);
    const [nextThumbnail, setNextThumbnail] = useState(projects[1].thumbnail);
    const [isLoadingAnimation, setIsLoadingAnimation] = useState(false);

    const projectsMain = useRef<HTMLDivElement>(null);
    const projectscontent = useRef<HTMLDivElement>(null);
    const iPhoneLeft = useRef<HTMLDivElement>(null);
    const iPhoneRight = useRef<HTMLDivElement>(null);
    

    const dragControls = useDragControls();

    const infoAnimation = useAnimation();
    const iphoneLeftAnimation = useAnimation();
    const iphoneRightAnimation = useAnimation();
    const iphoneCenterAnimation = useAnimation();

    async function dragAnimation(e: Event ,info: PanInfo){
        e.preventDefault()
        if(info.offset.x > 150 && !isLoadingAnimation)
            await animatedLeftTransition();
        if(info.offset.x < -150 && !isLoadingAnimation)
            await animatedRightTransition();

    }

    function getNextThumbnail(id: number){
        const nextProject = projects.find(item => item.id === id);
        if(nextProject)
            setNextThumbnail(nextProject.thumbnail);
        else
            setNextThumbnail(projects[0].thumbnail);
    }

    function getPrevThumbnail(id: number){
        const prevProject = projects.find(item => item.id === id);
        if(prevProject)
            setPrevThumbnail(prevProject.thumbnail);
        else
            setPrevThumbnail(projects[projects.length-1].thumbnail);
    }

    async function animatedRightTransition(){
        setIsLoadingAnimation(true);
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
        iphoneCenterAnimation.start({
            scale: 0.85,
            x: -710,
            y: 20,
            transition:{
                duration: 1
            }
        });
        iphoneLeftAnimation.start({
            scale: 0.2,
            x: -100,
            opacity: 0,
            transition:{
                duration: 1
            }
        });
        await iphoneRightAnimation.start({
            scale: 1,
            x: -710,
            y: -20,
            transition:{
                duration: 1
            }
        });
        await iphoneRightAnimation.stop();
        iphoneRightAnimation.set({
            scale: 0.2,
            x:300
        });
        await getNewProject('next');
        iphoneRightAnimation.start({
            scale: 0.85,
            x: 0,
            transition:{
                duration: .5
            }
        });
        await iphoneCenterAnimation.stop();
        await iphoneCenterAnimation.set({
            scale: 1,
            x:0,
            y:0
        })
        await iphoneLeftAnimation.stop();
        iphoneLeftAnimation.set({
            scale: 0.85,
            opacity: 1,
            x: 0
        });
        iphoneLeftAnimation.start({
            scale: 0.85,
            x: 0,
            transition:{
                duration: .5
            }
        })
        
        setTimeout(() => setIsLoadingAnimation(false), 300);
    }
    async function animatedLeftTransition(){
        setIsLoadingAnimation(true);
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
        iphoneCenterAnimation.start({
            scale: 0.85,
            x: 710,
            y: 20,
            transition:{
                duration: 1
            }
        });
        iphoneRightAnimation.start({
            scale: 0.2,
            x: 300,
            opacity: 0,
            transition:{
                duration: 1
            }
        });
        await iphoneLeftAnimation.start({
            scale: 1,
            x: 710,
            y: -20,
            transition:{
                duration: 1
            }
        });
        await iphoneLeftAnimation.stop();
        iphoneLeftAnimation.set({
            scale: 0.2,
            x:-300
        });
        await getNewProject('prev');
        iphoneLeftAnimation.start({
            scale: 0.85,
            x: 0,
            transition:{
                duration: .5
            }
        })
        await iphoneCenterAnimation.stop();
        await iphoneCenterAnimation.set({
            scale: 1,
            x:0,
            y:0
        })
        await iphoneRightAnimation.stop();
        iphoneRightAnimation.set({
            scale: 0.85,
            opacity: 1,
            x: 0
        });
        iphoneRightAnimation.start({
            scale: 0.85,
            x: 0,
            transition:{
                duration: .5
            }
        })
        
        setTimeout(() => setIsLoadingAnimation(false), 300);
    }

    function getNewProject(option: 'next' | 'prev'){
        switch(option){
            case 'next':
                const newProject = projects.find(item => item.id === (project.id+1));
                if(newProject){
                    setProject(newProject);
                    getNextThumbnail(newProject.id+1);
                    getPrevThumbnail(newProject.id-1);
                }else{
                    setProject(projects[0]);
                    getNextThumbnail(projects[1].id);
                    getPrevThumbnail(projects[projects.length -1].id);
                }
                break;
            case 'prev':
                const newProj = projects.find(item => item.id === (project.id-1));
                if(newProj){
                    setProject(newProj);
                    getNextThumbnail(newProj.id+1);
                    getPrevThumbnail(newProj.id-1);
                }else{
                    setProject(projects[projects.length-1]);
                    getNextThumbnail(projects[0].id);
                    getPrevThumbnail(projects[projects.length-2].id);
                }
                break;
        }
    }

    function changeProject(id: number){
        const newProject = projects.find(item => item.id === id);
        if(newProject){
            setProject(newProject);
            getNextThumbnail(newProject.id+1);
            getPrevThumbnail(newProject.id-1);
        }
    }

    window.addEventListener('keydown', (e) => {
        setTimeout(() =>{
            switch(e.key){
                case 'ArrowRight':
                    getNewProject('next');
                    break;
                case 'ArrowLeft':
                    getNewProject('prev');
                    break;
            }
        }, 100);
    });

    

    useEffect(()=> {
        setColor(project.color);
        console.log(color);
        if(projectscontent.current)
            projectscontent.current.style.backgroundColor = project.color;
    }, [project]);


    useEffect(() => {
        function observePage(){
            const observerPage = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        if(projectsMain.current)
                            projectsMain.current.click();
                    }
                },
                {
                    threshold: 0.5
                }
            );
            if(projectsMain.current)
                observerPage.observe(projectsMain.current);

            return () => {
                if(projectsMain.current)
                    observerPage.unobserve(projectsMain.current);
            }
        }

        observePage();
    }, []);

    return(
        <div className={styles.container} ref={projectsMain}>
            <div className={styles.titleContent}>
                <h1 className={styles.title}>Projects</h1>
            </div>
            
            <div className={`${styles.content}`} ref={projectscontent}>
                <Image src={Doted} alt='' className={styles.doted}/>
                <div className={styles.presentation}>
                    <div className={styles.selector}>
                        <svg width="0" height="0">
                            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                                <stop stopColor="#FF3B3B" offset="0%" />
                                <stop stopColor="#6600CC" offset="100%" />
                            </linearGradient>
                        </svg>
                        <FaMobile
                            size='2rem'
                            style={platform === 'mobile' ? { fill: "url(#gradient)" }: {fill: 'white'}}
                        />
                        <Switch setValue={setPlatform}/>
                        <FaLaptop
                            size='2rem'
                            style={platform === 'web' ? { fill: "url(#gradient)" }: {fill: 'white'}}
                        />
                    </div>
                    <motion.div 
                        className={styles.presentationContent} 
                        drag="x" 
                        dragConstraints={{left: 0, right: 0, top:0, bottom: 0}} 
                        dragSnapToOrigin
                        dragMomentum={true}
                        onDragEnd={(e, info) => dragAnimation(e, info)}
                    >
                        <motion.div 
                            className={styles.iphoneMd}
                            initial={{scale: .85}}
                            animate={iphoneLeftAnimation}
                            ref={iPhoneLeft}
                        >
                            <Iphone src={prevThumbnail} name=''/>
                        </motion.div>
                        <div className={styles.appInfo}>
                            <motion.div 
                                className={styles.appDetails}
                                animate={infoAnimation}
                                initial={{opacity: 1}}
                            >
                                <img src={project.icon} alt='' className={styles.appLogo}/>
                                <p className={styles.description}>
                                    {project.description}
                                </p>
                            </motion.div>
                            <motion.div 
                                className={styles.iphone}
                                animate={iphoneCenterAnimation}
                            >
                                <Iphone src={project.thumbnail} name='' />
                            </motion.div>
                            <motion.div 
                                className={styles.appDetails}
                                animate={infoAnimation}
                                initial={{opacity: 1}}
                            >
                                <div className={styles.techs}>
                                    <h1 className={styles.techTitle}>Technologies:</h1>
                                    <div className={styles.techBadges}>
                                        {
                                            project.tecnologies.map( item => 
                                                <Badge src={item.icon} alt={item.name} key={item.id}/>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    {/* <img src="/stamps/apple_stamp.svg" alt="App Store" />
                                    <img src="/stamps/googlePlay_stamp.svg" alt="Google Play" /> */}
                                    <img src="/stamps/github_stamp.svg" alt="Github" />
                                    <img src="/stamps/figma_stamp.svg" alt="Figma" />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div 
                            className={styles.iphoneMd}
                            initial={{scale: .85}}
                            animate={iphoneRightAnimation}
                            ref={iPhoneRight}
                        >
                            <Iphone src={nextThumbnail} name=''/>
                        </motion.div>
                    </motion.div>
                    <div className={styles.pagination}>
                        <div className={styles.paginationContent}>
                            {
                                projects.map( item => 
                                    <div className={`${styles.paginationDot} ${project.id === item.id && 'bg-gradient-to-r from-initial to-final'}`} onClick={() => changeProject(item.id)}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (Projects);