// Write your code here!

main.remove('#main')

let newHeader = document.createElement("h1");

newHeader.id = "victory"; 

document.body.appendChild(newHeader);

newHeader.innerHTML = "YOUR-NAME is the champion";

