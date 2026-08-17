const $ = id => (document.getElementById(id));

const products = [
  {
    id: "1",
    name: "Yantiti Leather & Canvas",
    category: "Gaming",
    price: 30,
    oldPrice: 38,
    discount: 20,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.8,
    stock: 15
  },
  {
    id: "2",
    name: "RGB Mechanical Keyboard",
    category: "Accessories",
    price: 40,
    oldPrice: 50,
    discount: 20,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.9,
    stock: 10
  },
  {
    id: "3",
    name: "HD Webcam",
    category: "Camera",
    price: 45,
    oldPrice: 60,
    discount: 30,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.7,
    stock: 20
  },
  {
    id: "4",
    name: "2.1 Speaker System",
    category: "Audio",
    price: 70,
    oldPrice: 100,
    discount: 30,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.8,
    stock: 12
  },
  {
    id: "5",
    name: "Smart Speaker",
    category: "Smart Home",
    price: 55,
    oldPrice: 65,
    discount: 15,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-05.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.6,
    stock: 18
  },
  {
    id: "6",
    name: "Wireless Ergonomic Mouse",
    category: "Accessories",
    price: 60,
    oldPrice: 75,
    discount: 20,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-06.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.9,
    stock: 8
  },
  {
    id: "7",
    name: "Noise Cancelling Headphones",
    category: "Audio",
    price: 95,
    oldPrice: 100,
    discount: 5,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-07.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 5,
    stock: 7
  },
  {
    id: "8",
    name: "Wireless Game Controller",
    category: "Gaming",
    price: 80,
    oldPrice: 90,
    discount: 10,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
    colors: ["#AEEFFF", "#5C8DF6", "#48D1CC"],
    rating: 4.7,
    stock: 16
  },
  {
    id: "9",
    name: "Gaming Monitor 27",
    category: "Monitor",
    price: 260,
    oldPrice: 320,
    discount: 19,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-09.png",
    colors: ["#000000", "#FFFFFF"],
    rating: 4.9,
    stock: 5
  },
  {
    id: "10",
    name: "Portable SSD 1TB",
    category: "Storage",
    price: 120,
    oldPrice: 150,
    discount: 20,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-10.png",
    colors: ["#000000", "#808080"],
    rating: 4.8,
    stock: 25
  },
  {
    id: "11",
    name: "USB-C Hub",
    category: "Accessories",
    price: 35,
    oldPrice: 45,
    discount: 22,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-11.png",
    colors: ["#C0C0C0", "#000000"],
    rating: 4.5,
    stock: 30
  },
  {
    id: "12",
    name: "Gaming Chair",
    category: "Furniture",
    price: 180,
    oldPrice: 230,
    discount: 22,
    image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-12.png",
    colors: ["#000000", "#FF0000"],
    rating: 4.8,
    stock: 6
  }
];


let ProductContainerElement=$("ProductContainer");

let limit=8;

function getProducts(){
    for(let i=0;i<products.length && i<limit;++i){
        ProductContainerElement.innerHTML+=`
        <div class="product__card">
                            <img class="product__image" src="${products[i].image}" alt="">
                            <h3 class="product__name">${products[i].name}</h3>
                            <p class="Pricetag">$${products[i].price}<span class="oldPrice">$${products[i].oldPrice}</span></p>
        </div>`;
    }
}
getProducts()