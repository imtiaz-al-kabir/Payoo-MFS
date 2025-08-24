const transactionData = [];

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

// toggle form button handler

function formButtonHandler(id) {
  const formButtons = document.getElementsByClassName("form-btn");
  for (const button of formButtons) {
    button.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    button.classList.add("border-[#0808081a]");
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// get bonus

document.getElementById("cupon-btn").addEventListener("click", () => {
  const cupponNumber = document.getElementById("cupon-num");

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
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
  const data = {
    name: "Bill Payment",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// transaction History

// toggle

// add money

document.getElementById("add-money-btn").addEventListener("click", (e) => {
  toggleHandler("add-money-parent");

  formButtonHandler("add-money-btn");
});

// cash out

document.getElementById("cash-out-btn").addEventListener("click", (e) => {
  toggleHandler("cash-out-parent");
  formButtonHandler("cash-out-btn");
});

// transfer money
document.getElementById("transfer-money-btn").addEventListener("click", (e) => {
  toggleHandler("transfer-money-parent");
  formButtonHandler("transfer-money-btn");
});

// get bonus
document.getElementById("get-bonus-btn").addEventListener("click", (e) => {
  toggleHandler("get-bonus-parent");
  formButtonHandler("get-bonus-btn");
});

//pay bill
document.getElementById("pay-bill-btn").addEventListener("click", (e) => {
  toggleHandler("pay-bill-parent");
  formButtonHandler("pay-bill-btn");
});

//transaction
document.getElementById("transaction-btn").addEventListener("click", (e) => {
  toggleHandler("transaction-parent");
  formButtonHandler("transaction-btn");

  const transactionContainer = document.getElementById("transaction-container");
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class=" flex items-center justify-between">
            <div class="flex items-center ">
              <div class="p-3 rounded-full bg-[#f4f5f7]">
                <img class="mx-auto" src="./assets/wallet1.png" alt="" />
              </div>
              <div>
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
              <i  class="fa-solid fa-ellipsis-vertical pl-[300px]"></i>
            </div>`;
    transactionContainer.appendChild(div);
  }
});

// form button toggle
