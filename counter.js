// Counter animation for statistics
document.addEventListener('DOMContentLoaded', function() {
    // Get all counter elements
    const counters = document.querySelectorAll('.counter');
    
    // Set up intersection observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the counter is in view and hasn't been animated yet
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                // Mark as counted to prevent re-animation
                entry.target.classList.add('counted');
                
                // Get target value from data attribute
                const target = parseInt(entry.target.getAttribute('data-target'));
                
                // Get any suffix (like +, k, etc.)
                const suffix = entry.target.getAttribute('data-suffix') || '';
                
                // Get duration from data attribute or default to 2000ms
                const duration = parseInt(entry.target.getAttribute('data-duration') || 2000);
                
                // Start value
                let count = 0;
                
                // Calculate increment per frame for smooth animation
                const increment = target / (duration / 16);
                
                // Start counter animation
                const timer = setInterval(() => {
                    count += increment;
                    
                    // If we've reached or exceeded the target, set to target and clear interval
                    if (count >= target) {
                        entry.target.textContent = target.toLocaleString() + suffix;
                        clearInterval(timer);
                    } else {
                        // Otherwise update with current count
                        entry.target.textContent = Math.floor(count).toLocaleString() + suffix;
                    }
                }, 16);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all counter elements
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});