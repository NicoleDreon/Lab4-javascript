"use strict";

let item1 = document.querySelector(".item1");
let total = 0;
item1.addEventListener("click", () => {
  let price = parseFloat(item1.getAttribute("data-price"));
  total += price;
  console.log(total.toFixed(2));
  totalCost.innerText = `Total: $${total}`;
  // console.log(total);
});
let item2 = document.querySelector(".item2");
item2.addEventListener("click", () => {
  let price = parseFloat(item2.getAttribute("data-price"));
  total += price;
  console.log(total.toFixed(2));
  totalCost.innerText = `Total: $${total}`;
  // console.log(total);
});
let item3 = document.querySelector(".item3");
item3.addEventListener("click", () => {
  let price = parseFloat(item3.getAttribute("data-price"));
  total += price;
  console.log(total.toFixed(2));
  totalCost.innerText = `Total: $${total}`;
  // console.log(total);
});
let item4 = document.querySelector(".item4");
item4.addEventListener("click", () => {
  let price = parseFloat(item4.getAttribute("data-price"));
  total += price;
  console.log(total.toFixed(2));
  totalCost.innerText = `Total: $${total}`;
  // console.log(total);
});

// let newTotalCost = document.
let totalCost = document.querySelector(".total");
totalCost.innerText = `Total: $${total}`;
// console.log(total);

//mitch solution
// let total = 0;
// let totalParagraph = document.querrySelector(".total");
// let vendingButtons = document.querySelectorAll(".button");

// vendingButtons.forEach((item) => {
//   item.addEventListener("click", () => {
//     let amount = parseFloat(item.getAttribute("data-price"));
//     total += amount;
//     totalParagraph.innerText = "Total: $${total}.00";
//   });
// });

//second problem
let makeMoney = document.querySelector(".makeMoney");
let container = document.querySelector(".coinContainer"); //best pratice - put all variables at the top of javascript

makeMoney.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(makeMoney); //grabs and stores data entered into form
  let howMany = formData.get("howMany");
  let whichCoin = formData.get("whichCoin");
  // console.log(howMany, whichCoin);
  for (let i = 0; i < howMany; i++) {
    let newDiv = document.createElement("div");
    let coinParagraph = document.createElement("p");
    coinParagraph.innerText = whichCoin;
    newDiv.setAttribute("class", whichCoin);
    //adding class so i can style in css
    //mitch answer - newDiv.classList.add(whichCoin)
    newDiv.append(coinParagraph);
    container.append(newDiv);
    newDiv.addEventListener("click", () => {
      newDiv.remove();
    });
  }
  makeMoney.reset();
});
// newDiv.classList.add(() => {
//   if ((whichCoin = "penny")) {
//     new.Div.classList.add(".penny");
//   }
// });

//
//   let coins = document.createElement("p");
//   coins.innerText = `${howMany}${whichCoin}`;
//   coinDisplay.append(coins);
//   makeMoney.reset();

let lightBulb = document.querySelector(".lightBulb");
let light = document.querySelectorAll(".light");
let lightOn = document.querySelector(".on");
let ligthOff = document.querySelector(".off");
let lightToggle = document.querySelector(".toggle");
let ligthEnd = document.querySelector(".end");

lightOn.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});
ligthOff.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});
lightToggle.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});
ligthEnd.addEventListener("click", () => {
  lightBulb.remove();
  light.forEach((item) => {
    item.disabled = true;
  });
});
