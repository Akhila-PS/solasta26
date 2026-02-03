import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Move the main cursor instantly
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY
      });
    };

    // Animation loop for fluid follower
    const loop = () => {
      // Linear interpolation (lerp) for smooth following
      // 0.15 is the "drag" factor - lower is slower/smoother
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      gsap.set(follower, {
        x: posX,
        y: posY
      });

      requestAnimationFrame(loop);
    };

    // Add event listeners for hover effects
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Start loop
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (isHovering) {
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, { 
        scale: 2.5, 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderColor: 'rgba(255, 255, 255, 0)',
        mixBlendMode: 'difference',
        duration: 0.3 
      });
    } else {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: 'transparent', 
        borderColor: 'rgba(151, 71, 255, 0.5)', 
        mixBlendMode: 'normal',
        duration: 0.3 
      });
    }
  }, [isHovering]);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="hidden lg:block fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={followerRef} 
        className="hidden lg:block fixed top-0 left-0 w-[40px] h-[40px] border border-main_primary/50 rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
      />
      
      {/* Global Style to force hide default cursor on interactive elements */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button, [role="button"], input, label, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
