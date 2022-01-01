getText("https://restcountries.com/v2/all");

function myDisplay(myJSONObject)
{
let text = "Flag";
myJSONObject.forEach(function(myJSON) {
text += myJSON.flag + "\n";
console.log("All country flags "+ myJSON.flag + "\n");
  });
//document.getElementById("demo").innerHTML = text;

}

async function getText(file) {
  let myObject = await fetch(file);
  let myJSONObject = await myObject.json();
  myDisplay(myJSONObject);
 }
 
 