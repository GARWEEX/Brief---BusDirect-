const sieges = document.querySelectorAll(".sieg");

const buyName = document.querySelector("#buyName");
const buySeat = document.querySelector("#buySeat");
const buyBtn = document.querySelector("#buyBtn");

const modName = document.querySelector("#modName");
const modSeat = document.querySelector("#modSeat");
const modBtn = document.querySelector("#modBtn");

const delSeat = document.querySelector("#delSeat");
const delBtn = document.querySelector("#delBtn");
const totalPrice = document.querySelector("#totalPrice");

let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

function displayReservations() {

  for (let i = 0; i < sieges.length; i++) {
    const num = sieges[i].dataset.seat;
    sieges[i].classList.remove("occupe");
    sieges[i].style.backgroundColor = "";
    sieges[i].style.color = "";
    sieges[i].textContent = num;
  }

  for (let i = 0; i < reservations.length; i++) {
    for (let j = 0; j < sieges.length; j++) {
      if (String(sieges[j].dataset.seat) === String(reservations[i].seat)) {
        sieges[j].classList.add("occupe");
        sieges[j].style.backgroundColor = "red";
        sieges[j].style.color = "white";
        sieges[j].innerHTML = reservations[i].seat + '<br><span class="passager text-xs font-normal">' + reservations[i].name + '</span>';
      }
    }
  }

  modSeat.innerHTML = '<option value="">Choisir le siège a modifier</option>';
  delSeat.innerHTML = '<option value="">Choisir votre siège</option>';

  for (let i = 0; i < reservations.length; i++) {
    const option1 = document.createElement("option");
    option1.value = reservations[i].seat;
    option1.textContent = "Siège " + reservations[i].seat + " (" + reservations[i].name + ")";
    modSeat.appendChild(option1);
    const option2 = document.createElement("option");
    option2.value = reservations[i].seat;
    option2.textContent = "Siège " + reservations[i].seat + " (" + reservations[i].name + ")";
    delSeat.appendChild(option2);
  }

  if (totalPrice !== null) {
    totalPrice.textContent = reservations.length * 80;
  }
  localStorage.setItem("reservations", JSON.stringify(reservations));
}

buyBtn.addEventListener("click", function () {

  const nom = buyName.value.trim();
  const numSiege = buySeat.value;

  if (nom === "") {
    alert("Veuillez entrer votre prénom !");
    return;
  }

  if (numSiege === "") {
    alert("Veuillez choisir un siège !");
    return;
  }
  let seatReserved = false;

  for (let i = 0; i < reservations.length; i++) {
    if (String(reservations[i].seat) === String(numSiege)) {
      seatReserved = true;
      break;
    }
  }

  if (seatReserved) {
    alert("Ce siège est déjà réservé !");
    return;
  }

  reservations.push({ name: nom, seat: numSiege });

  displayReservations();

  buyName.value = "";
  buySeat.value = "";
});

modBtn.addEventListener("click", function () {

  const numSiege = modSeat.value;
  const nouveauNom = modName.value.trim();

  if (numSiege === "") {
    alert("Veuillez choisir un siège !");
    return;
  }

  if (nouveauNom === "") {
    alert("Veuillez entrer le nouveau nom !");
    return;
  }

  for (let i = 0; i < reservations.length; i++) {
    if (String(reservations[i].seat) === String(numSiege)) {
      reservations[i].name = nouveauNom;
      break;
    }
  }

  displayReservations();

  modName.value = "";
});

delBtn.addEventListener("click", function () {

  const numSiege = delSeat.value;

  if (numSiege === "") {
    alert("Veuillez choisir un siège !");
    return;
  }

  for (let i = 0; i < reservations.length; i++) {
    if (String(reservations[i].seat) === String(numSiege)) {
      reservations.splice(i, 1);
      break;
    }
  }

  displayReservations();
});

displayReservations();