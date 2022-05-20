const leftAmount = document.querySelector("#amount-to-spend");

const ulPlus = document.querySelector("#ul-plus");
const gainName = document.querySelector("#gain-name");
const gainAmount = document.querySelector("#gain-amount");
const gainBtn = document.querySelector("#gain-btn");
const gainSum = document.querySelector("#gain-sum");

gainBtn.addEventListener("click", (e) => {
	console.log("gainBtn został kliknięty");
	if (gainAmount.value >= 0 && gainName !== " ") {
		let li = document.createElement("li");
		li.classList.add("list");
	}
	e.preventDefault();
});

const ulMinus = document.querySelector("#ul-minus");
const lostName = document.querySelector("#lost-name");
const lostAmount = document.querySelector("#lost-amount");
const lostBtn = document.querySelector("#lost-btn");
const lostSum = document.querySelector("#lost-sum");

lostBtn.addEventListener("click", (e) => {
	console.log("lostBtn został kliknięty");
	e.preventDefault();
});
