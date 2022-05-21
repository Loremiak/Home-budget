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
		console.log("wartość jest tu i tu");

		// Filter function - add only new element from table
		function liFilter(id) {
			return id++;
		}
		let filterLi = gains.filter(liFilter);

		// Push - add new element
		filterLi.push({
			name: gainName.value,
			amount: gainAmount.value,
		});
		console.log(filterLi); //aktualnie najnowszy wpis

		gains.push({
			name: gainName.value,
			amount: gainAmount.value,
		});
		console.log(gains);

		filterLi.forEach((el) => {
			// Make new li and add to ul with value
			const list = document.createElement("li");
			list.classList.add("list");
			ulPlus.appendChild(list);
			list.innerHTML = `<li>${el.name} - ${el.amount} zł</li>`;
			// Make span as a parent and 2 btn within every li (edit + delete)
			const span = document.createElement("span");
			list.appendChild(span);
			const editBtn = document.createElement("button");
			editBtn.innerText = "Edytuj";
			editBtn.classList.add("edit");
			span.appendChild(editBtn);

			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = "Usuń";
			deleteBtn.classList.add("delete");
			span.appendChild(deleteBtn);

			let test = gainAmount.reduce(function (a, b) {
				return a + b;
			});
			console.log(test);
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
