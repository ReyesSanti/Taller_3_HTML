const formulario = document.getElementById("formulario");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;
    const cumpleaños = document.getElementById("cumpleanos").value;
    
    agregarFilaATabla(nombre, edad, sexo, correo, celular, cumpleaños);
    formulario.reset();

    mostrarMensaje("Los datos se agregaron correctamente.");
});

function agregarFilaATabla(nombre, edad, sexo, correo, celular, cumpleaños) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${sexo}</td>
        <td>${correo}</td>
        <td>${celular}</td>
        <td>${cumpleaños}</td>
    `;
    tablaCuerpo.appendChild(fila);
}

const botonBorrarTabla = document.getElementById("borrarTabla");
botonBorrarTabla.addEventListener("click", function() {
    borrarTabla();
});

function borrarTabla() {
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    while (tablaCuerpo.firstChild) {
        tablaCuerpo.removeChild(tablaCuerpo.firstChild);
    }

    mostrarMensaje("La tabla se ha borrado correctamente.");
}

function mostrarMensaje(mensaje) {
    const mensajeFlotante = document.getElementById("mensaje-flotante");
    mensajeFlotante.textContent = mensaje;
    mensajeFlotante.style.display = "block";

    setTimeout(() => {
        mensajeFlotante.style.display = "none";
    }, 3000); 
}
