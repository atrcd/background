const colors = ["#d4cdc5", "#5b88a5", "#191013", "#243a69"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function () { 
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor (Math.random() * colors.length);
}