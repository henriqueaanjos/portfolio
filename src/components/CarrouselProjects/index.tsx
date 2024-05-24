import React, { useState } from 'react';
import {Navigation, Pagination, Autoplay, Keyboard, Virtual} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';

import styles from './styles.module.css';
import CommentCard from '../CommentCard';
import Iphone from '../Iphone';
import { ProjectDTO } from '@/DTO/ProjectsDTO';

interface CarrouselProps{
    data: ProjectDTO[];
    reverse?: boolean;
}

const CarrouselProjects = ({data, reverse = false}: CarrouselProps) => {
    const [activeIndex, setActiveIndex] = useState(1);

    function handleChangeFocus(index: number){
        setActiveIndex(index);
    }
    return(
        <Swiper
            modules={[Virtual, Keyboard, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={3}
            onSwiper={e => handleChangeFocus(e.realIndex)}
            loop
            virtual
            keyboard
            pagination
            onActiveIndexChange={ e => handleChangeFocus(e.realIndex+1)}
            className={styles.container}
        >
            {
               data.map((mov, i) => {
                   return(
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <Iphone src={mov.thumbnail} name='' />
                        </div>
                    </SwiperSlide>
                   )
               })
           }
        </Swiper>
    );
}
export default CarrouselProjects;