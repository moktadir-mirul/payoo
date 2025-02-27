document.getElementById("history-box").addEventListener("click", function() {
    const para = document.createElement('p');
    para.innerText = "Its me";
    document.getElementById("history-area").appendChild(para);
})