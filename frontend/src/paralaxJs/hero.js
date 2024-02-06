import React, { useEffect, useState } from 'react';
import plx from "react-plx"

const MyComponent = () => {
  const [backgroundSize, setBackgroundSize] = useState(130);
  const [h1Top, setH1Top] = useState(50);
  const [h1Opacity, setH1Opacity] = useState(1);
  const [navBgVisible, setNavBgVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1000) {
        setBackgroundSize(130 + window.scrollY / 5);
        setH1Top(50 + window.scrollY * 0.1);
        setH1Opacity(1 - window.scrollY * 0.003);
      }

      if (window.scrollY >= document.querySelector('.content-wrapper').offsetTop - 300) {
        setNavBgVisible(true);
      } else {
        setNavBgVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Your JSX structure here */}
      <div className="hero" style={{ backgroundSize: ${backgroundSize}% }}>
        <h1 style={{ top: ${h1Top}%, opacity: h1Opacity }}>Something Inspiring</h1>
      </div>
      {/* Rest of your JSX */}
      <div className={nav-bg ${navBgVisible ? 'bg-visible' : 'bg-hidden'}}></div>
    </div>
  );
};

export default MyComponent;
