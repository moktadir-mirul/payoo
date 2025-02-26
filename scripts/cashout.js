document.getElementById("out-btn").addEventListener("click", function(event){
    event.preventDefault();
    const outAmount = document.getElementById("out-amount").value;
    const amountInNumber = parseFloat(outAmount);
    const pin = document.getElementById("out-pin").value;
    const pinNumber = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const balanceNumber = parseFloat(mainBalance);
    
    if(pinNumber === 1234) {
        const diff = balanceNumber - amountInNumber;
        document.getElementById("main-balance").innerText = diff;
        document.getElementById("out-amount").value = "";
    } else {
        alert('Incorrect Pin')
    }
})