const products = [

{
name:"Laptop",
price:59999,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
name:"Smartphone",
price:24999,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
},

{
name:"Headphones",
price:1999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},

{
name:"Smart Watch",
price:3999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},

{
name:"Gaming Keyboard",
price:2999,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600"
},

{
name:"Bluetooth Speaker",
price:1499,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600"
},

{
name:"Camera",
price:45999,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
},

{
name:"Tablet",
price:18999,
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
}

];

let cartCount =
Number(localStorage.getItem("cartCount")) || 0;

document.getElementById("cartCount")
.textContent = cartCount;

function displayProducts(productList){

const container =
document.getElementById("productContainer");

container.innerHTML = "";

productList.forEach(product=>{

container.innerHTML += `

<div class="product">

<img src="${product.image}">

<div class="product-info">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart()">
Add To Cart
</button>

</div>

</div>

`;

});

}

function addToCart(){

cartCount++;

document.getElementById("cartCount")
.textContent = cartCount;

localStorage.setItem(
"cartCount",
cartCount
);

}

function searchProducts(){

const searchText =
document.getElementById("searchInput")
.value
.toLowerCase();

const filteredProducts =
products.filter(product =>

product.name
.toLowerCase()
.includes(searchText)

);

displayProducts(filteredProducts);

}

displayProducts(products);