// Blob.tsx
// ... (your existing Blob component code)

// Gl.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import Blob from './Blob';

const Gl: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const mouseTargetRef = useRef<THREE.Vector2>(new THREE.Vector2());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const controls = new OrbitControls(camera, renderer.domElement);

    const clock = new THREE.Clock();
    clockRef.current = clock;

    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), new THREE.MeshNormalMaterial());
    // Add Blob component to the scene
    const blobProps = {
      size: 2,
      speed: 0.2,
      color: "#ff0000",
      density: 0.4,
      strength: 0.2,
      offset: 0.5,
    };
    const blob = Blob(blobProps);
    scene.add(cube);

    canvas.classList.add('webgl');
    canvas.appendChild(renderer.domElement);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', mouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const resize = () => {
    if (!cameraRef.current || !rendererRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    rendererRef.current.setSize(width, height);
  };

  const mouseMove = (e: MouseEvent) => {
    if (!mouseRef.current) return;

    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  const render = () => {
    
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current || !clockRef.current || !mouseRef.current || !mouseTargetRef.current) return;

    console.log("Inside renderer");

    const scene = sceneRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const clock = clockRef.current;
    const mouse = mouseRef.current;
    const mouseTarget = mouseTargetRef.current;

    // Remove loading class when scene has objects
    if (scene.children.length > 0) {
      document.body.classList.remove('loading');
    }

    // Update uniforms (if you have any custom materials with uniforms in the scene)
    // scene.children.forEach(mesh => {
    //   if (mesh.material instanceof THREE.ShaderMaterial) {
    //     mesh.material.uniforms.uTime.value = clock.getElapsedTime();
    //   }
    // });

    // Lerp movement
    mouseTarget.x = gsap.utils.interpolate(mouseTarget.x, mouse.x, 0.03);
    mouseTarget.y = gsap.utils.interpolate(mouseTarget.y, mouse.y, 0.03);

    scene.rotation.set(mouseTarget.y * 0.25, mouseTarget.x * 0.25, 0);

    renderer.render(scene, camera);
  };

  return <canvas ref={canvasRef} style={{position: 'absolute', top: 0, left: '0', 'zIndex': 1000}}/>;
};

export default Gl;
