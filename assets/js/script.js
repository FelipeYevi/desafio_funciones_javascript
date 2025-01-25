/* Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función */
/*
function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);*/



    /*Modificación 1: Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función*/

/*
    function pintar(elemento) {
        elemento.style.backgroundColor = 'yellow'
      }
      
      const ele = document.getElementById("ele1")
      
      ele.addEventListener("click", () => pintar(ele));

*/

/*Modificación2:Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto */

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  pintar(ele, 'green');
  
  ele.addEventListener("click", () => pintar(ele, 'yellow'));
  