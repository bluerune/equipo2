const dataURL_Autos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const dataContainer = document.getElementById("dataContainer");

const flechaIzq = document.querySelector(".flechaIzq");
const flechaDer = document.querySelector(".flechaDer");

let products = [];
let currentIndex = 0;
const productsPerPage = 3; // Número de productos a mostrar a la vez

function mostrarData() {
    dataContainer.innerHTML = "";
    for (let i = currentIndex; i < currentIndex + productsPerPage && i < products.length; i++) {
        const item = products[i];
        dataContainer.innerHTML += `
        <div class="producto col-lg-4 col-md-6 col-12">
        <img src="${item.image}" alt="${item.name}" class="imgProducto">
        <h2 class="nameProducto">${item.name}</h2>
        <p class="descProducto">${item.description}</p>
        <p class="precioProducto"><strong>Precio:</strong> ${item.currency} ${item.cost}</p>
        <p class="vendidosProducto"><strong>Unidades vendidas:</strong> ${item.soldCount}</p>
        </div>
        `;
    }
}

function mostrarSiguiente() {
    if (currentIndex + productsPerPage < products.length) {
        currentIndex++;
        mostrarData();
    }
}

function mostrarAnterior() {
    if (currentIndex > 0) {
        currentIndex--;
        mostrarData();
    }
}

fetch(dataURL_Autos)
    .then(response => response.json())
    .then(data => {
        products = data.products;
        mostrarData();
    })
    .catch(error => {
        console.error('Problema con tu operación de fetch', error);
    });

flechaDer.addEventListener("click", mostrarSiguiente);
flechaIzq.addEventListener("click", mostrarAnterior);