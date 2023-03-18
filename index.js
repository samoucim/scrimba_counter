let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let countAll = document.getElementById("count-all");
let count = 0;
let countTotal = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += " " + countStr;
  countEl.textContent = 0;
  countTotal += count;
  count = 0;
  countAll.textContent = "TOTAL: " + countTotal;
  console.log(countAll, countTotal);
}

function reset() {
  count = 0;
  countTotal = 0;
  countAll.textContent = "TOTAL: 0";
  countEl.textContent = "0";
  saveEl.textContent = "Previous entries:";
}
