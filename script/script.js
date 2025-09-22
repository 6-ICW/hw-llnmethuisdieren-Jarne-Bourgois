// lijst met namen

const users = [
  { id: 1, naam: "Kleintjes", voornaam: "Karel" },
  { id: 2, naam: "Dotjes", voornaam: "Els" },
  { id: 3, naam: "Kleintjes", voornaam: "Steven" },
];

const Form = document.getElementById("myForm");
const Choice = document.getElementById("mySelect");
const vullerlijst = document.getElementById("vullerlijst");
const checkbox = document.getElementById("checkbox");

Choice.addEventListener("change", () => {
  vullerlijst.innerText = "";
  let ChoiceValue = Choice.value - 1;
  let tekst = document.createElement("p");
  tekst.innerText = ` welkom ${users[(id = ChoiceValue)].voornaam} ${
    users[(id = ChoiceValue)].naam
  } `;
  vullerlijst.appendChild(tekst);
  console.log(tekst);
  check();
});

function check() {
  if (Choice.value >= 0) {
    checkbox.style.display = "block";
  } else {
    checkbox.style.display = "none";
  }
}
