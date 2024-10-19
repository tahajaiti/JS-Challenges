let button = document.querySelector(".btn");
let screen = document.querySelector(".show");

let random = Math.floor(Math.random() * 10) + 1;

button.onclick = function(){
    // Get the input value inside the click event handler
    let val = Number(document.querySelector(".numinput").value); // Convert the value to an integer
    if (val === random){
        screen.textContent = "Guessed right";
    } else {
        screen.textContent = "Wrong";
    }
}
