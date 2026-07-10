"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Deep-space 3D atmosphere: soft geometry, drifting particles, and orbiting lights.
 * Sharper on high-DPI displays; respects prefers-reduced-motion.
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070c, 0.028);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 13);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    // Sharper on 4K / retina without overloading mid-range GPUs
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    renderer.setClearColor(0x05070c, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x12122a, 0.35));

    const keyLight = new THREE.DirectionalLight(0xc4b5fd, 0.9);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00b4d8, 0.55);
    fillLight.position.set(-3, -1, -2);
    scene.add(fillLight);

    // Moving accent lights — slow orbits through the dark
    const orbitLightA = new THREE.PointLight(0x6c5ce7, 2.4, 18, 2);
    orbitLightA.position.set(4, 1, 2);
    scene.add(orbitLightA);

    const orbitLightB = new THREE.PointLight(0x00b4d8, 2.0, 16, 2);
    orbitLightB.position.set(-3, -2, 1);
    scene.add(orbitLightB);

    const orbitLightC = new THREE.PointLight(0xf77f6c, 1.2, 12, 2);
    orbitLightC.position.set(0, 3, -2);
    scene.add(orbitLightC);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.55, 0.42, 180, 24),
      new THREE.MeshPhysicalMaterial({
        color: 0x5b4fd6,
        metalness: 0.45,
        roughness: 0.22,
        transparent: true,
        opacity: 0.42,
        emissive: 0x1a1048,
        emissiveIntensity: 0.22,
        clearcoat: 0.45,
        clearcoatRoughness: 0.3,
      }),
    );
    knot.position.set(-0.4, 0.15, 0);
    scene.add(knot);

    const ring = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.55, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x00b4d8,
        metalness: 0.15,
        roughness: 0.55,
        transparent: true,
        opacity: 0.07,
        wireframe: true,
        emissive: 0x003d52,
        emissiveIntensity: 0.18,
      }),
    );
    ring.position.set(0.55, -0.35, 0);
    scene.add(ring);

    const particleCount = 1600;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color(0x6c5ce7);
    const color2 = new THREE.Color(0x00b4d8);
    const color3 = new THREE.Color(0xf77f6c);

    for (let i = 0; i < particleCount; i++) {
      const radius = 4.5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mix = Math.random();
      let c: THREE.Color;
      if (mix < 0.45) c = color1.clone().lerp(color2, Math.random());
      else if (mix < 0.8) c = color2.clone().lerp(color3, Math.random() * 0.4);
      else c = color3.clone().lerp(color1, Math.random());

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        size: 0.045,
        transparent: true,
        opacity: 0.75,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    scene.add(particles);

    const innerCount = 280;
    const innerPos = new Float32Array(innerCount * 3);
    for (let i = 0; i < innerCount; i++) {
      const r = 1.1 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      innerPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      innerPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      innerPos[i * 3 + 2] = r * Math.cos(phi);
    }

    const innerGeo = new THREE.BufferGeometry();
    innerGeo.setAttribute("position", new THREE.BufferAttribute(innerPos, 3));

    const innerParticles = new THREE.Points(
      innerGeo,
      new THREE.PointsMaterial({
        size: 0.028,
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    scene.add(innerParticles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationId = 0;
    let time = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.008;

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Orbiting lights through the darkness
      orbitLightA.position.x = Math.cos(time * 0.55) * 5.2;
      orbitLightA.position.y = Math.sin(time * 0.4) * 2.2 + 0.5;
      orbitLightA.position.z = Math.sin(time * 0.55) * 3.5;
      orbitLightA.intensity = 2.0 + Math.sin(time * 1.2) * 0.5;

      orbitLightB.position.x = Math.cos(time * 0.35 + 2.1) * -4.5;
      orbitLightB.position.y = Math.cos(time * 0.5) * 2.4 - 0.4;
      orbitLightB.position.z = Math.sin(time * 0.35 + 2.1) * 3.2;
      orbitLightB.intensity = 1.7 + Math.cos(time * 0.9) * 0.45;

      orbitLightC.position.x = Math.sin(time * 0.28) * 3.2;
      orbitLightC.position.y = Math.cos(time * 0.32) * 3.5;
      orbitLightC.position.z = Math.cos(time * 0.28) * -2.8;
      orbitLightC.intensity = 1.0 + Math.sin(time * 1.5) * 0.35;

      knot.rotation.x += 0.003;
      knot.rotation.y += 0.0045;
      knot.rotation.z += 0.0015;
      knot.position.x = -0.4 + targetX * 0.28;
      knot.position.y = 0.15 + targetY * 0.18;

      ring.rotation.x -= 0.0025;
      ring.rotation.y -= 0.004;
      ring.rotation.z += 0.0008;
      ring.position.x = 0.55 + targetX * 0.22;
      ring.position.y = -0.35 + targetY * 0.18;

      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;
      particles.rotation.z += 0.00015;

      innerParticles.rotation.x += 0.0008;
      innerParticles.rotation.y += 0.0012;

      camera.position.x += (targetX * 0.28 - camera.position.x) * 0.012;
      camera.position.y += (targetY * 0.18 - camera.position.y) * 0.012;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      knot.geometry.dispose();
      (knot.material as THREE.Material).dispose();
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
      particleGeo.dispose();
      (particles.material as THREE.Material).dispose();
      innerGeo.dispose();
      (innerParticles.material as THREE.Material).dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="atmosphere pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div ref={containerRef} id="three-canvas" className="absolute inset-0" />
      <div className="atmosphere__void" />
      <div className="atmosphere__beam atmosphere__beam--a" />
      <div className="atmosphere__beam atmosphere__beam--b" />
      <div className="atmosphere__glow atmosphere__glow--violet" />
      <div className="atmosphere__glow atmosphere__glow--cyan" />
      <div className="atmosphere__vignette" />
    </div>
  );
}
