const sieges = document.querySelectorAll(".sieg");

const buyName = document.querySelector("#buyName");
const buySeat = document.querySelector("#buySeat");
const buyBtn = document.querySelector("#buyBtn");

const modName = document.querySelector("#modName");
const modSeat = document.querySelector("#modSeat");
const modBtn = document.querySelector("#modBtn");

const delSeat = document.querySelector("#delSeat");
const delBtn = document.querySelector("#delBtn");

function updateSelects() {
  modSeat.innerHTML = '<option value="">Choisir le siège</option>';
  delSeat.innerHTML = '<option value="">Choisir votre siège</option>';

  sieges.forEach(siege => {
    if (siege.classList.contains("occupe")) {
      const passager = siege.querySelector(".passager");
      if (passager) {
        const nom = passager.textContent.trim();
        const num = siege.dataset.seat;

        const option1 = document.createElement("option");
        option1.value = num;
        option1.textContent = `Siège ${num} (${nom})`;
        modSeat.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = num;
        option2.textContent = `Siège ${num} (${nom})`;
        delSeat.appendChild(option2);
      }
    }
  });
}

buyBtn.addEventListener("click", () => {
  const nom = buyName.value.trim();
  const numSiege = buySeat.value;

  if (nom === "") {
    alert("Veuillez entrer votre prénom !");
    return;
  }

  let siegeChoisi;
  sieges.forEach(siege => {
    if (siege.dataset.seat === numSiege) {
      siegeChoisi = siege;
    }
  });

  if (!siegeChoisi || siegeChoisi.classList.contains("occupe")) {
    alert("Ce siège est déjà réservé !");
    return;
  }

  siegeChoisi.classList.add("occupe");
  siegeChoisi.style.backgroundColor = "red";
  siegeChoisi.style.color = "white";
  siegeChoisi.innerHTML = `${numSiege}<br><span class="passager text-xs font-normal">${nom}</span>`;

  buyName.value = "";
  updateSelects();
});

modBtn.addEventListener("click", () => {
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

  sieges.forEach(siege => {
    if (siege.dataset.seat === numSiege) {
      const passager = siege.querySelector(".passager");
      if (passager) {
        passager.textContent = nouveauNom;
      }
    }
  });

  modName.value = "";
  updateSelects();
});

delBtn.addEventListener("click", () => {
  const numSiege = delSeat.value;

  if (numSiege === "") {
    alert("Veuillez choisir un siège !");
    return;
  }

  sieges.forEach(siege => {
    if (siege.dataset.seat === numSiege) {
      siege.classList.remove("occupe");
      siege.style.backgroundColor = "";
      siege.style.color = "";
      siege.textContent = numSiege;
    }
  });

  updateSelects();
});   