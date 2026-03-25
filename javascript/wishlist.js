function renderWishList(){
    const wish = store.getState().wishlist;
    const wishlist = document.getElementById("wish-list");
     if(!wishlist) return;
    wishlist.innerHTML = wish.map((item, index) => `
        <div class="wish-item">
        <img src="${item.img}" alt="${item.name}" />

        <div class="wish-info">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <span> ${item.quantity}</span>
        </div>

        <button class="remove-btn" onclick="removeFromWishList(${index})">
            X
        </button>
    </div>
    `).join("");
    console.log("WishList:", wish);
}

document.addEventListener("DOMContentLoaded", () => {
   const el = document.getElementById("wish-list");
    console.log("Element:", el);
    renderWishList();
    store.subscribe(renderWishList);
});

function removeFromWishList(id){
    store.dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: id
    });
}