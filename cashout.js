const newBtn = document.getElementById("cashout-btn");

newBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  const amount = document.getElementById("cashout-money").value;
  const agenTNumber = document.getElementById("agent-num");
  const pin = document.getElementById("pin-num");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  let newAmount = availableBalance - amount;
  document.getElementById("available-balance").innerText = newAmount;
});
