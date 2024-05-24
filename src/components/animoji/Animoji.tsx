import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
 
export const Animoji: React.FC = () => {
  const frame = useCurrentFrame();
 
  const src = `Animoji/frame${(frame * 2).toString().padStart(3, "0")}.png`;
 
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <Img
        style={{
          height: 800,
        }}
        src={staticFile(src)}
      />
    </AbsoluteFill>
  );
};