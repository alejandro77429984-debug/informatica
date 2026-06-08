const productosData = [

{name:"Pilfrut",precio:4},
{name:"Queque",precio:3},
{name:"Empanada",precio:5},
{name:"Salchipapa",precio:15},
{name:"Coca Cola",precio:6},
{name:"Fanta",precio:6},
{name:"Energizante",precio:12},
{name:"Budín Chocolate",precio:4},
{name:"Salchipollo",precio:18},
{name:"Agua 2L",precio:8},
{name:"Café",precio:4},

{name:"Hamburguesa",precio:12},
{name:"Sándwich",precio:10},
{name:"Té",precio:3},
{name:"Gelatina",precio:2},
{name:"Mocochinchi",precio:4},
{name:"Jugo",precio:5},
{name:"Galletas",precio:2},
{name:"Brownie",precio:5},
{name:"Yogurt",precio:4}

];

const registroForm=document.getElementById("registroForm");
const carnet=document.getElementById("carnet");

const listaProductos=document.getElementById("listaProductos");

const listaPedido=document.getElementById("listaPedido");

const total=document.getElementById("total");

let carrito=[];
let suma=0;


carnet.addEventListener("input",()=>{

carnet.value=carnet.value.replace(/\D/g,'');

});


registroForm.addEventListener("submit",(e)=>{

e.preventDefault();

registro.classList.remove("activa");

tienda.classList.add("activa");

});


document.getElementById("ojo").addEventListener("click",()=>{

const pass=document.getElementById("password");

pass.type=pass.type==="password" ? "text":"password";

});


productosData.forEach(producto=>{

listaProductos.innerHTML+=`

<div class="producto">

<h2>${producto.name}</h2>

<p>Bs ${producto.precio}</p>

<button onclick="agregar('${producto.name}',${producto.precio})">

Agregar

</button>

</div>

`;

});


function agregar(nombre,precio){

carrito.push(nombre);

suma+=precio;

actualizar();

}


function actualizar(){

listaPedido.innerHTML="";

carrito.forEach(item=>{

listaPedido.innerHTML+=`<li>${item}</li>`;

});

total.textContent=suma;

}


document.getElementById("buscador")

.addEventListener("keyup",function(){

const texto=this.value.toLowerCase();

document.querySelectorAll(".producto")

.forEach(producto=>{

producto.style.display=

producto.innerText.toLowerCase()

.includes(texto)

? "block"

: "none";

});

});


document.getElementById("finalizar")

.addEventListener("click",()=>{

const pago=document.getElementById("metodoPago").value;

alert(

"Compra realizada\n\n"+

"Productos: "+carrito.join(", ")+"\n"+

"Total: Bs "+suma+"\n"+

"Pago: "+pago

);

});
