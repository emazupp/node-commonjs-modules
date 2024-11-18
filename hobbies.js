/* hobbies.js
    Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
    La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
    Esporta la funzione dal file. */

const listOfHobbies = (...hobbies) => {
  const hobbiesObj = { hobbies: [] };
  hobbies.forEach((hobby) => {
    hobbiesObj.hobbies.push(hobby);
  });
  return hobbiesObj;
};

module.exports = listOfHobbies;
