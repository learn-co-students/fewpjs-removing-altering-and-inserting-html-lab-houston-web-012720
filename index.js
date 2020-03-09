// Write your code here!
document.getElementById('main').remove();
let element = document.createElement('div');
document.body.appendChild(element);
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
element.appendChild(newHeader);