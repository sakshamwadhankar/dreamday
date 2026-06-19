import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={`preloader ${hidden ? 'hidden' : ''}`}>
        <div className="loader-logo">Dream Day</div>
        <div className="loader-spinner"></div>
    </div>
  );
};

export default Preloader;
