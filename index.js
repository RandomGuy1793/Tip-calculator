var box = document.querySelector("#checkbox");
var split = document.querySelector("#split");

function calculate() {
    var bill = parseFloat(document.querySelector("#bill").value);
    var tip = parseFloat(document.querySelector("#tip").value);
    if (isNaN(bill)) alerting(document.querySelector(".bill-alert"))
    if (isNaN(tip)) alerting(document.querySelector(".tip-alert"))
    var total = document.querySelector("#pay");
    var personTotal = document.querySelectorAll(".person-pay");
    personTotal.forEach(ele => ele.style.display = "none")
    total.style.display = "none"
    if (bill >= 0 && tip >= 0) {
        var totalBill = bill + tip / 100 * bill;
        if (box.checked) {
            if (Number.isInteger(parseFloat(split.value)) && split.value >= 1) {
                console.log(split)
                document.querySelector(".person-bill").innerHTML = `₹` + (totalBill / split.value).toFixed(2)
                document.querySelector(".person-tip").innerHTML = `₹` + ((totalBill - bill) / split.value).toFixed(2)
                document.querySelector(".total-bill").innerHTML = `₹` + totalBill.toFixed(2)
                document.querySelector(".total-tip").innerHTML = `₹` + (totalBill - bill).toFixed(2)
                total.style.display = "block"
                personTotal.forEach(ele => ele.style.display = "block")
            }
            else alerting(document.querySelector(".split-alert"))
        }
        else{
            document.querySelector(".total-bill").innerHTML = `₹` + totalBill.toFixed(2)
            document.querySelector(".total-tip").innerHTML = `₹` + (totalBill - bill).toFixed(2)
            total.style.display = "block"
        }

    }
    else if (bill < 0) alerting(document.querySelector(".bill-alert"))
    else if (tip < 0) alerting(document.querySelector(".tip-alert"))
}

function check() {
    if (box.checked) {
        split.disabled = false
        split.value = "2"
    }
    else {
        split.disabled = true
        split.value = ""
    }
}

function alerting(alert) {
    alert.style.display = "block"
    setTimeout(function () { alert.style.display = "none" }, 3000)
}


