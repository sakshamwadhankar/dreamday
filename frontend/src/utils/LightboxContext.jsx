import React, { createContext, useState, useContext } from 'react';

const LightboxContext = createContext();

export const useLightbox = () => useContext(LightboxContext);

export const LightboxProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [mediaType, setMediaType] = useState(null); // 'photo' or 'video'
  const [mediaSrc, setMediaSrc] = useState(null);

  const openLightbox = (type, src) => {
    setMediaType(type);
    setMediaSrc(src);
    setActive(true);
  };

  const closeLightbox = () => {
    setActive(false);
    setTimeout(() => {
      setMediaType(null);
      setMediaSrc(null);
    }, 300); // allow fade out
  };

  return (
    <LightboxContext.Provider value={{ active, mediaType, mediaSrc, openLightbox, closeLightbox }}>
      {children}
      
      {/* Lightbox Modal rendered at root level */}
      <div 
        className={`lightbox ${active ? 'active' : ''}`} 
        id="lightbox"
        onClick={closeLightbox}
      >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-close" id="lightbox-close" onClick={closeLightbox}>&times;</span>
              {mediaType === 'video' && mediaSrc && (
                <video src={mediaSrc} controls autoPlay style={{ width: '100%', maxHeight: '75vh', border: '2px solid var(--gold-primary)', borderRadius: '8px', display: 'block' }}></video>
              )}
              {mediaType === 'photo' && mediaSrc && (
                <img src={mediaSrc} id="lightbox-img" alt="Lightbox view" />
              )}
          </div>
      </div>
    </LightboxContext.Provider>
  );
};
