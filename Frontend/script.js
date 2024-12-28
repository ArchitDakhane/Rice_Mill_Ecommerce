// Navbar




// Slideshows
window.onload = function() {
    let slideIndex = 0
        showSlides()
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides")
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none" 
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block" 
            setTimeout(showSlides, 4000)
        }
}



// Stats

document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat h3");

    stats.forEach(stat => {
        const endValue = parseInt(stat.textContent.replace(/\D/g, ""));
        let currentValue = 0;
        const increment = Math.ceil(endValue / 100); 

        const updateValue = () => {
            currentValue += increment;
            if (currentValue >= endValue) {
                currentValue = endValue;
                clearInterval(timer);
            }
            stat.textContent = currentValue + "+";
        };

        const timer = setInterval(updateValue, 20); 
    });
});

// Cart

document.addEventListener("DOMContentLoaded", function () {
    const quantities = document.querySelectorAll('.quantity');
    const removeButtons = document.querySelectorAll('.remove-item');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const deliveryCharges = 100; 

    const prices = [
        { price: 450 },
        { price: 350 },
        { price: 550 }
    ];

    // Function to update the subtotal and total price
    function updatePrices() {
        let subtotal = 0;

        // Loop through each product row and update subtotal for each item
        const rows = document.querySelectorAll('#cart-table tbody tr');
        rows.forEach((row, index) => {
            const quantityInput = row.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value) || 0; 
            const itemPrice = prices[index].price; 
            const itemSubtotal = itemPrice * quantity; 
            subtotal += itemSubtotal;

            row.querySelector('.subtotal').textContent = `Rs. ${itemSubtotal}`;
        });

        const total = subtotal + deliveryCharges;

        subtotalElement.textContent = `Rs. ${subtotal}`;
        totalElement.textContent = `Rs. ${total}`;
    }

    quantities.forEach((input) => {
        input.addEventListener('input', function () {
            updatePrices();
        });
    });

    removeButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
            const index = event.target.dataset.index; 
            const row = event.target.closest('tr'); 
            row.remove(); 
            updatePrices(); 
        });
    });

    updatePrices();
});








  




