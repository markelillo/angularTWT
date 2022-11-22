let texto = document.getElementById("primero");

console.log("valor de texto ", texto.innerText);
let p = document.getElementsByTagName("p");
for (let item of p) {
  item.style.color = "red";
}
