document.getElementById("cashout-area").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function(){
    document.getElementById("addmoney-area").style.display = "block";
    document.getElementById("cashout-area").style.display = "none";
});

document.getElementById("cashout-box").addEventListener("click", function(){
    document.getElementById("addmoney-area").style.display = "none";
    document.getElementById("cashout-area").style.display = "block";
})