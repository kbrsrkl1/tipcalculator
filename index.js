const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total")


function calculateTotal(){
    const billValue = billInput.value;
    const tipvalue = tipInput.value;
    const totalValue = billValue * (1 + tipvalue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal)