// Particles.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#10b981"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#10b981",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize Typed.js
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Computer Science Student',
                'Software Developer',
                'Machine Learning Enthusiast',
                'Problem Solver'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        // Change icon based on theme
        const icon = this.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Floating Navigation Indicator
    const sections = document.querySelectorAll('section');
    const floatingNavItems = document.querySelectorAll('.floating-nav li');
    const navIndicator = document.querySelector('.nav-indicator');
    
    if (floatingNavItems.length > 0 && navIndicator) {
        // Set initial position
        const firstItem = floatingNavItems[0];
        const firstItemRect = firstItem.getBoundingClientRect();
        navIndicator.style.transform = `translateY(${firstItemRect.top - firstItem.parentElement.getBoundingClientRect().top}px)`;
    }
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        floatingNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === current) {
                item.classList.add('active');
                
                // Move indicator
                if (navIndicator) {
                    const itemRect = item.getBoundingClientRect();
                    navIndicator.style.transform = `translateY(${itemRect.top - item.parentElement.getBoundingClientRect().top}px)`;
                }
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkills = function() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < window.innerHeight - 100) {
                const width = bar.style.width;
                if (width === '0px' || width === '') {
                    // Get the width from the parent's text
                    const parent = bar.parentElement.previousElementSibling;
                    const percentage = parent.lastElementChild.textContent;
                    bar.style.width = percentage;
                }
            }
        });
    };
    
    window.addEventListener('scroll', animateSkills);
    
    // Trigger once on load
    animateSkills();

    // Simple AOS (Animate On Scroll) implementation
    const animateElements = document.querySelectorAll('[data-aos]');
    
    const checkIfInView = function() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    window.addEventListener('scroll', checkIfInView);
    
    // Trigger once on load
    checkIfInView();
});