"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/bracelet.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={ref} scale={1} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/bracelet.glb");

function Loader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin mb-4" />
      <p className="text-sm text-muted">Loading model...</p>
    </div>
  );
}

export default function BraceletViewer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full aspect-square max-w-lg mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl scale-110" />

      <div className="relative w-full h-full glass rounded-3xl overflow-hidden">
        <Suspense fallback={<Loader />}>
          <Canvas
            camera={{ position: [0, 2, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, 3, -5]} intensity={0.4} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#00E09E" />

            <Model />

            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.3}
              scale={10}
              blur={2}
              far={4}
            />

            <Environment preset="city" />

            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={2}
              maxDistance={10}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 1.5}
              autoRotate={false}
            />
          </Canvas>
        </Suspense>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 glass rounded-full">
          <RotateCcw className="w-3 h-3 text-accent" />
          <span className="text-[10px] text-subtle uppercase tracking-wider">
            Drag to rotate &middot; Scroll to zoom
          </span>
        </div>
      </div>
    </motion.div>
  );
}
