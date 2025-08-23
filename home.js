const newaddMoney = document.getElementById("add-money");
newaddMoney.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked");
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
