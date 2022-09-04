"use strict";

const [num, buy, sell] = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");

const showMessage = function (msg) {
  message.textContent = msg;
};

const hideMessage = function () {
  message.textContent = "";
};

hideMessage();
const calculateNet = function () {
  const numberOfStocks = Number(num.value);
  const buyingPrice = Number(buy.value);
  const sellingPrice = Number(sell.value);

  if (
    num &&
    buy &&
    sell &&
    numberOfStocks > 0 &&
    buyingPrice > 0 &&
    sellingPrice > 0
  ) {
    const absoluteReturnStock = sellingPrice - buyingPrice;
    let absoluteReturnTotal = Math.abs(absoluteReturnStock * numberOfStocks);
    let percentReturn = Math.trunc((absoluteReturnStock / buyingPrice) * 100);

    if (absoluteReturnStock > 0) {
      showMessage(
        `You made a gain of ${percentReturn}% with absolute gain of ${absoluteReturnTotal} INR 🤑`
      );
    }
    if (absoluteReturnStock == 0) {
      showMessage("No Profit No Loss");
    } else {
      showMessage(
        `You incurred a loss of ${percentReturn}% with absolute loss of ${absoluteReturnTotal} INR 🥺`
      );
    }
  } else {
    showMessage("Please enter valid amounts");
  }
};

button.addEventListener("click", calculateNet);
