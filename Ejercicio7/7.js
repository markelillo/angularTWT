fetch(
  "https://www.opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pastelerias_y_confiterias/opendata/pastelerias.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      //console.log(element.documentName);
    //  $("#past").append("<li ><a href="+element.web+">"+element.documentName +"</a></li>")
    });
  });
////////////////////////////////o//////////////////////////////////////////
(async ()=>{
let response2 = await fetch("https://www.opendata.euskadi.eus/contenidos/ds_recursos_turisticos/pastelerias_y_confiterias/opendata/pastelerias.json");
let data2 = await response2.json();//no es .json es con () por que es una funcion que te combierte los datos  a JSON
data2.forEach((element2) => {
   // console.log(element2.documentName);
  });

})()

/////////////////////////////////////////////////////////////////////////////

fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)

      data.results.forEach(p=>{
        console.log(p.name);
        $("#past").append("<li >"+p.name +"</a></li>")
      })
    });