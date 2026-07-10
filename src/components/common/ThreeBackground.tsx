"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type DeviceProfile = {
  stars: number;
  bolts: number;
  branches: number;
  pixelRatio: number;
  boltScale: number;
};

type LightningBolt = {
  line: THREE.Line;
  glow: THREE.Line;
  life: number;
  maxLife: number;
  delay: number;
  vx: number;
};

function getDeviceProfile(width: number): DeviceProfile {
  if (width < 480) {
    return { stars: 450, bolts: 3, branches: 0, pixelRatio: 1.5, boltScale: 0.75 };
  }
  if (width < 768) {
    return { stars: 700, bolts: 4, branches: 1, pixelRatio: 1.75, boltScale: 0.85 };
  }
  if (width < 1024) {
    return { stars: 1000, bolts: 6, branches: 1, pixelRatio: 2, boltScale: 1 };
  }
  return { stars: 1400, bolts: 8, branches: 2, pixelRatio: 2, boltScale: 1.15 };
}

/** Jagged Zeus-style lightning path in local space */
function buildLightningPath(
  segments: number,
  length: number,
  jagged: number,
  branchCount: number,
): Float32Array {
  const points: number[] = [];
  let x = 0;
  let y = length / 2;
  let z = 0;

  points.push(x, y, z);

  const step = length / segments;
  for (let i = 1; i <= segments; i++) {
    x += (Math.random() - 0.5) * jagged;
    y -= step;
    z += (Math.random() - 0.5) * jagged * 0.35;
    points.push(x, y, z);

    // Occasional side branch
    if (branchCount > 0 && Math.random() < 0.22 && i > 2 && i < segments - 1) {
      let bx = x;
      let by = y;
      let bz = z;
      const branchSegs = 2 + Math.floor(Math.random() * branchCount);
      for (let b = 0; b < branchSegs; b++) {
        bx += (Math.random() - 0.5) * jagged * 1.4;
        by -= step * 0.55;
        bz += (Math.random() - 0.5) * jagged * 0.4;
        points.push(bx, by, bz);
      }
      // Return to main path for continuous line (small jump ok for lightning look)
      points.push(x, y, z);
    }
  }

  return new Float32Array(points);
}

/**
 * Responsive 3D Zeus lightning over a dark starfield.
 * Scales bolt count, size, and quality for phone → desktop.
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let profile = getDeviceProfile(width);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070c, 0.02);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: width >= 768,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, profile.pixelRatio));
    renderer.setClearColor(0x05070c, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x141422, 0.4));

    // Starfield
    let particleGeo = new THREE.BufferGeometry();
    let particles: THREE.Points;

    const buildStars = (count: number) => {
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const starA = new THREE.Color(0x8a93a8);
      const starB = new THREE.Color(0x4a5568);

      for (let i = 0; i < count; i++) {
        const radius = 5 + Math.random() * 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi) - 2;

        const c = starA.clone().lerp(starB, Math.random());
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      particleGeo.dispose();
      particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      if (particles) {
        scene.remove(particles);
        (particles.material as THREE.Material).dispose();
      }

      particles = new THREE.Points(
        particleGeo,
        new THREE.PointsMaterial({
          size: width < 640 ? 0.03 : 0.038,
          transparent: true,
          opacity: 0.5,
          vertexColors: true,
          depthWrite: false,
          sizeAttenuation: true,
        }),
      );
      scene.add(particles);
    };

    buildStars(profile.stars);

    const coreMat = new THREE.LineBasicMaterial({
      color: 0xe8f4ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const glowMat = new THREE.LineBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const bolts: LightningBolt[] = [];

    const placeBolt = (bolt: LightningBolt) => {
      const spanX = width < 640 ? 7 : width < 1024 ? 9 : 11;
      const spanY = width < 640 ? 3.5 : 5;
      bolt.line.position.set(
        (Math.random() - 0.5) * spanX * 2,
        1 + Math.random() * spanY,
        -1 - Math.random() * 5,
      );
      bolt.glow.position.copy(bolt.line.position);
      bolt.line.rotation.z = (Math.random() - 0.5) * 0.5;
      bolt.glow.rotation.z = bolt.line.rotation.z;
      const s = profile.boltScale * (0.85 + Math.random() * 0.4);
      bolt.line.scale.setScalar(s);
      bolt.glow.scale.setScalar(s * 1.02);
      bolt.vx = (Math.random() - 0.5) * 0.01;
      bolt.maxLife = 18 + Math.floor(Math.random() * 22);
      bolt.life = bolt.maxLife;
      bolt.delay = Math.floor(Math.random() * 90);
    };

    const rebuildBoltGeometry = (bolt: LightningBolt) => {
      const segments = width < 640 ? 10 : width < 1024 ? 14 : 18;
      const length = width < 640 ? 4.5 : width < 1024 ? 6 : 7.5;
      const jagged = width < 640 ? 0.45 : 0.65;
      const path = buildLightningPath(segments, length, jagged, profile.branches);

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(path, 3));

      bolt.line.geometry.dispose();
      bolt.glow.geometry.dispose();
      bolt.line.geometry = geo;
      bolt.glow.geometry = geo.clone();
    };

    const createBolt = () => {
      const empty = new THREE.BufferGeometry();
      const line = new THREE.Line(empty, coreMat.clone());
      const glow = new THREE.Line(empty.clone(), glowMat.clone());
      glow.scale.setScalar(1.05);
      scene.add(glow);
      scene.add(line);
      const bolt: LightningBolt = {
        line,
        glow,
        life: 0,
        maxLife: 20,
        delay: Math.floor(Math.random() * 60),
        vx: 0,
      };
      rebuildBoltGeometry(bolt);
      placeBolt(bolt);
      bolts.push(bolt);
    };

    for (let i = 0; i < profile.bolts; i++) {
      createBolt();
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationId = 0;
    let resizeTimer = 0;

    const syncBoltCount = () => {
      while (bolts.length < profile.bolts) createBolt();
      while (bolts.length > profile.bolts) {
        const bolt = bolts.pop();
        if (!bolt) break;
        scene.remove(bolt.line);
        scene.remove(bolt.glow);
        bolt.line.geometry.dispose();
        bolt.glow.geometry.dispose();
        (bolt.line.material as THREE.Material).dispose();
        (bolt.glow.material as THREE.Material).dispose();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        profile = getDeviceProfile(width);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, profile.pixelRatio));

        buildStars(profile.stars);
        syncBoltCount();
        bolts.forEach((bolt) => {
          rebuildBoltGeometry(bolt);
          placeBolt(bolt);
        });
      }, 150);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      if (particles) {
        particles.rotation.y += 0.0002;
        particles.rotation.x += 0.00006;
      }

      for (const bolt of bolts) {
        if (bolt.delay > 0) {
          bolt.delay -= 1;
          (bolt.line.material as THREE.LineBasicMaterial).opacity = 0;
          (bolt.glow.material as THREE.LineBasicMaterial).opacity = 0;
          continue;
        }

        bolt.life -= 1;
        bolt.line.position.x += bolt.vx;
        bolt.glow.position.x = bolt.line.position.x;

        const t = bolt.life / bolt.maxLife;
        // Sharp flash then fade — Zeus strike feel
        let coreOpacity = 0;
        let glowOpacity = 0;
        if (t > 0.85) {
          coreOpacity = 1;
          glowOpacity = 0.55;
        } else if (t > 0.55) {
          coreOpacity = 0.35 + Math.random() * 0.65;
          glowOpacity = 0.2 + Math.random() * 0.25;
        } else if (t > 0) {
          coreOpacity = t * 0.45;
          glowOpacity = t * 0.2;
        }

        (bolt.line.material as THREE.LineBasicMaterial).opacity = coreOpacity;
        (bolt.glow.material as THREE.LineBasicMaterial).opacity = glowOpacity;

        if (bolt.life <= 0) {
          rebuildBoltGeometry(bolt);
          placeBolt(bolt);
          bolt.delay = 40 + Math.floor(Math.random() * (width < 640 ? 120 : 80));
        }
      }

      camera.position.x += (targetX * 0.18 - camera.position.x) * 0.01;
      camera.position.y += (targetY * 0.1 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.clearTimeout(resizeTimer);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeo.dispose();
      if (particles) (particles.material as THREE.Material).dispose();
      bolts.forEach((bolt) => {
        bolt.line.geometry.dispose();
        bolt.glow.geometry.dispose();
        (bolt.line.material as THREE.Material).dispose();
        (bolt.glow.material as THREE.Material).dispose();
        scene.remove(bolt.line);
        scene.remove(bolt.glow);
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="atmosphere pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div ref={containerRef} id="three-canvas" className="absolute inset-0" />
      <div className="atmosphere__void" />
      <div className="atmosphere__vignette" />
    </div>
  );
}
