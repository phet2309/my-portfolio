import React, { useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group } from "three";

interface GltfModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

export default function Gl({
  modelPath,
  scale = 0.4,
  position = [0, 0, 10],
}: GltfModelProps) {
  

  return (
    <Canvas
      camera={{ position: [100, 200, 500] }}
    >
      <ambientLight intensity={1.5} />
      <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
}

const GltfModel: React.FC<GltfModelProps> = ({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
}) => {
  const ref = useRef<Group>(null);
  const gltf = useLoader(GLTFLoader, modelPath);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.02;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
};
