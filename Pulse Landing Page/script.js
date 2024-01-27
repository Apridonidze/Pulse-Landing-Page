let openBtn = document.querySelector("#bar-hamburg");
let closeBtn = document.querySelector("#close-hamburg");


document.querySelector("#bar-hamburg").onclick = function(){
    let toggleDiv = document.querySelector(".bar-toggle");
    toggleDiv.style.display = "block";
}
document.querySelector("#close-hamburg").onclick = function(){
    let toggleDiv = document.querySelector(".bar-toggle");
    toggleDiv.style.display = "none"
}