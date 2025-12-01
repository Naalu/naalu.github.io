/**
 * Karl Reger Portfolio - Main JavaScript
 * Theme toggle, cursor glow, animations
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // THEME TOGGLE (Dark/Light Mode)
  // ============================================
  
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Announce change for screen readers
      const announcement = newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled';
      themeToggle.setAttribute('aria-label', announcement);
    });
  }
  
  // ============================================
  // CURSOR GLOW EFFECT
  // ============================================
  
  const cursorGlow = document.querySelector('.cursor-glow');
  
  if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    const speed = 0.15; // Smooth follow speed
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.classList.add('visible');
    });
    
    // Hide when mouse leaves window
    document.addEventListener('mouseleave', function() {
      cursorGlow.classList.remove('visible');
    });
    
    // Smooth animation loop
    function animateGlow() {
      // Ease toward mouse position
      glowX += (mouseX - glowX) * speed;
      glowY += (mouseY - glowY) * speed;
      
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      
      requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
    
    // Increase glow intensity on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .project-card, .glance-card, .method-card');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursorGlow.style.width = '500px';
        cursorGlow.style.height = '500px';
        cursorGlow.style.opacity = '1';
      });
      
      el.addEventListener('mouseleave', function() {
        cursorGlow.style.width = '400px';
        cursorGlow.style.height = '400px';
        cursorGlow.style.opacity = '';
      });
    });
  }
  
  // ============================================
  // FADE-IN ON SCROLL
  // ============================================
  
  const fadeElements = document.querySelectorAll('.glance-card, .method-card, .project-card, .card, .fade-in-section');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay based on index
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
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
  // SMOOTH SCROLL
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
  // ACTIVE NAV HIGHLIGHTING
  // ============================================
  
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.startsWith(href) && href !== '/') {
      link.classList.add('active');
      link.style.color = 'var(--color-accent)';
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });
  
  // ============================================
  // PARALLAX FLOATING SHAPES (Subtle)
  // ============================================
  
  const floatingShapes = document.querySelectorAll('.floating-shape');
  
  if (floatingShapes.length > 0 && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  }
  
});