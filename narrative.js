// Epic Tech AI - Universal Narrative Interactive Script

// Global narrative state
const NarrativeExperience = {
    isPortalActivated: false,
    currentChapter: 0,
    scrollProgress: 0,
    
    // Initialize the narrative experience
    init() {
        this.setupScrollReveal();
        this.setupPortalInteraction();
        this.setupSmoothScrolling();
        this.setupProgressTracking();
        this.setupImageInteractions();
        this.setupKeyboardNavigation();
        console.log('🔱 Universal Narrative - Experience Activated');
    },
    
    // Setup scroll-based reveal animations
    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Track chapter progress
                    if (entry.target.classList.contains('chapter-heading')) {
                        this.updateChapterProgress(entry.target);
                    }
                    
                    // Special animations for specific elements
                    this.triggerSpecialAnimations(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all reveal elements
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            revealObserver.observe(el);
        });
    },
    
    // Setup portal interaction
    setupPortalInteraction() {
        const portal = document.querySelector('.interactive-portal');
        if (portal) {
            portal.addEventListener('click', this.activatePortal.bind(this));
            portal.addEventListener('mouseenter', this.portalHover.bind(this));
            portal.addEventListener('mouseleave', this.portalLeave.bind(this));
        }
    },
    
    // Portal activation sequence
    activatePortal() {
        if (this.isPortalActivated) return;
        
        this.isPortalActivated = true;
        const portal = document.querySelector('.interactive-portal');
        const portalText = document.querySelector('.portal-text');
        
        // Visual transformation sequence
        portal.style.transform = 'scale(1.5)';
        portal.style.filter = 'brightness(1.5)';
        
        if (portalText) {
            portalText.textContent = 'ACTIVATED';
        }
        
        // Create activation effect
        this.createPortalActivationEffect();
        
        // Show activation message
        setTimeout(() => {
            this.showActivationMessage();
        }, 1500);
        
        // Reset portal appearance
        setTimeout(() => {
            portal.style.transform = 'scale(1)';
            portal.style.filter = 'brightness(1)';
            if (portalText) {
                portalText.textContent = 'MANIFESTED';
            }
        }, 3000);
        
        console.log('🌟 Portal Activated - Creative Consciousness Elevated');
    },
    
    // Portal hover effects
    portalHover() {
        const portalRing = document.querySelector('.portal-ring');
        if (portalRing && !this.isPortalActivated) {
            portalRing.style.animationDuration = '5s';
            portalRing.style.boxShadow = '0 0 60px #FFD700, 0 0 100px #FFD700';
        }
    },
    
    portalLeave() {
        const portalRing = document.querySelector('.portal-ring');
        if (portalRing && !this.isPortalActivated) {
            portalRing.style.animationDuration = '15s';
            portalRing.style.boxShadow = '0 0 30px #FFD700';
        }
    },
    
    // Create portal activation visual effect
    createPortalActivationEffect() {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            animation: portalFlash 2s ease-in-out;
        `;
        
        document.body.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 2000);
    },
    
    // Show activation completion message
    showActivationMessage() {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(10, 22, 40, 0.95);
                border: 2px solid #FFD700;
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                z-index: 10000;
                max-width: 500px;
                box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
                backdrop-filter: blur(10px);
            ">
                <h3 style="color: #FFD700; font-family: 'Syncopate', sans-serif; margin-bottom: 1rem; font-size: 1.2rem;">
                    ✨ CREATIVE CONSCIOUSNESS ACTIVATED
                </h3>
                <p style="color: white; margin-bottom: 1.5rem; line-height: 1.6;">
                    You have stepped through the portal of infinite possibility. Your creative journey with Epic Tech AI begins now.
                </p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    color: #0A1628;
                    border: none;
                    padding: 0.8rem 2rem;
                    border-radius: 25px;
                    font-weight: 600;
                    cursor: pointer;
                    font-family: 'Syncopate', sans-serif;
                    font-size: 0.9rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                    Begin Creation
                </button>
            </div>
        `;
        
        document.body.appendChild(message);
    },
    
    // Setup smooth scrolling for navigation
    setupSmoothScrolling() {
        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // Track reading progress
    setupProgressTracking() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = (scrollTop / docHeight) * 100;
            
            // Update progress indicator if it exists
            this.updateProgressIndicator();
        });
    },
    
    // Update chapter progress tracking
    updateChapterProgress(chapterElement) {
        const chapterNumber = chapterElement.querySelector('.chapter-number');
        if (chapterNumber) {
            const actNumber = chapterNumber.textContent.match(/\d+/);
            if (actNumber) {
                this.currentChapter = parseInt(actNumber[0]);
                console.log(`📖 Chapter ${this.currentChapter} - Reader Progress Tracked`);
            }
        }
    },
    
    // Update progress indicator
    updateProgressIndicator() {
        // Create progress indicator if it doesn't exist
        let progressBar = document.querySelector('.reading-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: ${this.scrollProgress}%;
                height: 3px;
                background: linear-gradient(90deg, #FFD700, #FFA500);
                z-index: 9999;
                transition: width 0.1s ease;
                box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            `;
            document.body.appendChild(progressBar);
        } else {
            progressBar.style.width = `${this.scrollProgress}%`;
        }
    },
    
    // Setup image interactions
    setupImageInteractions() {
        document.querySelectorAll('.narrative-image').forEach(img => {
            img.addEventListener('click', this.expandImage.bind(this));
            img.addEventListener('load', this.imageLoaded.bind(this));
        });
    },
    
    // Expand image on click
    expandImage(event) {
        const img = event.target;
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
            backdrop-filter: blur(5px);
        `;
        
        const expandedImg = img.cloneNode(true);
        expandedImg.style.cssText = `
            max-width: 90vw;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 15px;
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
            animation: imageExpand 0.3s ease-out;
        `;
        
        overlay.appendChild(expandedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
        
        // Add escape key listener
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    },
    
    // Image loaded callback
    imageLoaded(event) {
        const img = event.target;
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            img.style.transition = 'all 0.5s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 100);
    },
    
    // Trigger special animations for specific elements
    triggerSpecialAnimations(element) {
        if (element.classList.contains('manifestation-streams')) {
            this.animateManifestationStreams(element);
        }
        
        if (element.classList.contains('portal-visual')) {
            this.animatePortalVisual(element);
        }
        
        if (element.classList.contains('themes')) {
            this.animateThemes(element);
        }
    },
    
    // Animate manifestation streams
    animateManifestationStreams(container) {
        const streams = container.querySelectorAll('.stream');
        streams.forEach((stream, index) => {
            setTimeout(() => {
                stream.style.transform = 'translateX(0)';
                stream.style.opacity = '1';
            }, index * 200);
        });
    },
    
    // Animate portal visual
    animatePortalVisual(container) {
        const img = container.querySelector('.narrative-image');
        if (img) {
            img.style.animation = 'portalGlow 4s ease-in-out infinite';
        }
    },
    
    // Animate themes section
    animateThemes(container) {
        const items = container.querySelectorAll('li');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            }, index * 100);
        });
    },
    
    // Setup keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.scrollToNextSection();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.scrollToPreviousSection();
                    break;
                case 'Home':
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'End':
                    e.preventDefault();
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    break;
                case 'Enter':
                    if (document.querySelector('.interactive-portal:hover')) {
                        this.activatePortal();
                    }
                    break;
            }
        });
    },
    
    // Navigate to next section
    scrollToNextSection() {
        const sections = document.querySelectorAll('.story-section');
        const currentScroll = window.pageYOffset;
        
        for (let section of sections) {
            if (section.offsetTop > currentScroll + 100) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
        }
    },
    
    // Navigate to previous section
    scrollToPreviousSection() {
        const sections = Array.from(document.querySelectorAll('.story-section')).reverse();
        const currentScroll = window.pageYOffset;
        
        for (let section of sections) {
            if (section.offsetTop < currentScroll - 100) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
        }
    },
    
    // Reset experience
    resetExperience() {
        this.isPortalActivated = false;
        this.currentChapter = 0;
        this.scrollProgress = 0;
        
        const portalText = document.querySelector('.portal-text');
        if (portalText) {
            portalText.textContent = 'ENTER YOUR PORTAL';
        }
        
        console.log('🔄 Narrative Experience Reset');
    }
};

// Global function for portal activation (called from HTML)
function activatePortal() {
    NarrativeExperience.activatePortal();
}

// CSS animations for dynamic effects
const dynamicStyles = `
    @keyframes portalFlash {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes imageExpand {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .manifestation-streams .stream {
        transform: translateX(-50px);
        opacity: 0;
        transition: all 0.5s ease;
    }
    
    .themes li {
        transform: translateX(-30px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .narrative-image {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .narrative-image:hover {
        transform: scale(1.02);
        filter: brightness(1.1);
    }
    
    .reading-progress {
        transition: width 0.1s ease;
    }
    
    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
        .narrative-image,
        .interactive-portal,
        .stream,
        .themes li {
            animation: none !important;
            transition: none !important;
        }
        
        .reveal-on-scroll {
            opacity: 1 !important;
            transform: none !important;
        }
    }
    
    /* Focus indicators for keyboard navigation */
    .interactive-portal:focus {
        outline: 3px solid #FFD700;
        outline-offset: 5px;
    }
    
    .cta-button:focus {
        outline: 2px solid #FFD700;
        outline-offset: 3px;
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => NarrativeExperience.init());
} else {
    NarrativeExperience.init();
}

// Export for potential external use
window.NarrativeExperience = NarrativeExperience;
