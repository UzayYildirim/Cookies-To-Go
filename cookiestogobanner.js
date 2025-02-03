// Cookies To Go, Open-Source Cookie Banner by Uzay Yildirim

(function() {
    // Configuration - Edit these values to customize the banner
    const COOKIE_BANNER_CONFIG = {
        position: 'bottom',                    // Banner position on screen: 'top' or 'bottom'
        cookieExpireDays: 365,                // How many days to remember user's choice (e.g., 365 for one year)
        bannerText: 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
        
        // === Button Labels ===
        acceptButtonText: 'Accept All',        // Label for the button that accepts all cookies
        necessaryButtonText: 'Accept Necessary', // Label for the button that only accepts essential cookies
        declineButtonText: 'Decline All',      // Label for the button that rejects all cookies
        policyLinkText: 'Cookie Policy',       // Label for the link to cookie policy details
        
        // === Colors and Design ===
        theme: {
            // Main banner colors
            bannerBackground: '#f8f9fa',       // Background color of the banner (use hex color codes, e.g., #ffffff for white)
            bannerText: '#212529',             // Color of the text in the banner
            
            // Button colors (use hex color codes)
            acceptButton: '#28a745',           // Color of the Accept All button
            acceptButtonText: '#ffffff',        // Color of text on Accept All button
            necessaryButton: '#6c757d',        // Color of the Accept Necessary button
            necessaryButtonText: '#ffffff',     // Color of text on Accept Necessary button
            declineButton: '#dc3545',          // Color of the Decline button
            declineButtonText: '#ffffff',       // Color of text on Decline button
            policyLinkColor: '#6c757d',        // Color of the policy link text
        },
        
        // === Advanced Customization ===
        fonts: {
            text: 'inherit',                   // Font for banner text (use 'inherit' to match your website's font)
            buttons: 'inherit'                 // Font for button text
        },
        sizes: {
            text: '16px',                      // Size of the banner text (in pixels)
            buttons: {
                padding: '8px 16px',           // Space around button text (top/bottom left/right)
                fontSize: '15px'               // Size of button text
            }
        },
        animation: {
            type: 'fade',                      // How banner appears: 'fade' or 'none'
            duration: '0.3s',                  // How long the animation takes (in seconds)
            easing: 'ease-out'                 // Animation style: 'ease-out', 'linear', etc.
        },
        
        // === What happens when users make choices - use for hooks ===
        callbacks: {
            onAcceptAll: () => console.log('All cookies accepted'),           // Function called when user accepts all
            onAcceptNecessary: () => console.log('Only necessary cookies accepted'), // Function called when user accepts only necessary
            onDecline: () => console.log('All cookies declined'),            // Function called when user declines
            onClose: () => console.log('Banner closed')                      // Function called when banner is closed
        },
        
        // === Cookie Policy Settings ===
        cookiePolicyLink: '',                  // Link to your cookie policy page (leave empty to use popup text/HTML below instead)
        // === COOKIE POLICY CONTENT ===
        cookiePolicyPopupText: `
            <h2>Cookie Policy</h2>
            
            <h3>What Are Cookies?</h3>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to website owners.</p>

            <h3>How We Use Cookies</h3>
            <p>We use cookies for several purposes:</p>
            <ul>
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                <li><strong>Analytical/Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functionality Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
                <li><strong>Targeting/Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
            </ul>

            <h3>Cookie Management</h3>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>

            <h3>Types of Cookies We Use</h3>
            <table style="width: 100%; margin: 1em 0; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #ddd;">
                    <th style="text-align: left; padding: 8px;">Category</th>
                    <th style="text-align: left; padding: 8px;">Purpose</th>
                    <th style="text-align: left; padding: 8px;">Duration</th>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 8px;">Session Cookies</td>
                    <td style="padding: 8px;">These temporary cookies expire when you close your browser</td>
                    <td style="padding: 8px;">Browser session</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 8px;">Persistent Cookies</td>
                    <td style="padding: 8px;">These remain on your device until they expire or you delete them</td>
                    <td style="padding: 8px;">Up to 2 years</td>
                </tr>
            </table>

            <h3>Your Privacy Rights</h3>
            <p>You have the right to:</p>
            <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent</li>
            </ul>

            <h3>Updates to This Policy</h3>
            <p>We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions about our use of cookies, please contact us.</p>
        `,
        // === LAYOUT SETTINGS ===
        closeButtonPosition: 'right',    // 'left' or 'right'
        mobileBreakpoint: '768px',      // Point at which mobile layout kicks in
    // Configuration ends here.
    };
    // Helper functions
    const CookieManager = {
        setCookie: (name, value, days) => {
            try {
                if (!name || !value || typeof days !== 'number') {
                    throw new Error('Invalid cookie parameters');
                }
                const date = new Date();
                date.setTime(date.getTime() + (days * 86400000));
                document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;Secure;SameSite=Lax`;
            } catch (error) {
                console.error('Failed to set cookie:', error);
            }
        },
        getCookie: (name) => {
            try {
                if (!name) return null;
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : null;
            } catch (error) {
                console.error('Failed to get cookie:', error);
                return null;
            }
        },
        removeCookie: (name) => {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;Secure;SameSite=Lax`;
        }
    };
    const fadeOutBanner = (banner, callback) => {
        try {
            if (!banner || !(banner instanceof Element)) {
                throw new Error('Invalid banner element');
            }
            const wrapper = banner.parentElement;
            if (!wrapper) return;
            if (COOKIE_BANNER_CONFIG.animation.type === 'fade') {
                banner.style.opacity = '0';
                setTimeout(() => {
                    wrapper.remove();
                    callback?.();
                }, parseFloat(COOKIE_BANNER_CONFIG.animation.duration) * 1000);
            } else {
                wrapper.remove();
                callback?.();
            }
        } catch (error) {
            console.error('Failed to fade out banner:', error);
            banner?.parentElement?.remove();
        }
    };
    const adjustColor = (color, amount) => {
        if (!color || typeof color !== 'string' || !color.match(/^#[0-9A-Fa-f]{6}$/)) {
            return color;
        }
        const hex = color.replace('#', '');
        const rgb = parseInt(hex, 16);
        const r = Math.max(0, Math.min(255, ((rgb >> 16) & 0xFF) + amount));
        const g = Math.max(0, Math.min(255, ((rgb >> 8) & 0xFF) + amount));
        const b = Math.max(0, Math.min(255, (rgb & 0xFF) + amount));
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    };
    // Create and inject CSS
    const injectStyles = () => {
        if (document.querySelector('#cookie-banner-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'cookie-banner-styles';
        style.textContent = `
            .cookie-banner-wrapper {
                position: fixed;
                ${COOKIE_BANNER_CONFIG.position}: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                pointer-events: none;
            }
            .cookie-banner {
                position: relative;
                background: ${COOKIE_BANNER_CONFIG.theme.bannerBackground};
                color: ${COOKIE_BANNER_CONFIG.theme.bannerText};
                padding: 1rem 3rem;
                display: flex;
                align-items: center;
                gap: 1.5rem;
                box-shadow: ${COOKIE_BANNER_CONFIG.position === 'bottom' ? 
                    '0 -2px 10px rgba(0, 0, 0, 0.1)' : 
                    '0 2px 10px rgba(0, 0, 0, 0.1)'};
                ${COOKIE_BANNER_CONFIG.animation.type === 'fade' ? `
                    opacity: 0;
                    transition: opacity ${COOKIE_BANNER_CONFIG.animation.duration} ${COOKIE_BANNER_CONFIG.animation.easing};
                ` : ''}
                box-sizing: border-box;
                pointer-events: auto;
            }
            .cookie-banner.visible {
                opacity: 1;
                transform: translateY(0);
            }
            .cookie-banner-close {
                position: absolute;
                ${COOKIE_BANNER_CONFIG.closeButtonPosition}: 1rem;
                top: 50%;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                color: ${COOKIE_BANNER_CONFIG.theme.bannerText};
                opacity: 0.7;
                transition: opacity 0.2s ease;
                z-index: 1;
            }
            .cookie-banner-close:hover {
                opacity: 1;
            }
            .cookie-banner-text {
                flex: 1;
                font-size: ${COOKIE_BANNER_CONFIG.sizes.text};
                min-width: 0;
            }
            .cookie-banner-buttons {
                display: flex;
                gap: 0.75rem;
                align-items: center;
                flex-shrink: 0;
            }
            .cookie-banner button:not(.cookie-banner-close) {
                padding: ${COOKIE_BANNER_CONFIG.sizes.buttons.padding};
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.2s ease;
                white-space: nowrap;
            }
            .cookie-banner button:not(.cookie-banner-close):hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .cookie-banner-accept {
                background: ${COOKIE_BANNER_CONFIG.theme.acceptButton};
                color: ${COOKIE_BANNER_CONFIG.theme.acceptButtonText};
            }
            .cookie-banner-accept:hover {
                background: ${adjustColor(COOKIE_BANNER_CONFIG.theme.acceptButton, 20)};
            }
            .cookie-banner-necessary {
                background: ${COOKIE_BANNER_CONFIG.theme.necessaryButton};
                color: ${COOKIE_BANNER_CONFIG.theme.necessaryButtonText};
            }
            .cookie-banner-necessary:hover {
                background: ${adjustColor(COOKIE_BANNER_CONFIG.theme.necessaryButton, 20)};
            }
            .cookie-banner-decline {
                background: ${COOKIE_BANNER_CONFIG.theme.declineButton};
                color: ${COOKIE_BANNER_CONFIG.theme.declineButtonText};
            }
            .cookie-banner-decline:hover {
                background: ${adjustColor(COOKIE_BANNER_CONFIG.theme.declineButton, 20)};
            }
            .cookie-banner-policy-link {
                color: ${COOKIE_BANNER_CONFIG.theme.policyLinkColor};
                text-decoration: underline;
                cursor: pointer;
                font-size: 0.9em;
                white-space: nowrap;
            }
            @media (max-width: ${COOKIE_BANNER_CONFIG.mobileBreakpoint}) {
                .cookie-banner {
                    flex-direction: column;
                    padding: 1rem;
                    gap: 1rem;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .cookie-banner-text {
                    order: 1;
                    flex: none;
                    text-align: center;
                    font-size: 0.9em;
                    padding: 0 1.5rem;
                    margin: 0;
                }
                .cookie-banner-buttons {
                    order: 2;
                    flex: none;
                    justify-content: center;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                    width: 100%;
                    padding: 0;
                }
                .cookie-banner button:not(.cookie-banner-close) {
                    flex: 1 1 auto;
                    min-width: 0;
                    max-width: 100%;
                    padding: 8px;
                    font-size: 0.9em;
                    white-space: normal;
                    text-align: center;
                }
                .cookie-banner-close {
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    transform: none;
                    padding: 0.25rem;
                    font-size: 1.25rem;
                }
                .cookie-banner-policy-link {
                    width: 100%;
                    text-align: center;
                    margin-top: 0.5rem;
                }
            }
            .cookie-policy-popup {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 8px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                z-index: 10000;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                line-height: 1.6;
            }
            .cookie-policy-popup h2 {
                margin-bottom: 1.5em;
                color: #333;
            }
            .cookie-policy-popup h3 {
                margin: 1.5em 0 0.8em;
                color: #444;
            }
            .cookie-policy-popup p, 
            .cookie-policy-popup ul {
                margin-bottom: 1em;
            }
            .cookie-policy-popup li {
                margin-bottom: 0.5em;
            }
            .cookie-policy-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 9999;
            }
            .cookie-policy-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }
        `;
        document.head?.appendChild(style);
    };
    // Initialize banner
    const initCookieBanner = () => {
        try {
            if (CookieManager.getCookie('cookiePreference')) return;
            if (document.querySelector('.cookie-banner-wrapper')) return;
            if (!document.body) throw new Error('Document body not available');

            const wrapper = document.createElement('div');
            wrapper.className = 'cookie-banner-wrapper';
            wrapper.setAttribute('role', 'dialog');
            wrapper.setAttribute('aria-label', 'Cookie consent banner');
            const banner = document.createElement('div');
            banner.className = 'cookie-banner' + (COOKIE_BANNER_CONFIG.animation.type === 'fade' ? '' : ' visible');
            banner.innerHTML = `
                <button class="cookie-banner-close" aria-label="Close cookie banner">×</button>
                <div class="cookie-banner-text" role="status">${COOKIE_BANNER_CONFIG.bannerText}</div>
                <div class="cookie-banner-buttons" role="group" aria-label="Cookie consent options">
                    <button class="cookie-banner-accept" aria-label="${COOKIE_BANNER_CONFIG.acceptButtonText}">${COOKIE_BANNER_CONFIG.acceptButtonText}</button>
                    <button class="cookie-banner-necessary" aria-label="${COOKIE_BANNER_CONFIG.necessaryButtonText}">${COOKIE_BANNER_CONFIG.necessaryButtonText}</button>
                    <button class="cookie-banner-decline" aria-label="${COOKIE_BANNER_CONFIG.declineButtonText}">${COOKIE_BANNER_CONFIG.declineButtonText}</button>
                    <button class="cookie-banner-policy-link" aria-label="${COOKIE_BANNER_CONFIG.policyLinkText}">${COOKIE_BANNER_CONFIG.policyLinkText}</button>
                </div>
            `;
            // Create policy popup if no external link is provided and it doesn't exist
            if (!COOKIE_BANNER_CONFIG.cookiePolicyLink && !document.querySelector('.cookie-policy-popup')) {
                const overlay = document.createElement('div');
                overlay.className = 'cookie-policy-overlay';
                overlay.setAttribute('role', 'presentation');
                
                const popup = document.createElement('div');
                popup.className = 'cookie-policy-popup';
                popup.setAttribute('role', 'dialog');
                popup.setAttribute('aria-label', 'Cookie Policy');
                popup.innerHTML = `
                    ${COOKIE_BANNER_CONFIG.cookiePolicyPopupText}
                    <button class="cookie-policy-close" aria-label="Close cookie policy">×</button>
                `;
                document.body.appendChild(overlay);
                document.body.appendChild(popup);
            }
            wrapper.appendChild(banner);
            document.body.appendChild(wrapper);
            const addSafeEventListener = (element, event, handler) => {
                if (!element) return;
                element.addEventListener(event, (...args) => {
                    try {
                        handler(...args);
                    } catch (error) {
                        console.error(`Error in ${event} handler:`, error);
                    }
                });
            };
            if (!COOKIE_BANNER_CONFIG.cookiePolicyLink) {
                const overlay = document.querySelector('.cookie-policy-overlay');
                const popup = document.querySelector('.cookie-policy-popup');
                const closeButton = document.querySelector('.cookie-policy-close');
                if (overlay && popup && closeButton) {
                    addSafeEventListener(closeButton, 'click', () => {
                        overlay.style.display = 'none';
                        popup.style.display = 'none';
                    });

                    addSafeEventListener(overlay, 'click', () => {
                        overlay.style.display = 'none';
                        popup.style.display = 'none';
                    });
                }
            }
            const handleClick = (action, preference) => {
                try {
                    CookieManager.setCookie('cookiePreference', preference, COOKIE_BANNER_CONFIG.cookieExpireDays);
                    COOKIE_BANNER_CONFIG.callbacks[action]?.();
                    fadeOutBanner(banner);
                } catch (error) {
                    console.error(`Failed to handle ${action}:`, error);
                }
            };
            const policyLink = banner.querySelector('.cookie-banner-policy-link');
            if (policyLink) {
                addSafeEventListener(policyLink, 'click', () => {
                    try {
                        if (COOKIE_BANNER_CONFIG.cookiePolicyLink) {
                            window.open(COOKIE_BANNER_CONFIG.cookiePolicyLink, '_blank');
                        } else {
                            const overlay = document.querySelector('.cookie-policy-overlay');
                            const popup = document.querySelector('.cookie-policy-popup');
                            if (overlay && popup) {
                                overlay.style.display = 'block';
                                popup.style.display = 'block';
                            }
                        }
                    } catch (error) {
                        console.error('Failed to handle policy link click:', error);
                    }
                });
            }
            const buttons = {
                '.cookie-banner-accept': ['onAcceptAll', 'accepted_all'],
                '.cookie-banner-necessary': ['onAcceptNecessary', 'accepted_necessary'],
                '.cookie-banner-decline': ['onDecline', 'declined'],
                '.cookie-banner-close': ['onClose', 'closed']
            };
            Object.entries(buttons).forEach(([selector, [action, preference]]) => {
                const button = banner.querySelector(selector);
                if (button) {
                    addSafeEventListener(button, 'click', () => handleClick(action, preference));
                }
            });
            if (COOKIE_BANNER_CONFIG.animation.type === 'fade') {
                requestAnimationFrame(() => {
                    try {
                        banner.classList.add('visible');
                    } catch (error) {
                        console.error('Failed to animate banner:', error);
                    }
                });
            }
        } catch (error) {
            console.error('Failed to initialize cookie banner:', error);
        }
    };
    // Initialize
    const initialize = () => {
        const init = () => {
            injectStyles();
            initCookieBanner();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    };
    initialize();
    // Public API
    return {
        showSettings: () => {
            const banner = document.querySelector('.cookie-banner-wrapper');
            if (banner) banner.remove();
            CookieManager.removeCookie('cookiePreference');
            initCookieBanner();
        },
        getPreference: () => CookieManager.getCookie('cookiePreference')
    };
})(); 

// Cookies To Go, Open-Source Cookie Banner by Uzay Yildirim
