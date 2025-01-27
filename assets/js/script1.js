const caja1 = document.getElementById("color1");
const caja2 = document.getElementById("color2");
const caja3 = document.getElementById("color3");
const caja4 = document.getElementById("color4");

caja1.addEventListener("click", () => {
  caja1.style.backgroundColor = "black";
});

caja2.addEventListener("click", () => {
  caja2.style.backgroundColor = "black";
});

caja3.addEventListener("click", () => {
  caja3.style.backgroundColor = "black";
});

caja4.addEventListener("click", () => {
  caja4.style.backgroundColor = "black";
});

/*Crea una página junto a un script que guarde dentro de una variable global
 un color dependiendo de la letra del teclado presionada */

let color = "";
const elemento = document.getElementById("key");

document.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "skyblue";
  } else {
    return;
  }
  elemento.style.backgroundColor = color;
});

/* Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
 deberá crear un div nuevo de las mismas dimensiones antes mencionadas
 con los colores morado, gris y café respectivamente. */

const crearDiv=(color)=>{
  const contenedor=document.getElementById("contenedor")
  const nuevoDiv=document.createElement("div")
  nuevoDiv.style.width="200px"
  nuevoDiv.style.height="200px"
  nuevoDiv.style.backgroundColor=color
  nuevoDiv.classList.add("color-div")
  contenedor.appendChild(nuevoDiv)
}
document.addEventListener("keydown",(event)=>{
  if(event.key==="q"){
    crearDiv("purple")
  }
  else if (event.key==="w"){
    crearDiv("gray")
  }
  else if (event.key==="e"){
    crearDiv("brown")
  }

})