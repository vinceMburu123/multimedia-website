
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.auto-type', {
      strings: ["Quality", "Value", "Good Service"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  });
  // Select the add to cart button
const addToCartBtn = document.querySelector('.add-to-cart-btn');

// Select the cart total span
const cartTotal = document.getElementById('cart-total');

// Initialize cart total count
let totalCount = 0;

// Event listener for add to cart button
addToCartBtn.addEventListener('click', function() {
    // Increment the total count
    totalCount++;
    
    // Update the cart total
    cartTotal.textContent = totalCount;
});

const flowerPots = document.querySelectorAll('.flower-pot');

flowerPots.forEach(pot => {
  pot.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    pot.style.backgroundColor = randomColor;
    pot.classList.add('active');
    setTimeout(() => {
      pot.classList.remove('active');
    }, 500);
  });
});
