let label = document.getElementById("calculadora");

let botones = document.getElementsByTagName("button");
for (const b of botones) {
  b.addEventListener("click", function () {
   let l =document.getElementById("calculadora");
   l.innerText+=b.innerText//b es el valor de cada boton
  });
}
