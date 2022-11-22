function persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

let personas = [
  new persona("pepe", 1994),
  new persona("markel", 2012),
  new persona("marta", 1995),
  new persona("Lucas", 2000),
];

console.log(personas);
var mayores = personas.map(function (x) {
  console.log(x.edad)
  if (new Date().getFullYear()-x.edad<18) {
    let mayoresedad=[]
    return mayoresedad.push(x);
  }
    
});
console.log(mayores);


function alien(nombre, fechaNacimineto) {
    this.nombre = nombre;
    this.fechaNacimineto = fechaNacimineto;
    this.edad = function(){
        return new Date().getFullYear()-this.fechaNacimineto;
    }

  }

  let gorgonias = [
    new alien("freezer", 1994),
    new alien("jake Sully", 2012),
    new alien("preator", 1995),
    new alien("et", 2000),
  ];

  let alcoholicos = gorgonias.filter(p=>p.edad()>=18);
  console.log("Listado de alcoholicos");
  alcoholicos.forEach(element => {
    console.log(`${element.nombre}, ${element.fechaNacimineto},${element.edad()}`);
  });