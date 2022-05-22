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
		console.log(gains); //wszystkie wpisy

		// let filterAmount = gains.filter((el) => {
		// 	return gainAmount.value;
		// });
		// console.log(filterAmount);

		filterLi.forEach((el) => {
			// Make new li and add to ul with value
			const list = document.createElement("li");
			list.classList.add("list");
			ulPlus.appendChild(list);
			list.innerHTML = `<li>${el.name} - ${el.amount} zł</li>`;
			// Make span as a parent and 2 btn within every li (edit + delete)
			const span = document.createElement("span");
			ulPlus.appendChild(span);

			const editBtn = document.createElement("button");
			editBtn.innerText = "Edytuj";
			editBtn.classList.add("edit");
			span.appendChild(editBtn);

			editBtn.addEventListener("click", () => {
				list.contentEditable = true;
				list.style.backgroundColor = "#F5F5F5";
				span.removeChild(deleteBtn);
				span.appendChild(endEditBtn);
				endEditBtn.classList.add("edit");
			});

			let endEditBtn = document.createElement("button");
			endEditBtn.innerText = "Zakończ";

			endEditBtn.addEventListener("click", () => {
				list.contentEditable = false;
				span.removeChild(endEditBtn);
				span.appendChild(deleteBtn);
				list.style.backgroundColor = "transparent";
			});

			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = "Usuń";
			deleteBtn.classList.add("delete");
			span.appendChild(deleteBtn);
			deleteBtn.addEventListener("click", () => {
				ulPlus.removeChild(list);
				ulPlus.removeChild(span);
			});

			let gainsAmount = el.amount;
			console.log(gainsAmount);

			let sum = 0;
			for (let i = 0; i < gains.length; i++) {
				console.log("Pętla for:");
				sum = sum + el.amount[i];
			}
			console.log(sum);
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
	e.preventDefault();
	if (lostName.value !== "" && lostAmount.value > 0) {
		console.log("wartość jest tu i tu");

		// Filter function - add only new element from table
		function liFilter(id) {
			return id++;
		}
		let filterLi = losts.filter(liFilter);

		// Push - add new element
		filterLi.push({
			name: lostName.value,
			amount: lostAmount.value,
		});
		console.log(filterLi); //aktualnie najnowszy wpis

		losts.push({
			name: lostName.value,
			amount: lostAmount.value,
		});
		console.log(losts); //wszystkie wpisy

		// let filterAmount = losts.filter((el) => {
		// 	return lostAmount.value;
		// });
		// console.log(filterAmount);

		filterLi.forEach((el) => {
			// Make new li and add to ul with value
			const list = document.createElement("li");
			list.classList.add("list");
			ulMinus.appendChild(list);
			list.innerHTML = `<li>${el.name} - ${el.amount} zł</li>`;
			// Make span as a parent and 2 btn within every li (edit + delete)
			const span = document.createElement("span");
			ulMinus.appendChild(span);

			const editBtn = document.createElement("button");
			editBtn.innerText = "Edytuj";
			editBtn.classList.add("edit");
			span.appendChild(editBtn);

			editBtn.addEventListener("click", () => {
				list.contentEditable = true;
				list.style.backgroundColor = "#F5F5F5";
				span.removeChild(deleteBtn);
				span.appendChild(endEditBtn);
				endEditBtn.classList.add("edit");
			});

			let endEditBtn = document.createElement("button");
			endEditBtn.innerText = "Zakończ";

			endEditBtn.addEventListener("click", () => {
				list.contentEditable = false;
				span.removeChild(endEditBtn);
				span.appendChild(deleteBtn);
				list.style.backgroundColor = "transparent";
			});

			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = "Usuń";
			deleteBtn.classList.add("delete");
			span.appendChild(deleteBtn);
			deleteBtn.addEventListener("click", () => {
				ulMinus.removeChild(list);
				ulMinus.removeChild(span);
			});

			let lostAmount = el.amount;
			console.log(lostAmount);

			let sum = 0;
			for (let i = 0; i < losts.length; i++) {
				console.log("Pętla for:");
				sum = sum + el.amount[i];
			}
			console.log(sum);
		});
	} else {
		console.log("Błąd nazwy lub wartości");
	}

	e.preventDefault();
});
