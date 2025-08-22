let newBtn = document.getElementById("login-btn");

newBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const newMobile = document.getElementById("mobile").value;
  const convertedNumber = parseInt(newMobile);
  const newPin = document.getElementById("pin").value;
  const convertedPin = parseInt(newPin);
  if (mobileNumber === convertedNumber && pinNumber === convertedPin) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credentials");
  }
});
