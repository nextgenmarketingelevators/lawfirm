'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

export function GSAPInitializer() {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial load scroll
    if (typeof window !== 'undefined' && prevPathRef.current === pathname) {
      window.history.scrollRestoration = 'manual';
    }

    // Smooth scroll to top on route change
    if (typeof window !== 'undefined' && prevPathRef.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    prevPathRef.current = pathname;

    // Wait slightly to ensure DOM is ready before tracking
    setTimeout(() => {
      // Global fade-in for sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Specific animations for hero elements
      const heroElements = document.querySelectorAll('.hero-animate');
      if (heroElements.length > 0) {
        gsap.fromTo(heroElements, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
          }
        );
      }
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
