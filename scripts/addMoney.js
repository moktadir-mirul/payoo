document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const accNum = document.getElementById("add-acc-num").value;
  const addAmount = document.getElementById("add-amount").value;
  const addAmountNumber = parseFloat(addAmount);
  const addPin = document.getElementById("add-pin").value;
  const pinNumber = parseInt(addPin);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedBalance = parseFloat(mainBalance);

  if (accNum.length === 11) {
    if (pinNumber === 1234) {
      const sum = addAmountNumber + convertedBalance;
      document.getElementById("main-balance").innerText = sum;
      document.getElementById("add-amount").value = "";
  
      const transaction = document.createElement('div');
      transaction.classList.add('p-2');
      transaction.classList.add('bg-white');
      transaction.classList.add('text-center');
      transaction.classList.add('font-bold');
      transaction.classList.add('text-blue-700');
      transaction.innerHTML = `
      <h1 class="text--2xl">Added Money From <span class="text-blue-900 font-extrabold">${accNum}</span></h1>
      <p class="text-lg text-red-500">$${addAmountNumber}</P>
      `;
  
      document.getElementById("history-container").appendChild(transaction);
    } else {
      alert("wrong pin");
    }
  } else {
    alert('invalid account number')
  }
});
