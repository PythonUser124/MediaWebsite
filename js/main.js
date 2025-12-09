// Bikini Bottom News Network - Main JavaScript
// Professional interactions and smooth animations

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based header shadow
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Animate story cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add active state to navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Add hover effect to placeholders
    const placeholders = document.querySelectorAll('.video-placeholder, .ad-placeholder, .poll-placeholder, .post-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Print functionality for articles
    const articlePage = document.querySelector('.article-page');
    if (articlePage) {
        // You could add a print button here if needed
        console.log('Article page loaded');
    }

    // Add animation to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const titleObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, observerOptions);

        title.style.opacity = '0';
        title.style.transform = 'translateX(-20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        titleObserver.observe(title);
    });

    // Add copy-to-clipboard for quotes (useful for sharing)
    const quotes = document.querySelectorAll('.question-section');
    quotes.forEach(quote => {
        quote.style.cursor = 'default';
    });

    // Mobile menu toggle (if you add a mobile menu later)
    const createMobileMenu = function() {
        const nav = document.querySelector('.main-nav');
        if (window.innerWidth < 768 && nav) {
            // Mobile menu functionality can be added here
            console.log('Mobile view');
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // Enhance read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add timestamp to live/breaking news
    const liveIndicators = document.querySelectorAll('[data-live="true"]');
    liveIndicators.forEach(indicator => {
        const updateTime = function() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            console.log('Live update:', timeString);
        };

        // Update every minute
        setInterval(updateTime, 60000);
    });

    // Lazy load images (if you add images later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add fade-in effect to article content
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        articleContent.style.animation = 'fadeIn 0.8s ease';
    }

    // Console message
    console.log('🎬 Bikini Bottom News Network - Website Loaded');
    console.log('📰 Bringing Truth to the Surface');
});

// Utility function for smooth animations
function animateElement(element, animation, duration = '1s') {
    element.style.animation = `${animation} ${duration} ease`;

    element.addEventListener('animationend', function() {
        element.style.animation = '';
    }, { once: true });
}

// Utility function to format dates
function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Export functions for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateElement,
        formatDate
    };
}
