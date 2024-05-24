'use client'
import React, {Suspense, useRef, useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import {Points, PointMaterial, Preload} from '@react-three/drei';

import * as random from 'maath/random';

import styles from './styles.module.css';

const Stars = ({...props}) => {
    const ref = useRef();

    const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2})
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta/15;
        ref.current.rotation.y -= delta/10;
    })

    return(
        <group rotation={[0,0, Math.PI/4]}>
            <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled {...props} >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return(
        <div className={styles.container}>
            <Canvas camera={{position: [0,0,1]}}>
                <Suspense fallback={null}>
                    <Stars/>
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas;