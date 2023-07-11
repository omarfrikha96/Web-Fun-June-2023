const nb = document.querySelector("#nb-request");
const nbConnection = document.querySelector("#nb-connection");




const acceptPerson = (element) => {
  const person = document.querySelector(element);
  person.remove()
  nb.innerText--;
  nbConnection.innerText++;

}

const ignorePerson = (element) => {
  const person = document.querySelector(element);
  person.remove();
  nb.innerText--;
}





  const names = document.querySelector("#name-card");

  function editName() {
    let person = prompt("Please enter your name");
    if (person != null) {
        names.innerHTML = person;
    }
  }