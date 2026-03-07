const products = [
  {
    name: "Chrome Watch",
    tag: "Exclusive",
    price: 399,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/gold-watch-1-300x300.png",
  },
  {
    name: "PlayStaion 5",
    tag: "Exclusive",
    price: 899,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr1-2-1-300x300.jpg",
  },
  {
    name: "Tablet X5",
    tag: "Tablets",
    price: 699,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr2-1-300x300.jpg",
  },
  {
    name: "PlayStation Headset",
    tag: "Gaming",
    price: 599,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr3-1-300x300.jpg",
  },
  {
    name: "iPhone 14 Pro",
    tag: "Smart Phones",
    price: 1.599,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr4-1-300x300.jpg",
  },
  {
    name: "VR Gaming",
    tag: "Gaming",
    price: 790,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr2-1-300x300.jpg",
  },
  {
    name: "Wireless Controller 5",
    tag: "Gaming",
    price: 399,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr6-1-300x300.jpg",
  },
  {
    name: "Xbox One",
    tag: "Gaming",
    price: 499,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr7-1-300x300.jpg",
  },
  {
    name: "Black Sports Watch",
    tag: "Smart Watches",
    price: 399,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr8-1-300x300.jpg",
  },
  {
    name: "Android Phone",
    tag: "Premium Sets",
    price: 599,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr9-1-300x300.jpg",
  },
  {
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.799,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr10-1-300x300.jpg",
  },
  {
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.399,
    img: "/Landing-page-HTML-CSS-JAVACSRIPT-/public/pr11-1-300x300.jpg",
  },
];
const container = document.getElementById("products");

products.forEach((product) => {
  container.innerHTML += `
  
  <div class="product-card">

    <div class="product-img">

      <img src="${product.img}" alt="watch">

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
