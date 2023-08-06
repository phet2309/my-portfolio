import './Blob.css';
import { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Plane } from '@react-three/drei';
import { TextureLoader, PlaneGeometry } from 'three';


function Blob() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <div className="bg-container" ref={containerRef}>
          <Canvas
            camera={{ position: [0, 0, 5] }}
            dpr={window.devicePixelRatio}
            style={{ width: '100%', height: '100%' }}
          >
            <PerspectiveCamera makeDefault fov={70} near={0.1} far={1000} position={[0, 0, 5]} />
            <ImagePlane />
          </Canvas>
        </div>
      </>
    );
}

function ImagePlane() {
  // const texture = useLoader(TextureLoader, 'src/assets/images/ocen_bg.jpg');
  // const texture = useLoader(TextureLoader, 'src/assets/images/nyc.jpeg');
  const texture = useLoader(TextureLoader, '/assets/images/fire_bg.jpg');
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const geometry = meshRef.current?.geometry as PlaneGeometry;

    const positionAttribute = geometry.attributes.position;
    const count = positionAttribute.count;

    for (let i = 0; i < count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);

      const anim1 = 0.25 * Math.sin(x + time * 0.7);
      const anim2 = 0.35 * Math.sin(x * 1 + time * 0.7);
      const anim3 = 0.1 * Math.sin(y * 15 + time * 0.7);

      positionAttribute.setZ(i, anim1 + anim2 + anim3);
    }

    geometry.computeVertexNormals();
    positionAttribute.needsUpdate = true;
  });

  return (
    <Plane ref={meshRef} args={[14, 8, 15, 9]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <meshBasicMaterial map={texture} />
    </Plane>
  );
}

export default Blob;

