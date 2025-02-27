document.getElementById("out-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const agentAcc = document.getElementById("agent-acc").value;
  const outAmount = document.getElementById("out-amount").value;
  const amountInNumber = parseFloat(outAmount);
  const pin = document.getElementById("out-pin").value;
  const pinNumber = parseInt(pin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const balanceNumber = parseFloat(mainBalance);

  if (agentAcc.length === 11 && !isNaN(amountInNumber)) {
    if (pinNumber === 1234) {
      const diff = balanceNumber - amountInNumber;
      document.getElementById("main-balance").innerText = diff;
      document.getElementById("out-amount").value = "";

      const transactionHistory = document.createElement("div");
      transactionHistory.classList.add("p-2");
      transactionHistory.classList.add("bg-red-100");
      transactionHistory.classList.add("text-center");
      transactionHistory.classList.add("text-blue-700");

      transactionHistory.innerHTML = `
    <h1 class="text--2xl">Cash Out to ${agentAcc}</h1>
    <p class="text-lg text-red-500">Amount = $${outAmount}</P>        
            `;

        document.getElementById("history-container").appendChild(transactionHistory);
    } else {
      alert("Incorrect Pin");
    }
  } else {
    alert("invalid agent number or invalid amount");
  }
});
