// ===========================
// DASI — Website Scripts
// ===========================

(function () {
    'use strict';

    // --- Sticky Nav ---
    const nav = document.getElementById('nav');
    const hero = document.getElementById('hero');
    let navVisible = false;

    function updateNav() {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const shouldShow = heroBottom < 0;

        if (shouldShow !== navVisible) {
            navVisible = shouldShow;
            nav.classList.toggle('nav--visible', shouldShow);
        }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    // --- Active Section Highlight ---
    const sections = document.querySelectorAll('.section[id], .hero[id]');
    const navLinks = document.querySelectorAll('.nav__links a, .mobile-menu a');

    function updateActiveSection() {
        let current = '';
        const scrollY = window.scrollY + 120;

        sections.forEach(function (section) {
            if (section.offsetTop <= scrollY) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    // --- Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        hamburger.classList.toggle('nav__hamburger--open', menuOpen);
        mobileMenu.classList.toggle('mobile-menu--open', menuOpen);
        hamburger.setAttribute('aria-expanded', String(menuOpen));
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuOpen) toggleMenu();
        });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuOpen) toggleMenu();
    });

    // --- Contact Form → WhatsApp ---
    var form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous errors
        form.querySelectorAll('.form__group--error').forEach(function (g) {
            g.classList.remove('form__group--error');
        });

        // Validate required fields
        var valid = true;
        var requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                field.closest('.form__group').classList.add('form__group--error');
                valid = false;
            }
        });

        // Validate phone (basic)
        var phoneField = document.getElementById('phone');
        var phoneVal = phoneField.value.trim();
        if (phoneVal && !/^[\d\s\-+().]{7,20}$/.test(phoneVal)) {
            phoneField.closest('.form__group').classList.add('form__group--error');
            valid = false;
        }

        if (!valid) {
            var firstError = form.querySelector('.form__group--error .form__input');
            if (firstError) firstError.focus();
            return;
        }

        // Build WhatsApp message
        var name = document.getElementById('name').value.trim();
        var phone = phoneVal;
        var location = document.getElementById('location').value.trim();
        var projectType = document.getElementById('projectType').value;
        var dimensions = document.getElementById('dimensions').value.trim() || 'No especificado';
        var machinery = document.getElementById('machinery').value;
        var details = document.getElementById('details').value.trim() || 'Sin detalles adicionales';

        var message = 'Hola, quiero consultar por un proyecto de pileta.\n\n'
            + 'Nombre: ' + name + '\n'
            + 'Teléfono: ' + phone + '\n'
            + 'Zona: ' + location + '\n'
            + 'Proyecto: ' + projectType + '\n'
            + 'Medidas: ' + dimensions + '\n'
            + 'Acceso maquinaria: ' + machinery + '\n'
            + 'Detalles: ' + details + '\n\n'
            + '¿Podrían asesorarme?';

        var encoded = encodeURIComponent(message);
        var waUrl = 'https://wa.me/5491140986098?text=' + encoded;

        window.open(waUrl, '_blank', 'noopener');
    });

    // Clear error on input
    form.querySelectorAll('.form__input').forEach(function (input) {
        input.addEventListener('input', function () {
            this.closest('.form__group').classList.remove('form__group--error');
        });
        input.addEventListener('change', function () {
            this.closest('.form__group').classList.remove('form__group--error');
        });
    });

    // --- GSAP Scroll Animations ---
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out' });

    // Hide everything first with gsap.set — no CSS needed
    gsap.set('.reveal', { autoAlpha: 0, y: 40 });
    gsap.set('.reveal-children > *', { autoAlpha: 0, y: 30 });
    gsap.set(['.hero__logo', '.hero__title', '.hero__subtitle', '.hero__ctas'], { autoAlpha: 0 });
    gsap.set('.contact-layout__info', { autoAlpha: 0 });
    gsap.set('#contactForm', { autoAlpha: 0 });

    var mm = gsap.matchMedia();

    mm.add({
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
    }, function (context) {
        var c = context.conditions;
        var dur = c.reduceMotion ? 0 : 0.8;

        // Reveal elements — fade up on scroll
        gsap.utils.toArray('.reveal').forEach(function (el) {
            gsap.to(el, {
                y: 0,
                autoAlpha: 1,
                duration: dur,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // Staggered children — batch entrance
        ScrollTrigger.batch('.reveal-children > *', {
            onEnter: function (elements) {
                gsap.to(elements, {
                    y: 0,
                    autoAlpha: 1,
                    duration: dur,
                    stagger: 0.12,
                    overwrite: true
                });
            },
            start: 'top 88%',
            once: true
        });

        // Hero content — entrance sequence
        gsap.set('.hero__logo', { y: c.reduceMotion ? 0 : -20 });
        gsap.set('.hero__title', { y: c.reduceMotion ? 0 : 30 });
        gsap.set('.hero__subtitle', { y: c.reduceMotion ? 0 : 20 });
        gsap.set('.hero__ctas', { y: c.reduceMotion ? 0 : 20 });

        var heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
            .to('.hero__logo', { y: 0, autoAlpha: 1, duration: dur * 0.8 })
            .to('.hero__title', { y: 0, autoAlpha: 1, duration: dur }, '-=0.4')
            .to('.hero__subtitle', { y: 0, autoAlpha: 1, duration: dur * 0.7 }, '-=0.4')
            .to('.hero__ctas', { y: 0, autoAlpha: 1, duration: dur * 0.7 }, '-=0.3');

        // Highlights — counter-like pop
        gsap.utils.toArray('.highlight__number').forEach(function (el) {
            gsap.fromTo(el,
                { scale: c.reduceMotion ? 1 : 0.5, autoAlpha: 0 },
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: dur * 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
                }
            );
        });

        // Gallery images — slight scale + fade
        gsap.utils.toArray('.gallery__item').forEach(function (el, i) {
            gsap.fromTo(el,
                { scale: c.reduceMotion ? 1 : 0.92, autoAlpha: 0 },
                {
                    scale: 1,
                    autoAlpha: 1,
                    duration: dur * 1.1,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true }
                }
            );
        });

        // Flow steps — slide in from left with stagger
        if (c.isDesktop && !c.reduceMotion) {
            gsap.fromTo('.flow__step',
                { x: -40, autoAlpha: 0 },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: '.flow__steps', start: 'top 80%', once: true }
                }
            );
        }

        // Oasis callout — slide in from right
        var oasis = document.querySelector('.oasis');
        if (oasis) {
            gsap.fromTo(oasis,
                { x: c.reduceMotion ? 0 : (c.isDesktop ? 60 : 30), autoAlpha: 0 },
                {
                    x: 0,
                    autoAlpha: 1,
                    duration: dur,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: oasis, start: 'top 85%', once: true }
                }
            );
        }

        // Contact section
        gsap.fromTo('.contact-layout__info',
            { x: c.isDesktop ? -40 : 0, y: c.isDesktop ? 0 : 30, autoAlpha: 0 },
            {
                x: 0, y: 0, autoAlpha: 1, duration: dur,
                scrollTrigger: { trigger: '.contact-layout', start: 'top 85%', once: true }
            }
        );
        gsap.fromTo('#contactForm',
            { x: c.isDesktop ? 40 : 0, y: c.isDesktop ? 0 : 30, autoAlpha: 0 },
            {
                x: 0, y: 0, autoAlpha: 1, duration: dur, delay: 0.15,
                scrollTrigger: { trigger: '.contact-layout', start: 'top 85%', once: true }
            }
        );

        // Parallax on hero overlay
        if (!c.reduceMotion) {
            gsap.to('.hero__overlay', {
                backgroundImage: 'linear-gradient(to top, rgba(10,36,99,0.85) 0%, rgba(10,36,99,0.3) 100%)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    });

    // --- Lightbox ---
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCounter = lightbox.querySelector('.lightbox__counter');
    var galleryItems = document.querySelectorAll('.gallery__item');
    var currentIndex = 0;
    var gallerySrcs = [];

    galleryItems.forEach(function (item, i) {
        var img = item.querySelector('img');
        gallerySrcs.push(img.src);
        item.addEventListener('click', function () {
            currentIndex = i;
            openLightbox();
        });
    });

    function openLightbox() {
        lightboxImg.src = gallerySrcs[currentIndex];
        lightboxCounter.textContent = (currentIndex + 1) + ' / ' + gallerySrcs.length;
        lightbox.classList.add('lightbox--open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('lightbox--open');
        document.body.style.overflow = '';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % gallerySrcs.length;
        openLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + gallerySrcs.length) % gallerySrcs.length;
        openLightbox();
    }

    lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', function (e) {
        e.stopPropagation();
        prevImage();
    });
    lightbox.querySelector('.lightbox__nav--next').addEventListener('click', function (e) {
        e.stopPropagation();
        nextImage();
    });

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard nav
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('lightbox--open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

})();
