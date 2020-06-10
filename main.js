//------ main.js ------
import { square, diagonal } from './library.js';
console.log(square(13)); // 169
console.log(diagonal(12, 5)); // 13

const app = document.getElementById("app");
app.innerHTML = "<h1>Demo App for ES Modules</h1>";

const input = document.getElementById("num");
input.addEventListener("change",displaySquare);

function displaySquare(){
	var sqrOutput = document.getElementById("sqr");
	sqrOutput.value = square(input.value);
}