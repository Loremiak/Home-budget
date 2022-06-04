const leftAmount = document.querySelector("#amount-to-spend");

const gainsDOM = document.querySelector("#gains-ul");
const gainName = document.querySelector("#gain-name");
const gainAmount = document.querySelector("#gain-amount");
const gainInputs = document.querySelectorAll("#gain-name, #gain-amount");
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

		gainsDOM.innerHTML = "";
		gains.forEach(({ id, name, amount }) => {
			const li = document.createElement("li");
			li.classList.add("list");
			gainsDOM.appendChild(li);
			li.innerHTML = `<span data-id="${id}"><span data-name="${name}">${name}</span> - <span data-amount="${amount}">${amount}</span> zł</span>`;

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

					const newName = editName.textContent;
					const newAmount = Number(editAmount.textContent);

					gains = gains.map((gain) =>
						gain.id === id
							? { ...gain, name: newName, amount: newAmount }
							: gain
					);
					sum(gains, gainSumDOM);
				});
				span.appendChild(confirmEditBtn);
			});
		});
	} else {
		return;
	}
});

function sum(arr, sumDOM) {
	sumDOM.innerHTML = arr.reduce((acc, { amount }) => acc + amount, 0);
	leftAmount.innerText = "";
	let allSum = gainSumDOM.textContent - expenseSumDOM.textContent;

	if (allSum > 0) {
		leftAmount.innerText = "Morty, możesz jeszcze wydać " + allSum + " złotych";
	} else if (allSum === 0) {
		leftAmount.innerText = "Bilans wynosi zero";
	} else if (allSum < 0) {
		leftAmount.innerText =
			"Przegiąłeś Morty, bilans jest ujemny. Jesteś na minusie " +
			allSum +
			" złotych";
	}
}

const expensesDOM = document.querySelector("#expenses-ul");
const expenseName = document.querySelector("#expense-name");
const expenseAmount = document.querySelector("#expense-amount");
const expenseInputs = document.querySelectorAll(
	"#expense-name, #expense-amount"
);
const expenseBtn = document.querySelector("#expense-btn");
const expenseSumDOM = document.querySelector("#expense-sum");
let expenses = [];

expenseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (expenseName.value !== "" && expenseAmount.value > 0) {
		const newExpense = {
			id: uuid.v4(),
			name: expenseName.value,
			amount: Number(expenseAmount.value),
		};
		expenses.push(newExpense);
		sum(expenses, expenseSumDOM);

		expensesDOM.innerHTML = "";

		expenses.forEach(({ id, name, amount }) => {
			const li = document.createElement("li");
			li.classList.add("list");
			expensesDOM.appendChild(li);
			li.innerHTML = `<span data-id="${id}"><span data-name="${name}">${name}</span> - <span data-amount="${amount}">${amount}</span></span>`;

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
				expensesDOM.removeChild(li);
				expenses = expenses.filter((expense) => expense.id !== id);
				sum(expenses, expenseSumDOM);
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

					const newName = editName.textContent;
					const newAmount = Number(editAmount.textContent);

					expenses = expenses.map((expense) =>
						expense.id === id
							? { ...expense, name: newName, amount: newAmount }
							: expense
					);
					sum(expenses, expenseSumDOM);
				});
				span.appendChild(confirmEditBtn);
			});
		});
	} else {
		console.log("Błąd nazwy lub wartości");
	}
});
