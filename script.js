/* =====================================================
   SPINBORO SCRIPT — Interactive Life & Easter Eggs
   ===================================================== */

(function() {
    'use strict';

    // ================== Initialization ==================
    
    function init() {
        setupScrollAnimations();
        setupTimeAwareMessaging();
        setupMemberRotation();
        setupLyricsAnimation();
        setupClickEasterEggs();
        setupGlitchEffects();
    }

    // ================== Scroll Animations ==================
    
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe feature cards, warrior cards, and stat cards
        document.querySelectorAll('.feature, .warrior-card, .stat-card, .about-card').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // Add fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // ================== Time-Aware Messaging ==================
    
    function setupTimeAwareMessaging() {
        const now = new Date();
        const hour = now.getHours();
        
        // If it's actually 5am, show a special easter egg
        if (hour === 5) {
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                setTimeout(() => {
                    heroTitle.textContent = '🌅 RISE AND GRIND 🌅';
                    heroTitle.style.animation = 'pulse 0.5s ease-out';
                }, 1000);
            }
        }
    }

    // ================== Member Rotation ==================
    
    function setupMemberRotation() {
        const warriorCards = document.querySelectorAll('.warrior-card');
        let currentIndex = 0;

        // Highlight a random warrior on page load
        function highlightRandomWarrior() {
            warriorCards.forEach(card => {
                card.style.borderColor = 'rgba(0, 217, 255, 0.3)';
            });

            const randomIndex = Math.floor(Math.random() * warriorCards.length);
            const randomCard = warriorCards[randomIndex];
            randomCard.style.borderColor = '#ff006e';
            randomCard.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.4)';
        }

        highlightRandomWarrior();

        // Cycle through warriors periodically
        setInterval(highlightRandomWarrior, 8000);
    }

    // ================== Lyrics Animation ==================
    
    function setupLyricsAnimation() {
        const lyricsScroll = document.querySelector('.lyrics-scroll');
        if (!lyricsScroll) return;

        const lyricsPool = [
            '♪ PUSH ♪',
            '♪ BREATHE ♪',
            '♪ BURN ♪',
            '♪ RIDE ♪',
            '♪ GLOW ♪',
            '♪ BELIEVE ♪'
        ];

        let lyricIndex = 0;

        setInterval(() => {
            lyricsScroll.textContent = lyricsPool[lyricIndex % lyricsPool.length];
            lyricsScroll.style.animation = 'none';
            
            // Force reflow to restart animation
            void lyricsScroll.offsetWidth;
            lyricsScroll.style.animation = 'scroll-text 4s linear infinite';
            
            lyricIndex++;
        }, 4000);
    }

    // ================== Click Easter Eggs ==================
    
    function setupClickEasterEggs() {
        const tagline = document.querySelector('.tagline');
        const spinner = document.querySelector('.dual-screen');
        let taglineClickCount = 0;
        let spinnerClickCount = 0;

        if (tagline) {
            tagline.style.cursor = 'pointer';
            tagline.addEventListener('click', () => {
                taglineClickCount++;

                if (taglineClickCount === 1) {
                    tagline.style.animation = 'spin 0.5s ease-in-out';
                } else if (taglineClickCount === 2) {
                    tagline.style.textShadow = '0 0 30px #ff006e, 0 0 60px #00d9ff';
                } else if (taglineClickCount === 3) {
                    displayConfetti();
                    taglineClickCount = 0;
                }
            });
        }

        if (spinner) {
            spinner.style.cursor = 'pointer';
            spinner.addEventListener('click', () => {
                spinnerClickCount++;

                if (spinnerClickCount === 1) {
                    spinner.style.animation = 'spin 1s ease-out forwards';
                    setTimeout(() => {
                        spinnerClickCount = 0;
                    }, 1000);
                }
            });
        }

        // Add spin animation
        const spinStyle = document.createElement('style');
        spinStyle.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinStyle);
    }

    // ================== Confetti Easter Egg ==================
    
    function displayConfetti() {
        const colors = ['#00d9ff', '#ff006e', '#39ff14', '#b537f2'];
        const confettiPieces = 30;

        for (let i = 0; i < confettiPieces; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.boxShadow = `0 0 10px ${confetti.style.backgroundColor}`;

            document.body.appendChild(confetti);

            const duration = 2 + Math.random() * 1;
            const xMove = (Math.random() - 0.5) * 200;

            confetti.animate([
                { transform: 'translateY(0) translateX(0)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${xMove}px)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }

    // ================== Glitch Effects ==================
    
    function setupGlitchEffects() {
        const neonElements = document.querySelectorAll('.highlight, .glow-text, .logo-text');

        neonElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.animation = 'glitch 0.3s ease-in-out';
            });

            el.addEventListener('mouseleave', () => {
                el.style.animation = 'none';
            });
        });

        const glitchStyle = document.createElement('style');
        glitchStyle.textContent = `
            @keyframes glitch {
                0%, 100% { transform: translateX(0); }
                20% { transform: translateX(-2px); }
                40% { transform: translateX(2px); }
                60% { transform: translateX(-2px); }
                80% { transform: translateX(2px); }
            }
        `;
        document.head.appendChild(glitchStyle);
    }

    // ================== Smooth Scroll Helper ==================
    
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ================== Navigation Link Handling ==================
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                smoothScroll(href);
            }
        });
    });

    // ================== Keyboard Shortcuts ==================
    
    document.addEventListener('keydown', (e) => {
        // 'S' key = spin easter egg
        if (e.key.toLowerCase() === 's') {
            const spinner = document.querySelector('.dual-screen');
            if (spinner) {
                spinner.style.animation = 'spin 1s ease-out';
                setTimeout(() => {
                    spinner.style.animation = 'none';
                }, 1000);
            }
        }

        // 'P' key = show Easter egg message
        if (e.key.toLowerCase() === 'p') {
            console.log('🎤 Spinboro 5AM Warriors 🎤');
            console.log('"It\'s 5am, are you spinning me?" - The Spinboro Creed');
            console.log('Join us at Attleboro YMCA for karaoke video spin life!');
        }
    });

    // ================== Startup ==================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
