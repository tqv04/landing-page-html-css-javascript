const products = [
  {
    id: 1,
    name: "Chrome Watch",
    tag: "Exclusive",
    price: 399,
    img: "images/gold-watch-1-300x300.png",
  },
  {
    id: 2,
    name: "PlayStaion 5",
    tag: "Exclusive",
    price: 899,
    img: "images/pr1-2-1-300x300.jpg",
  },
  {
    id: 3,
    name: "Tablet X5",
    tag: "Tablets",
    price: 699,
    img: "images/pr2-1-300x300.jpg",
  },
  {
    id: 4,
    name: "PlayStation Headset",
    tag: "Gaming",
    price: 599,
    img: "images/pr3-1-300x300.jpg",
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    tag: "Smart Phones",
    price: 1.599,
    img: "images/pr4-1-300x300.jpg",
  },
  {
    id: 6,
    name: "VR Gaming",
    tag: "Gaming",
    price: 790,
    img: "images/pr2-1-300x300.jpg",
  },
  {
    id: 7,
    name: "Wireless Controller 5",
    tag: "Gaming",
    price: 399,
    img: "images/pr6-1-300x300.jpg",
  },
  {
    id: 8,
    name: "Xbox One",
    tag: "Gaming",
    price: 499,
    img: "images/pr7-1-300x300.jpg",
  },
  {
    id: 9,
    name: "Black Sports Watch",
    tag: "Smart Watches",
    price: 399,
    img: "images/pr8-1-300x300.jpg",
  },
  {
    id: 10,
    name: "Android Phone",
    tag: "Premium Sets",
    price: 599,
    img: "images/pr9-1-300x300.jpg",
  },
  {
    id: 11,
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.799,
    img: "images/pr10-1-300x300.jpg",
  },
  {
    id: 12,
    name: "Silver Laptop",
    tag: "Laptops",
    price: 2.399,
    img: "images/pr11-1-300x300.jpg",
  },
];

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);

const product = products.find((p) => p.id == id);
document.getElementById("product-detail").innerHTML = `
   <div class="breadcrumb">
      <a href="index.html"><i class="fa-solid fa-home"></i></a>
      <span class="arrow">›</span>
      <span><a href="shop.html">Products</a></span>
      <span>›</span>
      <span><a href="shop.html?id=${product.tag}"> ${product.tag}</a></span>
    </div>
<div class="product-detail">

  <div class="product-left">
    <img src="${product.img}" alt="${product.name}">
  </div>

  <div class="product-right">
    
    <h1 class="product-title">${product.name}</h1>

    <div class="rating">
      <span class="score">4.5</span>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <span class="count">(4 Rating)</span>
    </div>

    <div class="price">$${product.price}</div>

    <p class="desc">
      Pellentesque habitant morbi tristique senectus et netus.
    </p>

    <div class="actions">

      <div class="quantity">
        <button>-</button>
        <input value="1">
        <button>+</button>
      </div>

      <button class="add-cart">
        <i class="fa-solid fa-cart-shopping"></i> Add to cart
      </button>

      <button class="icon-btn">
        <i class="fa-regular fa-heart"></i>
      </button>

    </div>

  </div>

</div>
`;
