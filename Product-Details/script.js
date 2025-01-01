document.addEventListener("DOMContentLoaded", () => {
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    const quantityInput = document.getElementById("quantity");
    const priceElement = document.getElementById("price");
    const addToCartButton = document.querySelector(".add-to-cart");

    const productPrices = {
        basmati: { "5kg": 450, "10kg": 850, "25kg": 2000, "30kg": 2400 },
        hmt: { "5kg": 550, "10kg": 1000, "25kg": 2500, "30kg": 3000 },
        kolam: { "5kg": 350, "10kg": 650, "25kg": 1500, "30kg": 1800 },
    };

    const productType = document.querySelector(".product-details h2")
        .textContent.toLowerCase()
        .replace(/\s/g, "")
        .replace("rice", ""); 

    const sizePriceMap = productPrices[productType] || {};

    const updatePrice = () => {
        const selectedSize = document.querySelector('input[name="size"]:checked')?.value;
        const quantity = parseInt(quantityInput.value) || 1;
        const totalPrice = (sizePriceMap[selectedSize] || 0) * quantity;
        priceElement.textContent = totalPrice;
    };

    sizeOptions.forEach(option => option.addEventListener("change", updatePrice));
    quantityInput.addEventListener("input", updatePrice);

    addToCartButton.addEventListener("click", () => {
        const selectedSize = document.querySelector('input[name="size"]:checked')?.value;
        if (!selectedSize) {
            alert("Please select a size before adding to the cart.");
            return;
        }
        alert(`Added ${quantityInput.value} of ${selectedSize} (${productType}) to your cart.`);
    });
});
