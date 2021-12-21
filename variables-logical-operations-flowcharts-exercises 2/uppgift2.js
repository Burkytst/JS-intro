/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Se till att den andra <script> raden i index.html inte är utkommenterad när ni testar koden.
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


var name = "Burak"; //ditt namn som en string;
var age = 35; //din ålder som en siffra;
var height = 178;  //din längd som en siffta i cm;
var weight = 100; //din vikt som en siffra i kg;
var eyes = "Brown"; //färgen på dina ögon som en string;
var hair = "Black"; //färgen på ditt hår som en string;
  
console.log("Det här är " + name + ".");
console.log(`name + " är " age +  "år"`);
console.log(name +  "är " + height + "cm lång." );
console.log(name + väger + weight + "kg." );
console.log(name + har + eyes + " ögon och " + hair + " hår" );


//Lösningsförslag 1

//let totalSum = age + weight + height;
//let totalSum = age + weight + height;

//console.log("Om vi lägger ihop " + name+ "s ålder vikt och längd får vi " +  totalSum);

//Lösningsförslag 2
//console.log("Om vi lägger ihop " + name+ "s ålder vikt och längd får vi " +  parseInt( age + weight +height));

//Lösningsförslag 3
console.log("Om vi lägger ihop " + name+ "s ålder vikt och längd får vi " +  ( age + weight +height));