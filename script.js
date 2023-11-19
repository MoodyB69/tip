function func1() {
  let amnt = document.querySelector(".amount");
  let amount = Number(amnt.value);
  let tp = document.querySelector(".amount");
  let tip = Number(tp.value) / 100;
  tip = tip * amount;
  let totalbill = amount + tip;
  console.log(totalbill);
  let output1 = document.querySelector(".output-header1");
  output1.innerHTML = `The tip is $${tip}`;
  let output2 = document.querySelector(".output-header2");
  output1.innerHTML = `The Total Bill amount is $${totalbill}`;
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", func1);
