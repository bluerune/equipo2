const dataURL_Autos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const dataContainer = document.getElementById("dataContainer");

function mostrarData(dataURL) {
    for(const item of dataURL) {
        dataContainer.innerHTML += `
        <img src="${item.image}" alt="${item.name}" class="imgProducto">
        <h2 class="nameProducto">${item.name}</h2>
        <p class="descProducto">${item.description}</p>
        <p class="precioProducto">Precio: ${item.currency} ${item.cost}</p>
        <p class="vendidosProducto">Unidades vendidas: ${item.soldCount}<p>
        `;
    }
}

fetch (dataURL_Autos)
  .then((response) => response.json())
  .then(data => {
    mostrarData(data.products);
})
.catch(error => {
  console.error('Problema con tu operación de fetch', error);
});