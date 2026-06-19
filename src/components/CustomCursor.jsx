import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    const onMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };

    const updateCursorOutline = () => {
      const speed = 0.15;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;
      
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      
      animationFrameId = requestAnimationFrame(updateCursorOutline);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId = requestAnimationFrame(updateCursorOutline);

    // Dynamic Hover classes
    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const setupHoverListeners = () => {
      const hoverTargets = document.querySelectorAll(
        'a, button, .filter-btn, .gallery-item, .portfolio-card, .service-card, input, textarea, select, .social-icon, .whatsapp-cta, .back-to-top, .video-trio-card, .stat-item'
      );
      hoverTargets.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    setupHoverListeners();

    // Use a mutation observer to attach listeners to dynamically created elements
    const observer = new MutationObserver(setupHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      removeHover();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={cursorDotRef} style={{ opacity: 0 }}></div>
      <div className="custom-cursor-outline" ref={cursorOutlineRef} style={{ opacity: 0 }}></div>
    </>
  );
};

export default CustomCursor;
