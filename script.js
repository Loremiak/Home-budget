const leftAmount = document.querySelector("#amount-to-spend");

const gainsDOM = document.querySelector("#gains-ul");
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
		sum(gains, gainSumDOM);
		console.log(gains, newGain);

		gainsDOM.innerHTML = "";
		gains.forEach(({ id, name, amount }) => {
			// Make new li and add to ul with value
			const li = document.createElement("li");
			li.classList.add("list");
			gainsDOM.appendChild(li);
			li.innerHTML = `<span data-id="${id}"><span data-name="${name}">${name}</span> - <span data-amount="${amount}">${amount}</span> zł</span>`;

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
				sum(gains, gainSumDOM);
			});

			editBtn.addEventListener("click", () => {
				let editName = document.querySelector(
					`span[data-id="${id}"] span[data-name="${name}"]`
				);
				let editAmount = document.querySelector(
					`span[data-id="${id}"] span[data-amount="${amount}"]`
				);
				editName.contentEditable = true;
				editAmount.contentEditable = true;
				editName.style.backgroundColor = "#F5F5F5";
				editAmount.style.backgroundColor = "#F5F5F5";
				span.removeChild(deleteBtn);
				span.removeChild(editBtn);

				let confirmEditBtn = document.createElement("button");
				confirmEditBtn.innerText = "Zapisz";
				confirmEditBtn.classList.add("edit");

				confirmEditBtn.addEventListener("click", () => {
					editName.contentEditable = false;
					editAmount.contentEditable = false;
					editName.style.backgroundColor = "transparent";
					editAmount.style.backgroundColor = "transparent";
					span.removeChild(confirmEditBtn);
					span.appendChild(editBtn);
					span.appendChild(deleteBtn);
					console.log(editName.textContent);
					const newName = editName.textContent;
					const newAmount = Number(editAmount.textContent);
					console.log(newName);
					console.log(newAmount);
					console.log(id);
					console.log(gains);
					gains = gains.map((gain) =>
						gain.id === id
							? { ...gain, name: newName, amount: newAmount }
							: gain
					);
					console.log(gains);
					sum(gains, gainSumDOM);
				});
				console.log(gainsDOM);
				span.appendChild(confirmEditBtn);
			});
		});

		let gainsAmount = gainAmount.value;
		console.log(gainsAmount);
	} else {
		console.log("Błąd nazwy lub wartości");
	}
});

// function sumGains() {
// 	const total = gains.reduce((acc, { amount }) => acc + amount, 0);
// 	gainSumDOM.innerHTML = total + " zł";
// }

// sum(gains, gainsDOM);
// sum(expenses, expensesDOM);
function sum(arr, sumDOM) {
	console.log(sumDOM);
	sumDOM.innerHTML = arr.reduce((acc, { amount }) => acc + amount, 0);
	// let amount = arr.reduce((acc, { amount }) => acc + amount, 0);
	// let name = arr.map(({ name }) => name);
	// arrDOM.innerHTML = `${name} - ${amount} zł`;
}

const expensesDOM = document.querySelector("#expenses-ul");
const expenseName = document.querySelector("#expense-name");
const expenseAmount = document.querySelector("#expense-amount");
const expenseBtn = document.querySelector("#expense-btn");
const expenseSumDOM = document.querySelector("#expense-sum");
const expenses = [];

expenseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (expenseName.value !== "" && expenseAmount.value > 0) {
		// Filter function - add only new element from table
		const newExpense = {
			id: uuid.v4(),
			name: expenseName.value,
			amount: Number(expenseAmount.value),
		};
		expenses.push(newGain);
		sumExpenses();
		console.log(expenses, newExpense);

		expensesDOM.innerHTML = "";

		expenses.forEach(({ id, name, amount }) => {
			// Make new li and add to ul with value
			const li = document.createElement("li");
			li.classList.add("list");
			expensesDOM.appendChild(li);
			li.innerHTML = `<span data-id="${id}"><span data-name="${name}">${name}</span> - <span data-amount="${amount}">${amount}</span></span>`;

			// Make span as a parent and 2 btn within every li (edit + delete)
			const span = document.createElement("span");
			expensesDOM.appendChild(span);

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
