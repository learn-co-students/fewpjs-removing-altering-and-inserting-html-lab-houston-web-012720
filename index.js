let mainSelect = document.getElementById('main');

mainSelect.remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = `Stephen is the champion`;

document.body.appendChild(newHeader);