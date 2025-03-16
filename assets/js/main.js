// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.7rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', function() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = progress + '%';
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        // Check system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            body.classList.add('dark-mode');
        }
    }

    // Handle theme toggle click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save preference to localStorage
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }

    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter-text');
    const phrases = [
        'Software Engineer',
        'Full-Stack Developer',
        'Java & Spring Boot Specialist',
        'Cloud Infrastructure Expert'
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let isEnd = false;

    function typeWriter() {
        isEnd = false;
        if (typewriterElement) {
            if (phraseIndex === phrases.length) {
                phraseIndex = 0;
            }

            if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
                currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
                typewriterElement.textContent = currentPhrase || '\u00A0'; // Use non-breaking space if empty
                letterIndex++;
            }

            if (isDeleting && letterIndex >= 0) {
                currentPhrase = phrases[phraseIndex].substring(0, letterIndex);
                typewriterElement.textContent = currentPhrase || '\u00A0'; // Use non-breaking space if empty
                letterIndex--;
            }

            if (letterIndex === phrases[phraseIndex].length + 1) {
                isDeleting = true;
                isEnd = true;
            }

            if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                phraseIndex++;
            }

            const typingSpeed = isDeleting ? 50 : isEnd ? 2000 : 100;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6c63ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6c63ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true,
                    ontouchstart: {
                        enable: true,
                        mode: 'grab'
                    },
                    ontouchmove: {
                        enable: true,
                        mode: 'grab'
                    },
                    ontouchend: {
                        enable: true,
                        mode: 'grab'
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 0.8,
                        opacity: 0.6,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you would implement this)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Section header animations
    const sectionHeaders = document.querySelectorAll('.section-header');
    const criticalSectionHeaders = document.querySelectorAll('#about .section-header, #projects .section-header, #contact .section-header');
    
    // Always make critical sections visible
    criticalSectionHeaders.forEach(header => {
        header.classList.add('visible');
        header.style.opacity = '1';
    });
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger earlier
        threshold: 0.01 // Lower threshold to trigger more easily
    };

    // Immediately show headers if in dark mode
    if (body.classList.contains('dark-mode')) {
        sectionHeaders.forEach(header => {
            header.classList.add('visible');
            header.style.opacity = '1';
        });
    } else {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Only observe non-critical sections
        sectionHeaders.forEach(header => {
            // Skip critical sections which were already made visible
            if (!header.closest('#about') && 
                !header.closest('#projects') && 
                !header.closest('#contact')) {
                
                // Set initial opacity to ensure they're visible even without animation
                if (window.innerWidth <= 768) {
                    header.style.opacity = '1';
                    header.classList.add('visible');
                } else {
                    sectionObserver.observe(header);
                }
            }
        });
    }
}); 