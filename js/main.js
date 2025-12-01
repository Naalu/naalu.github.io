/**
 * Karl Reger Portfolio - Main JavaScript
 * Handles animations, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // FADE-IN ON SCROLL (Intersection Observer)
  // ============================================
  
  const fadeElements = document.querySelectorAll('.fade-in-section, .glance-card, .method-card, .project-card, .card');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after animation
        // fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => {
    el.classList.add('fade-in-section');
    fadeObserver.observe(el);
  });
  
  // ============================================
  // STAGGERED CHILDREN ANIMATION
  // ============================================
  
  const staggerContainers = document.querySelectorAll('.stagger-children');
  
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  staggerContainers.forEach(el => staggerObserver.observe(el));
  
  // ============================================
  // HERO SECTION ANIMATION
  // ============================================
  
  const heroElements = document.querySelectorAll('.hero-animate');
  heroElements.forEach(el => {
    el.classList.add('visible');
  });
  
  // ============================================
  // NAVBAR SCROLL EFFECT
  // ============================================
  
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ============================================
  // LAZY LOADING FOR IMAGES
  // ============================================
  
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for older browsers
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          lazyObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      lazyObserver.observe(img);
    });
  }
  
  // ============================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ============================================
  
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.startsWith(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });
  
});