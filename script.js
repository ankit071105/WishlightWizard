document.getElementById("priceMonitorForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const productLink = document.getElementById("productLink").value;
    const desiredPrice = parseFloat(document.getElementById("desiredPrice").value);
    const notification = document.getElementById("notification");
    const fetchProductPrice = async () => {
  
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    price: Math.random() * (10000 - 1000) + 1000, // Random price between 1000 and 10000
                    product: "Sample Product",
                });
            }, 2000);
        });
    };
    
    // Example usage
    fetchProductPrice().then((data) => {
        console.log(`Product: ${data.product}, Price: ${data.price.toFixed(2)}`);
    });
    

    notification.style.display = "block";
    notification.innerHTML = "Checking product price...";

    fetchProductPrice().then((data) => {
        const currentPrice = data.price;
        const productName = data.product;

        if (currentPrice <= desiredPrice) {
            notification.innerHTML = `Good news! "${productName}" is now available for ₹${currentPrice.toFixed(
                2
            )}. Go grab it!`;
        } else {
            notification.innerHTML = `"${productName}" is currently ₹${currentPrice.toFixed(
                2
            )}. We'll notify you when it drops to ₹${desiredPrice}.`;
        }
    });
});
