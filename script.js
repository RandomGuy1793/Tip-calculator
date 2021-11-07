let box = document.querySelector("#checkbox");
let split = document.querySelector("#split");
let calcButton = document.querySelector(".calc");
let splitButton = document.querySelector(".check");

let calculate = () => {
    let bill = parseFloat(document.querySelector("#bill").value);
    let tip = parseFloat(document.querySelector("#tip").value);
    if (isNaN(bill) || bill < 0) alerting(document.querySelector(".bill-alert"))
    else if (isNaN(tip) || tip < 0) alerting(document.querySelector(".tip-alert"))
    else {
        let total = document.querySelector("#pay");
        let personTotal = document.querySelectorAll(".person-pay");
        personTotal.forEach(ele => ele.style.display = "none")
        total.style.display = "none"
        let totalBill = bill + tip / 100 * bill;
        if (box.checked) {
            if (Number.isInteger(parseFloat(split.value)) && split.value >= 1) {
                document.querySelector(".person-bill").innerHTML = `₹` + (totalBill / split.value).toFixed(2)
                document.querySelector(".person-tip").innerHTML = `₹` + ((totalBill - bill) / split.value).toFixed(2)
                document.querySelector(".total-bill").innerHTML = `₹` + totalBill.toFixed(2)
                document.querySelector(".total-tip").innerHTML = `₹` + (totalBill - bill).toFixed(2)
                total.style.display = "block"
                personTotal.forEach(ele => ele.style.display = "block")
            }
            else alerting(document.querySelector(".split-alert"))
        }
        else {
            document.querySelector(".total-bill").innerHTML = `₹` + totalBill.toFixed(2)
            document.querySelector(".total-tip").innerHTML = `₹` + (totalBill - bill).toFixed(2)
            total.style.display = "block"
        }
    }
}

let checkBox = () => {
    if (box.checked) {
        split.disabled = false
        split.value = "2"
    }
    else {
        split.disabled = true
        split.value = ""
    }
}

let alerting = (alert) => {
    alert.style.display = "block"
    setTimeout(function () { alert.style.display = "none" }, 3000)
}

calcButton.addEventListener("click", calculate);
splitButton.addEventListener("click", checkBox);

