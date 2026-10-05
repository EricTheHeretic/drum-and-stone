const products = [
  { name: "Roasted coffee", note: "Small-drum roast. Whole bean or ground.", price: "Price set at first legal batch" },
  { name: "Bean-to-bar chocolate", note: "Stone-ground cacao. Shelf-stable bars.", price: "Price set at first legal batch" },
  { name: "Beef jerky", note: "Dried beef. Sold only after lab water activity and PDA approval.", price: "Price set at first legal batch" },
  { name: "Dried fruit", note: "Pantry fruit, dried for the pack.", price: "Price set at first legal batch" },
  { name: "Dry noodles", note: "Alkaline dough, no egg, packed dry.", price: "Price set at first legal batch" }
];

const grid = document.getElementById("product-grid");
if (grid) {
  grid.innerHTML = products.map((p) => `
    <article class="card">
      <h3>${p.name}</h3>
      <p>${p.note}</p>
      <p class="price">${p.price}</p>
    </article>
  `).join("");
}

const form = document.getElementById("order-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`
    );
    window.location.href = `mailto:hello@drumandstone.com?subject=${encodeURIComponent("Drum & Stone order note")}&body=${body}`;
    document.getElementById("form-status").textContent = "Your mail app should open. If it does not, write hello@drumandstone.com.";
  });
}
