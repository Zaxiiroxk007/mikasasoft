import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Create a scroll-triggered animation
 */
export const createScrollTrigger = (
  element: HTMLElement | string,
  animation: gsap.TweenVars,
  options?: ScrollTrigger.Vars
) => {
  return gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerAnimation = (
  elements: HTMLElement[] | string,
  animation: gsap.TweenVars,
  stagger: number = 0.1
) => {
  return gsap.from(elements, {
    ...animation,
    stagger,
  });
};

/**
 * Magnetic button effect
 */
export const magneticEffect = (button: HTMLElement, strength: number = 0.5) => {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = button.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(button, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Reveal animation with clip-path
 */
export const revealAnimation = (element: HTMLElement | string) => {
  return gsap.from(element, {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.2,
    ease: 'power3.inOut',
  });
};

/**
 * Counter animation
 */
export const animateCounter = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 2
) => {
  const obj = { value: start };

  return gsap.to(obj, {
    value: end,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString();
    },
  });
};
