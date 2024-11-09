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

