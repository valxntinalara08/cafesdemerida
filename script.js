const formulario = document.getElementById("formularioRecomendacion");
const campoNombre = document.getElementById("nombre");
const campoCafeteria = document.getElementById("cafeteria");
const mensaje = document.getElementById("mensajeConfirmacion");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const cafeteria = campoCafeteria.value.trim();

    mensaje.textContent =
        `¡Gracias, ${nombre}! Tu recomendación de "${cafeteria}" fue enviada correctamente.`;

    formulario.reset();

});