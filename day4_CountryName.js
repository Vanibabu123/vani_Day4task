getText("https://restcountries.com/v2/all");

function myDisplay(myJSONObject)
{
let text = "";
myJSONObject.forEach(function(myJSON) {
text += myJSON.name +"  "+myJSON.region+"  "+myJSON.subregion+"  "+myJSON.population;

console.log("Country name: "+myJSON.name+"  Region: "+myJSON.region+"  subregion: "+myJSON.subregion+"  population: "+myJSON.population);

  });
//document.getElementById("demo").innerHTML = text;

}

async function getText(file) {
  let myObject = await fetch(file);
  let myJSONObject = await myObject.json();
  myDisplay(myJSONObject);
 }
 
  