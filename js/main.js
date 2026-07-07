document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('nav__list--open');
      toggle.setAttribute(
        'aria-expanded',
        navList.classList.contains('nav__list--open')
      );
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    '.section__header, .pain-card, .service-card, .feature-item, .flow-step, .faq-item, .brand-story__inner, .cta-banner .container'
  );
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el, i) => {
      el.classList.add('reveal');
      // カードが並ぶ場所では順番に現れるよう軽く遅延をつける
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      observer.observe(el);
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item__question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('faq-item--open');

      document.querySelectorAll('.faq-item--open').forEach((openItem) => {
        openItem.classList.remove('faq-item--open');
        openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('faq-item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
