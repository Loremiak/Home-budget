const leftAmount = document.querySelector("#amount-to-spend");

const ulPlus = document.querySelector("#ul-plus");
const gainName = document.querySelector("#gain-name");
const gainAmount = document.querySelector("#gain-amount");
const gainBtn = document.querySelector("#gain-btn");
const gainSum = document.querySelector("#gain-sum");
const gains = [];

gainBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (gainName.value !== "" && gainAmount.value > 0) {
		// let li = document.createElement("li");
		// li.classList.add("list");
		console.log("wartość jest tu i tu");
		gains.push({
			nazwa: gainName.value,
			kwota: gainAmount.value,
		});
		console.log(gains);

		gains.forEach((el) => {
			const list = document.createElement("li");
			list.classList.add("list");
			ulPlus.appendChild(list);
			list.innerHTML = `<li>${el.nazwa} - ${el.kwota} zł</li>`;

			const span = document.createElement("span");
			list.appendChild(span);
			const editBtn = document.createElement("button");
			editBtn.classList.add("edit");
			const deleteBtn = document.createElement("button");
			deleteBtn.classList.add("delete");
			span.appendChild(editBtn, deleteBtn);
		});
	} else {
		console.log("Błąd nazwy lub wartości");
	}

	e.preventDefault();
});

const ulMinus = document.querySelector("#ul-minus");
const lostName = document.querySelector("#lost-name");
const lostAmount = document.querySelector("#lost-amount");
const lostBtn = document.querySelector("#lost-btn");
const lostSum = document.querySelector("#lost-sum");
const losts = [];

lostBtn.addEventListener("click", (e) => {
	console.log("lostBtn został kliknięty");

	e.preventDefault();
});
