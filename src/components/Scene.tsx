import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url } : {url: string} ) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Scene({model} : {model: string}) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Model url={model} />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;