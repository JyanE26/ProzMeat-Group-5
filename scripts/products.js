document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to show a specific category
    function showCategory(category) {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to the matching link
        const activeLink = document.querySelector(`.nav-link[data-category="${category}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all product sections
        document.querySelectorAll('.product-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected product section
        const activeSection = document.getElementById(`${category}-section`);
        if (activeSection) {
            activeSection.style.display = 'block';
            // Smooth scroll to the section
            activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            // Update URL without page reload
            window.history.pushState({}, '', `production.html?category=${category}`);
            showCategory(category);
        });
    });
    
    // Function to get URL parameter
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    // Check for category in URL on page load
    const categoryParam = getUrlParameter('category');
    if (categoryParam) {
        showCategory(categoryParam);
    } else {
        // Default to showing Purefoods section if no category is specified
        showCategory('purefoods');
    }
});
