let nombres = ["pepe","manolo","quique"," nacho"];
nombres.forEach(n=>console.log(n));
nombres.push("markel");
//nombres.slice(0,2);
console.log(nombres);
let filtro = nombres.filter(item =>{
    if (item.startsWith('m')) {
        return item;
    }
   
});

console.log(filtro);