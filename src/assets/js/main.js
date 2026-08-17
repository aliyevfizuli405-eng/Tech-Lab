const $ = id => (document.getElementById(id));

let ProductContainerElement=$("ProductContainer");

let limit =8;

async function getProducts(){
    const res = await fetch("http://localhost:3000/products");
    const products = await res.json();

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