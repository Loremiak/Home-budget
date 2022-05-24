const leftAmount = document.querySelector("#amount-to-spend");

const gainsDOM = document.querySelector("#ul-plus");
const gainName = document.querySelector("#gain-name");
const gainAmount = document.querySelector("#gain-amount");
const gainBtn = document.querySelector("#gain-btn");
const gainSumDOM = document.querySelector("#gain-sum");
let gains = [];

gainBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (gainName.value !== "" && gainAmount.value > 0) {
		const newGain = {
			id: uuid.v4(),
			name: gainName.value,
			amount: Number(gainAmount.value),
		};
		gains.push(newGain);
		sumGains();
		console.log(gains, newGain);

		gainsDOM.innerHTML = "";
		gains.forEach(({ id, name, amount }) => {
			// Make new li and add to ul with value
			const li = document.createElement("li");
			li.classList.add("list");
			gainsDOM.appendChild(li);
			li.innerHTML = `<span data-id="${id}"><span data-name="${name}">${name}</span> - <span data-amount="${amount}">${amount} zł</span></span>`;

			// Make span as a parent and 2 btn within every li (edit + delete)
			const span = document.createElement("span");
			li.appendChild(span);

			const editBtn = document.createElement("button");
			editBtn.innerText = "Edytuj";
			editBtn.classList.add("edit");
			span.appendChild(editBtn);

			const deleteBtn = document.createElement("button");
			deleteBtn.innerText = "Usuń";
			deleteBtn.classList.add("delete");
			span.appendChild(deleteBtn);

			deleteBtn.addEventListener("click", () => {
				gainsDOM.removeChild(li);
				gains = gains.filter((gain) => gain.id !== id);
				sumGains();
			});

			editBtn.addEventListener("click", () => {
				let editInput = document.querySelector(`span[data-id="${id}"]`);
				editInput.contentEditable = true;
				editInput.style.backgroundColor = "#F5F5F5";
				span.removeChild(deleteBtn);
				span.removeChild(editBtn);

				let confirmEditBtn = document.createElement("button");
				confirmEditBtn.innerText = "Zapisz";
				confirmEditBtn.classList.add("edit");

				confirmEditBtn.addEventListener("click", () => {
					editInput.contentEditable = false;
					span.removeChild(confirmEditBtn);
					span.appendChild(editBtn);
					span.appendChild(deleteBtn);
					const newName = li.dataset.name;
					const newAmount = Number(li.dataset.amount);
					editInput.style.backgroundColor = "transparent";

					gains = gains.map((gain) =>
						gain.id === id
							? { ...gain, name: newName, amount: newAmount }
							: gain
					);
					sum(gains, gainsDOM);
				});
				span.appendChild(confirmEditBtn);
			});
		});

		let gainsAmount = gainAmount.value;
		console.log(gainsAmount);
	} else {
		console.log("Błąd nazwy lub wartości");
	}
});

function sumGains() {
	const total = gains.reduce((acc, { amount }) => acc + amount, 0);
	gainSumDOM.innerHTML = total + " zł";
}

// sum(gains, gainsDOM);
// sum(expenses, expensesDOM);
// function sum(arr, arrDOM) {
// 	arrDOM.innerHTML = arr.reduce((acc, { amount }) => acc + amount, 0);
// }

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
});
