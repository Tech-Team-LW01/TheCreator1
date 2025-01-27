// app/demo.tsx
"use client";
import { IndiaMapUI } from "@/components/ui/India-map";

export function IndiaMap() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900">
      <IndiaMapUI
       connections={[
        {
          start: { lat: 28.6139, lng: 77.209, label: "Delhi" },
          end: { lat: 19.0760, lng: 72.8777, label: "Mumbai" }
        },
        {
          start: { lat: 22.5726, lng: 88.3639, label: "Kolkata" },
          end: { lat: 13.0827, lng: 80.2707, label: "Chennai" }
        },
        {
          start: { lat: 12.9716, lng: 77.5946, label: "Bengaluru" },
          end: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" }
        }
      ]}
      />
    </div>
  );
}