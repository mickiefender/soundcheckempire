// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Summer Vibes EP",
        category: "production",
        client: "Maya Jones",
        date: "June 2023",
        services: "Production, Mixing, Arrangement",
        genre: "Afrobeats / Dancehall",
        duration: "3 months",
        description: "Produced a 5-track EP for rising artist Maya Jones, focusing on summer-themed afrobeats and dancehall fusion. The project involved creating custom beats, arranging vocals, and coordinating with session musicians for live instrument recordings. The EP reached over 500,000 streams across platforms within the first month of release.",
        images: [
            "images/nytro-image1.jpg",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 2,
        title: "Midnight Chronicles",
        category: "mixing",
        client: "Jay Steez",
        date: "March 2023",
        services: "Mixing, Mastering",
        genre: "Hip Hop",
        duration: "2 months",
        description: "Mixed and mastered a 12-track hip-hop album for underground artist Jay Steez. The project required detailed work to balance raw, sample-heavy production with clear vocals while maintaining the gritty aesthetic the artist wanted. Special attention was given to creating a cohesive sound across tracks produced by multiple producers.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 3,
        title: "Ethereal Dreams",
        category: "composition",
        client: "Nebula Games",
        date: "November 2022",
        services: "Composition, Sound Design",
        genre: "Ambient Electronic",
        duration: "4 months",
        description: "Composed original music for the indie game 'Ethereal Dreams', creating ambient electronic soundscapes that dynamically respond to gameplay. The project involved close collaboration with game developers to ensure music transitions were seamless and enhanced the player experience. The soundtrack was later released as a standalone album.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 4,
        title: "Soul Revival",
        category: "production",
        client: "Ella Thompson",
        date: "August 2022",
        services: "Production, Arrangement, Recording",
        genre: "Neo-Soul / R&B",
        duration: "5 months",
        description: "Produced and arranged a neo-soul album for vocalist Ella Thompson, incorporating live instruments and vintage recording techniques. The project aimed to capture the warmth and authenticity of classic soul while adding modern production elements. Coordinated recording sessions with a 5-piece band and managed all aspects of production from pre-production to final delivery.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 5,
        title: "Trap Evolution",
        category: "mastering",
        client: "Urban Collective Records",
        date: "May 2022",
        services: "Mastering",
        genre: "Trap",
        duration: "1 month",
        description: "Mastered a compilation album featuring 20 trap artists from across the country. The challenge was creating a consistent sound while preserving each artist's unique style and sonic characteristics. Special attention was paid to loudness standards for streaming platforms while maintaining dynamic range and impact.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 6,
        title: "Commercial Jingle",
        category: "composition",
        client: "Refresh Beverages",
        date: "April 2022",
        services: "Composition, Production, Sound Design",
        genre: "Commercial / Pop",
        duration: "2 weeks",
        description: "Composed and produced a catchy jingle for a national beverage brand's summer campaign. The project required creating multiple variations of different lengths (60s, 30s, 15s, and 5s) while maintaining brand identity. The composition needed to be memorable, upbeat, and convey refreshment and summer fun.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 7,
        title: "Acoustic Sessions",
        category: "mixing",
        client: "The Wanderers",
        date: "February 2022",
        services: "Recording, Mixing",
        genre: "Folk / Acoustic",
        duration: "3 weeks",
        description: "Mixed a live acoustic session for folk band The Wanderers, balancing natural room sound with clarity. The session was recorded in a historic church with beautiful natural reverb, requiring careful microphone placement and minimal processing to preserve the authentic sound while ensuring all instruments and vocals were clear and balanced.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    },
    {
        id: 8,
        title: "Electronic Fusion",
        category: "production",
        client: "Fusion Collective",
        date: "December 2021",
        services: "Production, Recording, Sound Design",
        genre: "Electronic / World",
        duration: "6 months",
        description: "Produced an experimental electronic EP fusing traditional African instruments with modern synthesis techniques. The project involved recording sessions with traditional instrumentalists and extensive sound design to create unique textures and rhythms. The EP received critical acclaim for its innovative approach to blending cultural elements with contemporary electronic music.",
        images: [
            "/placeholder.svg?height=800&width=1200",
            "/placeholder.svg?height=800&width=1200&text=Image%202",
            "/placeholder.svg?height=800&width=1200&text=Image%203",
            "/placeholder.svg?height=800&width=1200&text=Image%204"
        ],
        audioSample: "assets/audio-sample.mp3",
        listenLink: "#"
    }
];

// Gallery Data
const galleryData = [
    {
        id: 1,
        title: "Recording Session",
        category: "studio",
        date: "June 2023",
        description: "Working on the Summer Vibes EP with Maya Jones",
        thumbnail: "images/nytro-image1.jpg",
        image: "images/nytro-image1.jpg"
    },
    {
        id: 2,
        title: "Summer Festival",
        category: "performance",
        date: "July 2023",
        description: "Live performance at the Annual Summer Music Festival",
        thumbnail: "/placeholder.svg?height=800&width=1200&text=Live%20Performance",
        image: "/placeholder.svg?height=1600&width=2400&text=Live%20Performance"
    },
    {
        id: 3,
        title: "Music Video Shoot",
        category: "behind-scenes",
        date: "May 2023",
        description: "Behind the scenes at the 'Summer Vibes' music video shoot",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Behind%20Scenes",
        image: "/placeholder.svg?height=1200&width=1600&text=Behind%20Scenes"
    },
    {
        id: 4,
        title: "Mixing Console",
        category: "equipment",
        date: "April 2023",
        description: "My custom SSL mixing console used for all major productions",
        thumbnail: "/placeholder.svg?height=1000&width=600&text=Equipment",
        image: "/placeholder.svg?height=2000&width=1200&text=Equipment"
    },
    {
        id: 5,
        title: "Vocal Recording",
        category: "studio",
        date: "March 2023",
        description: "Recording vocals with Jay Steez for the Midnight Chronicles album",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Vocal%20Session",
        image: "/placeholder.svg?height=1200&width=1600&text=Vocal%20Session"
    },
    {
        id: 6,
        title: "Production Meeting",
        category: "behind-scenes",
        date: "February 2023",
        description: "Planning session with the production team for upcoming projects",
        thumbnail: "/placeholder.svg?height=800&width=1200&text=Team%20Meeting",
        image: "/placeholder.svg?height=1600&width=2400&text=Team%20Meeting"
    },
    {
        id: 7,
        title: "Club Night",
        category: "performance",
        date: "January 2023",
        description: "DJ set at Pulse Nightclub featuring new unreleased tracks",
        thumbnail: "/placeholder.svg?height=600&width=800&text=DJ%20Set",
        image: "/placeholder.svg?height=1200&width=1600&text=DJ%20Set"
    },
    {
        id: 8,
        title: "Synth Collection",
        category: "equipment",
        date: "December 2022",
        description: "My collection of vintage and modern synthesizers used for sound design",
        thumbnail: "/placeholder.svg?height=1000&width=600&text=Synth%20Setup",
        image: "/placeholder.svg?height=2000&width=1200&text=Synth%20Setup"
    },
    {
        id: 9,
        title: "Mastering Session",
        category: "studio",
        date: "November 2022",
        description: "Final mastering touches on the Trap Evolution compilation album",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Mastering%20Session",
        image: "/placeholder.svg?height=1200&width=1600&text=Mastering%20Session"
    },
    {
        id: 10,
        title: "Music Awards",
        category: "performance",
        date: "October 2022",
        description: "Attending the Annual Music Producer Awards ceremony",
        thumbnail: "/placeholder.svg?height=800&width=1200&text=Award%20Show",
        image: "/placeholder.svg?height=1600&width=2400&text=Award%20Show"
    },
    {
        id: 11,
        title: "Creative Process",
        category: "behind-scenes",
        date: "September 2022",
        description: "Brainstorming session for the Ethereal Dreams game soundtrack",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Brainstorming",
        image: "/placeholder.svg?height=1200&width=1600&text=Brainstorming"
    },
    {
        id: 12,
        title: "Microphone Arsenal",
        category: "equipment",
        date: "August 2022",
        description: "My collection of premium microphones for capturing the perfect vocal take",
        thumbnail: "/placeholder.svg?height=1000&width=600&text=Microphone%20Collection",
        image: "/placeholder.svg?height=2000&width=1200&text=Microphone%20Collection"
    }
];

// Additional gallery items that will be loaded with "Load More"
const additionalGalleryItems = [
    {
        id: 13,
        title: "Studio Setup",
        category: "equipment",
        date: "July 2022",
        description: "My complete studio setup with acoustic treatment and monitoring system",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Studio%20Setup",
        image: "/placeholder.svg?height=1200&width=1600&text=Studio%20Setup"
    },
    {
        id: 14,
        title: "Collaboration Session",
        category: "studio",
        date: "June 2022",
        description: "Collaborative session with international producers",
        thumbnail: "/placeholder.svg?height=800&width=1200&text=Collaboration",
        image: "/placeholder.svg?height=1600&width=2400&text=Collaboration"
    },
    {
        id: 15,
        title: "Festival Performance",
        category: "performance",
        date: "May 2022",
        description: "Performing at the International Music Festival",
        thumbnail: "/placeholder.svg?height=600&width=800&text=Festival",
        image: "/placeholder.svg?height=1200&width=1600&text=Festival"
    },
    {
        id: 16,
        title: "Interview Session",
        category: "behind-scenes",
        date: "April 2022",
        description: "Behind the scenes at a music magazine interview",
        thumbnail: "/placeholder.svg?height=1000&width=600&text=Interview",
        image: "/placeholder.svg?height=2000&width=1200&text=Interview"
    }
];

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check for mobile devices
    const isMobile = window.innerWidth < 768;
    
    // Portfolio filter tabs
    const portfolioFilterTabs = document.querySelectorAll('.portfolio-section .filter-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Gallery filter tabs
    const galleryFilterTabs = document.querySelectorAll('.gallery-section .filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Project modal elements
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const viewProjectBtns = document.querySelectorAll('.view-project');
    const modalMainImage = document.getElementById('modal-main-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');

    // Gallery lightbox elements
    const galleryLightbox = document.getElementById('gallery-lightbox');
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const viewImageBtns = document.querySelectorAll('.view-image');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');

    // Testimonial slider elements
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialPrevBtn = document.getElementById('testimonial-prev');
    const testimonialNextBtn = document.getElementById('testimonial-next');
    const testimonialDots = document.querySelectorAll('.dot');

    // Stats counter elements
    const statNumbers = document.querySelectorAll('.stat-number');

    // Load more gallery button
    const loadMoreGalleryBtn = document.getElementById('load-more-gallery');

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Initialize mobile menu
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close mobile menu when window is resized to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: isMobile ? 30 : 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Initialize portfolio filters
    if (portfolioFilterTabs.length > 0) {
        portfolioFilterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active tab
                portfolioFilterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        // Add animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        // Add animation
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Initialize gallery filters
    if (galleryFilterTabs.length > 0) {
        galleryFilterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Update active tab
                galleryFilterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        // Add animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        // Add animation
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Initialize project modal
    if (projectModal && viewProjectBtns.length > 0) {
        // Open modal
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project'));
                openProjectModal(projectId);
            });
        });
        
        // Close modal
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeProjectModal);
        }
        
        // Close modal when clicking outside
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal || e.target.classList.contains('modal-backdrop')) {
                closeProjectModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });
        
        // Initialize thumbnail clicks
        if (modalThumbnails) {
            modalThumbnails.addEventListener('click', function(e) {
                const thumbnail = e.target.closest('.thumbnail');
                if (thumbnail) {
                    const imageUrl = thumbnail.getAttribute('data-image');
                    if (imageUrl && modalMainImage) {
                        modalMainImage.src = imageUrl;
                        
                        // Update active thumbnail
                        document.querySelectorAll('.thumbnail').forEach(thumb => {
                            thumb.classList.remove('active');
                        });
                        thumbnail.classList.add('active');
                    }
                }
            });
        }
    }

    // Initialize gallery lightbox
    if (galleryLightbox && viewImageBtns.length > 0) {
        let currentImageIndex = 0;
        let galleryImages = [];
        
        // Prepare gallery images array
        viewImageBtns.forEach((btn, index) => {
            galleryImages.push({
                src: btn.getAttribute('data-src'),
                title: btn.getAttribute('data-title'),
                description: btn.getAttribute('data-description'),
                index: index
            });
        });
        
        // Set total images count
        if (lightboxTotal) {
            lightboxTotal.textContent = galleryImages.length;
        }
        
        // Open lightbox
        viewImageBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                const imageSrc = this.getAttribute('data-src');
                const imageTitle = this.getAttribute('data-title');
                const imageDescription = this.getAttribute('data-description');
                
                openLightbox(imageSrc, imageTitle, imageDescription, index);
            });
        });
        
        // Close lightbox
        if (closeLightboxBtn) {
            closeLightboxBtn.addEventListener('click', closeLightbox);
        }
        
        // Close lightbox when clicking outside
        galleryLightbox.addEventListener('click', function(e) {
            if (e.target === galleryLightbox || e.target.classList.contains('lightbox-backdrop')) {
                closeLightbox();
            }
        });
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && galleryLightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
        
        // Previous image
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', function() {
                navigateLightbox('prev');
            });
        }
        
        // Next image
        if (lightboxNext) {
            lightboxNext.addEventListener('click', function() {
                navigateLightbox('next');
            });
        }
        
        // Navigate with arrow keys
        document.addEventListener('keydown', function(e) {
            if (galleryLightbox.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    navigateLightbox('prev');
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox('next');
                }
            }
        });
        
        // Add swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (galleryLightbox) {
            galleryLightbox.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, false);
            
            galleryLightbox.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, false);
        }
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left, go to next image
                navigateLightbox('next');
            } else if (touchEndX > touchStartX + 50) {
                // Swipe right, go to previous image
                navigateLightbox('prev');
            }
        }
        
        // Open lightbox function
        function openLightbox(src, title, description, index) {
            if (lightboxImage) lightboxImage.src = src;
            if (lightboxTitle) lightboxTitle.textContent = title;
            if (lightboxDescription) lightboxDescription.textContent = description;
            if (lightboxCurrent) lightboxCurrent.textContent = index + 1;
            
            currentImageIndex = index;
            
            galleryLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close lightbox function
        function closeLightbox() {
            galleryLightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Navigate lightbox function
        function navigateLightbox(direction) {
            if (direction === 'prev') {
                currentImageIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
            } else {
                currentImageIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
            }
            
            const image = galleryImages[currentImageIndex];
            
            if (lightboxImage) lightboxImage.src = image.src;
            if (lightboxTitle) lightboxTitle.textContent = image.title;
            if (lightboxDescription) lightboxDescription.textContent = image.description;
            if (lightboxCurrent) lightboxCurrent.textContent = currentImageIndex + 1;
        }
    }

    // Initialize testimonial slider
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        // Show slide function
        function showSlide(index) {
            testimonialSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            testimonialSlides[index].classList.add('active');
            
            // Update dots
            testimonialDots.forEach(dot => {
                dot.classList.remove('active');
            });
            testimonialDots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        // Previous slide
        if (testimonialPrevBtn) {
            testimonialPrevBtn.addEventListener('click', function() {
                currentSlide = currentSlide === 0 ? testimonialSlides.length - 1 : currentSlide - 1;
                showSlide(currentSlide);
            });
        }
        
        // Next slide
        if (testimonialNextBtn) {
            testimonialNextBtn.addEventListener('click', function() {
                currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
                showSlide(currentSlide);
            });
        }
        
        // Dot navigation
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
        
        // Auto slide
        let slideInterval = setInterval(function() {
            currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        }, 5000);
        
        // Pause auto slide on hover
        const testimonialSlider = document.getElementById('testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', function() {
                clearInterval(slideInterval);
            });
            
            testimonialSlider.addEventListener('mouseleave', function() {
                slideInterval = setInterval(function() {
                    currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
                    showSlide(currentSlide);
                }, 5000);
            });
        }
        
        // Add swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (testimonialSlider) {
            testimonialSlider.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, false);
            
            testimonialSlider.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleTestimonialSwipe();
            }, false);
        }
        
        function handleTestimonialSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swipe left, go to next slide
                currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
                showSlide(currentSlide);
            } else if (touchEndX > touchStartX + 50) {
                // Swipe right, go to previous slide
                currentSlide = currentSlide === 0 ? testimonialSlides.length - 1 : currentSlide - 1;
                showSlide(currentSlide);
            }
        }
    }

    // Initialize stats counter
    function initStatsCounter() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(count);
                }
            }, 16);
        });
    }

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initialize counter when stats section is in viewport
    let statsInitialized = false;
    const statsSection = document.querySelector('.stats-section');

    if (statsSection) {
        window.addEventListener('scroll', function() {
            if (!statsInitialized && isInViewport(statsSection)) {
                initStatsCounter();
                statsInitialized = true;
            }
        });
        
        // Check on page load as well
        if (isInViewport(statsSection)) {
            initStatsCounter();
            statsInitialized = true;
        }
    }

    // Load more gallery items
    if (loadMoreGalleryBtn) {
        loadMoreGalleryBtn.addEventListener('click', function() {
            // Show loading state
            this.classList.add('loading');
            
            // Simulate loading delay
            setTimeout(() => {
                // Add additional gallery items
                const galleryGrid = document.querySelector('.gallery-grid');
                
                if (galleryGrid) {
                    additionalGalleryItems.forEach(item => {
                        const galleryItem = document.createElement('div');
                        galleryItem.className = `gallery-item ${item.id % 3 === 0 ? 'vertical' : item.id % 5 === 0 ? 'large' : ''}`;
                        galleryItem.setAttribute('data-category', item.category);
                        
                        galleryItem.innerHTML = `
                            <div class="gallery-card">
                                <img src="${item.thumbnail}" alt="${item.title}">
                                <div class="gallery-overlay">
                                    <div class="overlay-content">
                                        <span class="gallery-category">${capitalizeFirstLetter(item.category)}</span>
                                        <h3 class="gallery-title">${item.title}</h3>
                                        <p class="gallery-date">${item.date}</p>
                                    </div>
                                    <button class="view-image" data-src="${item.image}" data-title="${item.title}" data-description="${item.description}">
                                        <i class="fa-solid fa-expand"></i>
                                    </button>
                                </div>
                            </div>
                        `;
                        
                        galleryGrid.appendChild(galleryItem);
                    });
                    
                    // Update lightbox functionality for new items
                    const newViewImageBtns = document.querySelectorAll('.view-image:not([data-initialized])');
                    
                    newViewImageBtns.forEach(btn => {
                        btn.setAttribute('data-initialized', 'true');
                        
                        btn.addEventListener('click', function() {
                            const imageSrc = this.getAttribute('data-src');
                            const imageTitle = this.getAttribute('data-title');
                            const imageDescription = this.getAttribute('data-description');
                            
                            // Find the index of this image in the gallery
                            const allViewImageBtns = document.querySelectorAll('.view-image');
                            const index = Array.from(allViewImageBtns).indexOf(this);
                            
                            // Open lightbox with this image
                            if (typeof openLightbox === 'function') {
                                openLightbox(imageSrc, imageTitle, imageDescription, index);
                            }
                        });
                    });
                    
                    // Apply current filter
                    const activeFilter = document.querySelector('.gallery-section .filter-tab.active');
                    if (activeFilter) {
                        const filter = activeFilter.getAttribute('data-filter');
                        const allGalleryItems = document.querySelectorAll('.gallery-item');
                        
                        allGalleryItems.forEach(item => {
                            const category = item.getAttribute('data-category');
                            
                            if (filter === 'all' || category === filter) {
                                item.style.display = 'block';
                                setTimeout(() => {
                                    item.style.opacity = '1';
                                    item.style.transform = 'scale(1)';
                                }, 50);
                            } else {
                                item.style.display = 'none';
                                item.style.opacity = '0';
                                item.style.transform = 'scale(0.8)';
                            }
                        });
                    }
                }
                
                // Hide button after loading
                this.style.display = 'none';
                
                // Show success toast
                showToast('Success', 'Additional gallery items loaded successfully.');
                
            }, 1500);
        });
    }

    // Function to open project modal
    function openProjectModal(projectId) {
        const project = portfolioData.find(p => p.id === projectId);
        if (!project) return;
        
        // Set modal content
        document.getElementById('modal-category').textContent = capitalizeFirstLetter(project.category);
        document.getElementById('modal-date').textContent = project.date;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-client').textContent = project.client;
        document.getElementById('modal-services').textContent = project.services;
        document.getElementById('modal-genre').textContent = project.genre;
        document.getElementById('modal-duration').textContent = project.duration;
        
        // Set main image
        if (modalMainImage && project.images && project.images.length > 0) {
            modalMainImage.src = project.images[0];
        }
        
        // Set thumbnails
        if (modalThumbnails && project.images && project.images.length > 0) {
            modalThumbnails.innerHTML = '';
            
            project.images.forEach((image, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
                thumbnail.setAttribute('data-image', image);
                
                const img = document.createElement('img');
                img.src = image;
                img.alt = `${project.title} - Image ${index + 1}`;
                
                thumbnail.appendChild(img);
                modalThumbnails.appendChild(thumbnail);
            });
        }
        
        // Set audio sample
        const modalAudioContainer = document.getElementById('modal-audio-container');
        const modalAudio = document.getElementById('modal-audio');
        
        if (modalAudioContainer && modalAudio) {
            if (project.audioSample) {
                modalAudio.src = project.audioSample;
                modalAudioContainer.style.display = 'block';
            } else {
                modalAudioContainer.style.display = 'none';
            }
        }
        
        // Set listen link
        const modalListenLink = document.getElementById('modal-listen-link');
        if (modalListenLink && project.listenLink) {
            modalListenLink.href = project.listenLink;
        }
        
        // Show modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close project modal
    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Pause audio if playing
        const modalAudio = document.getElementById('modal-audio');
        if (modalAudio) {
            modalAudio.pause();
        }
    }

    // Helper function to capitalize first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Show toast notification
    function showToast(title, message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        const toastTitle = document.querySelector('.toast-title');
        const toastDescription = document.querySelector('.toast-description');
        const toastIcon = document.querySelector('.toast-icon i');
        
        if (toastTitle && toastDescription && toastIcon) {
            toastTitle.textContent = title;
            toastDescription.textContent = message;
            
            // Set icon based on type
            if (type === 'error') {
                toastIcon.className = 'fa-solid fa-circle-exclamation';
                toastIcon.style.color = '#ef4444';
            } else {
                toastIcon.className = 'fa-solid fa-circle-check';
                toastIcon.style.color = '#22c55e';
            }
            
            toast.classList.add('active');
            
            // Auto hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('active');
            }, 3000);
        }
    }

    // Handle window resize for responsive layouts
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        
        // Only update if mobile state has changed
        if (newIsMobile !== isMobile) {
            // Refresh layout or adjust UI elements as needed
            
            // Update particles density if particles.js is used
            if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: newIsMobile ? 30 : 80, density: { enable: true, value_area: 800 } },
                        // Other settings remain the same
                    }
                });
            }
        }
    });

    // Update copyright year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize any audio players
    const audioPlayers = document.querySelectorAll('.audio-player');
    audioPlayers.forEach(player => {
        const audio = player.querySelector('audio');
        const playBtn = player.querySelector('.play-btn');
        const pauseBtn = player.querySelector('.pause-btn');
        const progress = player.querySelector('.progress');
        const currentTime = player.querySelector('.current-time');
        const duration = player.querySelector('.duration');
        
        if (audio && playBtn && pauseBtn) {
            // Play button
            playBtn.addEventListener('click', function() {
                audio.play();
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            });
            
            // Pause button
            pauseBtn.addEventListener('click', function() {
                audio.pause();
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'inline-block';
            });
            
            // Update progress
            if (progress && currentTime && duration) {
                audio.addEventListener('loadedmetadata', function() {
                    duration.textContent = formatTime(audio.duration);
                });
                
                audio.addEventListener('timeupdate', function() {
                    const percent = (audio.currentTime / audio.duration) * 100;
                    progress.style.width = percent + '%';
                    currentTime.textContent = formatTime(audio.currentTime);
                    
                    // If audio ends, reset play button
                    if (audio.currentTime >= audio.duration) {
                        pauseBtn.style.display = 'none';
                        playBtn.style.display = 'inline-block';
                    }
                });
            }
        }
    });
    
    // Format time helper function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
});