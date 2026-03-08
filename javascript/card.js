const products = [
  {
    id: 1,
    name: "Chrome Watch",
    tag: "Exclusive",
    price: 399,
    img: "public/gold-watch-1-300x300.png",
  },
  {
    id: 2,
    name: "PlayStaion 5",
    tag: "Exclusive",
    price: 899,
    img: "public/pr1-2-1-300x300.jpg",
  },
  {
    id: 3,
    name: "Tablet X5",
    tag: "Tablets",
    price: 699,
    img: "public/pr2-1-300x300.jpg",
  },
  {
    id: 4,
    name: "PlayStation Headset",
    tag: "Gaming",
    price: 599,
    img: "public/pr3-1-300x300.jpg",
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    tag: "Smart Phones",
    price: 1.599,
    img: "public/pr4-1-300x300.jpg",
  },
  {
    id: 6,
    name: "VR Gaming",
    tag: "Gaming",
    price: 790,
    img: "public/pr2-1-300x300.jpg",
  },
  {
    id: 7,
    name: "Wireless Controller 5",
    tag: "Gaming",
    price: 399,
    img: "public/pr6-1-300x300.jpg",
  },
  {
    id: 8,
    name: "Xbox One",
    tag: "Gaming",
    price: 499,
    img: "public/pr7-1-300x300.jpg",
  },
  {
    id: 9,
    name: "Black Sports Watch",
    tag: "Smart Watches",
    price: 399,
    img: "public/pr8-1-300x300.jpg",
  },
  {
    id: 10,
    name: "Android Phone",
    tag: "Premium Sets",
    price: 599,
    img: "public/pr9-1-300x300.jpg",
  },
  {
    id: 11,
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.799,
    img: "public/pr10-1-300x300.jpg",
  },
  {
    id: 12,
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.399,
    img: "public/pr11-1-300x300.jpg",
  },
];

const container = document.getElementById("products");

function renderProducts(list) {
  container.innerHTML = "";

  list.forEach((product) => {
    container.innerHTML += `
    
    
    <div class="product-card" onclick="goDetail(${product.id})">
      <div class="product-img">

         <img src="${product.img}" alt="${product.name}">

        <div class="card-icons">

          <div class="card-icon">
            <span class="tooltip">Add to wishlist</span>
            <i class="fa-regular fa-heart"></i>
          </div>

          <div class="card-icon">
            <span class="tooltip">Add to compare</span>
            <i class="fa-solid fa-shuffle"></i>
          </div>

          <div class="card-icon">
            <span class="tooltip">Quick view</span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

        </div>

      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <span class="tag">${product.tag}</span>

        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>

        <div class="price">$${product.price}</div>
      </div>
            
    </div>

    `;
  });
}
renderProducts(products);

function goDetail(id) {
  window.location.href = `product-detail.html?id=${id}`;
}
