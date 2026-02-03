import React, { useState, useEffect, useRef } from 'react';

export default function InitialLoader({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const bottomRef = useRef(null);

  const bootSequence = [
    "Initializing Solasta Kernal v26.0...",
    "Loading modules...",
    "> [OK] Graphics Engine",
    "> [OK] Physics Engine",
    "> [OK] Sound System",
    "Allocating memory...",
    "Checking dependencies...",
    "> [OK] React.js",
    "> [OK] Next.js",
    "> [OK] Three.js",
    "Establishing secure connection...",
    "Accessing Mainframe...",
    "System Ready.",
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((log, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === bootSequence.length - 1) {
          setIsReady(true);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleEnter = () => {
    // We modify the internal state or let the parent know roughly immediately
    // But since this component is visually controlled by the parent via existence,
    // we might need a way to trigger the "exit" in _app.js.
    // However, _app.js currently controls loading via simple timer.
    // We'll need to update _app.js to wait for THIS component.
    // For now, we'll dispatch a custom event or let _app.js know if we can.
    // Given the constraints, we'll try to find a way to signal completion.
    // EDIT: _app.js logic sends a "loading" prop or unmounts it.
    // ACTUALLY: _app.js has `initialLoading` state timed with `setTimeout`.
    // I need to change _app.js to listen to a callback if I want 'Interactive' loader.
    // For now, I'll just emit a custom event that _app.js could listen to, OR
    // simply let the user know I need to update _app.js too.
    
    // Dispatching a custom event that _app.jsx can arguably listen to if refactored.
    window.dispatchEvent(new Event('solasta-loader-complete'));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && isReady) {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReady]);

  return (
    <div 
      className="fixed inset-0 bg-black z-[100] font-ibm text-green-500 p-8 overflow-hidden cursor-pointer"
      onClick={isReady ? handleEnter : null}
    >
      <div className="max-w-3xl mx-auto h-full flex flex-col justify-end pb-20">
        {logs.map((log, i) => (
          <div key={i} className="mb-2 text-sm md:text-lg opactiy-80">
            <span className="mr-2 text-gray-500">[{new Date().toLocaleTimeString()}]</span>
            {log}
          </div>
        ))}
        {isReady && (
          <div className="mt-4 text-xl md:text-2xl font-bold animate-pulse text-white">
            &gt; Press [ENTER] or Click to Initialize_
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
