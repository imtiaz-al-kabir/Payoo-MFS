// add money

const newaddMoney = document.getElementById("add-money");
newaddMoney.addEventListener("click", (e) => {
  e.preventDefault();
  const validPin = "1234";
  const bank = document.getElementById("bank-select").value;
  const accountNumber = document.getElementById("bank-acc").value;
  const addAmount = parseInt(document.getElementById("money-add").value);
  const pin = parseInt(document.getElementById("pin-num").value);
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  if (accountNumber.length < 11) {
    alert("please enter valid account number");
    return;
  }
  if (pin !== parseInt(validPin)) {
    alert("please Enter valid pin");
    return;
  }
  const newAvailableBalance = addAmount + availableBalance;
  console.log(newAvailableBalance);
  document.getElementById("available-balance").innerText = newAvailableBalance;
});

// cash out
document.getElementById("cashout-btn").addEventListener("click", () => {
  const amount = document.getElementById("cashout-money").value;
  const agenTNumber = document.getElementById("agent-num");
  const pin = document.getElementById("cash-pin");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  let newAmount = availableBalance - amount;
  document.getElementById("available-balance").innerText = newAmount;
});

// toggle

document.getElementById("add-money-btn").addEventListener("click", () => {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out-btn").addEventListener("click", () => {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
