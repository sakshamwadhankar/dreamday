import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    if (animatedElements.length > 0) {
      animatedElements.forEach(el => {
        if (el.dataset.delay) {
          el.style.transitionDelay = el.dataset.delay;
        }
        if (el.dataset.duration) {
          el.style.transitionDuration = el.dataset.duration;
        }
      });

      const animObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              animObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      animatedElements.forEach(el => animObserver.observe(el));
    }
  }); // Run after every render to attach to new elements
};
