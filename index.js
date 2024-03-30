precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

document.addEventListener('DOMContentLoaded', function () {
  var precioBase = 400000; // Este es el precio base del producto
  var cantidad = document.querySelector('.cantidad'); // El elemento que muestra la cantidad
  var total = document.querySelector('.valor-total'); // El elemento que muestra el total

  function actualizarTotal() {
    total.textContent = '$' + (precioBase * parseInt(cantidad.textContent)).toLocaleString();
  }

  // Escuchadores de eventos para los botones de incrementar y decrementar
  document.querySelector('.boton-incrementar').addEventListener('click', function () {
    cantidad.textContent = parseInt(cantidad.textContent) + 1;
    actualizarTotal();
  });

  document.querySelector('.boton-decrementar').addEventListener('click', function () {
    if (parseInt(cantidad.textContent) > 0) {
      cantidad.textContent = parseInt(cantidad.textContent) - 1;
      actualizarTotal();
    }
  });

  actualizarTotal();
});
