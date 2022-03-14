const numberform = document.querySelector("#number-form");
const numberInput1 = document.querySelector("#number1");
const numberInput2 = document.querySelector("#number2");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

function onPlaySubmit(event) {
  event.preventDefault();
  // 범위 임력값
  const rangeNum = numberInput1.value;
  // 내 입력값
  const myNum = numberInput2.value;
  // 골라진 숫자
  const comNum = Math.floor(Math.random() * rangeNum);

  paintResult1(myNum, comNum);
  paintResult2(myNum, comNum);
}

function paintResult1(myNum, comNum) {
  result.innerText = `You chose: ${myNum}, the machine chose: ${comNum}.\n`;
}
function paintResult2(myNum, comNum) {
  if (myNum == comNum) {
    result2.innerText = "You Win!";
  } else {
    result2.innerText = "You Lost!";
  }
}

numberform.addEventListener("submit", onPlaySubmit);
