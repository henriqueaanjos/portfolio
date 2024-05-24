'use client'

import { MyComposition } from './Composition';
import { Player } from "@remotion/player";
import { MyCompositionHover } from './CompositionHover';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const RemotionRoot: React.FC = ({}) => {
  const [isHover, setIsHover]= useState(false);

  function handleHover(){
    setIsHover(true);
  }
  function handleLeave(){
    setIsHover(false);
  }
  return (
    <motion.div onMouseEnter={handleHover} onMouseLeave={handleLeave} className='bg-blue-500'>
      <Player
        component={isHover ? MyCompositionHover : MyComposition}
        inputProps={{ text: "World" }}
        durationInFrames={isHover ? 220 : 40}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={60}
        style={{
          width: 1280,
          height: 720,
        }}
        autoPlay
        loop
      />
    </motion.div>
  );
  };