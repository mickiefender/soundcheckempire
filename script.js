// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const currentYearSpan = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const purchaseModal = document.getElementById('purchase-modal');
const closeModalBtn = document.querySelector('.close-modal');
const cancelPurchaseBtn = document.getElementById('cancel-purchase');
const confirmPurchaseBtn = document.getElementById('confirm-purchase');
const filterBtns = document.querySelectorAll('.filter-btn');
const beatsGrid = document.querySelector('.beats-grid');



// Payment Modal Elements
const paymentModal = document.getElementById('payment-modal');
const closePaymentModalBtn = document.getElementById('close-payment-modal');
const cancelPaymentBtn = document.getElementById('cancel-payment');
const proceedPaymentBtn = document.getElementById('proceed-payment');
const paymentTabs = document.querySelectorAll('.payment-tab');
const paymentTabContents = document.querySelectorAll('.payment-tab-content');
const successModal = document.getElementById('success-modal');
const closeSuccessModalBtn = document.getElementById('close-success-modal');


// Sample beats data - Make it globally available
window.beatsData = [
    {
        id: 1,
        title: "Midnight Dreams",
        genre: "Hip Hop",
        bpm: 90,
        price: 700,
        image: "images/nytro-image1.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["Melodic", "Chill", "Trap"],
    },
    {
        id: 2,
        title: "Urban Vibes",
        genre: "Afrobeats",
        bpm: 105,
        price: 520,
        image: "images/outside-studio-image.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["Dancehall", "Upbeat", "Summer"],
    },
    {
        id: 3,
        title: "Electric Soul",
        genre: "R&B",
        bpm: 85,
        price: 660,
        image: "images/5star-image.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["Smooth", "Soulful", "Vocals"],
    },
    {
        id: 4,
        title: "Future Bounce",
        genre: "Electronic",
        bpm: 128,
        price: 720,
        image: "images/nytro image 3.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["EDM", "Festival", "Drop"],
    },
    {
        id: 5,
        title: "Street Dreams",
        genre: "Trap",
        bpm: 140,
        price: 810,
        image: "images/nytro-img-2.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["Hard", "808", "Dark"],
    },
    {
        id: 6,
        title: "Sunset Groove",
        genre: "Lo-Fi",
        bpm: 75,
        price: 500,
        image: "images/reach everybody-image.jpg",
        audioSrc: "beats/1 Prod. by Nytro.mp3",
        tags: ["Chill", "Relaxing", "Study"],
    },
];

// Dummy function for togglePlayBeat
// Replace this with your actual implementation
function togglePlayBeat(beatId) {
    console.log(`Play/Pause beat with ID: ${beatId}`);
    // Add your logic here to play or pause the beat
}

// Dummy function for showToast
// Replace this with your actual implementation or import
function showToast(title, message) {
    const toastTitle = document.querySelector('.toast-title');
    const toastDescription = document.querySelector('.toast-description');
    
    toastTitle.textContent = title;
    toastDescription.textContent = message;
    
    toast.classList.add('active');
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Generate beats cards
    generateBeatsGrid(window.beatsData);
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Show success toast
            showToast('Success!', 'Your message has been sent successfully.');
        }, 1500);
    });
}

// Modal functions - Make openPurchaseModal globally available
window.openPurchaseModal = function(beatId) {
    const beat = window.beatsData.find(beat => beat.id === beatId);
    if (!beat) return;
    
    // Set modal content
    document.getElementById('modal-thumbnail').src = beat.image;
    document.getElementById('modal-title').textContent = beat.title;
    document.getElementById('modal-details').textContent = `${beat.genre} • ${beat.bpm} BPM`;
    document.getElementById('modal-price').textContent = `¢${beat.price}`;
    
    // Store beat ID for purchase
    confirmPurchaseBtn.setAttribute('data-beat-id', beatId);
    
    // Show modal
    purchaseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closePurchaseModal() {
    purchaseModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal events
closeModalBtn.addEventListener('click', closePurchaseModal);
cancelPurchaseBtn.addEventListener('click', closePurchaseModal);

// Click outside to close
purchaseModal.addEventListener('click', function(e) {
    if (e.target === purchaseModal) {
        closePurchaseModal();
    }
});

// Purchase confirmation
confirmPurchaseBtn.addEventListener('click', function() {
    const beatId = parseInt(this.getAttribute('data-beat-id'));
    const beat = window.beatsData.find(beat => beat.id === beatId);
    
    if (beat) {
        // Create WhatsApp message
        const message = encodeURIComponent(
            `Hello Kojo Nytro, I'm interested in purchasing the beat "${beat.title}" (${beat.genre}, ${beat.bpm} BPM) for $${beat.price}.`
        );
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/+233570571247?text=${message}`, '_blank');
    }
    
    closePurchaseModal();
});

// Filter beats
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active filter
        filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter beats
        if (filter === 'all') {
            generateBeatsGrid(window.beatsData);
        } else {
            const filteredBeats = window.beatsData.filter(beat => beat.genre === filter);
            generateBeatsGrid(filteredBeats);
        }
    });
});

// Generate beats grid
function generateBeatsGrid(beats) {
    beatsGrid.innerHTML = '';
    
    beats.forEach(beat => {
        const beatCard = document.createElement('div');
        beatCard.className = 'beat-card';
        beatCard.innerHTML = `
            <div class="beat-image">
                <img src="${beat.image}" alt="${beat.title}">
                <div class="beat-overlay">
                    <div>
                        <h3 class="beat-title">${beat.title}</h3>
                        <div class="beat-progress" id="progress-${beat.id}">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <button class="play-btn" data-beat-id="${beat.id}">
                        <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
            <div class="beat-details">
                <div class="beat-info">
                    <div>
                        <span class="beat-genre">${beat.genre}</span>
                        <span class="beat-bpm">${beat.bpm} BPM</span>
                    </div>
                    <span class="beat-price">¢${beat.price}</span>
                </div>
                <div class="beat-tags">
                    ${beat.tags.map(tag => `<span class="beat-tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-primary purchase-btn" data-beat-id="${beat.id}">
                    <i class="fa-solid fa-shopping-cart"></i> Purchase Beat
                </button>
            </div>
        `;
        
        beatsGrid.appendChild(beatCard);
    });
    
    // Add event listeners to play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const beatId = parseInt(this.getAttribute('data-beat-id'));
            window.togglePlayBeat(beatId);
        });
    });
    
    // Add event listeners to purchase buttons
    document.querySelectorAll('.purchase-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const beatId = parseInt(this.getAttribute('data-beat-id'));
            window.openPurchaseModal(beatId);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Update active nav link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});