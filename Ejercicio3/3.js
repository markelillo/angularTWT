function happy(texto, si , no) {//defines ñla funcion su codigo no la llamas(es como si pusueses su codio)
    if (confirm(texto)) {
        si();
        alert(si)
    }else{
        no();
        alert(no)
    }
}

happy("pepe", function(){
    console.log("estoy feliz");
}, ()=>{//de las dos maneras
    console.error("Estoy triste");
})


let persona={
    nombre:"markel",
    apellidos:"Etxearria",
    edad:55,
    saludar:function(){
        alert("paso que voy ardiendooooo")
    }

}

persona.saludar();
//objeto que es js se le "declara" como funcion
function persona2(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
let b = new persona2("markel", "Etxebarria");
let c = new persona2("pepe", "popeye");

console.log(`${b.nombre}, ${c.apellido}`);