import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Blender() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Model url="/stuffed-animal.glb" /> {/* Replace with your model's path */}
      <OrbitControls />
    </Canvas>
  );
}

export default Blender;