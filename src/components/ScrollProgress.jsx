import React, { useEffect, useState } from 'react';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${width}%`,
        background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-highlight))',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
        borderRadius: '0 2px 2px 0',
      }}
    />
  );
}

export default ScrollProgress;
