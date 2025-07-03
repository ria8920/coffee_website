const cartItems = [];
const cartContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function addToCart(name, price) {
  cartItems.push({ name, price });
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `<span>${item.name}</span><span>₹${item.price}</span>`;
    cartContainer.appendChild(div);
    total += item.price;
  });

  totalPrice.innerText = total;
}
