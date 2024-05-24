import React, {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three/src/core/Object3D';
import { AmbientLight, HemisphereLight, Light } from 'three';

const Earth = () => {
    const earth = useGLTF('/earth-2/scene.gltf');
    return(
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
        />
    );
}
const Earth2 = () => {
    const [model, setModel] = useState<Object3D | null>(null);
    const loader = new GLTFLoader();
    loader.load("/scene.gltf", async (gltf) => {
        setModel(gltf.scene);
    })
    return model ? (
        <primitive
            object={model}
            scale={2.5}
            position-y={0}
        />
    ) : null;
}

const EarthCanvas = () => {
    return(
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer: true}}
            camera={{
                fov: 65,
                near: 0.1,
                far: 200,
                position: [-4,3,6]
            }}
            className='w-3/12'
        >
            <Suspense fallback={<CanvasLoader/>}>
                <ambientLight intensity={1}/>
                <directionalLight intensity={1}/>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth/>
                <Preload all/>
            </Suspense>
        </Canvas>       
    );
}
export default EarthCanvas;