
import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";

export default function Module() {
  return (
      <>
    <div >
    </div>
    <mesh rotation={[0, 0, 0]}>
    <sphereGeometry attach="geometry" args={[1, 16, 16]} />
    <meshStandardMaterial
      attach="material"
      color="blue"
    />
  </mesh>
   </>
  );
};

