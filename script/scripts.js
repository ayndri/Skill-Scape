document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".company-container");
  const items = document.querySelectorAll(".card-company");
  const totalItems = items.length;
  const cloneItems = () => {
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
    });
  };

  cloneItems();

  const totalWidth = items[0].offsetWidth * totalItems;

  container.style.width = `${totalWidth}px`;
});

// Close Promo

function closePromo() {
    const inter = document.getElementById('container-intermezzo');
    inter.classList.add('closed');
}
