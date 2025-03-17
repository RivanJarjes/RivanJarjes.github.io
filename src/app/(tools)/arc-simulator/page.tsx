import React from 'react';

export const metadata = {
  title: 'ARC Assembly Simulator',
  description: 'ARC Assembly Simulator',
};

export default function ARCSimulator() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://arc-tools-web.vercel.app/"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
