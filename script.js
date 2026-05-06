const registroForm = document.getElementById("registroForm");
const registro = document.getElementById("registro");
const tienda = document.getElementById("tienda");
const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");

registroForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const carrera = document.getElementById("carrera").value;
    

    if (carnet && nombre && carrera && semestre) {
        registro.classList.remove("activa");
        tienda.classList.add("activa");
    }
});

buscador.addEventListener("keyup", function() {
    const texto = buscador.value.toLowerCase();

    productos.forEach(producto => {
        const nombre = producto.dataset.nombre.toLowerCase();

        if (nombre.includes(texto)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});

productos.forEach(producto => {
    producto.querySelector("button").addEventListener("click", function() {
        alert("seleccionaste: " + producto.dataset.nombre);
    });
});