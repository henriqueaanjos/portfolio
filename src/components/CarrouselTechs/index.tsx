import { techs } from "@/utils/techs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";

import 'swiper/css';

import styles from './styles.module.css'
import { Tooltip } from "../Tooltip";
import { useState } from "react";
import Image from "next/image";

export function CarrouselTechs(){
    const [active, setActive] = useState(0);

    function handleChangeFocus(index: number){
        setActive(index);
    }

    return (
        <Swiper
        modules={[Autoplay, Virtual]}
        spaceBetween={0}
        slidesPerView={10}
        centeredSlides
        breakpoints={{
            0: {
                slidesPerView:7
            },
            768:{
                slidesPerView:8
            },
            1280:{
                slidesPerView:10
            }
        }}
        loop
        virtual
        speed={1000}
        autoplay={{
            delay: 0.2,
            disableOnInteraction: false,
            waitForTransition: true,
            reverseDirection: true
        }}
        onSwiper={e => handleChangeFocus(e.realIndex)}
        onActiveIndexChange={e => handleChangeFocus(e.realIndex)}
        className={styles.swiper}
        >
                {techs.map((item, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                        <Tooltip text={item.name}>
                            <div className={active === index ? styles.wrapper_active : styles.wrapper}>
                                <Image src={item.image} alt={item.name} width={40} height={40}/>
                            </div>
                            {active=== index &&
                                <p className={styles.title}>{item.name}</p>
                            }
                        </Tooltip>
                    </SwiperSlide>
                ))}
            
        </Swiper>
    )
}