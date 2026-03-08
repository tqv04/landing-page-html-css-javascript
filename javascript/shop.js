const kind = [
  {
    title: "All products",
    quanity: 12,
    class: "active",
  },
  {
    title: "Gaming",
    quanity: 4,
  },
  {
    title: "Premium Sets",
    quanity: 1,
  },
  {
    title: "Headphones",
    quanity: 0,
  },
  {
    title: "Exclusive",
    quanity: 2,
  },
  {
    title: "Limited Edition",
    quanity: 0,
  },
];

const categoryContainer = document.getElementById("category-filter");

kind.forEach((item) => {
  categoryContainer.innerHTML += `
   <div class="category ${item.class || ""}" data-tag="${item.title}">

      <div class="icon">
        <i class="fa-regular fa-folder"></i>
      </div>

      <div class="text">
        <h4>${item.title}</h4>
        <span>${item.quanity}</span>
      </div>

    </div>
  `;
});

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((item) => item.classList.remove("active"));
    category.classList.add("active");

    const tag = category.dataset.tag;

    if (tag === "All products") {
      renderProducts(products);
    } else {
      const filtered = products.filter((p) => p.tag === tag);
      renderProducts(filtered);
    }
  });
});
