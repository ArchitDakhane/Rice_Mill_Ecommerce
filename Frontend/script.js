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
document.querySelectorAll('.cart-container a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var row = link.parentElement.parentElement;
        row.parentElement.removeChild(row);
    });
});


  




