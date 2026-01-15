'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader ocean with grid
function Ocean() {
  const meshRef = useRef();
  
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(0x0a1628) },
        uColor2: { value: new THREE.Color(0x1e3a5f) }
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          float wave1 = sin(pos.x * 0.1 + uTime * 0.5) * 0.3;
          float wave2 = sin(pos.y * 0.08 + uTime * 0.3) * 0.2;
          float wave3 = sin((pos.x + pos.y) * 0.05 + uTime * 0.4) * 0.15;
          
          pos.z = wave1 + wave2 + wave3;
          vElevation = pos.z;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          float mixStrength = (vElevation + 0.5) * 0.5;
          vec3 color = mix(uColor1, uColor2, mixStrength);
          
          float gridX = abs(fract(vUv.x * 30.0 - 0.5) - 0.5) / fwidth(vUv.x * 30.0);
          float gridY = abs(fract(vUv.y * 30.0 - 0.5) - 0.5) / fwidth(vUv.y * 30.0);
          float grid = 1.0 - min(min(gridX, gridY), 1.0);
          
          color += vec3(0.1, 0.2, 0.4) * grid * 0.15;
          
          float fadeX = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x);
          float fadeY = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
          float fade = fadeX * fadeY;
          
          gl_FragColor = vec4(color, fade * 0.9);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[80, 80, 60, 60]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

// Modern ship hull
function ShipHull({ shipY }) {
  return (
    <group position={[0, shipY, 0]}>
      {/* Main hull */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 2, 2.2]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Deck */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[9, 0.15, 2]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Bridge */}
      <mesh position={[-2, 2.1, 0]}>
        <boxGeometry args={[2.5, 1.8, 1.6]} />
        <meshPhysicalMaterial 
          color="#1e293b" 
          metalness={0.9} 
          roughness={0.1}
          transmission={0.3}
          thickness={0.5}
        />
      </mesh>
      
      {/* Bridge windows */}
      <mesh position={[-1, 2.3, 0.82]}>
        <boxGeometry args={[2, 0.6, 0.02]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
      </mesh>
      
      {/* Accent lines */}
      <mesh position={[0, 0.5, 1.15]}>
        <boxGeometry args={[9.5, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0.5, -1.15]}>
        <boxGeometry args={[9.5, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Glass orb burden
function BurdenOrb({ position, color, liftProgress, index }) {
  const groupRef = useRef();
  const sphereRef = useRef();
  
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  
  const delay = index * 0.18;
  const delayedProgress = Math.max(0, Math.min(1, (liftProgress - delay) / (1 - delay * 0.8)));
  const easedProgress = easeInOutCubic(delayedProgress);
  
  const targetY = position[1] + 12;
  const currentY = THREE.MathUtils.lerp(position[1], targetY, easedProgress);
  const opacity = THREE.MathUtils.lerp(1, 0.15, easedProgress);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.8;
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() + index) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[position[0], currentY, position[2]]}>
      {/* Glass sphere */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[0.4, 2]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.1}
          roughness={0}
          transmission={0.6}
          thickness={0.5}
          emissive={color}
          emissiveIntensity={0.3 * (1 - easedProgress)}
          transparent
          opacity={opacity}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8 * (1 - easedProgress)} />
      </mesh>
      
      {/* Connection line */}
      {easedProgress < 1 && (
        <mesh position={[0, -1.2, 0]} scale={[1, 1 - easedProgress, 1]}>
          <cylinderGeometry args={[0.015, 0.015, 2, 8]} />
          <meshBasicMaterial color="#475569" transparent opacity={0.5 * (1 - easedProgress)} />
        </mesh>
      )}
    </group>
  );
}

// Core business orb
function CoreOrb({ position }) {
  const groupRef = useRef();
  const orbRef = useRef();
  
  useFrame(({ clock }) => {
    if (orbRef.current) {
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.08;
      orbRef.current.scale.setScalar(pulse);
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={orbRef}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshPhysicalMaterial
          color="#fbbf24"
          metalness={0.3}
          roughness={0}
          transmission={0.4}
          thickness={0.5}
          emissive="#fbbf24"
          emissiveIntensity={0.5}
        />
      </mesh>
      <pointLight color="#fbbf24" intensity={1} distance={5} />
    </group>
  );
}

// Cloud rings destination
function CloudRings({ visible }) {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  
  useFrame(({ clock }) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z = clock.getElapsedTime() * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -clock.getElapsedTime() * 0.3;
  });

  return (
    <group position={[0, 15, -5]}>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.05, 16, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={visible ? 0.4 : 0} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]} scale={0.7}>
        <torusGeometry args={[3, 0.05, 16, 64]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={visible ? 0.3 : 0} />
      </mesh>
    </group>
  );
}

// Floating particles
function Particles() {
  const pointsRef = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = Math.random() * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={100} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.05} transparent opacity={0.4} />
    </points>
  );
}

// Main scene
function Scene({ onPhaseChange }) {
  const shipGroupRef = useRef();
  const [animState, setAnimState] = React.useState({
    shipY: -1.5,
    liftProgress: 0,
    phase: 'Overburdened',
    speed: 3,
    efficiency: 24,
    burdens: 5
  });
  
  const cycleDuration = 12;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const cycleTime = time % cycleDuration;
    
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    let newState = { ...animState };
    
    if (cycleTime < 4) {
      newState.phase = 'Overburdened';
      newState.liftProgress = 0;
      newState.speed = 3;
      newState.efficiency = 24;
      newState.burdens = 5;
      newState.shipY = -1.5 + Math.sin(time * 1.2) * 0.12;
    } else if (cycleTime < 9) {
      const rawProgress = (cycleTime - 4) / 5;
      const progress = easeInOutCubic(rawProgress);
      newState.phase = 'Transforming';
      newState.liftProgress = progress;
      newState.speed = Math.round(3 + progress * 12);
      newState.efficiency = Math.round(24 + progress * 68);
      newState.burdens = Math.max(0, 5 - Math.floor(progress * 5.5));
      newState.shipY = -1.5 + progress * 1.3 + Math.sin(time * 1.5) * 0.08;
    } else {
      newState.phase = 'Optimized';
      newState.liftProgress = 1;
      newState.speed = 15;
      newState.efficiency = 92;
      newState.burdens = 0;
      newState.shipY = -0.2 + Math.sin(time * 2) * 0.04;
    }
    
    setAnimState(newState);
    
    if (shipGroupRef.current) {
      shipGroupRef.current.rotation.z = Math.sin(time * 0.6) * 0.015;
      shipGroupRef.current.rotation.x = Math.sin(time * 0.8) * 0.008;
    }
    
    if (onPhaseChange) {
      onPhaseChange(newState);
    }
  });

  const burdens = [
    { x: 1.5, z: 0.6, color: '#ef4444' },
    { x: 2.8, z: -0.3, color: '#f59e0b' },
    { x: 0.3, z: -0.8, color: '#a855f7' },
    { x: -0.8, z: 0.5, color: '#14b8a6' },
    { x: 1, z: -0.6, color: '#f97316' },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#404080" />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <directionalLight position={[-10, 5, -10]} intensity={0.3} color="#6366f1" />
      <pointLight position={[0, 10, -15]} intensity={0.8} color="#3b82f6" />
      
      {/* Ocean */}
      <Ocean />
      
      {/* Ship */}
      <group ref={shipGroupRef}>
        <ShipHull shipY={animState.shipY} />
        
        {/* Burdens */}
        {burdens.map((burden, i) => (
          <BurdenOrb
            key={i}
            position={[burden.x, 2.8 + animState.shipY, burden.z]}
            color={burden.color}
            liftProgress={animState.liftProgress}
            index={i}
          />
        ))}
        
        {/* Core */}
        <CoreOrb position={[0, 2.8 + animState.shipY, 0]} />
      </group>
      
      {/* Cloud destination */}
      <CloudRings visible={animState.liftProgress > 0} />
      
      {/* Particles */}
      <Particles />
    </>
  );
}

// Camera controller with auto-rotate
function CameraController() {
  const { camera } = useThree();
  const angleRef = useRef(0);
  
  useFrame(({ clock }) => {
    angleRef.current = clock.getElapsedTime() * 0.1;
    const radius = 20;
    camera.position.x = Math.sin(angleRef.current) * radius;
    camera.position.z = Math.cos(angleRef.current) * radius;
    camera.position.y = 8 + Math.sin(clock.getElapsedTime() * 0.15) * 1;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main export
export default function ShipTransformation({ className = '', onPhaseChange }) {
  return (
    <div className={`relative w-full h-full min-h-[500px] ${className}`}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #0f0f1a 100%)'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 40%)
          `
        }}
      />
      
      <Canvas
        camera={{ position: [18, 8, 18], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <CameraController />
        <Suspense fallback={null}>
          <Scene onPhaseChange={onPhaseChange} />
        </Suspense>
      </Canvas>
    </div>
  );
}
