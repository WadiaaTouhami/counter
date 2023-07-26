const counter = document.querySelector("#count");
x = 0;

function moinsbutt() {
  if (x === 0) {
    x = 0;
  } else {
    x -= 1;
    counter.innerHTML = x.toString();
  }
}
const button1 = document.querySelector("#moins");
button1.addEventListener("click", moinsbutt);

function plusbutt() {
  x += 1;
  counter.innerHTML = x.toString();
}
const button2 = document.querySelector("#plus");
button2.addEventListener("click", plusbutt);

function resetbutt() {
  x = 0;
  counter.innerHTML = x.toString();
}
const button3 = document.querySelector("#reset");
button3.addEventListener("click", resetbutt);
