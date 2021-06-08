var box = document.querySelector("#checkbox");
var split = document.querySelector("#split");
function calculate() {
    var bill = parseFloat(document.querySelector("#bill").value);
    var tip = parseFloat(document.querySelector("#tip").value);
    if (isNaN(bill)) alerting(document.querySelector(".bill-alert"))
    if (isNaN(tip)) alerting(document.querySelector(".tip-alert"))
    var total = document.querySelector("#bill-total");
    total.innerHTML = "";
    if (bill >= 0 && tip >= 0) {
        var totalBill = bill + tip / 100 * bill;
        if (box.checked) {
            if (Number.isInteger(parseFloat(split.value)) && split.value >= 1) {
                total.innerHTML = ` <div class="card">
                                        <div class="card-body">
                                            <h3>Total: ${totalBill}</h3>
                                            <h3>Per Person: ${totalBill / split.value}</h3>
                                        </div>
                                    </div>`
            }
            else alerting(document.querySelector(".split-alert"))
        }
        else {
            total.innerHTML = ` <div class="card">
                                    <div class="card-body">
                                        <h3>Total: ${totalBill}</h3>
                                    </div>
                                </div>`
        }
    }
    else if (bill < 0) alerting(document.querySelector(".bill-alert"))
    else if (tip < 0) alerting(document.querySelector(".tip-alert"))
}

function check() {
    if (box.checked) split.style.display = "block"
    else split.style.display = "none"
}

function alerting(alert) {
    alert.style.display = "block"
    setTimeout(function () { alert.style.display = "none" }, 3000)
}


