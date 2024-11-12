// <!-- JavaScript to replace background image with video -->
    // Replace background image with video after 3 seconds
    setTimeout(function() {
        var section = document.getElementById('heroSection');
        section.style.backgroundImage = 'none'; // Remove the background image
        
        // Create a video element
        var video = document.createElement('video');
        video.src = 'VID-20241019-WA0056.mp4'; // Replace with your video file
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.classList.add('hero-video');
        
        // Append video to the hero section
        section.appendChild(video);
        video.style.display = 'block'; // Display the video after adding
    }, 3000); // 3 seconds delay


    function menuAll(){
        window.location.href = 'menu.html';
    }

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,          // Shows one card at a time
        loop: true,        // Infinite loop
        margin: 5,         // Reduce margin (gap) between cards
        nav: true,         // Show navigation buttons
        autoplay: true,    // Auto play
        autoplayTimeout: 3000,  // 3 seconds delay
        autoplayHoverPause: true,  // Pause on hover
        navText: ["<", ">"],   // Customize navigation buttons
        responsive: {
            0: {
                items: 1  // Show one card on small screens
            },
            600: {
                items: 2  // Show two cards on medium screens
            },
            1000: {
                items: 3  // Show three cards on large screens
            }
        }
      });
    });
    


    function showCategory(categoryId) {
        document.querySelectorAll('.menu-category').forEach(category => {
            if (category.id === categoryId) {
                category.style.display = 'flex';
                category.classList.add('fadeIn');
            } else {
                category.style.display = 'none';
                category.classList.remove('fadeIn');
            }
        });
    
        document.querySelectorAll('.menu-list div').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.menu-list div[onclick="showCategory('${categoryId}')"]`).classList.add('active');
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        showCategory('burgers'); // Show first category by default
    });


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }








    // _________________________________________________________ 

    // // Function to open the modal
// function openOrderModal(itemName, price) {
//     document.getElementById('orderDetails').innerText = `Do you want to add ${itemName} to your cart?`;
//     document.getElementById('orderPrice').innerText = `Rs ${price}`;
//     new bootstrap.Modal(document.getElementById('orderModal')).show();
// }

// // Function to handle confirmation with SweetAlert
// function confirmAddToCart() {
//     Swal.fire({
//         icon: 'success',
//         title: 'Added to Cart!',
//         text: 'The item has been added to your cart.',
//         confirmButtonColor: '#ff6600'
//     });
//     // Close the modal
//     bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
// }



// let cart = [];

// // Add item to cart
// function addToCart(itemName, price) {
//     cart.push({ name: itemName, price: price });
// }

// // Open cart summary modal
// function openCartSummaryModal() {
//     const cartItemsList = document.getElementById('cartItemsList');
//     cartItemsList.innerHTML = ''; // Clear previous items

//     // Display cart items
//     cart.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
//         listItem.textContent = item.name;
//         const itemPrice = document.createElement('span');
//         itemPrice.textContent = `Rs ${item.price}`;
//         listItem.appendChild(itemPrice);
//         cartItemsList.appendChild(listItem);
//     });

//     // Update total price
//     document.getElementById('totalCartPrice').textContent = cart.reduce((sum, item) => sum + item.price, 0);
//     new bootstrap.Modal(document.getElementById('cartSummaryModal')).show();
// }

// // Confirm order and gather user details
// function confirmOrder() {
//     const userName = document.getElementById('userName').value;
//     const userLocation = document.getElementById('userLocation').value;
//     const userPhone = document.getElementById('userPhone').value;

//     if (!userName || !userLocation || !userPhone) {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Incomplete Details',
//             text: 'Please fill in all your details.',
//             confirmButtonColor: '#ff6600'
//         });
//         return;
//     }

//     Swal.fire({
//         icon: 'success',
//         title: 'Order Confirmed!',
//         text: `Thank you, ${userName}. Your order will be delivered to ${userLocation}.`,
//         confirmButtonColor: '#ff6600'
//     });

//     cart = []; // Clear cart
//     bootstrap.Modal.getInstance(document.getElementById('cartSummaryModal')).hide();
// }






let cart = [];

// Function to add an item to the cart
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartTotal();
}

// Function to open the order confirmation modal
function openOrderModal(itemName, price) {
    document.getElementById('orderDetails').innerText = `Do you want to add ${itemName} to your cart?`;
    document.getElementById('orderPrice').innerText = `Rs ${price}`;
    new bootstrap.Modal(document.getElementById('orderModal')).show();
}

// Function to handle confirmation with SweetAlert
function confirmAddToCart() {
    const itemName = document.getElementById('orderDetails').innerText.split(' ')[5];
    const price = parseInt(document.getElementById('orderPrice').textContent.split(' ')[1]);

    addToCart(itemName, price);

    Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: 'The item has been added to your cart.',
        confirmButtonColor: '#ff6600'
    });
    
    // Close the order modal
    bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
}

// Function to update cart total price and display on "View Cart" button
function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('viewCartButton').innerText = `View Cart (Total: Rs ${totalPrice})`;
}

// Function to open cart summary modal
function openCartSummaryModal() {
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = ''; // Clear previous items

    // Display cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.textContent = `Rs ${item.price}`;
        listItem.appendChild(itemPrice);
        cartItemsList.appendChild(listItem);
    });

    // Update total price in modal as well
    document.getElementById('totalCartPrice').textContent = cart.reduce((sum, item) => sum + item.price, 0);

    new bootstrap.Modal(document.getElementById('cartSummaryModal')).show();
}

// Confirm order and gather user details
function confirmOrder() {
    const userName = document.getElementById('userName').value;
    const userLocation = document.getElementById('userLocation').value;
    const userPhone = document.getElementById('userPhone').value;

    if (!userName || !userLocation || !userPhone) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Details',
            text: 'Please fill in all your details.',
            confirmButtonColor: '#ff6600'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Order Confirmed!',
        text: `Thank you, ${userName}. Your order will be delivered to ${userLocation}.`,
        confirmButtonColor: '#ff6600'
    });

    cart = []; // Clear cart after confirming order
    updateCartTotal(); // Reset total displayed on "View Cart" button
    bootstrap.Modal.getInstance(document.getElementById('cartSummaryModal')).hide();
}

