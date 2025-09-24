// lijst met namen

const users = [
  { id: 1, naam: "Kleintjes", voornaam: "Karel" },
  { id: 2, naam: "Dotjes", voornaam: "Els" },
  { id: 3, naam: "Kleintjes", voornaam: "Steven" },
];


const Choice = document.getElementById("mySelect");
const vullerlijst = document.getElementById("vullerlijst");

const checkboxWrap = document.getElementById("checkbox");

const checkbox = document.getElementById("heeftHuisdieren");
const huisdierenVelden = document.getElementById("huisdierenVelden");

// moet 1 keer gebeuren worden
checkboxWrap.classList.add("visually-hidden");

Choice.addEventListener("change", () => {

  vullerlijst.innerText = "";
  let ChoiceValue = Choice.value - 1;

  if (Choice.value !== ""){
    let tekst = document.createElement("p");
    tekst.innerText = ` welkom ${users[(id = ChoiceValue)].voornaam} ${
      users[(id = ChoiceValue)].naam
    } `;
  
    vullerlijst.appendChild(tekst);
    console.log(tekst);
  
     checkboxWrap.classList.remove("visually-hidden"); // toon checkbox

  }
 else {
    checkboxWrap.classList.add("visually-hidden"); // verdwijned de checkbox
    huisdierenVelden.classList.add("visually-hidden");  // verdwijned de input velden onder de checkbox
    huisdierenVelden.innerHTML = "";
    checkbox.checked = false;
  }
});

checkbox.addEventListener("change", () => {

  if (checkbox.checked) {
    huisdierenVelden.classList.remove("visually-hidden");
    addHuisdierVeld();
  } else {
    huisdierenVelden.classList.add("visually-hidden");
  }
});

function addHuisdierVeld() {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control mb-2";
  input.placeholder = "Naam van een huisdier";

  // Als er  iets word ingevult => nieuw veld maken
  input.addEventListener("input", () => {
    if (input.value.trim() !== "" && !input.nextSibling) { 
      // nextSibling heb ik moeten opzoeken want khad probleem met dat
      //  hij nieuw veld maakt voor elke verandering dat je intypt
      addHuisdierVeld();
    }
  });

  huisdierenVelden.appendChild(input);
}
