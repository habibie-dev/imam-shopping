const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Nike Kyrie",
        price: 149,
        colors: [
            {
                code: "cyan",
                img: "./img/kyrie1.png",
            },
            {
                code: "pink",
                img: "./img/kyrie2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Travis Scott",
        price: 429,
        colors: [
            {
                code: "481E14",
                img: "./img/travis1.png",
            },
            {
                code: "F8C794",
                img: "./img/travis2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Zoom Freak",
        price: 99,
        colors: [
            {
                code: "A6F6FF",
                img: "./img/zoom1.png",
            },
            {
                code: "0C356A",
                img: "./img/zoom2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});