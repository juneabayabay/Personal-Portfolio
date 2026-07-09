"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0b0d12, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x222244, 0.5));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(1, 2, 3);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x6c5ce7, 0.8);
    backLight.position.set(-2, -1, -3);
    scene.add(backLight);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.6, 0.5, 160, 20),
      new THREE.MeshPhysicalMaterial({
        color: 0x6c5ce7,
        metalness: 0.3,
        roughness: 0.25,
        transparent: true,
        opacity: 0.55,
        emissive: 0x2a1a6e,
        emissiveIntensity: 0.15,
        clearcoat: 0.3,
        clearcoatRoughness: 0.4,
      }),
    );
    knot.position.set(-0.5, 0.2, 0);
    scene.add(knot);

    const ring = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.4, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x00b4d8,
        metalness: 0.1,
        roughness: 0.6,
        transparent: true,
        opacity: 0.08,
        wireframe: true,
        emissive: 0x005f7a,
        emissiveIntensity: 0.1,
      }),
    );
    ring.position.set(0.6, -0.4, 0);
    scene.add(ring);

    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color(0x6c5ce7);
    const color2 = new THREE.Color(0x00b4d8);
    const color3 = new THREE.Color(0xf77f6c);

    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mix = Math.random();
      let c: THREE.Color;
      if (mix < 0.4) c = color1.clone().lerp(color2, Math.random());
      else if (mix < 0.7) c = color2.clone().lerp(color3, Math.random());
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
        size: 0.06,
        transparent: true,
        opacity: 0.7,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    scene.add(particles);

    const innerCount = 300;
    const innerPos = new Float32Array(innerCount * 3);
    for (let i = 0; i < innerCount; i++) {
      const r = 1.2 + Math.random() * 1.8;
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
        size: 0.03,
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.5,
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
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      knot.rotation.x += 0.004;
      knot.rotation.y += 0.006;
      knot.rotation.z += 0.002;
      knot.position.x = -0.5 + targetX * 0.3;
      knot.position.y = 0.2 + targetY * 0.2;

      ring.rotation.x -= 0.003;
      ring.rotation.y -= 0.005;
      ring.rotation.z += 0.001;
      ring.position.x = 0.6 + targetX * 0.25;
      ring.position.y = -0.4 + targetY * 0.2;

      particles.rotation.x += 0.0004;
      particles.rotation.y += 0.0006;
      particles.rotation.z += 0.0002;

      innerParticles.rotation.x += 0.001;
      innerParticles.rotation.y += 0.0015;
      innerParticles.rotation.z += 0.0005;

      camera.position.x += (targetX * 0.3 - camera.position.x) * 0.01;
      camera.position.y += (targetY * 0.2 - camera.position.y) * 0.01;
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
    <div
      ref={containerRef}
      id="three-canvas"
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
