// components/india-map.tsx
"use client";

import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface Connection {
  start: { lat: number; lng: number; label: string };
  end: { lat: number; lng: number; label: string };
}

export function IndiaMapUI({ connections }: { connections: Connection[] }) {
  const { theme } = useTheme();

  // India-focused map
  const map = new DottedMap({
    countries: ['IND'], // ISO code for India
    height: 100,
    region: {
      lat: { min: 6, max: 36 },   // India's bounds
      lng: { min: 68, max: 98 }
    },
    grid: "diagonal"
  });

  const svgMap = map.getSVG({
    radius: 0.2,
    color: theme === "dark" ? "#FFFFFF30" : "#00000030",
    backgroundColor: "transparent"
  });

  // Convert lat/lng to SVG coordinates
  const project = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180)
  });

  // Create curved path
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50; // Adjust curvature here
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full aspect-[2/1]">
      {/* Base Map */}
      <img 
        src={`data:image/svg+xml,${encodeURIComponent(svgMap)}`} 
        className="absolute inset-0 w-full h-full"
        alt="India Map"
      />

      {/* Animated Connections */}
      <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => {
          const start = project(conn.start.lat, conn.start.lng);
          const end = project(conn.end.lat, conn.end.lng);
          const path = createCurvedPath(start, end);

          return (
            <g key={i}>
              {/* Animated Curved Line */}
              <motion.path
                d={path}
                stroke="#3b82f6"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />

              {/* Start Dot */}
              <motion.circle
                cx={start.x}
                cy={start.y}
                r={4}
                fill="#3b82f6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />

              {/* End Dot */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r={4}
                fill="#3b82f6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.5 }}
              />

              {/* Connection Label */}
              <motion.text
                x={(start.x + end.x) / 2}
                y={Math.min(start.y, end.y) - 60} // Position above the curve
                textAnchor="middle"
                fill={theme === 'dark' ? 'white' : 'black'}
                fontSize="12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 + 0.8 }}
              >
                {conn.start.label} → {conn.end.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}