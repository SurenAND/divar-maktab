const arrowUp = document.getElementById("arrowup");
const iconLocation = document.getElementById("iconlocation");
const inputLocation = document.getElementById("inputlocation");
iconLocation.addEventListener("click", arrowUpIcon);

function arrowUpIcon() {
  arrowUp.classList.toggle("active");
  inputLocation.classList.toggle("hide");
}
const products = [
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
  {
    name: "کابینت",
    status: "کارکرده",
    price: "۲,۳۵۰,۰۰۰ تومان",
    date: "لحظاتی پیش در تولید دارو",
    image: "product-001",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  renderProductsSection(products);
});

const productsSec = document.querySelector(".products");
function renderProductsSection(data) {
  data.forEach((item) => {
    // create product column
    const productCol = document.createElement("div");
    productCol.classList.add("col-4", "mb-2");

    // create product card
    const product = document.createElement("div");
    product.classList.add(
      "product",
      "d-flex",
      "justify-content-between",
      "align-items-start"
    );

    // create product image
    const productImg = document.createElement("div");
    productImg.classList.add("product-img");
    const pImg = document.createElement("img");
    pImg.src = `./assets/images/${item.image}.webp`;
    pImg.alt = "product";
    productImg.append(pImg);

    // create product info
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    // create product title
    const productTitle = document.createElement("div");
    productTitle.classList.add("product-title");
    productTitle.innerText = `${item.name}`;

    // create product status
    const productStatus = document.createElement("div");
    productStatus.classList.add("product-status");
    productStatus.innerText = `${item.status}`;

    // create product price
    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    productPrice.innerText = `${item.price}`;

    // create product date
    const productDate = document.createElement("div");
    productDate.classList.add("product-date");
    productDate.innerText = `${item.date}`;

    // appends
    productInfo.append(productTitle, productStatus, productPrice, productDate);
    product.append(productImg, productInfo);
    productCol.append(product);
    productsSec.append(productCol);
  });
}
