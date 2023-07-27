import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

interface BlobProps {
  size: number;
  speed: number;
  color: string;
  density: number;
  strength: number;
  offset: number;
}

function Blob({ size, speed, color, density, strength, offset } : BlobProps) {
//   const sceneRef = useRef<HTMLDivElement>(null);
//   const requestRef = useRef<number | null>(null);
//   const clock = new THREE.Clock();
//   const meshRef = useRef<THREE.Mesh | null>(null);

    const geometry = new THREE.IcosahedronGeometry(size, 64);
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uNoiseDensity: { value: density },
        uNoiseStrength: { value: strength },
        uFreq: { value: 3 },
        uAmp: { value: 6 },
        uHue: { value: color },
        uOffset: { value: offset },
        red: { value: 0 },
        green: { value: 0 },
        blue: { value: 0 },
        uAlpha: { value: 1.0 },
        },
        defines: {
        PI: Math.PI,
        },
        transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0xffffff, 0);
//     rendererRef.current = renderer;
    
//     if (sceneRef.current) {
//       sceneRef.current.appendChild(renderer.domElement);
//     }

//     const geometry = new THREE.IcosahedronGeometry(size, 64);
//     const material = new THREE.ShaderMaterial({
//       vertexShader,
//       fragmentShader,
//       uniforms: {
//         uTime: { value: 0 },
//         uSpeed: { value: speed },
//         uNoiseDensity: { value: density },
//         uNoiseStrength: { value: strength },
//         uFreq: { value: 3 },
//         uAmp: { value: 6 },
//         uHue: { value: color },
//         uOffset: { value: offset },
//         red: { value: 0 },
//         green: { value: 0 },
//         blue: { value: 0 },
//         uAlpha: { value: 1.0 },
//       },
//       defines: {
//         PI: Math.PI,
//       },
//       transparent: true,
//     });

//     const mesh = new THREE.Mesh(geometry, material);
//     meshRef.current = mesh;
//     scene.add(mesh);

//     const animate = () => {
//       const elapsedTime = clock.getElapsedTime();
//       material.uniforms.uTime.value = elapsedTime;

//       // Render the scene
//       renderer.render(scene, camera);

//       // Request the next frame
//       requestRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       // Clean up the animation frame
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current);
//       }
//     };
//   }, [size, speed, color, density, strength, offset]);

  return mesh;
//   return <div ref={sceneRef} />;
};

export default Blob;
