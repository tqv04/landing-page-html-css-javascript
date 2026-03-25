function renderCart(){
    const cart = store.getState().cart;
    const cartList = document.getElementById("cart-list");
     if(!cartList) return;
    cartList.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" />

        <div class="cart-info">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <span> ${item.quantity}</span>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${index})">
            X
        </button>
    </div>
    `).join("");
    console.log("CART:", cart);
}

document.addEventListener("DOMContentLoaded", () => {
   const el = document.getElementById("cart-list");
    console.log("Element:", el);
    renderCart();
    store.subscribe(renderCart);
});

function removeFromCart(id){
    store.dispatch({
        type: "REMOVE_FROM_CART",
        payload: id
    });
}