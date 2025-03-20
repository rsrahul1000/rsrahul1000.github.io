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
    const modal = document.getElementById('formResponseModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.querySelector('.modal-close');
    const modalBtn = document.querySelector('.modal-btn');
    const successIcon = document.querySelector('.success-icon');
    const errorIcon = document.querySelector('.error-icon');
    const modalTitle = document.querySelector('.modal-title');
    const modalMessage = document.querySelector('.modal-message');
    
    // Function to show modal
    function showModal(success, title, message) {
        // Set the appropriate icon
        successIcon.style.display = success ? 'block' : 'none';
        errorIcon.style.display = success ? 'none' : 'block';
        
        // Set the title and message
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        
        // Show the modal and overlay
        modal.classList.add('active');
        modalOverlay.style.display = 'block';
        
        // Add body class to prevent scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide modal
    function hideModal() {
        modal.classList.remove('active');
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Add event listeners to close modal
    if (modalClose) {
        modalClose.addEventListener('click', hideModal);
    }
    
    if (modalBtn) {
        modalBtn.addEventListener('click', hideModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', hideModal);
    }
    
    // Handle escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            hideModal();
        }
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create JSON data object
            const jsonData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            
            // Add loading indicator to submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.innerHTML = originalBtnText + '<span class="spinner"></span>';
            submitBtn.disabled = true;
            
            // Use fetch to send the data to Google Apps Script
            fetch('https://script.google.com/macros/s/AKfycbzmOWz54e9zg3EI5rvG8TaoTVmbxThiPlsK6dACLskPfFoYi3-nXx_WkBio2-JGHpnErw/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData),
                mode: 'no-cors' // This prevents CORS issues with Google Apps Script
            })
            .then(response => {
                // Since we're using no-cors, we won't actually get a usable response
                // We'll assume success if there's no error
                
                // Remove loading spinner and restore button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Reset form
                contactForm.reset();
                
                // Show success modal
                showModal(
                    true, 
                    "Message Sent Successfully!", 
                    "Thank you for your message. I'll get back to you soon."
                );
            })
            .catch(error => {
                console.error('Error:', error);
                
                // Remove loading spinner and restore button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Show error modal
                showModal(
                    false, 
                    "Message Failed to Send", 
                    "Sorry, there was an error sending your message. Please try again or contact me directly via email."
                );
            });
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