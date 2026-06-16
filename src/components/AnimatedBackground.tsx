"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles for floating data
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    // Network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 25; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }

    // Data streams (horizontal moving lines)
    const streams: Array<{
      y: number;
      x: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 8; i++) {
      streams.push({
        y: Math.random() * canvas.height,
        x: -100,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.2 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid (subtle)
      ctx.strokeStyle = "rgba(0, 183, 122, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 183, 122, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw and update network nodes with connections
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 183, 122, 0.4)";
        ctx.fill();

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 183, 122, ${0.1 * (1 - distance / 200)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      // Draw and update data streams
      streams.forEach((stream) => {
        stream.x += stream.speed;

        // Reset when off screen
        if (stream.x > canvas.width + 200) {
          stream.x = -200;
          stream.y = Math.random() * canvas.height;
        }

        // Draw stream (line with gradient)
        const gradient = ctx.createLinearGradient(stream.x - 100, 0, stream.x + 100, 0);
        gradient.addColorStop(0, `rgba(0, 183, 122, 0)`);
        gradient.addColorStop(0.5, `rgba(0, 183, 122, ${stream.opacity})`);
        gradient.addColorStop(1, `rgba(0, 183, 122, 0)`);

        ctx.beginPath();
        ctx.moveTo(stream.x - 100, stream.y);
        ctx.lineTo(stream.x + 100, stream.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}