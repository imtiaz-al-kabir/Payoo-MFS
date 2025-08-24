// function to get input values

function getInputValueNumber(id) {
  const input = document.getElementById(id).value;
  const InputValueNumber = parseInt(input);
  return InputValueNumber;
}

// toggle handle function
function toggleHandler(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money

const newaddMoney = document.getElementById("add-money");
newaddMoney.addEventListener("click", (e) => {
  e.preventDefault();
  const validPin = "1234";
  const bank = document.getElementById("bank-select").value;
  const accountNumber = document.getElementById("bank-acc").value;
  const addAmount = getInputValueNumber("money-add");
  const pin = getInputValueNumber("pin-num");
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
document.getElementById("cashout-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const amount = getInputValueNumber("cashout-money");
  const agenTNumber = document.getElementById("agent-num");
  const pin = document.getElementById("cash-pin");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  let newAmount = availableBalance - amount;
  document.getElementById("available-balance").innerText = newAmount;
});

// transfer money

document
  .getElementById("transfer-amount-btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const transferAccountNumber =
      document.getElementById("transfer-ac-num").value;
    const transferAmount = document.getElementById("transfer-amount").value;
    const transferPin = document.getElementById("transfer-pin").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const totalAvailableBalance = availableBalance - parseInt(transferAmount);
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

// get bonus

document.getElementById("cupon-btn").addEventListener("click", () => {
  const cupponNumber = document.getElementById("cupon-num");

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
});

// pay bill

document.getElementById("pay-now-btn").addEventListener("click", () => {
  const payBillBank = document.getElementById("pay-bill-bank");
  const payBillAccountNumber = document.getElementById("pay-bill-bank-acc");
  const payBillMoney = document.getElementById("pay-bill-money");
  const paybillPin = document.getElementById("pay-bill-pin");
  document.getElementById();

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
});

// transaction History

// toggle

document.getElementById("add-money-btn").addEventListener("click", (e) => {
  toggleHandler("add-money-parent");
});
document.getElementById("cash-out-btn").addEventListener("click", (e) => {
  toggleHandler("cash-out-parent");
});
document.getElementById("transfer-money-btn").addEventListener("click", (e) => {
  toggleHandler("transfer-money-parent");
});
document.getElementById("get-bonus-btn").addEventListener("click", (e) => {
  toggleHandler("get-bonus-parent");
});
document.getElementById("pay-bill-btn").addEventListener("click", (e) => {
  toggleHandler("pay-bill-parent");
});
document.getElementById("transaction-btn").addEventListener("click", (e) => {
  toggleHandler("transaction-parent");
});
