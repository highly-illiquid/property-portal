// Property Portal JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');

    if (mobileMenuToggle && navMobile) {
        mobileMenuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');

            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMobile.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translateY(7px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-7px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }

    // Search Tabs (Buy/Rent)
    const searchTabs = document.querySelectorAll('.search-tabs .tab-btn');
    const searchForm = document.getElementById('property-search');

    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            searchTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Update form placeholder text based on tab
            const tabType = this.dataset.tab;
            const locationInput = document.getElementById('location');
            const priceSelect = document.getElementById('price-range');

            if (locationInput) {
                if (tabType === 'buy') {
                    locationInput.placeholder = 'Enter city, neighborhood, or zip';
                    updatePriceOptions(priceSelect, 'buy');
                } else {
                    locationInput.placeholder = 'Enter city, neighborhood, or zip to rent';
                    updatePriceOptions(priceSelect, 'rent');
                }
            }
        });
    });

    // Update price options based on buy/rent
    function updatePriceOptions(selectElement, type) {
        if (!selectElement) return;

        const buyOptions = [
            { value: '', text: 'Any Price' },
            { value: '0-100000', text: '$0 - $100k' },
            { value: '100000-300000', text: '$100k - $300k' },
            { value: '300000-500000', text: '$300k - $500k' },
            { value: '500000-1000000', text: '$500k - $1M' },
            { value: '1000000+', text: '$1M+' }
        ];

        const rentOptions = [
            { value: '', text: 'Any Price' },
            { value: '0-1000', text: '$0 - $1,000/mo' },
            { value: '1000-2000', text: '$1,000 - $2,000/mo' },
            { value: '2000-3000', text: '$2,000 - $3,000/mo' },
            { value: '3000-5000', text: '$3,000 - $5,000/mo' },
            { value: '5000+', text: '$5,000+/mo' }
        ];

        const options = type === 'buy' ? buyOptions : rentOptions;

        // Clear existing options
        selectElement.innerHTML = '';

        // Add new options
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            selectElement.appendChild(optionElement);
        });
    }

    // Property Tabs (Sale/Rent)
    const propertyTabs = document.querySelectorAll('.property-tabs .tab-btn');

    propertyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            propertyTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Show/hide corresponding content
            const contentType = this.dataset.content;
            const saleContent = document.getElementById('sale-content');
            const rentContent = document.getElementById('rent-content');

            if (contentType === 'sale') {
                saleContent?.classList.remove('hidden');
                rentContent?.classList.add('hidden');
            } else {
                saleContent?.classList.add('hidden');
                rentContent?.classList.remove('hidden');
            }
        });
    });

    // Search Form Submission
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(searchForm);
            const searchData = {
                type: document.querySelector('.search-tabs .tab-btn.active')?.dataset.tab || 'buy',
                location: document.getElementById('location')?.value || '',
                propertyType: document.getElementById('property-type')?.value || '',
                priceRange: document.getElementById('price-range')?.value || ''
            };

            // Simulate search (in real app, this would make an API call)
            console.log('Search Data:', searchData);

            // Show loading state
            const searchBtn = document.querySelector('.search-btn');
            const originalText = searchBtn.innerHTML;
            searchBtn.innerHTML = 'Searching...';
            searchBtn.disabled = true;

            // Simulate API delay
            setTimeout(() => {
                searchBtn.innerHTML = originalText;
                searchBtn.disabled = false;

                // In a real app, you would redirect to search results page
                alert(`Searching for ${searchData.type} properties in ${searchData.location || 'all areas'}...`);
            }, 1500);
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.project-card, .region-card, .area-tag').forEach(el => {
        observer.observe(el);
    });

    // Currency Selector
    const currencySelector = document.querySelector('.currency-selector');
    if (currencySelector) {
        currencySelector.addEventListener('change', function() {
            const selectedCurrency = this.value;
            console.log('Currency changed to:', selectedCurrency);

            // In a real app, you would update all prices on the page
            // and possibly store the preference in localStorage
            localStorage.setItem('selectedCurrency', selectedCurrency);
        });

        // Load saved currency preference
        const savedCurrency = localStorage.getItem('selectedCurrency');
        if (savedCurrency) {
            currencySelector.value = savedCurrency;
        }
    }

    // Project Card Hover Effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Region Card Hover Effects
    document.querySelectorAll('.region-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form Validation
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');

                // Remove error class on input
                input.addEventListener('input', function() {
                    this.classList.remove('error');
                });
            }
        });

        return isValid;
    }

    // Header Scroll Effect
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }

        lastScrollY = currentScrollY;
    });

    // Lazy Loading Images
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Keyboard Navigation Support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMobile?.classList.contains('active')) {
            mobileMenuToggle?.click();
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Performance Monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page Load Time:', pageLoadTime + 'ms');
            }, 0);
        });
    }

    // Error Handling for Failed Image Loads
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });
    });

    // Touch Device Detection
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    }

    // Console Welcome Message
    console.log('%cWelcome to PropertyHub!', 'color: #2c5530; font-size: 16px; font-weight: bold;');
    console.log('🏠 Find your dream home with us!');

});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle
    };
}
