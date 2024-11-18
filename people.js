/* Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:
people.js
    Importa la tua funzione da names.js
    Importa la tua funzione da hobbies.js
    Crea una funzione che non ha parametri.
    All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
    La funzione dovrebbe restituisce un oggetto con tre proprietà: firstName, lastName, hobbies. */
const fullNameFun = require("./names");
const hobbiesFun = require("./hobbies");

const combineNamesHobbies = () => {
  const { firstName, secondName } = fullNameFun("Emanuele", "Zuppardo");
  const hobbies = hobbiesFun(
    "Pallavolo",
    "Softair",
    "Palestra",
    "Serie TV",
    "Videogiochi",
    "Manga"
  );
  return { firstName, secondName, hobbies };
};

console.log(combineNamesHobbies());
