const dataURL_Autos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

const dataContainer = document.getElementById("dataContainer");

function mostrarData(dataURL) {
    for(const item of dataURL) {
        dataContainer.innerHTML += `
        <div class="producto col-lg-4 col-md-6 col-12">
        <img src="${item.image}" alt="${item.name}" class="imgProducto">
        <h2 class="nameProducto">${item.name}</h2>
        <p class="descProducto">${item.description}</p>
        <p class="precioProducto"><strong>Precio:</strong> ${item.currency} ${item.cost}</p>
        <p class="vendidosProducto"><strong>Unidades vendidas:</strong> ${item.soldCount}<p>
        </div>
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