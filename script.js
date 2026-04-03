 const services = [
        { id: 1, name: 'Dry Cleaning', price: 200, icon: '👕' },
        { id: 2, name: 'Wash & Fold', price: 100, icon: '🧺' },
        { id: 3, name: 'Ironing', price: 30, icon: '🧲' },
        { id: 4, name: 'Stain Removal', price: 500, icon: '✨' },
        { id: 5, name: 'Leather & Suede Cleaning', price: 999, icon: '🧥' },
        { id: 6, name: 'Wedding Dress Cleaning', price: 2800, icon: '👗' }
    ];

    let cart = []; // Pre-populating to match the screenshot

    function formatPrice(price) {
        return `₹${price.toFixed(2)}`;
    }

    function toggleCart(id) {
        if (cart.includes(id)) {
            cart = cart.filter(itemId => itemId !== id);
        } else {
            cart.push(id);
        }
        renderApp();
    }

    function renderApp() {
        const servicesList = document.getElementById('services-list');
        const cartBody = document.getElementById('cart-body');
        const totalAmount = document.getElementById('total-amount');

        // Render Services
        servicesList.innerHTML = services.map(service => {
            const inCart = cart.includes(service.id);
            return `
                <div class="service-item">
                    <div class="service-info">
                        <span>${service.icon}</span> 
                        <span>${service.name} <span style="color:#ccc; font-size:10px;">•</span> <span class="service-price">${formatPrice(service.price)}</span></span>
                    </div>
                    <button class="btn ${inCart ? 'btn-remove' : 'btn-add'}" onclick="toggleCart(${service.id})">
                        ${inCart ? 'Remove Item ⊖' : 'Add Item ⊕'}
                    </button>
                </div>
            `;
        }).join('');

        // Render Cart
        let total = 0;
        let sNo = 1;
        cartBody.innerHTML = cart.map(id => {
            const service = services.find(s => s.id === id);
            total += service.price;
            return `
                <tr>
                    <td>${sNo++}</td>
                    <td style="color: #555;">${service.name}</td>
                    <td>${formatPrice(service.price)}</td>
                </tr>
            `;
        }).join('');

        if (cart.length === 0) {
            cartBody.innerHTML = `<tr><td colspan="3" style="text-align:center;">Cart is empty</td></tr>`;
        }

        totalAmount.innerText = formatPrice(total);
    }