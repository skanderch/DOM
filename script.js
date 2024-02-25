
        const cartItems = [
            { id: 1, name: 'Item 1', price: 10, quantity: 1, liked: false },
            { id: 2, name: 'Item 2', price: 20, quantity: 2, liked: true },
        ];

        function renderCart() {
            const cart = document.getElementById('cart');
            cart.innerHTML = '';
            let totalPrice = 0;

            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                const quantity = document.createElement('input');
                quantity.type = 'number';
                quantity.value = item.quantity;
                quantity.min = 1;
                quantity.addEventListener('change', () => {
                    item.quantity = parseInt(quantity.value);
                    renderCart();
                });

                const name = document.createElement('span');
                name.textContent = item.name;

                const price = document.createElement('span');
                price.textContent = '$' + item.price;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    cartItems.splice(cartItems.indexOf(item), 1);
                    renderCart();
                });

                const heart = document.createElement('span');
                heart.classList.add('heart');
                if (item.liked) {
                    heart.classList.add('liked');
                }
                heart.addEventListener('click', () => {
                    item.liked = !item.liked;
                    heart.classList.toggle('liked');
                });

                cartItem.appendChild(quantity);
                cartItem.appendChild(name);
                cartItem.appendChild(price);
                cartItem.appendChild(deleteButton);
                cartItem.appendChild(heart);

                cart.appendChild(cartItem);

                totalPrice += item.price * item.quantity;
            });

            document.getElementById('total-price').textContent = totalPrice.toFixed(2);
        }

        renderCart();
    