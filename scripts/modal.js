document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    const viewLinks = document.querySelectorAll('.view-link');

    // Function to open modal with product details
    function openModal(event) {
        event.preventDefault();
        
        // Get product details from the clicked card
        const card = this.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        const productDescription = card.querySelector('p').textContent;
        const productImage = card.querySelector('img').src;

        // Update modal content
        document.getElementById('modalProductName').textContent = productName;
        document.getElementById('modalProductDescription').textContent = productDescription;
        document.getElementById('modalProductImage').src = productImage;
        document.getElementById('modalProductImage').alt = productName;

        // Show modal with animation
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }, 10);
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }, 300); // Match this with the CSS transition time
    }

    // Add click event to all view links
    viewLinks.forEach(link => {
        link.addEventListener('click', openModal);
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
