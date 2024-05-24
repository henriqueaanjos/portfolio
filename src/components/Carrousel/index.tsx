import React, { useState } from 'react';
import {Navigation, Pagination, Autoplay, Keyboard, Virtual} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';

import styles from './styles.module.css';
import CommentCard from '../CommentCard';

interface CarrouselProps{
    data: number[];
    reverse?: boolean;
}

const Carrousel = ({data, reverse = false}: CarrouselProps) => {
    const [activeIndex, setActiveIndex] = useState(1);

    function handleChangeFocus(index: number){
        setActiveIndex(index);
    }
    return(
        <Swiper
            modules={[Autoplay, Virtual]}
            spaceBetween={0}
            slidesPerView={6}
            breakpoints={{
                0: {
                    slidesPerView:2,
                },
                768:{
                    slidesPerView:5
                },
                1280:{
                    slidesPerView:7
                }
            }}
            onSwiper={e => handleChangeFocus(e.realIndex)}
            loop
            virtual
            speed={4000}
            autoplay={{
                delay: 0.5,
                disableOnInteraction: false,
                waitForTransition: true,
                reverseDirection: reverse
                
            }}
            onActiveIndexChange={ e => handleChangeFocus(e.realIndex+1)}
            className={styles.container}
        >
            {
               data.map((mov, i) => {
                   return(
                    <SwiperSlide key={i}>
                        <div className={styles.slide}>
                            <CommentCard/>
                        </div>
                    </SwiperSlide>
                   )
               })
           }
        </Swiper>
    );
}
export default Carrousel;