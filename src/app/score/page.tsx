import React from 'react';

export const metadata = {
  title: 'SCORE',
  description: 'SCORE',
};

export default function ARCSimulator() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="http://159.203.1.81/"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
