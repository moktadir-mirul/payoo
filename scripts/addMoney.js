document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const addAmount = document.getElementById("add-amount").value;
  const addAmountNumber = parseFloat(addAmount);
  const addPin = document.getElementById("add-pin").value;
  const pinNumber = parseInt(addPin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedBalance = parseFloat(mainBalance);

  if (pinNumber === 1234) {
    const sum = addAmountNumber + convertedBalance;
    document.getElementById("main-balance").innerText = sum;
    document.getElementById("add-amount").value = "";
  } else {
    alert("wrong pin");
  }
});
